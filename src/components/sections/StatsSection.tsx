// import { useEffect, useRef, useState } from "react";
// import type { StatsProps } from "../../types/config";

// function AnimatedNumber({ value, suffix = "" }: { value: string; suffix?: string }) {
//   const [displayed, setDisplayed] = useState("0");
//   const ref = useRef<HTMLDivElement>(null);
//   const hasAnimated = useRef(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !hasAnimated.current) {
//           hasAnimated.current = true;
//           const num = parseFloat(value);
//           const duration = 2000;
//           const start = performance.now();

//           const animate = (now: number) => {
//             const elapsed = now - start;
//             const progress = Math.min(elapsed / duration, 1);
//             const eased = 1 - Math.pow(1 - progress, 3);
//             const current = num * eased;

//             if (Number.isInteger(num)) {
//               setDisplayed(Math.round(current).toString());
//             } else {
//               setDisplayed(current.toFixed(num.toString().split(".")[1]?.length || 1));
//             }

//             if (progress < 1) {
//               requestAnimationFrame(animate);
//             }
//           };

//           requestAnimationFrame(animate);
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, [value]);

//   return (
//     <div ref={ref} className="text-4xl sm:text-5xl font-bold text-white tabular-nums">
//       {displayed}{suffix}
//     </div>
//   );
// }

// export function StatsSection({ items }: StatsProps) {
//   return (
//     <section className="py-20 px-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-0 left-1/3 w-64 h-64 bg-teal-500 rounded-full blur-[100px]" />
//         <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-cyan-500 rounded-full blur-[100px]" />
//       </div>

//       <div className="relative max-w-6xl mx-auto">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//           {items.map((item, index) => (
//             <div key={index} className="text-center">
//               <AnimatedNumber value={item.value} suffix={item.suffix} />
//               <p className="mt-2 text-slate-400 text-sm font-medium">{item.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import { useEffect, useRef, useState } from "react";
import type { StatsProps } from "../../types/config";

function AnimatedNumber({ value, suffix = "" }: { value: string; suffix?: string }) {
  const safeValue = value || "0"; // ✅ prevent crash
  const [displayed, setDisplayed] = useState("0");
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const num = parseFloat(safeValue) || 0; // ✅ safe parse
          const duration = 2000;
          const start = performance.now();

          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = num * eased;

            if (Number.isInteger(num)) {
              setDisplayed(Math.round(current).toString());
            } else {
              setDisplayed(current.toFixed(safeValue.toString().split(".")[1]?.length || 1));
            }

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [safeValue]);

  return (
    <div ref={ref} className="text-4xl sm:text-5xl font-bold text-white tabular-nums">
      {displayed}{suffix}
    </div>
  );
}

export function StatsSection({ items }: StatsProps) {
  const safeItems = items || [
    { label: "Users", value: "1000", suffix: "+" },
    { label: "Growth", value: "200", suffix: "%" },
    { label: "Uptime", value: "99.9", suffix: "%" },
    { label: "Projects", value: "50", suffix: "+" },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/3 w-64 h-64 bg-teal-500 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-cyan-500 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {safeItems.map((item, index) => (
            <div key={index} className="text-center">
              <AnimatedNumber value={item.value} suffix={item.suffix} />
              <p className="mt-2 text-slate-400 text-sm font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}