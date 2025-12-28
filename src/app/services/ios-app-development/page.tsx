"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import {
  Smartphone,
  Layout,
  Server,
  ShieldCheck,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Apple,
  Zap,
  Fingerprint,
  Cpu,
  Layers,
  Sparkles,
  Lock,
  Compass,
} from "lucide-react";

// --- CONFIG & BRANDING ---
const PRIMARY = "#0F4F3F";

const fadeUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
};

const IOS_TECH_STACK = [
  "Swift", "SwiftUI", "Combine", "Metal", "Core Data", "Objective-C", 
  "XCTest", "Firebase", "App Store Connect", "TestFlight", "CocoaPods"
];

// --- ADVANCED SUB-COMPONENTS ---

/**
 * Replace for LiveTerminal: The Spatial iPhone Simulation
 * A 3D parallax representation of native development layers.
 */
const SpatialiPhone = () => {
  return (
    <motion.div 
      initial={{ rotateY: -15, rotateX: 10 }}
      animate={{ rotateY: [-15, -5, -15], rotateX: [10, 5, 10] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-[300px] h-[600px] bg-black rounded-[3.5rem] border-[8px] border-[#111] shadow-[0_50px_100px_rgba(0,0,0,0.5)] p-4 hidden lg:block"
      style={{ perspective: "1000px" }}
    >
      {/* Dynamic Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-50 flex items-center justify-center gap-2">
         <div className="w-2 h-2 rounded-full bg-blue-500/20" />
         <div className="w-8 h-1 bg-white/5 rounded-full" />
      </div>

      {/* Floating UI Layer 1: The App Background */}
      <div className="w-full h-full bg-[#0F4F3F] rounded-[2.5rem] overflow-hidden relative border border-white/5">
         <div className="absolute inset-0 bg-gradient-to-br from-[#0F4F3F] to-black opacity-60" />
         <div className="p-6 pt-12 space-y-4">
            <div className="h-4 w-20 bg-white/10 rounded-full" />
            <div className="h-32 w-full bg-white/5 rounded-3xl" />
            <div className="grid grid-cols-2 gap-3">
               <div className="h-20 bg-white/5 rounded-2xl" />
               <div className="h-20 bg-white/5 rounded-2xl" />
            </div>
         </div>
      </div>

      {/* Floating UI Layer 2: FaceID/Security Module (Extra Offset) */}
      <motion.div 
        animate={{ translateZ: 60, y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-1/3 -left-10 w-48 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-5 shadow-2xl z-40"
      >
        <Fingerprint className="text-[#34d399] mb-3" size={32} />
        <div className="h-2 w-24 bg-white/20 rounded-full mb-2" />
        <div className="h-1.5 w-16 bg-white/10 rounded-full" />
      </motion.div>

      {/* Floating UI Layer 3: Performance Charts */}
      <motion.div 
        animate={{ translateZ: 100, y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-20 -right-16 w-56 bg-black/60 backdrop-blur-3xl border border-[#34d399]/30 rounded-3xl p-6 shadow-2xl z-50"
      >
        <TrendingUp className="text-[#34d399] mb-4" size={24} />
        <div className="flex items-end gap-1.5 h-16">
           {[40, 70, 50, 90, 60, 85].map((h, i) => (
             <div key={i} className="flex-1 bg-[#34d399]/40 rounded-t-sm" style={{ height: `${h}%` }} />
           ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const TechMarquee = () => (
  <div className="py-10 bg-[#050505] overflow-hidden whitespace-nowrap border-y border-white/5 relative">
    <motion.div 
      className="inline-block"
      animate={{ x: [0, -1200] }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
    >
      {[...IOS_TECH_STACK, ...IOS_TECH_STACK].map((tech, i) => (
        <span key={i} className="mx-16 text-2xl font-black text-white/10 uppercase tracking-[0.4em] italic">
          {tech}
        </span>
      ))}
    </motion.div>
  </div>
);

// --- MAIN PAGE COMPONENT ---

export default function IOSAppDevelopmentPage() {
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
      
      {/* ================= DYNAMIC MOUSE FOLLOWER (EXTRA INTENSITY) ================= */}
      <div 
        className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-700 opacity-70 hidden md:block"
        style={{
          background: `radial-gradient(1200px circle at ${mousePos.x}px ${mousePos.y}px, rgba(15, 79, 63, 0.15), transparent 70%)`
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
          
          <div className="flex flex-col lg:flex-row gap-20 items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="w-full lg:max-w-[55%] shrink-0 text-center lg:text-left"
            >
              <motion.span 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-[#0F4F3F] text-white text-[10px] font-black tracking-[0.5em] uppercase py-3 px-8 rounded-full shadow-[0_20px_40px_rgba(15,79,63,0.3)] inline-block mb-12"
              >
                Apple Ecosystem Engineering
              </motion.span>
              <h1 className="text-5xl sm:text-7xl md:text-[110px] xl:text-[140px] font-black tracking-tighter leading-[0.8] mb-12">
                NATIVE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F4F3F] via-[#2D8E73] to-[#34d399] drop-shadow-md">
                  INTUITION.
                </span>
              </h1>
              <p className="text-lg sm:text-2xl md:text-3xl text-gray-400 max-w-2xl mx-auto lg:mx-0 font-light leading-snug italic">
                "We harness the power of Swift and Metal to create experiences that feel like a natural extension of the user's hand."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="w-full lg:w-[45%] flex justify-center relative"
            >
              {/* Background Glow behind Phone */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0F4F3F]/10 rounded-full blur-[120px] -z-10" />
              <SpatialiPhone />
            </motion.div>
          </div>
        </div>
      </section>

      <TechMarquee />

      {/* ================= SECTION 2: HARDWARE ORCHESTRATION ================= */}
      <section className="relative min-h-screen flex items-center py-32 px-4 sm:px-6 bg-[#F9FBFA]">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div {...fadeUp} className="mb-24 text-center lg:text-left flex flex-col lg:flex-row justify-between items-end gap-10">
            <div className="max-w-3xl">
              <h2 className="text-4xl sm:text-7xl font-black tracking-tight mb-8 text-gray-900 leading-none">
                Deep Hardware <br /><span className="text-[#0F4F3F]">Integration.</span>
              </h2>
              <div className="w-40 h-2 bg-[#0F4F3F] rounded-full hidden lg:block" />
            </div>
            <p className="text-gray-500 text-xl font-medium max-w-md italic border-l-4 border-[#0F4F3F]/20 pl-6">
              Our apps don't just sit on the OS; they communicate directly with the Neural Engine and Secure Enclave.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { i: Cpu, t: "Neural Engine", d: "On-device ML for real-time image processing and predictive text." },
              { i: Lock, t: "Secure Enclave", d: "Biometric-first architecture for FaceID and Apple Pay security." },
              { i: Compass, t: "Spatial Logic", d: "Leveraging ARKit and Core Location for immersive physical mapping." },
              { i: Zap, t: "Metal Graphics", d: "Low-level GPU access for high-fidelity animations and data viz." },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                {...fadeUp}
                whileHover={{ y: -15, backgroundColor: "#fff" }}
                className="p-10 rounded-[3rem] bg-white/50 border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 bg-[#0F4F3F]/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#0F4F3F] transition-colors">
                  <feature.i className="text-[#0F4F3F] group-hover:text-white" size={28} />
                </div>
                <h4 className="text-2xl font-black mb-4 tracking-tight">{feature.t}</h4>
                <p className="text-gray-500 leading-relaxed text-sm">{feature.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: THE SWIFT BLUEPRINT (DARK) ================= */}
      <section className="relative min-h-screen flex items-center py-20 sm:py-40 px-4 sm:px-6 bg-[#050505] text-white overflow-hidden rounded-[4rem] sm:rounded-[6rem] mx-2 sm:mx-10 my-24">
        {/* Subtle SVG Grid for Engineering feel */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="w-full h-full bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div {...fadeUp} className="text-center mb-32">
            <h2 className="text-4xl sm:text-8xl font-black tracking-tight mb-8">Engineering Standards</h2>
            <p className="text-[#34d399] text-sm sm:text-xl font-mono uppercase tracking-[0.5em]">
               PLATFORM-SPECIFIC FIDELITY
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-20 gap-x-12">
            {[
              { n: "01", t: "Swift Native", d: "Zero-dependency native Swift builds for maximum performance and smallest binary footprints." },
              { n: "02", t: "UI Fidelity", d: "Strict adherence to Apple's Human Interface Guidelines (HIG) for pixel-perfect transitions." },
              { n: "03", t: "Memory Audit", d: "Intensive ARC (Automatic Reference Counting) auditing to eliminate memory leaks and crashes." },
              { n: "04", t: "Secure Storage", d: "End-to-end encryption using Keychain Services and on-device AES-256 standards." },
              { n: "05", t: "SLA Support", d: "24/7 post-launch monitoring ensuring 99.9% crash-free sessions for enterprise apps." },
              { n: "06", t: "Scalable APIs", d: "REST/GraphQL integration using Combine for reactive, high-speed data handling." },
            ].map((standard, i) => (
              <motion.div key={i} {...fadeUp} className="relative group pl-10 border-l border-white/10 hover:border-[#34d399] transition-colors">
                <span className="text-7xl font-black text-white/5 absolute -top-12 -left-4 group-hover:text-[#34d399]/10 transition-colors">{standard.n}</span>
                <div className="relative z-10">
                  <h4 className="text-2xl font-black mb-4 text-white tracking-tight">{standard.t}</h4>
                  <p className="text-sm text-white/40 leading-relaxed max-w-xs">{standard.d}</p>
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
              <h2 className="text-4xl sm:text-7xl font-black tracking-tight mb-6 text-gray-900">Strategic ROI.</h2>
              <div className="w-24 sm:w-48 h-2 bg-[#0F4F3F] mx-auto md:mx-0 rounded-full" />
            </div>
            <p className="text-gray-400 text-lg sm:text-2xl font-light text-center md:text-right max-w-sm">
              We build mobile assets that capture value and drive user retention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { t: "Frictionless Checkout", d: "Integrating Apple Pay to reduce cart abandonment by up to 35%." },
              { t: "Offline Resilience", d: "Local-first architectures using Core Data for zero-connectivity productivity." },
              { t: "Deep Engagement", d: "Custom push-notification logic that increases daily active users (DAU) by 2x." },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.05 }}
                className="p-12 rounded-[4rem] bg-[#F9FBFA] border border-gray-100 flex flex-col items-center text-center shadow-sm"
              >
                <div className="w-16 h-16 bg-white text-[#0F4F3F] rounded-[2rem] flex items-center justify-center mb-10 shadow-lg shadow-[#0F4F3F]/10">
                   <CheckCircle size={30} />
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
               animate={{ scale: [1, 2], opacity: [0.5, 0] }}
               transition={{ duration: 4, repeat: Infinity, delay: ring * 1.3 }}
               className="absolute w-[500px] h-[500px] border border-white/10 rounded-full"
             />
           ))}
        </div>

        <motion.div 
          {...fadeUp} 
          className="max-w-6xl mx-auto relative z-10 w-full"
        >
          <Sparkles className="text-[#34d399] mx-auto mb-10" size={60} />
          <h2 className="text-5xl sm:text-7xl md:text-[110px] font-black tracking-tighter mb-12 leading-[0.85] text-white">
            ELEVATE YOUR <br /> <span className="text-[#34d399]">MOBILE PRESTIGE.</span>
          </h2>
          <p className="text-white/60 text-xl md:text-2xl max-w-2xl mx-auto mb-16 font-light">
            Whether it's a FinTech powerhouse or a niche startup app, we architect for the elite.
          </p>
          
          <Link href="/contact" className="group relative inline-flex items-center gap-4 bg-white text-[#0F4F3F] px-12 py-5 sm:px-20 sm:py-8 rounded-full text-xl sm:text-3xl font-black hover:scale-105 transition-all shadow-[0_40px_80px_rgba(0,0,0,0.4)]">
            START YOU BIG THING <ArrowRight className="group-hover:translate-x-4 transition-transform w-8 h-8" />
          </Link>
          
          <div className="mt-32 opacity-20 flex justify-center gap-16 text-[10px] font-black uppercase tracking-[0.6em] text-white">
             <span>Innovation</span>
             <span>Security</span>
             <span>Native Performance</span>
          </div>
        </motion.div>

        {/* Dynamic Glows */}
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-black/40 rounded-full blur-[120px]" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#34d399]/10 rounded-full blur-[120px]" />
      </section>

    </main>
  );
}