import { ArrowRight } from "lucide-react";
import type { CtaSectionProps } from "../../types/config";

export function CtaSection({ heading, description, primaryCta, secondaryCta }: CtaSectionProps) {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500 rounded-full blur-[200px]" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{heading}</h2>
        <p className="text-lg text-slate-300 mb-10 leading-relaxed">{description}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {primaryCta && (
            <a
              href={primaryCta.href}
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold text-lg shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 transition-all duration-300 hover:scale-[1.02]"
            >
              {primaryCta.label}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
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
    </section>
  );
}
