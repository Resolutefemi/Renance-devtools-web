import { Zap, Video, Shield, Globe, Calculator, Type, Smile, Cpu, ArrowRight, GitBranch, Smartphone, Key, Network } from "lucide-react";
import Link from "next/link";

export default function Features() {
  const features = [
    {
      id: "files",
      title: "High-Speed Engine",
      description: "Multi-threaded copy engine (dt fcp) moves massive folders up to 5x faster.",
      icon: <Zap className="text-secondary-blue" />,
      color: "border-secondary-blue/20",
      bg: "bg-secondary-blue/5",
      hover: "hover:border-secondary-blue/50"
    },
    {
      id: "media",
      title: "Media Processing",
      description: "Extract MP3s, compress videos for WhatsApp, and generate GIFs in seconds.",
      icon: <Video className="text-accent-orange" />,
      color: "border-accent-orange/20",
      bg: "bg-accent-orange/5",
      hover: "hover:border-accent-orange/50"
    },
    {
      id: "hacker",
      title: "Hacker Mode",
      description: "Enter the Matrix, vault sensitive files, and scan ports with elite diagnostics.",
      icon: <Shield className="text-accent-green" />,
      color: "border-accent-green/20",
      bg: "bg-accent-green/5",
      hover: "hover:border-accent-green/50"
    },
    {
      id: "deploy",
      title: "Smart Deployment",
      description: "Interactive engine for Vercel, Netlify, and Render with automated auth.",
      icon: <Globe className="text-primary-crimson" />,
      color: "border-primary-crimson/20",
      bg: "bg-primary-crimson/5",
      hover: "hover:border-primary-crimson/50"
    },
    {
      id: "git",
      title: "Git Workflow",
      description: "One-command gac (Add-Commit-Push) and automated GitHub repo creation.",
      icon: <GitBranch className="text-secondary-blue" />,
      color: "border-secondary-blue/20",
      bg: "bg-secondary-blue/5",
      hover: "hover:border-secondary-blue/50"
    },
    {
      id: "phone",
      title: "Phone Remote",
      description: "Control your device torch, serve files via QR, and send SMS from terminal.",
      icon: <Smartphone className="text-accent-orange" />,
      color: "border-accent-orange/20",
      bg: "bg-accent-orange/5",
      hover: "hover:border-accent-orange/50"
    },
    {
      id: "crypto",
      title: "Crypto Tools",
      description: "Generate ultra-secure passwords, hash text, and Base64 encoding/decoding.",
      icon: <Key className="text-accent-green" />,
      color: "border-accent-green/20",
      bg: "bg-accent-green/5",
      hover: "hover:border-accent-green/50"
    },
    {
      id: "network",
      title: "Network Security",
      description: "Discover LAN devices, run speed benchmarks, and lookup DNS/Whois records.",
      icon: <Network className="text-primary-crimson" />,
      color: "border-primary-crimson/20",
      bg: "bg-primary-crimson/5",
      hover: "hover:border-primary-crimson/50"
    },
    {
      id: "math",
      title: "Math & Equations",
      description: "Built-in calculators for mortgage, tax, BMI, and advanced science logic.",
      icon: <Calculator className="text-secondary-blue" />,
      color: "border-secondary-blue/20",
      bg: "bg-secondary-blue/5",
      hover: "hover:border-secondary-blue/50"
    },
    {
      id: "text",
      title: "Text & String",
      description: "Morse code, slugs, case conversion, and word counting at your fingertips.",
      icon: <Type className="text-accent-green" />,
      color: "border-accent-green/20",
      bg: "bg-accent-green/5",
      hover: "hover:border-accent-green/50"
    },
    {
      id: "fun",
      title: "Fun & APIs",
      description: "Bitcoin prices, Kanye quotes, riddles, and Chuck Norris jokes.",
      icon: <Smile className="text-accent-orange" />,
      color: "border-accent-orange/20",
      bg: "bg-accent-orange/5",
      hover: "hover:border-accent-orange/50"
    },
    {
      id: "system",
      title: "System Pro",
      description: "Uptime, CPU count, RAM totals, and WiFi password extraction.",
      icon: <Cpu className="text-primary-crimson" />,
      color: "border-primary-crimson/20",
      bg: "bg-primary-crimson/5",
      hover: "hover:border-primary-crimson/50"
    },
  ];

  return (
    <section id="features" className="py-32">
      <div className="container">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Powerful by design. <br />
            <span className="text-text-gray">Effortless by nature.</span>
          </h2>
          <p className="text-text-gray max-w-2xl text-lg">
            Every category below contains specialized commands designed to optimize your workflow. 
            Click any card to explore the full command list.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <Link 
              href={`/commands?cat=${f.id}`}
              key={i}
              className={`group p-8 rounded-3xl border ${f.color} ${f.bg} ${f.hover} transition-all duration-500 hover:scale-[1.02] cursor-pointer block relative overflow-hidden`}
            >
              <div className="mb-6 relative z-10">{f.icon}</div>
              <h3 className="text-xl font-bold mb-4 relative z-10">{f.title}</h3>
              <p className="text-text-gray leading-relaxed mb-6 relative z-10">{f.description}</p>
              
              <div className="flex items-center gap-2 text-sm font-bold tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity relative z-10">
                EXPLORE COMMANDS <ArrowRight size={16} />
              </div>

              {/* Background Glow */}
              <div className={`absolute -bottom-12 -right-12 w-24 h-24 blur-[40px] opacity-0 group-hover:opacity-20 transition-opacity ${f.bg.replace('/5', '/100')}`} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
