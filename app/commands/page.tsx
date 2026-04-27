"use client";

import React, { useState, useMemo, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { categories } from "@/lib/commandsData";
import CommandCard from "@/components/CommandCard";
import Logo from "@/components/Logo";

function CommandsContent() {
  const searchParams = useSearchParams();
  const catParam = searchParams.get("cat");

  const [activeCategory, setActiveCategory] = useState(catParam || "all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showPreloader, setShowPreloader] = useState(!catParam);

  useEffect(() => {
    if (catParam) {
      setActiveCategory(catParam);
      setShowPreloader(false);
    }
  }, [catParam]);

  useEffect(() => {
    if (showPreloader) {
      const timer = setTimeout(() => {
        setShowPreloader(false);
      }, 4500);
      return () => clearTimeout(timer);
    }
  }, [showPreloader]);

  const filteredCommands = useMemo(() => {
    let cmds = activeCategory === "all" 
      ? categories.flatMap(c => c.commands)
      : categories.find(c => c.id === activeCategory)?.commands || [];

    if (searchQuery) {
      cmds = cmds.filter(c => 
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.longDesc.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return cmds;
  }, [activeCategory, searchQuery]);

  if (showPreloader) {
    return <Logo />;
  }

  return (
    <main className="min-h-screen bg-bg-black text-text-white">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_-20%,#3a0008,transparent_60%)] pointer-events-none" />
      
      <nav className="sticky top-0 z-[100] border-b border-white/5 bg-black/40 backdrop-blur-xl">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <ArrowLeft className="text-text-gray group-hover:text-primary-crimson transition-colors" size={20} />
            <span className="text-xl font-bold tracking-tighter">
              <span className="text-primary-crimson">Renance</span> DevTools
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold tracking-widest text-white/40 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
            V3.0.0 STABLE_BUILD
          </div>
        </div>
      </nav>

      <div className="container py-20 relative z-10">
        <div className="mb-20 max-w-3xl">
          <motion.h2 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-xs font-bold tracking-[0.4em] text-primary-crimson uppercase mb-6">
            Command Explorer
          </motion.h2>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            All <span className="text-primary-crimson">{categories.reduce((acc, cat) => acc + cat.commands.length, 0)}+</span> commands <br />
            <span className="text-text-gray italic text-4xl md:text-6xl">documented and explained.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl text-text-gray leading-relaxed">
            Click any command to see technical mechanics and pro tips. Built for power users.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mb-16 sticky top-24 z-[90] py-4 bg-bg-black/50 backdrop-blur-md rounded-[2rem] px-4 -mx-4 border border-white/5 shadow-2xl">
          <div className="relative flex-1 group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-text-gray group-focus-within:text-primary-crimson transition-colors" size={20} />
            <input type="text" placeholder="Search 200+ commands..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-16 pr-8 py-6 bg-white/5 border border-white/10 rounded-[2rem] outline-none focus:border-primary-crimson/50 focus:bg-white/[0.08] transition-all text-lg" />
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button onClick={() => setActiveCategory("all")} className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${activeCategory === "all" ? "bg-primary-crimson text-white" : "bg-white/5 text-text-gray hover:bg-white/10"}`}>
              All
            </button>
            {categories.map((cat) => (
              <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${activeCategory === cat.id ? "bg-primary-crimson text-white" : "bg-white/5 text-text-gray hover:bg-white/10"}`}>
                {cat.name.split(' ')[1] || cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCommands.map((cmd, idx) => (
              <CommandCard key={cmd.name} command={cmd} index={idx} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}

export default function CommandsPage() {
  return (
    <Suspense fallback={<Logo />}>
      <CommandsContent />
    </Suspense>
  );
}
