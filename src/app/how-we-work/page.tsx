"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Search,
  Layers,
  MousePointer2,
  Code2,
  ShieldCheck,
  Rocket,
  BarChart3,
  CheckCircle2,
  Briefcase,
  Terminal,
  Settings,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true, amount: 0.2 },
};

const steps = [
  {
    id: 1,
    title: "Discovery & Requirement Analysis",
    purpose: "To clearly understand business goals, operational challenges, and technical requirements before solution design begins.",
    icon: Search,
    activities: [
      "Stakeholder consultations and workshops",
      "Business process & gap analysis",
      "Functional/Non-functional definitions",
      "Scope, timeline & feasibility assessment",
      "Risk identification & mitigation planning",
    ],
    deliverables: ["Requirement Specification", "Defined Project Scope", "High-level Delivery Roadmap"],
  },
  {
    id: 2,
    title: "Solution Architecture & Technical Design",
    purpose: "To define a secure, scalable, and future-ready technical foundation aligned with business needs.",
    icon: Layers,
    activities: [
      "System architecture & component design",
      "Technology stack selection",
      "Data flow & integration planning",
      "Security & performance considerations",
      "Infrastructure & deployment planning",
    ],
    deliverables: ["Solution Architecture Blueprint", "Technical Design Documentation", "Security Specifications"],
  },
  {
    id: 3,
    title: "UI / UX Planning & Experience Design",
    purpose: "To ensure intuitive user experiences, consistency, and high adoption across digital solutions.",
    icon: MousePointer2,
    activities: [
      "User journey mapping & flows",
      "Wireframes and visual layouts",
      "Experience design aligned with workflows",
      "Design validation & approvals",
    ],
    deliverables: ["Approved UI/UX Prototypes", "Design Guidelines", "Experience Specifications"],
  },
  {
    id: 4,
    title: "Development & Implementation",
    purpose: "To build reliable, maintainable, and high-performance solutions using structured engineering practices.",
    icon: Code2,
    activities: [
      "Modular & phased development",
      "Secure coding standards",
      "Version control & code reviews",
      "Continuous Integration (CI/CD)",
    ],
    deliverables: ["Developed Modules", "Configured Integrations", "Technical Documentation"],
  },
  {
    id: 5,
    title: "Quality Assurance & Validation",
    purpose: "To ensure the solution meets functional, performance, and security standards before deployment.",
    icon: ShieldCheck,
    activities: [
      "Functional & regression testing",
      "Performance & load testing",
      "Security & data integrity checks",
      "UAT support",
    ],
    deliverables: ["Test Execution Reports", "Defect Resolution Sign-off", "Production Readiness Approval"],
  },
  {
    id: 6,
    title: "Deployment & Go-Live",
    purpose: "To ensure a controlled, secure, and seamless transition from development to production.",
    icon: Rocket,
    activities: [
      "Environment configuration",
      "Data migration execution",
      "Go-live monitoring",
      "Stabilization support",
    ],
    deliverables: ["Successfully Deployed Solution", "Go-live Sign-off", "Configuration Documentation"],
  },
  {
    id: 7,
    title: "Support, Monitoring & Optimization",
    purpose: "To maintain system stability, ensure performance, and support continuous improvement.",
    icon: BarChart3,
    activities: [
      "Application & system monitoring",
      "Incident management & resolution",
      "Preventive maintenance",
      "Performance tuning",
    ],
    deliverables: ["SLA-based Support Reports", "Optimized System Performance", "Continuous Improvement Roadmap"],
  },
];

export default function HowWeWork() {
  return (
    /* h-screen snap container */
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory bg-white text-black scroll-smooth">
      
      {/* 1. HERO SECTION */}
      <section className="snap-start min-h-screen flex items-center justify-center pt-24 bg-white">
        <motion.div {...fadeUp} className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-black leading-none mb-6">
            DESIGN-LED <br />
            <span className="text-[#0F4F3F]">DELIVERY HIERARCHY</span>
          </h1>
          <p className="text-gray-800 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            At CODEIT, every service engagement follows a design-led, structured delivery 
            hierarchy ensuring alignment with business objectives and high-quality outcomes.
          </p>
        </motion.div>
      </section>

      {/* 2. BLUEPRINT SECTION */}
      <section className="snap-start min-h-screen flex items-center py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp}>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight text-black">
              Our Delivery Blueprint
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              Our methodology integrates strategy, design, engineering, and governance 
              across the entire solution lifecycle.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Strategy-first alignment",
                "Documented workflows",
                "SLA-based ownership",
                "Scalable Architecture"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <CheckCircle2 className="text-[#0F4F3F] w-5 h-5" />
                  <span className="font-bold text-black">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="relative">
            <Image
              src="/how-we-work.png"
              alt="CODEIT Hierarchy"
              width={600}
              height={600}
              className="rounded-2xl shadow-2xl border border-gray-100"
            />
          </motion.div>
        </div>
      </section>

      {/* 3. PARALLAX SECTION (KEPT AS REQUESTED) */}
      <section
        className="snap-start relative min-h-screen bg-cover bg-center bg-fixed flex items-center justify-center"
        style={{ backgroundImage: "url('/howWeworkBg.png')" }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="relative z-10 text-center px-6">
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase">
            Predictable <br /> Execution.
          </h2>
          <p className="text-emerald-400 text-xl md:text-2xl mt-4 font-bold tracking-widest uppercase">
            Architecture Designed for Longevity
          </p>
        </motion.div>
      </section>

      {/* 4. DETAILED STEPS (SCROLLABLE GRID TO PREVENT CUTOFF) */}
      <section className="snap-start min-h-screen flex items-center py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12 text-black">THE 7-STAGE PROCESS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[75vh] overflow-y-auto pr-2 custom-scrollbar">
            {steps.map((step) => (
              <motion.div
                key={step.id}
                whileHover={{ y: -5 }}
                className="p-8 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="flex items-center justify-between mb-6">
                  <step.icon className="w-10 h-10 text-[#0F4F3F]" />
                  <span className="text-4xl font-black text-gray-100 group-hover:text-[#0F4F3F]/10 transition-colors">0{step.id}</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">"{step.purpose}"</p>
                <div className="space-y-4">
                    <div>
                        <h4 className="text-[10px] uppercase tracking-widest font-black text-[#0F4F3F] mb-2">Key Activities</h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                            {step.activities.map((a, i) => <li key={i} className="flex gap-2">• {a}</li>)}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-[10px] uppercase tracking-widest font-black text-blue-600 mb-2">Deliverables</h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                            {step.deliverables.map((d, i) => <li key={i} className="flex gap-2 text-blue-900/70">✓ {d}</li>)}
                        </ul>
                    </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GOVERNANCE & WHY US */}
      <section className="snap-start min-h-screen flex items-center py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp}>
            <h2 className="text-4xl font-black text-black mb-10 tracking-tight uppercase">
              Governance & <br />Quality Controls
            </h2>
            <div className="space-y-4">
              {[
                "Design-first and process-driven execution",
                "Security-focused architecture",
                "Documented workflows and version control",
                "SLA-driven delivery and support",
                "Transparent communication and reporting",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                  <ShieldCheck className="text-[#0F4F3F] w-6 h-6 flex-shrink-0" />
                  <span className="font-bold text-black text-lg">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="bg-[#0F4F3F] p-10 md:p-14 rounded-[3rem] text-white shadow-2xl">
            <h3 className="text-3xl font-black mb-8 uppercase tracking-tighter">Why Our Model Works</h3>
            <div className="space-y-6">
              {[
                "Clear alignment between business and technology",
                "Reduced risk and rework",
                "Predictable timelines and outcomes",
                "Consistent quality across all services",
                "Scalable solutions supporting growth",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1 bg-white rounded-full p-1">
                    <CheckCircle2 className="text-[#0F4F3F] w-4 h-4" />
                  </div>
                  <p className="text-lg font-medium text-emerald-50 text-left">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. FINAL CTA + FOOTER SNAP POINT */}
      <section className="snap-start min-h-screen flex flex-col justify-between bg-white pt-32">
        <div className="text-center px-6">
          <h2 className="text-5xl md:text-7xl font-black text-black tracking-tighter mb-8">
            READY TO BUILD <br />WITH CONFIDENCE?
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto mb-12">
            Let’s turn structured execution into business results — predictably and at scale.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/contact"
            className="inline-block bg-[#0F4F3F] text-white px-12 py-5 rounded-full font-black text-xl shadow-2xl hover:bg-black transition-all"
          >
            Start a Consultation
          </motion.a>
        </div>
        
        {/* IMPORTANT: This ensures the footer is part of the final snap section */}
        <div className="mt-auto">
             {/* The global footer component will appear here because of the root layout, 
                 but we need a spacer to ensure the user scrolls to see it. */}
             <div className="h-20" /> 
        </div>
      </section>
    </main>
  );
}