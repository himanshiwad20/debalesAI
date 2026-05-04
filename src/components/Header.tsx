import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          {/* <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
            scrolled ? "bg-gradient-to-br from-teal-500 to-cyan-500" : "bg-white/10"
          }`}>
            <Zap className={`w-4 h-4 ${scrolled ? "text-white" : "text-teal-400"}`} />
          </div> */}
          <span className={`font-bold text-lg transition-colors ${scrolled ? "text-slate-900" : "text-white"}`}>
            Debales AI
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                scrolled ? "text-slate-600 hover:text-slate-900" : "text-slate-300 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#"
            className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
              scrolled
                ? "bg-slate-900 text-white hover:bg-slate-800"
                : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
            }`}
          >
            Get Started
          </a>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className={scrolled ? "text-slate-900" : "text-white"} />
          ) : (
            <Menu className={scrolled ? "text-slate-900" : "text-white"} />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-medium text-slate-600 hover:text-slate-900 py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#"
              className="block w-full text-center px-5 py-2.5 rounded-lg bg-slate-900 text-white text-sm font-semibold"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
