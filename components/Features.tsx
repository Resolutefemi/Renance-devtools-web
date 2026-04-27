import { Zap, Video, Shield, Globe, Calculator, Type, Smile, Cpu } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "High-Speed Engine",
      description: "Multi-threaded copy engine (dt fcp) moves massive folders up to 5x faster.",
      icon: <Zap className="text-secondary-blue" />,
      color: "border-secondary-blue/20",
      bg: "bg-secondary-blue/5"
    },
    {
      title: "Media Processing",
      description: "Extract MP3s, compress videos for WhatsApp, and generate GIFs in seconds.",
      icon: <Video className="text-accent-orange" />,
      color: "border-accent-orange/20",
      bg: "bg-accent-orange/5"
    },
    {
      title: "Hacker Mode",
      description: "Enter the Matrix, vault sensitive files, and scan ports with elite diagnostics.",
      icon: <Shield className="text-accent-green" />,
      color: "border-accent-green/20",
      bg: "bg-accent-green/5"
    },
    {
      title: "Smart Deployment",
      description: "Interactive engine for Vercel, Netlify, and Render with automated auth.",
      icon: <Globe className="text-primary-crimson" />,
      color: "border-primary-crimson/20",
      bg: "bg-primary-crimson/5"
    },
    {
      title: "Math & Finance",
      description: "Built-in calculators for mortgage, tax, BMI, and advanced equations.",
      icon: <Calculator className="text-secondary-blue" />,
      color: "border-secondary-blue/20",
      bg: "bg-secondary-blue/5"
    },
    {
      title: "Text & Crypto",
      description: "Base64, Morse, Slugs, and Password generation at your fingertips.",
      icon: <Type className="text-accent-green" />,
      color: "border-accent-green/20",
      bg: "bg-accent-green/5"
    },
    {
      title: "Fun & APIs",
      description: "Bitcoin prices, Kanye quotes, riddles, and Chuck Norris jokes.",
      icon: <Smile className="text-accent-orange" />,
      color: "border-accent-orange/20",
      bg: "bg-accent-orange/5"
    },
    {
      title: "System Pro",
      description: "Uptime, CPU count, RAM totals, and WiFi password extraction.",
      icon: <Cpu className="text-primary-crimson" />,
      color: "border-primary-crimson/20",
      bg: "bg-primary-crimson/5"
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div 
              key={i}
              className={`p-8 rounded-3xl border ${f.color} ${f.bg} hover:scale-[1.02] transition-all duration-500`}
            >
              <div className="mb-6">{f.icon}</div>
              <h3 className="text-xl font-bold mb-4">{f.title}</h3>
              <p className="text-text-gray leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
