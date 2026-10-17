import React from "react";
import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-[70vh] bg-stone-cream flex items-center justify-center p-8">
      <div className="flex flex-col items-center space-y-4">
        <Loader2 className="w-8 h-8 animate-spin text-forest-canopy" />
        <span className="font-mono text-xs text-forest-night/60 uppercase tracking-luxury">
          Loading Pench Big Cat...
        </span>
      </div>
    </div>
  );
}
