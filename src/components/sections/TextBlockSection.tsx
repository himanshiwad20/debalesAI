import type { TextBlockProps } from "../../types/config";

export function TextBlockSection({ content, alignment = "left" }: TextBlockProps) {
  const align: Record<string, string> = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <section className="py-16 px-6 bg-white">
      <div className={`max-w-3xl mx-auto ${align[alignment]}`}>
        <div className="prose prose-slate prose-lg max-w-none">{content}</div>
      </div>
    </section>
  );
}
