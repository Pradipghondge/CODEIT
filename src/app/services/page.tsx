"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Code2,
  Monitor,
  Smartphone,
  Wrench,
  Network,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  Globe,
} from "lucide-react";

// --- CONFIG ---
const PRIMARY = "#0F4F3F";

// Animation Variants
const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

// SERVICES DATA
const SERVICES = [
  {
    icon: Code2,
    title: "Software Development",
    desc: "Secure, scalable and custom-built solutions for enterprise-grade systems.",
    points: [
      "Architecture & system blueprint",
      "API engineering & integrations",
      "Testing, QA & deployment",
      "Cloud-native product builds",
    ],
    link: "/services/software-development",
  },
  {
    icon: Monitor,
    title: "Web Development",
    desc: "High-performance platforms built for growth and conversion.",
    points: [
      "Responsive UI/UX",
      "Microservice architecture",
      "SEO & performance optimization",
      "Security compliance",
    ],
    link: "/services/web-development",
  },
  {
    icon: Smartphone,
    title: "iOS App Development",
    desc: "Native iOS apps engineered for stability, design and user adoption.",
    points: [
      "Swift native development",
      "Secure data architecture",
      "App Store deployment",
      "Scalable & maintainable code",
    ],
    link: "/services/ios-app-development",
  },
  {
    icon: Wrench,
    title: "Application Support",
    desc: "SLA-backed support that safeguards your operations 24/7.",
    points: [
      "Monitoring & health checks",
      "Bug fixes & escalation handling",
      "Performance tuning",
      "Feature enhancements",
    ],
    link: "/services/application-support",
  },
  {
    icon: Network,
    title: "IT Outsourcing",
    desc: "On-demand teams aligned to delivery and transformation targets.",
    points: [
      "Dedicated tech resources",
      "Full project ownership",
      "Optimized cost structures",
      "Delivery governance",
    ],
    link: "/services/it-outsourcing",
  },
];

export default function ServicesPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleScrollToPortfolio = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-white text-black overflow-x-hidden selection:bg-[#0F4F3F] selection:text-white">
      
      {/* Dynamic Background Glow - Subtle for White Theme */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-500 opacity-40"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(15, 79, 63, 0.08), transparent 80%)`
        }}
      />

      {/* ================= HERO ================= */}
      <section className="relative flex items-center justify-center min-h-[80vh] px-6 pt-32 pb-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
        
        <motion.div {...fadeUp} className="relative z-10 text-center max-w-5xl">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block py-1.5 px-5 rounded-full border border-[#0F4F3F]/20 text-[#0F4F3F] text-xs font-bold tracking-widest uppercase mb-8 bg-[#0F4F3F]/5"
          >
            Premium Digital Solutions
          </motion.span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
            ENGINEERING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F4F3F] via-[#2D8E73] to-[#0F4F3F]">
              EXCELLENCE
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We architect the digital future of high-impact organizations through elite engineering, 
            purpose-built technology, and transformative strategies.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href="#portfolio" 
              onClick={handleScrollToPortfolio}
              className="bg-[#0F4F3F] text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-[0_20px_40px_rgba(15,79,63,0.3)] transition-all"
            >
              Explore Our Ecosystem
            </Link>
          </div>
        </motion.div>
      </section>


      {/* ================= MAIN SERVICES GRID ================= */}
      <section id="portfolio" className="py-32 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <motion.div {...fadeUp} className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 mb-4">
                Core Service Portfolio
              </h2>
              <p className="text-gray-500 text-lg">Specialized engineering tiers for modern enterprise demands.</p>
            </motion.div>
            <div className="text-[#0F4F3F] font-mono text-sm tracking-tighter border-b border-[#0F4F3F]/20 pb-2">
              / SOLUTIONS_2025
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SERVICES.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                tabIndex={0}
                aria-label={`View details for ${service.title}`}
                className="relative group h-[420px] bg-white rounded-[2.5rem] border border-gray-200 shadow-xl hover:shadow-2xl transition-all overflow-hidden focus:outline-none"
              >
                {/* DEFAULT VIEW */}
                <div className="p-10 h-full flex flex-col">
                  <div className="w-16 h-16 bg-[#0F4F3F]/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                    <service.icon className="w-8 h-8 text-[#0F4F3F]" />
                  </div>
                  <h3 className="text-2xl font-black mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <div className="mt-auto">
                    <Link href={service.link} className="text-[#0F4F3F] font-bold text-sm inline-flex items-center gap-2">
                      View Capability <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>

                {/* PREMIUM HOVER OVERLAY (The "Attract to the nitty" Effect) */}
                <div className="absolute inset-0 bg-[#0F4F3F] translate-y-[101%] group-hover:translate-y-0 group-focus:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] p-10 flex flex-col">
                  <h4 className="text-white text-2xl font-black mb-6">{service.title}</h4>
                  <ul className="space-y-4 flex-1">
                    {service.points.map((point, pIndex) => (
                      <li key={pIndex} className="flex items-start gap-3 text-white/90 text-sm leading-tight">
                        <CheckCircle2 className="w-5 h-5 text-[#34d399] shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.link}
                    className="mt-8 inline-flex items-center justify-center gap-2 w-full py-4 bg-white text-[#0F4F3F] rounded-2xl font-bold hover:bg-[#34d399] hover:text-[#0F4F3F] transition-colors"
                  >
                    Deep Dive <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}

            {/* Bespoke Request Card */}
            <motion.div
              {...fadeUp}
              className="relative p-10 bg-gradient-to-br from-[#0F4F3F] to-[#082b22] rounded-[2.5rem] flex flex-col justify-center text-center text-white shadow-2xl border border-gray-200"
            >
              <Zap className="w-12 h-12 text-[#34d399] mx-auto mb-6 animate-pulse" />
              <h3 className="text-2xl font-black mb-4">Custom Engineering?</h3>
              <p className="text-white/70 text-sm mb-8">
                We assemble dedicated "Strike Teams" for bespoke architectural challenges.
              </p>
              <Link href="/contact" className="bg-white text-[#0F4F3F] py-4 rounded-2xl font-black hover:scale-105 transition-transform">
                Consult an Architect
              </Link>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ================= BRANDING STRIP (VIDEO) ================= */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover  brightness-[0.6]"
        >
          <source src="/servicesBG.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-linear-to-b from-white via-transparent to-white" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10 text-center text-white px-6"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 drop-shadow-2xl">
            BUILT FOR RELIABILITY. <br /> DESIGNED FOR SCALE.
          </h2>
          <div className="w-24 h-1 bg-[#34d399] mx-auto rounded-full" />
        </motion.div>
      </section>



      {/* ================= WHY CHOOSE US (PREMIUM LIST) ================= */}
      <section className="py-32 bg-[#F9FBFA] px-6 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">The CODEIT Advantage</h2>
            <p className="text-gray-500">Why the world's most ambitious companies partner with us.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { t: "Business-Relevant Engineering", d: "Technology guided by measurable business impact.", i: Globe },
              { t: "Security & Compliance First", d: "Architectures built with governance and protection in mind.", i: Shield },
              { t: "Predictable Delivery", d: "SLA-backed execution with transparent progress checkpoints.", i: Zap },
              { t: "Long-term Partnership", d: "We grow as you scale, ensuring shared success.", i: Sparkles },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
              >
                <div className="w-12 h-12 bg-[#0F4F3F]/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0F4F3F] transition-colors">
                  <item.i className="text-[#0F4F3F] w-6 h-6 group-hover:text-white transition-colors" />
                </div>
                <h4 className="font-black text-lg mb-3 leading-tight">{item.t}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INDUSTRY IMPACT ================= */}
      <section className="py-32 bg-white px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.h2 {...fadeUp} className="text-4xl md:text-5xl font-black text-center tracking-tight mb-20">
            Sectors We Create <span className="text-[#0F4F3F]">Impact</span> In
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              ["Enterprise Software", "Building secure & robust enterprise systems."],
              ["Healthcare Digital", "Modern platforms with compliance & patient-first data security."],
              ["Retail & Commerce", "Optimized customer experiences & scalable commerce systems."],
              ["FinTech Solutions", "Precision-focused solutions for highly regulated environments."],
              ["Ed-Tech Platforms", "Learning platforms engineered for scale & accessibility."],
              ["Startup Scale-ups", "MVP → Scale-up product engineering for ambitious founders."],
            ].map(([title, desc], i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="p-10 rounded-3xl border border-gray-200 bg-white hover:border-[#0F4F3F]/30 hover:bg-[#F9FBFA] transition-all cursor-default shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-[#0F4F3F]/5 rounded-lg mb-6">
                  <Sparkles className="w-5 h-5 text-[#0F4F3F]" />
                </div>
                <h3 className="text-xl font-black mb-3 text-gray-900">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
     {/* ================= FINAL CTA (PREMIUM EMERALD VERSION) ================= */}
     <section className="relative py-40 overflow-hidden bg-[#0F4F3F] text-center px-6">
        {/* Animated Background Rings for Depth */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {[1, 2, 3].map((ring) => (
            <motion.div
              key={ring}
              className="absolute top-1/2 left-1/2 border border-white/10 rounded-full"
              initial={{ width: 0, height: 0, x: "-50%", y: "-50%", opacity: 0.5 }}
              animate={{ 
                width: ring * 600, 
                height: ring * 600, 
                opacity: 0 
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                delay: ring * 1.2,
                ease: "easeOut" 
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-[100px] font-black tracking-tighter text-white leading-[0.85] mb-8">
              LET'S ARCHITECT <br /> 
              <span className="text-[#34d399]">YOUR NEXT BIG THING.</span>
            </h2>
            
            <p className="text-white/80 text-xl md:text-2xl font-light max-w-2xl mx-auto mb-14">
              Whether it's strategic modernization or a full-scale product build, 
              we're ready to partner with you.
            </p>

            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-4 bg-white text-[#0F4F3F] px-14 py-6 rounded-full text-2xl font-black hover:scale-105 transition-all shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
            >
              START A PROJECT
              <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </motion.div>

          {/* Luxury Brand Keywords Strip */}
          <div className="mt-24 flex flex-wrap justify-center gap-8 md:gap-16 text-white/30 font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase">
            <span className="hover:text-white/60 transition-colors cursor-default">Strategy</span>
            <span className="hover:text-white/60 transition-colors cursor-default">Design</span>
            <span className="hover:text-white/60 transition-colors cursor-default">Development</span>
            <span className="hover:text-white/60 transition-colors cursor-default">Growth</span>
          </div>
        </div>

        {/* Bottom Corner Glows */}
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#34d399]/10 rounded-full blur-[100px]" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-black/20 rounded-full blur-[100px]" />
      </section>
    </main>
  );
}