import { ArrowRight } from "lucide-react";
import type { HeroProps } from "../../types/config";

export function HeroSection({ heading, subheading, primaryCta, secondaryCta }: HeroProps) {
  const safeHeading = heading || "Welcome to Debales AI";
  const safeSubheading = subheading || "Build extraordinary digital experiences with ease.";

  const words = safeHeading?.split(" ");
  
  // return (
  //   <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
  //     <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-teal-900" />
  //     <div className="absolute inset-0 opacity-20">
  //       <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500 rounded-full blur-[128px]" />
  //       <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-[128px]" />
  //     </div>
  //     <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.4)_100%)]" />

  //     <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
  //       <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 text-sm font-medium">
  //         <span className="relative flex h-2 w-2">
  //           <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
  //           <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400" />
  //         </span>
  //         Now in Public Beta
  //       </div>

  //       <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
  //         {words.map((word, i) =>
  //           i === word.length - 1 || i === heading.split(" ").length - 1 ? (
  //             <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
  //               {" "}{word}
  //             </span>
  //           ) : (
  //             <span key={i}>{word} </span>
  //           )
  //         )}
  //       </h1>

  //       <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
  //         {safeSubheading}
  //       </p>

  //       <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
  //         {primaryCta && (
  //           <a
  //             href={primaryCta.href}
  //             className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold text-lg shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 transition-all duration-300 hover:scale-[1.02]"
  //           >
  //             {primaryCta.label}
  //             <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
  //           </a>
  //         )}
  //         {secondaryCta && (
  //           <a
  //             href={secondaryCta.href}
  //             className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-slate-600 text-slate-200 font-semibold text-lg hover:bg-white/5 hover:border-slate-500 transition-all duration-300"
  //           >
  //             {secondaryCta.label}
  //           </a>
  //         )}
  //       </div>
  //     </div>

  //     <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
  //   </section>
  // );

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-teal-900" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-[128px]" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.4)_100%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 text-sm font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400" />
          </span>
          Now in Public Beta
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
          {words.map((word, i) =>
            i === words.length - 1 ? (
              <span
                key={i}
                className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400"
              >
                {" "}{word}
              </span>
            ) : (
              <span key={i}>{word} </span>
            )
          )}
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          {safeSubheading}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {primaryCta && (
            <a
              href={primaryCta.href}
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold text-lg shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 transition-all duration-300 hover:scale-[1.02]"
            >
              {primaryCta.label}
            </a>
          )}
          {secondaryCta && (
            <a
              href={secondaryCta.href}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-slate-600 text-slate-200 font-semibold text-lg hover:bg-white/5 hover:border-slate-500 transition-all duration-300"
            >
              {secondaryCta.label}
            </a>
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
