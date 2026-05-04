import { Zap } from "lucide-react";

export function LoadingScreen() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center">
      {/* <div className="relative mb-6">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center animate-pulse">
          <Zap className="w-8 h-8 text-white" />
        </div>
      </div> */}
      <div className="flex items-center gap-3">
        <div className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-bounce" style={{ animationDelay: "0ms" }} />
        <div className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-bounce" style={{ animationDelay: "150ms" }} />
        <div className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-bounce" style={{ animationDelay: "300ms" }} />
      </div>
      <p className="mt-4 text-slate-400 text-sm">Loading configuration...</p>
    </div>
  );
}
