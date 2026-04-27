"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Terminal, Zap, Shield, Info } from "lucide-react";
import { Command } from "@/lib/commandsData";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CommandCardProps {
  command: Command;
  index: number;
}

const CommandCard = ({ command, index }: CommandCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] transition-all duration-500 hover:border-primary-crimson/30 hover:bg-white/[0.04]",
        isOpen && "border-primary-crimson/50 bg-white/[0.06] shadow-[0_0_50px_rgba(220,20,60,0.1)]"
      )}
    >
      <div 
        className="cursor-pointer p-8"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-crimson/10 text-primary-crimson transition-transform group-hover:scale-110">
              <Terminal size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-white">
                dt <span className="text-primary-crimson">{command.name}</span>
              </h3>
              <p className="mt-1 text-sm text-text-gray">{command.shortDesc}</p>
            </div>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            className="text-text-gray"
          >
            <ChevronRight size={24} />
          </motion.div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-8 space-y-8 border-t border-white/10 pt-8">
                <div>
                  <h4 className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-primary-crimson uppercase mb-4">
                    <Info size={14} /> THE MECHANICS
                  </h4>
                  <p className="text-lg leading-relaxed text-text-gray">
                    {command.longDesc}
                  </p>
                </div>

                <div className="rounded-2xl bg-black/40 p-6 border border-white/5 font-mono text-sm">
                  <h4 className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase mb-4">USAGE</h4>
                  <code className="text-accent-green">{command.usage}</code>
                </div>

                {command.flags && (
                  <div>
                    <h4 className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase mb-4">FLAGS</h4>
                    <div className="flex flex-wrap gap-2">
                      {command.flags.map((flag) => (
                        <span key={flag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-text-gray">
                          {flag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {command.proTip && (
                  <div className="relative overflow-hidden rounded-2xl bg-accent-green/5 p-6 border border-accent-green/20">
                    <div className="absolute top-0 right-0 p-4 text-accent-green/20">
                      <Zap size={40} />
                    </div>
                    <h4 className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-accent-green uppercase mb-2">
                      <Zap size={14} /> PRO TIP
                    </h4>
                    <p className="text-sm text-accent-green/80 italic">
                      "{command.proTip}"
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Decorative background pulse */}
      <div className="absolute -bottom-24 -right-24 h-48 w-48 bg-primary-crimson/5 blur-[100px] pointer-events-none" />
    </motion.div>
  );
};

export default CommandCard;
