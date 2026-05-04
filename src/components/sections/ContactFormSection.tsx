import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import type { ContactFormProps } from "../../types/config";

export function ContactFormSection({ fields, submitLabel, successMessage }: ContactFormProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <section className="py-24 px-6 bg-white">
        <div className="max-w-xl mx-auto text-center">
          <CheckCircle className="w-16 h-16 text-teal-500 mx-auto mb-4" />
          <p className="text-xl font-semibold text-slate-900">{successMessage}</p>
        </div>
      </section>
    );
  }

  const toArray = (value: any) => {
    if (!value) return [];
    if (Array.isArray(value)) return value;

    if (typeof value === "object") {
      const keys = Object.keys(value);
      const isArrayLike = keys.every((k) => !isNaN(Number(k)));
      if (isArrayLike) return Object.values(value);
    }

    return [];
  };

  return (
    <section className="py-24 px-6 bg-slate-50">
      
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-3">Contact Form</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          {toArray(fields).map((field) => (
            <div key={field.name}>
              <label htmlFor={field.name} className="block text-sm font-medium text-slate-700 mb-1.5">
                {field.label}
                {field.required && <span className="text-red-500 ml-1">*</span>}
              </label>
              {field.type === "textarea" ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  placeholder={field.placeholder}
                  required={field.required}
                  rows={4}
                  value={formData[field.name] || ""}
                  onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-colors"
                />
              ) : field.type === "select" ? (
                <select
                  id={field.name}
                  name={field.name}
                  required={field.required}
                  value={formData[field.name] || ""}
                  onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-colors"
                >
                  <option value="">Select...</option>
                  {toArray(field.options)?.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              ) : (
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  required={field.required}
                  value={formData[field.name] || ""}
                  onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-colors"
                />
              )}
            </div>
          ))}
          <button
            type="submit"
            disabled={submitting}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 transition-all duration-300 disabled:opacity-60"
          >
            {submitting ? "Sending..." : submitLabel}
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
