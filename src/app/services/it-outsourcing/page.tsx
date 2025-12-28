"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Users,
  DollarSign,
  Layers,
  Rocket,
  TrendingUp,
  Network,
  ArrowRight,
  ArrowLeft,
  Globe,
  ShieldCheck,
  Zap,
  Cpu,
  CheckCircle2,
  Sparkles,
  Command,
  Briefcase,
  Workflow
} from "lucide-react";

// --- CONFIG & ANIMATIONS ---
const PRIMARY = "#0F4F3F";

const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
};

// --- ADVANCED SUB-COMPONENTS ---

/**
 * NEW HERO VISUAL: Executive Talent Orbit
 * A conceptual 3D orbit representing a central core supported by elite offshore squads.
 */
const TalentOrbit = () => {
  return (
    <div className="relative w-full max-w-xl aspect-square flex items-center justify-center hidden lg:flex">
      {/* Central Core (The Client/CODEIT) */}
      <motion.div 
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="z-30 w-32 h-32 bg-[#0F4F3F] rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(15,79,63,0.4)] border border-white/20"
      >
        <Briefcase className="text-white" size={40} />
      </motion.div>

      {/* Orbit Ring 1 (Inner) */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute w-64 h-64 border border-[#0F4F3F]/10 rounded-full z-20"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-[#0F4F3F]/20 rounded-xl flex items-center justify-center shadow-lg">
           <Cpu className="text-[#0F4F3F]" size={20} />
        </div>
      </motion.div>

      {/* Orbit Ring 2 (Outer) */}
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute w-[450px] h-[450px] border border-[#0F4F3F]/5 rounded-full z-10"
      >
        <div className="absolute top-1/4 left-0 -translate-x-1/2 w-14 h-14 bg-white border border-[#0F4F3F]/10 rounded-full flex items-center justify-center shadow-2xl">
           <Users className="text-[#34d399]" size={24} />
        </div>
        <div className="absolute bottom-1/4 right-0 translate-x-1/2 w-12 h-12 bg-white border border-[#0F4F3F]/10 rounded-full flex items-center justify-center shadow-2xl">
           <Zap className="text-amber-500" size={20} />
        </div>
      </motion.div>

      {/* Pulsing Background Glows */}
      <div className="absolute inset-0 bg-[#0F4F3F]/5 rounded-full blur-[100px] animate-pulse" />
    </div>
  );
};

export default function ITOutsourcingPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="bg-white text-black overflow-x-hidden selection:bg-[#0F4F3F] selection:text-white">
      
      {/* DYNAMIC MOUSE FOLLOWER */}
      <div 
        className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-700 opacity-60 hidden md:block"
        style={{
          background: `radial-gradient(1200px circle at ${mousePos.x}px ${mousePos.y}px, rgba(15, 79, 63, 0.12), transparent 70%)`
        }}
      />

      {/* ================= SECTION 1: SPATIAL HERO ================= */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12 sm:pt-44 sm:pb-32 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(#0F4F3F_1.5px,transparent_1.5px)] [background-size:64px_64px]" />
        </div>
        
        <div className="max-w-[1400px] mx-auto w-full relative z-20">
          <Link href="/services" className="group inline-flex items-center gap-2 text-[#0F4F3F] font-black text-xs sm:text-sm mb-12 px-6 py-2.5 rounded-full border border-[#0F4F3F]/10 bg-white/50 backdrop-blur-md hover:bg-white transition-all shadow-sm">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> BACK TO SERVICES
          </Link>
          
          <div className="flex flex-col lg:flex-row gap-16 items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="w-full lg:max-w-[55%] shrink-0 text-center lg:text-left"
            >
              <span className="bg-[#0F4F3F] text-white text-[10px] font-black tracking-[0.5em] uppercase py-3 px-8 rounded-full shadow-2xl inline-block mb-12">
                Managed Human Capital
              </span>
              <h1 className="text-5xl sm:text-7xl md:text-[100px] xl:text-[130px] font-black tracking-tighter leading-[0.8] mb-12">
                GLOBAL <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F4F3F] via-[#2D8E73] to-[#34d399] drop-shadow-sm">
                  SQUADS.
                </span>
              </h1>
              <p className="text-lg sm:text-2xl md:text-3xl text-gray-400 max-w-2xl mx-auto lg:mx-0 font-light leading-snug italic">
                "We architect specialized offshore centers that operate as a high-performance extension of your local infrastructure."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="w-full lg:w-[45%] flex justify-center lg:justify-end"
            >
              <TalentOrbit />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: ENGAGEMENT MODELS ================= */}
      <section className="relative min-h-screen flex items-center py-20 sm:py-40 px-4 sm:px-6 bg-[#F9FBFA]">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div {...fadeUp} className="mb-24 text-center lg:text-left flex flex-col lg:flex-row justify-between items-end gap-10">
            <div className="max-w-3xl">
              <h2 className="text-4xl sm:text-7xl font-black tracking-tight mb-8 text-gray-900 leading-none">
                Engagement <br /><span className="text-[#0F4F3F]">Architecture.</span>
              </h2>
              <div className="w-40 h-2 bg-[#0F4F3F] rounded-full hidden lg:block" />
            </div>
            <p className="text-gray-500 text-xl font-medium max-w-md italic border-l-4 border-[#0F4F3F]/20 pl-6">
              Flexible delivery frameworks designed to align with your internal governance and scaling velocity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { 
                i: Users, 
                t: "Dedicated Center", 
                d: "An exclusive group of elite engineers working 100% on your roadmap, fully integrated into your culture and tools.",
                tag: "Exclusive"
              },
              { 
                i: Workflow, 
                t: "Project-Based", 
                d: "Fixed-cost, milestone-driven execution for specific product builds, ensuring high quality within predictable timelines.",
                tag: "Fixed ROI"
              },
              { 
                i: Network, 
                t: "Managed Ops", 
                d: "Full technical ownership where we manage the people, processes, and delivery while you focus on business growth.",
                tag: "Zero Overhead"
              },
            ].map((model, i) => (
              <motion.div 
                key={i}
                {...fadeUp}
                whileHover={{ y: -15, backgroundColor: "#fff" }}
                className="p-12 rounded-[4rem] bg-white/50 border border-gray-100 shadow-sm hover:shadow-2xl transition-all group"
              >
                <div className="w-20 h-20 bg-[#0F4F3F] rounded-3xl flex items-center justify-center mb-10 shadow-xl shadow-[#0F4F3F]/20 group-hover:scale-110 transition-transform duration-500">
                  <model.i className="text-white" size={32} />
                </div>
                <span className="text-[10px] font-black text-[#34d399] uppercase tracking-[0.4em] mb-4 block">{model.tag}</span>
                <h4 className="text-3xl font-black mb-6 tracking-tight">{model.t}</h4>
                <p className="text-gray-500 leading-relaxed text-base">"{model.d}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: THE ADVANTAGE STRIP (DARK) ================= */}
      <section className="relative min-h-screen flex items-center py-20 sm:py-40 px-4 sm:px-6 bg-[#050505] text-white overflow-hidden rounded-[4rem] sm:rounded-[6rem] mx-2 sm:mx-10 my-24">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="w-full h-full bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div {...fadeUp} className="text-center mb-32">
            <h2 className="text-4xl sm:text-8xl font-black tracking-tight mb-8">Outsourcing Alpha</h2>
            <p className="text-[#34d399] text-sm sm:text-xl font-mono uppercase tracking-[0.5em]">
              STRATEGIC LABOR ARBITRAGE
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-12">
            {[
              { n: "01", t: "Global Talent Pool", d: "Instantly bypass local hiring bottlenecks by accessing our vetted network of elite technical specialists globally." },
              { n: "02", t: "Predictable Costing", d: "Convert high fixed labor costs into flexible operational expenses with transparent, SLA-based billing." },
              { n: "03", t: "Rapid Squad Launch", d: "From requirement to fully-operational engineering squad in under 3 weeks, not months." },
              { n: "04", t: "Risk Mitigation", d: "We handle international compliance, hardware procurement, and administrative overhead." },
            ].map((adv, i) => (
              <motion.div key={i} {...fadeUp} className="relative group pl-12 border-l border-white/10 hover:border-[#34d399] transition-colors">
                <span className="text-7xl font-black text-white/5 absolute -top-12 -left-4 group-hover:text-[#34d399]/10 transition-colors">{adv.n}</span>
                <div className="relative z-10">
                  <h4 className="text-2xl font-black mb-4 text-white tracking-tight">{adv.t}</h4>
                  <p className="text-sm text-white/40 leading-relaxed max-w-sm">{adv.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: STRATEGIC IMPACT ================= */}
      <section className="relative min-h-screen flex items-center py-20 sm:py-40 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-24 gap-10">
            <div className="max-w-2xl text-center md:text-left">
              <h2 className="text-4xl sm:text-7xl font-black tracking-tight mb-6 text-gray-900">Value Gains.</h2>
              <div className="w-24 sm:w-48 h-2 bg-[#0F4F3F] mx-auto md:mx-0 rounded-full" />
            </div>
            <p className="text-gray-400 text-lg sm:text-2xl font-light text-center md:text-right max-w-sm">
              Moving beyond cost-cutting to true operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { i: Rocket, t: "Velocity Burst", d: "Accelerate development cycles by up to 2x through parallel squad execution." },
              { i: ShieldCheck, t: "Asset Security", d: "ISO-certified centers that treat your intellectual property with absolute security." },
              { i: Globe, t: "24/7 Innovation", d: "Utilize time-zone advantages for round-the-clock development and deployment cycles." },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.05 }}
                className="p-12 rounded-[4rem] bg-[#F9FBFA] border border-gray-100 flex flex-col items-center text-center shadow-sm"
              >
                <div className="w-16 h-16 bg-white text-[#0F4F3F] rounded-[2rem] flex items-center justify-center mb-10 shadow-lg shadow-[#0F4F3F]/10">
                   <item.i size={30} />
                </div>
                <h4 className="text-3xl font-black mb-4 tracking-tight text-gray-900 leading-none">{item.t}</h4>
                <p className="text-gray-500 leading-relaxed italic">"{item.d}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: FINAL CALL TO ACTION ================= */}
      <section className="relative min-h-screen flex items-center py-20 sm:py-44 px-4 sm:px-6 text-center overflow-hidden bg-[#0F4F3F]">
        
        {/* Animated Background Pulse Rings */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
           {[1, 2, 3].map((ring) => (
             <motion.div 
               key={ring}
               animate={{ scale: [1, 2], opacity: [0.4, 0] }}
               transition={{ duration: 5, repeat: Infinity, delay: ring * 1.5 }}
               className="absolute w-[600px] h-[600px] border border-white/10 rounded-full"
             />
           ))}
        </div>

        <motion.div 
          {...fadeUp} 
          className="max-w-6xl mx-auto relative z-10 w-full"
        >
          <Globe className="text-[#34d399] mx-auto mb-10" size={80} />
          <h2 className="text-5xl sm:text-7xl md:text-[110px] font-black tracking-tighter mb-12 leading-[0.85] text-white">
            DEPLOY YOUR <br /> <span className="text-[#34d399]">GLOBAL ALPHA.</span>
          </h2>
          <p className="text-white/60 text-xl md:text-2xl max-w-2xl mx-auto mb-16 font-light">
            Scale your engineering capacity instantly with the world's top 1% technical talent.
          </p>
          
          <Link href="/contact" className="group relative inline-flex items-center gap-4 bg-white text-[#0F4F3F] px-12 py-5 sm:px-20 sm:py-8 rounded-full text-xl sm:text-3xl font-black hover:scale-105 transition-all shadow-[0_40px_80px_rgba(0,0,0,0.4)]">
            SCALE NOW <ArrowRight className="group-hover:translate-x-4 transition-transform w-8 h-8" />
          </Link>
          
          <div className="mt-32 opacity-20 flex justify-center gap-16 text-[10px] font-black uppercase tracking-[0.6em] text-white">
             <span>Efficiency</span>
             <span>Agility</span>
             <span>Global Reach</span>
          </div>
        </motion.div>

        {/* Dynamic Glows */}
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-black/40 rounded-full blur-[120px]" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#34d399]/10 rounded-full blur-[120px]" />
      </section>

    </main>
  );
}