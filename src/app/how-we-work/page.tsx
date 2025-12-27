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
} from "lucide-react";
import { useState } from "react";

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
    activities: [
      "Stakeholder consultations & requirement workshops",
      "Business process understanding & gap analysis",
      "Functional / non-functional requirement definition",
    ],
    deliverables: [
      "Requirement specification document",
      "Defined project scope & success criteria",
    ],
    icon: Search,
  },
  {
    id: 2,
    title: "Solution Architecture & Technical Design",
    purpose: "To define a secure, scalable, and future-ready technical foundation aligned with business needs.",
    activities: [
      "System architecture & component design",
      "Data flow & integration planning",
      "Security & performance considerations",
    ],
    deliverables: [
      "Architecture blueprint",
      "Technical design documentation",
      "Integration & security design specifications",
    ],
    icon: Layers,
  },
  {
    id: 3,
    title: "UI / UX Planning & Experience Design",
    purpose: "To ensure intuitive user experience & high adoption.",
    activities: [
      "User journey mapping & interaction flows",
      "Wireframes and visual layouts",
      "Design validation & approvals",
    ],
    deliverables: [
      "Approved UI/UX prototypes",
      "Design guidelines & experience specifications",
    ],
    icon: MousePointer2,
  },
  {
    id: 4,
    title: "Development & Implementation",
    purpose: "To build reliable, maintainable, scalable solutions.",
    activities: [
      "Modular & phased development",
      "Secure coding standards",
      "Code reviews & CI/CD",
    ],
    deliverables: [
      "Developed modules",
      "Configured integrations",
      "Technical documentation",
    ],
    icon: Code2,
  },
  {
    id: 5,
    title: "Quality Assurance & Validation",
    purpose: "To ensure readiness, compliance, and performance.",
    activities: [
      "Functional & regression testing",
      "Performance & load testing",
      "Security validations",
    ],
    deliverables: [
      "Execution reports",
      "Resolution sign-off",
      "Go-live approval",
    ],
    icon: ShieldCheck,
  },
  {
    id: 6,
    title: "Deployment & Go-Live",
    purpose: "To ensure controlled and secure transition to production.",
    activities: [
      "Environment configuration",
      "Data migration",
      "Monitoring & stabilization",
    ],
    deliverables: [
      "Successfully deployed solution",
      "Go-live sign-off",
      "Deployment documentation",
    ],
    icon: Rocket,
  },
  {
    id: 7,
    title: "Support, Monitoring & Optimization",
    purpose: "To maintain stability and support continuous improvement.",
    activities: [
      "Monitoring & SLA-based support",
      "Issue resolution & updates",
      "Performance tuning & enhancement",
    ],
    deliverables: [
      "SLA-based support reports",
      "Optimized performance",
      "Improvement roadmap",
    ],
    icon: BarChart3,
  },
];


export default function HowWeWork() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  return (
    <main className="bg-white text-black scroll-smooth overflow-x-hidden md:snap-y md:snap-mandatory">

      {/* HERO */}
      <section className="snap-start min-h-[70vh] md:min-h-screen flex items-center justify-center pt-24 bg-white">
        <motion.div {...fadeUp} className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">
            DESIGN-LED <br />
            <span className="text-[#0F4F3F]">DELIVERY HIERARCHY</span>
          </h1>
          <p className="text-gray-800 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            At CODEIT, every service engagement follows a design-led, structured delivery
            hierarchy ensuring alignment with business objectives and high-quality outcomes.
          </p>
        </motion.div>
      </section>

      {/* BLUEPRINT */}
      <section className="snap-start min-h-[70vh] md:min-h-screen flex items-center py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">
              Our Delivery Blueprint
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              Our methodology integrates strategy, design, engineering, and governance across the entire solution lifecycle.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Strategy-first alignment",
                "Documented workflows",
                "SLA-based ownership",
                "Scalable Architecture",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100"
                >
                  <CheckCircle2 className="text-[#0F4F3F] w-5 h-5" />
                  <span className="font-bold text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <Image
              src="/how-we-work.png"
              alt="Blueprint"
              width={600}
              height={600}
              className="rounded-2xl shadow-2xl border border-gray-200"
            />
          </motion.div>
        </div>
      </section>

      {/* 🔥 PREMIUM PARALLAX */}
      <section
        className="snap-start relative min-h-[70vh] md:min-h-screen bg-scroll md:bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: "url('/howWeworkBg.png')" }}
      >
        <motion.div
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
        />
        <motion.div
          className="relative z-10 text-center px-6"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl sm:text-6xl md:text-8xl font-black text-white drop-shadow-2xl">
            PREMIUM EXECUTION
          </h2>
          <p className="text-emerald-300/90 text-lg sm:text-xl md:text-2xl mt-6 font-semibold uppercase tracking-wide">
            Engineered for Predictability & Scale
          </p>
        </motion.div>
      </section>

      {/* 7 STAGES */}
      <section className="snap-start py-20 bg-[#F8FAFC] relative">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-16">
          THE 7-STAGE PROCESS
        </h2>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="group [perspective:1200px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              onClick={() => handleCardClick(index)}
            >
              <div
                className={`relative w-full min-h-[18rem] md:h-72 transition-transform duration-700 [transform-style:preserve-3d] cursor-pointer
                md:group-hover:[transform:rotateY(180deg)] ${flippedCard === index ? '[transform:rotateY(180deg)]' : ''
                  }`}
              >
                {/* FRONT FACE */}
                <div className="absolute inset-0 bg-white rounded-2xl border border-gray-200 shadow-sm p-8 flex flex-col justify-between [backface-visibility:hidden]">

                  <div className="flex items-center justify-between">
                    <step.icon className="text-[#0F4F3F] w-10 h-10" />
                    <span className="text-gray-200 text-5xl font-black">0{step.id}</span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-3">{step.purpose}</p>
                  </div>
                </div>

                {/* BACK FACE (DETAILS) */}
                <div className="absolute inset-0 rounded-2xl bg-[#0F4F3F] text-white p-6 overflow-y-auto [transform:rotateY(180deg)] [backface-visibility:hidden]">

                  <h4 className="text-lg font-bold mb-3">Key Activities</h4>
                  <ul className="text-sm space-y-1 mb-4 text-emerald-100">
                    {step.activities.map((a, i) => (
                      <li key={i}>• {a}</li>
                    ))}
                  </ul>

                  <h4 className="text-lg font-bold mb-3">Deliverables</h4>
                  <ul className="text-sm space-y-1 text-emerald-50">
                    {step.deliverables.map((d, i) => (
                      <li key={i}>✓ {d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      {/* ⭐️ GOVERNANCE & WHY US (YOUR ORIGINAL CONTENT) */}
      <section className="snap-start min-h-[70vh] md:min-h-screen flex items-center py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <motion.div {...fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-black mb-10 uppercase leading-tight">
              Governance <br />& Quality Controls
            </h2>
            <div className="space-y-4">
              {[
                "Design-first and process-driven execution",
                "Security-focused architecture",
                "Documented workflows and version control",
                "SLA-driven delivery and support",
                "Transparent communication and reporting",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    scale: 1.02,
                    y: -3,
                    backgroundColor: "rgba(15, 79, 63, 0.04)",
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="flex items-center gap-4 p-4 sm:p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#0F4F3F]/30 shadow-sm hover:shadow-md"
                >
                  <motion.div
                    whileHover={{ rotate: 8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ShieldCheck className="text-[#0F4F3F] w-6 h-6" />
                  </motion.div>
                  <span className="font-semibold text-base sm:text-lg text-gray-800">{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side (WHY OUR MODEL WORKS) */}
          <motion.div
            {...fadeUp}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 25px 60px rgba(15, 79, 63, 0.35)",
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative bg-[#0F4F3F] group p-8 sm:p-10 md:p-14 rounded-[2rem] sm:rounded-[3rem] text-white shadow-2xl overflow-hidden"
          >

            {/* Gradient Sheen Sweep */}
            <motion.div
              initial={{ x: "-150%" }}
              whileHover={{ x: "150%" }}
              transition={{ duration: 1, repeat: Infinity }}
              className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white/10 to-transparent skew-x-12"
            />

            <h3 className="text-2xl sm:text-3xl font-black mb-8 sm:mb-10 uppercase tracking-wide relative z-10">
              Why Our Model Works
            </h3>

            <div className="space-y-5 sm:space-y-6 relative z-10">
              {[
                "Clear alignment between business and technology",
                "Reduced risk and rework",
                "Predictable timelines and outcomes",
                "Consistent quality across all services",
                "Scalable solutions supporting growth",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start gap-3 sm:gap-4"
                >
                  <motion.div
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    className="mt-1 bg-white/90 rounded-full p-1"
                  >
                    <CheckCircle2 className="text-[#0F4F3F] w-4 h-4" />
                  </motion.div>
                  <p className="text-base sm:text-lg font-medium text-emerald-50">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


      {/* CTA */}
      <section className="snap-start min-h-[70vh] md:min-h-screen flex flex-col justify-center text-center bg-white px-6">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-6">
          READY TO BUILD WITH CONFIDENCE?
        </h2>
        <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
          Let’s turn structured execution into business results — predictably and at scale.
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="/contact"
          className="bg-[#0F4F3F] text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full font-bold sm:font-black text-lg sm:text-xl shadow-xl hover:bg-black transition self-center"
        >
          Start a Consultation
        </motion.a>
        <div className="h-20" />
      </section>
    </main>
  );
}
