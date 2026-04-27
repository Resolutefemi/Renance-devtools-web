"use client";

import { Copy, Terminal } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyInstall = () => {
    navigator.clipboard.writeText("pip install renance-dt");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="pt-40 pb-20 overflow-hidden">
      <div className="container flex flex-col items-center text-center">
        <div className="animate-in [animation-delay:200ms]">
          <h2 className="text-sm font-bold tracking-[0.3em] text-primary-crimson uppercase mb-6">
            VERSION 3.0 OUT NOW
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            One command to <br />
            <span className="text-text-gray">rule them all.</span>
          </h1>
          <p className="max-w-2xl text-xl md:text-2xl text-text-gray mb-12">
            The ultimate CLI ecosystem for power users. 200+ specialized commands across 14 categories.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6 animate-in [animation-delay:400ms]">
          <div 
            onClick={copyInstall}
            className="group relative flex items-center gap-3 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl cursor-pointer hover:bg-white/10 transition-all"
          >
            <Terminal size={20} className="text-primary-crimson" />
            <code className="text-lg font-mono">pip install renance-dt</code>
            <div className="pl-4 border-l border-white/10">
              <Copy size={18} className={`transition-all ${copied ? "text-accent-green" : "text-text-gray"}`} />
            </div>
            {copied && (
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent-green text-black text-xs font-bold rounded-lg">
                COPIED!
              </span>
            )}
          </div>
          
          <Link href="/commands" className="px-8 py-4 bg-text-white text-black font-bold rounded-2xl hover:scale-105 transition-transform">
            GET STARTED
          </Link>
        </div>
        
        <div className="mt-8 flex flex-col items-center gap-2 animate-in [animation-delay:600ms]">
          <p className="text-sm text-text-gray">Or install locally via source:</p>
          <div className="flex gap-4">
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-mono">install.bat (Windows)</span>
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-mono">bash install.sh (Unix)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
