import { Quote } from "lucide-react";
import type { TestimonialsProps } from "../../types/config";

export function TestimonialsSection({ items }: TestimonialsProps) {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-teal-600 tracking-wider uppercase mb-3">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Loved by Teams Everywhere</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items?.map((item, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <Quote className="w-8 h-8 text-teal-200 mb-4" />
              <p className="text-slate-600 leading-relaxed mb-6">{item.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-cyan-400 flex items-center justify-center text-white font-semibold text-sm">
                  {item.author.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{item.author}</p>
                  <p className="text-slate-400 text-xs">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
