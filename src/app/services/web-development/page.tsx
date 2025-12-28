"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Monitor,
  Globe,
  Zap,
  Layout,
  Layers,
  Search,
  ShieldCheck,
  Smartphone,
  ArrowRight,
  ArrowLeft,
  MousePointer2,
  Code2,
  Database,
  TrendingUp,
} from "lucide-react";

// --- CONFIG & ANIMATIONS ---
const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

const WEB_CAPABILITIES = [
  { 
    icon: Layout, 
    title: "Custom Web Applications", 
    desc: "Tailored enterprise-grade solutions built with modern stacks (Next.js, React) designed for high performance and complex business logic.",
    tag: "Next-Gen Frameworks"
  },
  { 
    icon: Layers, 
    title: "Full-Stack Orchestration", 
    desc: "End-to-end development integrating robust backend architectures with seamless, lightning-fast frontend interfaces.",
    tag: "End-to-End"
  },
  { 
    icon: Smartphone, 
    title: "Adaptive Responsive UI", 
    desc: "Fluid interfaces engineered to provide a consistent, premium experience across desktop, tablet, and mobile breakpoints.",
    tag: "Mobile-First"
  },
  { 
    icon: Database, 
    title: "Cloud Data Architecture", 
    desc: "Secure, scalable database management and real-time data synchronization for modern web environments.",
    tag: "High Availability"
  },
];

// --- SUB-COMPONENTS ---

/**
 * Replace for LiveTerminal: A floating 3D Responsive Canvas
 * Represents the precision of web interfaces.
 */
const ResponsiveCanvas = () => {
  return (
    <motion.div 
      initial={{ rotateY: 20, rotateX: 10 }}
      animate={{ rotateY: [20, 10, 20], rotateX: [10, 5, 10] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-full max-w-xl aspect-video bg-gradient-to-br from-[#0F4F3F]/20 to-transparent backdrop-blur-3xl rounded-[2rem] border border-white/20 shadow-2xl p-4 hidden lg:block"
    >
      {/* Browser Bar */}
      <div className="flex gap-2 mb-6 border-b border-white/10 pb-4">
        <div className="w-3 h-3 rounded-full bg-red-500/40" />
        <div className="w-3 h-3 rounded-full bg-amber-500/40" />
        <div className="w-3 h-3 rounded-full bg-emerald-500/40" />
        <div className="ml-4 h-3 w-40 bg-white/10 rounded-full" />
      </div>

      {/* Mock UI Elements */}
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 space-y-4">
          <div className="h-32 w-full bg-white/5 rounded-2xl animate-pulse" />
          <div className="grid grid-cols-2 gap-4">
            <div className="h-20 bg-[#34d399]/10 rounded-2xl" />
            <div className="h-20 bg-white/5 rounded-2xl" />
          </div>
        </div>
        <div className="space-y-4">
          <div className="h-10 w-full bg-[#0F4F3F]/40 rounded-xl" />
          <div className="h-10 w-full bg-white/5 rounded-xl" />
          <div className="h-10 w-full bg-white/5 rounded-xl" />
          <div className="h-10 w-full bg-white/5 rounded-xl" />
        </div>
      </div>

      {/* Floating Mouse Cursor Icon */}
      <motion.div 
        animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-10 right-20 text-[#34d399] drop-shadow-lg"
      >
        <MousePointer2 size={32} />
      </motion.div>
    </motion.div>
  );
};

export default function WebDevelopmentPage() {
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
        className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-500 opacity-60 hidden md:block"
        style={{
          background: `radial-gradient(1000px circle at ${mousePos.x}px ${mousePos.y}px, rgba(15, 79, 63, 0.12), transparent 70%)`
        }}
      />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12 sm:pt-44 sm:pb-32 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] bg-repeat" />
          <div className="w-full h-full bg-[radial-gradient(#0F4F3F_1.5px,transparent_1.5px)] [background-size:32px_32px] sm:[background-size:48px_48px]" />
        </div>
        
        <div className="max-w-[1400px] mx-auto w-full relative z-20">
          <Link href="/services" className="group inline-flex items-center gap-2 text-[#0F4F3F] font-bold text-xs sm:text-sm mb-8 sm:mb-12 px-4 sm:px-6 py-2 rounded-full border border-[#0F4F3F]/10 bg-white/50 backdrop-blur-sm hover:bg-white transition-all">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Services
          </Link>
          
          <div className="flex flex-col lg:flex-row gap-12 sm:gap-20 items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full lg:max-w-[60%] shrink-0 text-center lg:text-left"
            >
              <span className="bg-[#0F4F3F] text-white text-[8px] sm:text-[10px] font-black tracking-[0.4em] uppercase py-2 px-4 sm:py-2.5 sm:px-6 rounded-full shadow-2xl inline-block mb-6 sm:mb-10">
                Digital Interface Studio
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-[90px] xl:text-[120px] font-black tracking-tighter leading-[0.85] mb-8 sm:mb-12">
                WEB <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F4F3F] via-[#2D8E73] to-[#0F4F3F] drop-shadow-sm">
                  EXPERIENCES.
                </span>
              </h1>
              <p className="text-base sm:text-xl md:text-2xl text-gray-400 max-w-xl mx-auto lg:mx-0 font-light leading-tight italic">
                "We define the digital threshold where high-performance engineering meets world-class design."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="w-full lg:w-[45%] flex justify-center lg:justify-end"
            >
              <ResponsiveCanvas />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES SECTION */}
      <section className="relative min-h-screen flex items-center py-20 sm:py-40 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div {...fadeUp} className="mb-12 sm:mb-24 text-center">
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tight mb-4 sm:mb-6 text-gray-900">Service Capabilities</h2>
            <div className="w-20 sm:w-32 h-1 sm:h-2 bg-[#0F4F3F] mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
            {WEB_CAPABILITIES.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                whileHover={{ scale: 1.02, rotateY: i % 2 === 0 ? 1 : -1 }}
                className="relative group p-8 sm:p-12 rounded-[2rem] sm:rounded-[4rem] bg-white border border-gray-100 shadow-[0_15px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_40px_120px_rgba(15,79,63,0.1)] transition-all overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 sm:p-8">
                  <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-widest text-[#0F4F3F]/40">{item.tag}</span>
                </div>
                
                <div className="w-14 h-14 sm:w-20 sm:h-20 bg-[#0F4F3F] rounded-2xl sm:rounded-3xl flex items-center justify-center mb-6 sm:mb-10 shadow-xl shadow-[#0F4F3F]/20 group-hover:rotate-[360deg] transition-transform duration-1000">
                  <item.icon className="text-white w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                
                <h3 className="text-xl sm:text-3xl font-black mb-4 sm:mb-6 tracking-tight text-gray-900">{item.title}</h3>
                <p className="text-sm sm:text-lg text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGN & DEV FOCUS SECTION */}
      <section className="relative min-h-screen flex items-center py-16 sm:py-40 px-4 sm:px-6 bg-[#0F4F3F] rounded-[3rem] sm:rounded-[5rem] mx-2 sm:mx-12 my-12 sm:my-24 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
           <div className="w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div {...fadeUp} className="text-center mb-16 sm:mb-32">
            <h2 className="text-3xl sm:text-5xl md:text-8xl font-black tracking-tight mb-4 sm:mb-8">Development Focus</h2>
            <p className="text-[#34d399] text-xs sm:text-xl font-mono uppercase tracking-[0.2em] sm:tracking-[0.3em]">
               High-Performance Web Standards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 sm:gap-y-24 gap-x-8 sm:gap-x-16">
            {[
              { n: "01", t: "User-Centric Design", d: "Iterative UI/UX prototyping focused on clarity, accessibility, and conversion-driven user paths." },
              { n: "02", t: "Secure Architecture", d: "Implementing SSL, JWT authentication, and secure data handling to follow industry best practices." },
              { n: "03", t: "Cross-Platform Fidelity", d: "Extensive cross-browser and cross-device testing to ensure pixel-perfect consistency across the web." },
              { n: "04", t: "SEO & Speed Mastery", d: "Core Web Vitals optimization including image compression, lazy loading, and server-side rendering." },
            ].map((step, i) => (
              <motion.div key={i} {...fadeUp} className="relative group">
                <span className="text-5xl sm:text-8xl font-black text-white/5 absolute -top-10 sm:-top-16 -left-4 sm:-left-8 group-hover:text-[#34d399]/10 transition-colors">{step.n}</span>
                <div className="relative z-10">
                  <h4 className="text-lg sm:text-2xl font-black mb-2 sm:mb-4 text-[#34d399] tracking-tight">{step.t}</h4>
                  <p className="text-xs sm:text-base text-white/50 leading-relaxed">{step.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS VALUE SECTION */}
      <section className="relative min-h-screen flex items-center py-20 sm:py-40 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 sm:mb-32 gap-6 sm:gap-10">
            <div className="max-w-2xl text-center md:text-left">
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tight mb-4 text-gray-900">Business Value</h2>
              <div className="w-24 sm:w-40 h-1 sm:h-2 bg-[#0F4F3F] mx-auto md:mx-0 rounded-full" />
            </div>
            <p className="text-gray-400 text-base sm:text-xl font-medium text-center md:text-right max-w-sm">
              We translate technical precision into measurable business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {[
              { icon: Zap, t: "Strong Digital Presence", d: "An authoritative web footprint that communicates prestige and reliability to your target audience." },
              { icon: TrendingUp, t: "Improved Engagement", d: "Intuitive user journeys that increase time-on-site and significantly lower bounce rates." },
              { icon: ShieldCheck, t: "Reliable & Scalable", d: "Architectures designed to handle traffic spikes effortlessly as your business scales globally." },
            ].map((value, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="p-8 sm:p-14 rounded-[2rem] sm:rounded-[4rem] bg-[#F9FBFA] border border-gray-100 flex flex-col items-center md:items-start text-center md:text-left group transition-all">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white text-[#0F4F3F] rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 sm:mb-10 shadow-lg group-hover:bg-[#0F4F3F] group-hover:text-white transition-all duration-500">
                  <value.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <h4 className="text-xl sm:text-3xl font-black mb-4 sm:mb-6 tracking-tight text-gray-900">{value.t}</h4>
                <p className="text-sm sm:text-lg text-gray-500 leading-relaxed italic">"{value.d}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="relative min-h-screen flex items-center py-20 sm:py-44 px-4 sm:px-6 text-center">
        <motion.div {...fadeUp} className="max-w-6xl mx-auto bg-gray-50 p-8 sm:p-20 md:p-32 rounded-[3rem] sm:rounded-[6rem] border border-gray-100 relative overflow-hidden w-full">
          <div className="absolute top-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-[#0F4F3F]/5 rounded-full blur-3xl" />
          <h2 className="text-3xl sm:text-6xl md:text-[80px] xl:text-[100px] font-black tracking-tighter mb-8 sm:mb-12 leading-[0.9] sm:leading-[0.85] text-gray-900">
            READY TO <br /> <span className="text-[#0F4F3F]">EVOLVE YOUR PRODUCT?</span>
          </h2>
          <Link href="/contact" className="group relative inline-flex items-center gap-3 sm:gap-4 bg-[#0F4F3F] text-white px-8 py-4 sm:px-16 sm:py-7 rounded-full text-base sm:text-2xl font-black hover:shadow-[0_40px_80px_rgba(15,79,63,0.3)] hover:scale-105 transition-all">
            CONTACT US <ArrowRight className="group-hover:translate-x-3 transition-transform w-5 h-5 sm:w-6 sm:h-6" />
          </Link>
        </motion.div>
      </section>

    </main>
  );
}