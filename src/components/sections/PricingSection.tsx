import { Check } from "lucide-react";
import type { PricingProps } from "../../types/config";

export function PricingSection({ plans }: PricingProps) {
  // console.log("plans: ", plans)
  const features = Array.isArray(plans.features)
  ? plans.features
  : Object.values(plans.features || []);
  return (
    <section id="pricing" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-teal-600 tracking-wider uppercase mb-3">Pricing</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            No hidden fees. No surprises. Start free and scale as you grow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {features?.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? "bg-gradient-to-b from-slate-900 to-slate-800 text-white shadow-xl shadow-slate-900/20 scale-[1.02] border-2 border-teal-500/50"
                  : "bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <h3 className={`text-xl font-bold mb-2 ${plan.highlighted ? "text-white" : "text-slate-900"}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 ${plan.highlighted ? "text-slate-300" : "text-slate-500"}`}>
                {plan.description}
              </p>

              <div className="mb-8">
                <span className={`text-4xl font-bold ${plan.highlighted ? "text-white" : "text-slate-900"}`}>
                  {plan.price === "Custom" ? "" : "$"}{plan.price}
                </span>
                <span className={`text-sm ${plan.highlighted ? "text-slate-400" : "text-slate-500"}`}>
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fi) => (
                  <li key={fi} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.highlighted ? "text-teal-400" : "text-teal-500"}`} />
                    <span className={`text-sm ${plan.highlighted ? "text-slate-200" : "text-slate-600"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.cta.href}
                className={`block w-full text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-teal-500/25"
                    : "border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300"
                }`}
              >
                {plan.cta.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
