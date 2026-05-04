import type { GalleryProps } from "../../types/config";

export function GallerySection({ columns, items }: GalleryProps) {
  const gridCols: Record<number, string> = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className={`grid ${gridCols[columns] || "md:grid-cols-3"} gap-4`}>
          {items?.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl aspect-[4/3]">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {item.caption && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white text-sm font-medium">{item.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
