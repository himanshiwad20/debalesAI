import { Zap, Layers, Shield, Globe, Puzzle, BarChart3, Code2, Rocket, Cpu } from "lucide-react";
import type { FeaturesProps } from "../../types/config";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap, Layers, Shield, Globe, Puzzle, BarChart3, Code2, Rocket, Cpu,
};

export function FeaturesSection({ columns, items }: FeaturesProps) {
  // const gridCols: Record<number, string> = {
  //   2: "md:grid-cols-2",
  //   3: "md:grid-cols-3",
  //   4: "md:grid-cols-2 lg:grid-cols-4",
  // };

  // return (
  //   <section id="features" className="py-24 px-6 bg-white">
  //     <div className="max-w-6xl mx-auto">
  //       <div className="text-center mb-16">
  //         <p className="text-sm font-semibold text-teal-600 tracking-wider uppercase mb-3">Capabilities</p>
  //         <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Everything You Need</h2>
  //         <p className="text-lg text-slate-500 max-w-2xl mx-auto">
  //           Powerful features designed to help you build, ship, and scale with confidence.
  //         </p>
  //       </div>

  //       <div className={`grid ${gridCols[columns] || "md:grid-cols-3"} gap-8`}>
  //         {items.map((item, index) => {
  //           const Icon = iconMap[item.icon] || Zap;
  //           return (
  //             <div
  //               key={index}
  //               className="group relative p-8 rounded-2xl border border-slate-100 bg-white hover:border-teal-200 hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-300"
  //             >
  //               <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-50 to-cyan-50 flex items-center justify-center mb-5 group-hover:from-teal-100 group-hover:to-cyan-100 transition-colors">
  //                 <Icon className="w-6 h-6 text-teal-600" />
  //               </div>
  //               <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
  //               <p className="text-slate-500 leading-relaxed">{item.description}</p>
  //             </div>
  //           );
  //         })}
  //       </div>
  //     </div>
  //   </section>
  // );
  const safeItems = items || [
    { title: "Fast Performance", description: "Optimized for speed", icon: "Zap" },
    { title: "Secure", description: "Enterprise-grade security", icon: "Shield" },
    { title: "Scalable", description: "Built to scale", icon: "Rocket" },
  ];

  const safeColumns = columns || 3;

  const gridCols: Record<number, string> = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-teal-600 tracking-wider uppercase mb-3">
            Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Everything You Need
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Powerful features designed to help you build, ship, and scale with confidence.
          </p>
        </div>

        <div className={`grid ${gridCols[safeColumns] || "md:grid-cols-3"} gap-8`}>
          {safeItems.map((item, index) => {
            const Icon = iconMap[item.icon] || Zap;

            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl border border-slate-100 bg-white hover:border-teal-200 hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-50 to-cyan-50 flex items-center justify-center mb-5 group-hover:from-teal-100 group-hover:to-cyan-100 transition-colors">
                  <Icon className="w-6 h-6 text-teal-600" />
                </div>

                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
