"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Activity,
  ShieldCheck,
  Wrench,
  Lock,
  Clock,
  TrendingUp,
  ArrowRight,
  ArrowLeft,
  ShieldAlert,
  Cpu,
  RefreshCw,
  Sparkles,
  Search,
  Settings,
  Eye,
  Box,
  Hexagon,
  Database
} from "lucide-react";

// --- CONFIG & ANIMATIONS ---
const fadeUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
};

// --- ADVANCED SUB-COMPONENTS ---

/**
 * NEW HERO VISUAL: The Data Matrix Core
 * A high-end 3D abstract visual representing system equilibrium and stability.
 */
const DataMatrixCore = () => {
  return (
    <div className="relative w-full max-w-2xl aspect-square flex items-center justify-center hidden lg:flex">
      {/* Background Orbital Rings */}
      {[1, 2, 3].map((ring) => (
        <motion.div
          key={ring}
          animate={{ rotate: ring % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 20 + ring * 5, repeat: Infinity, ease: "linear" }}
          className="absolute border border-[#0F4F3F]/10 rounded-full"
          style={{
            width: `${ring * 30}%`,
            height: `${ring * 30}%`,
          }}
        />
      ))}

      {/* The Shard Cluster (Representing the System) */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotateY: [0, 360] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-20 w-48 h-48 flex items-center justify-center"
      >
        {/* Central Source of Truth */}
        <div className="absolute w-24 h-24 bg-[#0F4F3F] rounded-2xl rotate-45 shadow-[0_0_60px_rgba(15,79,63,0.6)] flex items-center justify-center border border-white/20">
          <Database className="text-white -rotate-45" size={40} />
        </div>

        {/* Orbiting Shards */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              rotate: { duration: 8 + i, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute w-full h-full"
          >
            <div 
              className="w-8 h-8 bg-white border border-[#0F4F3F]/20 rounded-lg shadow-xl flex items-center justify-center"
              style={{ transform: `translate(${120 + i * 10}px) rotate(45deg)` }}
            >
              <Cpu className="text-[#0F4F3F] -rotate-45" size={16} />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Floating Metric Bubbles (Parallax Effect) */}
      {[
        { label: "Uptime", val: "99.9%", pos: "top-10 left-10" },
        { label: "Secure", val: "AES-256", pos: "bottom-20 right-0" },
        { label: "Latency", val: "12ms", pos: "top-1/2 -right-10" }
      ].map((metric, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -30, 0], x: [0, 10, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute ${metric.pos} bg-white/80 backdrop-blur-xl border border-gray-100 p-4 rounded-2xl shadow-2xl z-30`}
        >
          <p className="text-[8px] font-black text-[#0F4F3F]/40 uppercase tracking-widest mb-1">{metric.label}</p>
          <p className="text-sm font-black text-gray-900">{metric.val}</p>
        </motion.div>
      ))}

      {/* Deep Glow Layer */}
      <div className="absolute inset-0 bg-[#0F4F3F]/5 rounded-full blur-[120px]" />
    </div>
  );
};

export default function ApplicationSupportPage() {
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
      
      {/* ================= DYNAMIC MOUSE FOLLOWER ================= */}
      <div 
        className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-700 opacity-60 hidden md:block"
        style={{
          background: `radial-gradient(1000px circle at ${mousePos.x}px ${mousePos.y}px, rgba(15, 79, 63, 0.12), transparent 70%)`
        }}
      />

      {/* ================= SECTION 1: MATRIX HERO ================= */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12 sm:pt-44 sm:pb-32 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(#0F4F3F_1.5px,transparent_1.5px)] [background-size:64px_64px]" />
        </div>
        
        <div className="max-w-[1400px] mx-auto w-full relative z-20">
          <Link href="/services" className="group inline-flex items-center gap-2 text-[#0F4F3F] font-black text-xs sm:text-sm mb-12 px-6 py-2.5 rounded-full border border-[#0F4F3F]/10 bg-white/50 backdrop-blur-md hover:bg-white transition-all shadow-sm">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> BACK TO SERVICES
          </Link>
          
          <div className="flex flex-col lg:flex-row gap-20 items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="w-full lg:max-w-[55%] shrink-0 text-center lg:text-left"
            >
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="inline-block py-2 px-6 bg-[#0F4F3F]/5 border border-[#0F4F3F]/10 rounded-full text-[#0F4F3F] text-[10px] font-black tracking-[0.4em] uppercase mb-10"
              >
                Zero-Downtime Governance
              </motion.span>
              <h1 className="text-5xl sm:text-7xl md:text-[100px] xl:text-[130px] font-black tracking-tighter leading-[0.85] mb-12">
                SYSTEM <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F4F3F] via-[#2D8E73] to-[#34d399] drop-shadow-sm">
                  EQUILIBRIUM.
                </span>
              </h1>
              <p className="text-lg sm:text-2xl md:text-3xl text-gray-400 max-w-2xl mx-auto lg:mx-0 font-light leading-snug italic">
                "We architect the absolute stability required for mission-critical digital assets to thrive in high-velocity markets."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="w-full lg:w-[45%] flex justify-center lg:justify-end"
            >
              <DataMatrixCore />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: GOVERNANCE PROTOCOLS ================= */}
      <section className="relative min-h-screen flex items-center py-20 sm:py-40 px-4 sm:px-6 bg-[#F9FBFA]">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div {...fadeUp} className="mb-24 text-center lg:text-left flex flex-col lg:flex-row justify-between items-end gap-10">
            <div className="max-w-3xl">
              <h2 className="text-4xl sm:text-7xl font-black tracking-tight mb-8 text-gray-900 leading-none">
                Resilience <br /><span className="text-[#0F4F3F]">Protocols.</span>
              </h2>
              <div className="w-40 h-2 bg-[#0F4F3F] rounded-full hidden lg:block" />
            </div>
            <p className="text-gray-500 text-xl font-medium max-w-md italic border-l-4 border-[#0F4F3F]/20 pl-6">
              Continuous monitoring and proactive refactoring to ensure your application remains stable throughout its entire lifecycle.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { i: Eye, t: "Real-time Scrutiny", d: "Hyper-vigilant monitoring systems that identify sub-millisecond anomalies." },
              { i: Wrench, t: "Bespoke Tuning", d: "Deep-level code refactoring and database optimization for peak execution speed." },
              { i: RefreshCw, t: "Legacy Evolution", d: "Scheduled version upgrades and architectural modernization with zero downtime." },
              { i: ShieldCheck, t: "Security Hardening", d: "Aggressive patching and vulnerability scanning to protect your data assets." },
            ].map((service, i) => (
              <motion.div 
                key={i}
                {...fadeUp}
                whileHover={{ y: -15, scale: 1.02 }}
                className="p-10 rounded-[3rem] bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all group"
              >
                <div className="w-16 h-16 bg-[#0F4F3F]/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#0F4F3F] transition-colors duration-500">
                  <service.i className="text-[#0F4F3F] group-hover:text-white transition-colors" size={28} />
                </div>
                <h4 className="text-2xl font-black mb-4 tracking-tight leading-tight">{service.t}</h4>
                <p className="text-gray-500 leading-relaxed text-sm italic">"{service.d}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: THE SLA MODEL (DARK) ================= */}
      <section className="relative min-h-screen flex items-center py-20 sm:py-40 px-4 sm:px-6 bg-[#050505] text-white overflow-hidden rounded-[4rem] sm:rounded-[6rem] mx-2 sm:mx-10 my-24">
        <div className="absolute inset-0 z-0 opacity-10">
           <div className="w-full h-full bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div {...fadeUp} className="text-center mb-32">
            <h2 className="text-4xl sm:text-8xl font-black tracking-tight mb-8">Service Levels</h2>
            <p className="text-[#34d399] text-sm sm:text-xl font-mono uppercase tracking-[0.5em]">
              SLA-DRIVEN RESPONSE MODEL
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-20 gap-x-12">
            {[
              { n: "01", t: "Priority One", d: "Immediate intervention for critical failures with a Tier-3 engineering squad active within 15 minutes." },
              { n: "02", t: "Incident Analysis", d: "Comprehensive root-cause investigation and forensic patching to prevent reoccurrence." },
              { n: "03", t: "Pre-emptive Health", d: "Daily heartbeat checks and automated system health reporting delivered to your dashboard." },
            ].map((model, i) => (
              <motion.div key={i} {...fadeUp} className="relative group pl-10 border-l border-white/10 hover:border-[#34d399] transition-colors">
                <span className="text-7xl font-black text-white/5 absolute -top-12 -left-4 group-hover:text-[#34d399]/10 transition-colors">{model.n}</span>
                <div className="relative z-10">
                  <h4 className="text-2xl font-black mb-4 text-white tracking-tight">{model.t}</h4>
                  <p className="text-sm text-white/40 leading-relaxed max-w-xs">{model.d}</p>
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
              <h2 className="text-4xl sm:text-7xl font-black tracking-tight mb-6 text-gray-900 leading-none">Business Value.</h2>
              <div className="w-24 sm:w-48 h-2 bg-[#0F4F3F] mx-auto md:mx-0 rounded-full" />
            </div>
            <p className="text-gray-400 text-lg sm:text-2xl font-light text-center md:text-right max-w-sm italic">
              "We provide the technical certainty required for global enterprise scale."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { t: "Revenue Insurance", d: "Zero-point-of-failure architectures designed to prevent revenue loss during traffic spikes." },
              { t: "Operational Velocity", d: "Internal teams refocus on core innovation while we manage the resilience of the technical backbone." },
              { t: "Absolute Reliability", d: "SLA-backed uptime that protects your brand reputation in highly competitive markets." },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.05 }}
                className="p-12 rounded-[4rem] bg-[#F9FBFA] border border-gray-100 flex flex-col items-center text-center shadow-sm group"
              >
                <div className="w-16 h-16 bg-white text-[#0F4F3F] rounded-[2rem] flex items-center justify-center mb-10 shadow-lg group-hover:bg-[#0F4F3F] group-hover:text-white transition-all duration-500">
                   <ShieldAlert size={30} />
                </div>
                <h4 className="text-3xl font-black mb-4 tracking-tight text-gray-900 leading-none">{item.t}</h4>
                <p className="text-gray-500 leading-relaxed text-sm">"{item.d}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: FINAL CTA ================= */}
      <section className="relative min-h-screen flex items-center py-20 sm:py-44 px-4 sm:px-6 text-center overflow-hidden bg-[#0F4F3F]">
        
        {/* Animated Background Pulse Rings */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
           {[1, 2, 3].map((ring) => (
             <motion.div 
               key={ring}
               animate={{ scale: [1, 2], opacity: [0.3, 0] }}
               transition={{ duration: 5, repeat: Infinity, delay: ring * 1.5 }}
               className="absolute w-[600px] h-[600px] border border-white/5 rounded-full"
             />
           ))}
        </div>

        <motion.div 
          {...fadeUp} 
          className="max-w-6xl mx-auto relative z-10 w-full"
        >
          <div className="w-24 h-24 bg-white/10 backdrop-blur-xl rounded-3xl flex items-center justify-center mx-auto mb-10 border border-white/20">
            <RefreshCw className="text-[#34d399] animate-spin-slow" size={48} />
          </div>
          <h2 className="text-5xl sm:text-7xl md:text-[110px] font-black tracking-tighter mb-12 leading-[0.85] text-white text-balance">
            SAFEGUARD YOUR <br /> <span className="text-[#34d399]">DIGITAL LEGACY.</span>
          </h2>
          <p className="text-white/60 text-xl md:text-2xl max-w-2xl mx-auto mb-16 font-light">
            Integrate the elite support protocol designed for high-availability enterprise environments.
          </p>
          
          <Link href="/contact" className="group relative inline-flex items-center gap-4 bg-white text-[#0F4F3F] px-12 py-5 sm:px-20 sm:py-8 rounded-full text-xl sm:text-3xl font-black hover:scale-105 transition-all shadow-[0_40px_80px_rgba(0,0,0,0.4)]">
            INITIATE SUPPORT <ArrowRight className="group-hover:translate-x-4 transition-transform w-8 h-8" />
          </Link>
          
          <div className="mt-32 opacity-20 flex justify-center gap-16 text-[10px] font-black uppercase tracking-[0.6em] text-white">
             <span>Stability</span>
             <span>Security</span>
             <span>Optimization</span>
          </div>
        </motion.div>

        {/* Dynamic Glows */}
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-black/40 rounded-full blur-[120px]" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#34d399]/10 rounded-full blur-[120px]" />
      </section>

    </main>
  );
}