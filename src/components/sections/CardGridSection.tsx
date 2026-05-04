import { ArrowUpRight } from "lucide-react";
import type { CardGridProps } from "../../types/config";

export function CardGridSection({ columns, items }: CardGridProps) {
  const gridCols: Record<number, string> = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className={`grid ${gridCols[columns] || "md:grid-cols-3"} gap-6`}>
          {items.map((item, index) => (
            <a
              key={index}
              href={item.link || "#"}
              className="group block p-6 rounded-2xl bg-white border border-slate-100 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-300"
            >
              {item.image && (
                <div className="mb-4 overflow-hidden rounded-xl aspect-video">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold text-slate-900 group-hover:text-teal-700 transition-colors">
                  {item.title}
                </h3>
                {item.link && <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-teal-500 transition-colors flex-shrink-0 mt-1" />}
              </div>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">{item.description}</p>
              {item.tags && item.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag, ti) => (
                    <span key={ti} className="px-2.5 py-1 text-xs font-medium bg-teal-50 text-teal-700 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
