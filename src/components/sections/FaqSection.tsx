import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqProps } from "../../types/config";

export function FaqSection({ title, items }: { title?: string; items: FaqProps }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  // console.log("items of props: ", items)

  const normalizedItems = Array.isArray(items)
  ? items
  : Object.values(items || {});

  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-teal-600 tracking-wider uppercase mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
        </div>



        <div className="space-y-3">
          {items?.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-xl border transition-all duration-300 ${
                  isOpen ? "border-teal-200 bg-white shadow-sm" : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className={`font-semibold pr-4 ${isOpen ? "text-teal-700" : "text-slate-800"}`}>
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-teal-500" : "text-slate-400"
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-5 text-slate-500 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
