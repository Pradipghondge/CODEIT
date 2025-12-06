"use client";

import {
  ArrowLeft,
  ChevronRight,
  CheckCircle,
  Code,
  HeartPulse,
  BarChart3,
  Users,
  Briefcase,
  School,
  Search,
  FileText,
  Handshake,
  UserCheck,
} from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import React from "react";

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function RecruitmentDetailsPage() {
  // --- Brand Colors ---
  const PRIMARY_COLOR = "#0F4F3F";
  const SECONDARY_BG = "#F7F8FA";

  const valuePropositions = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Pre-Screened & Vetted Candidates",
      description: "Unlike general job boards, our trained candidates are skill assessed and job-ready.",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Zero Training Overheads",
      description: "Deploy-ready professionals trained on hands-on real projects.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Fast Hiring Cycles",
      description: "Reduce time-to-hire with our ready candidate network.",
    },
    {
      icon: <School className="w-6 h-6" />,
      title: "Diverse Talent Pool",
      description: "IT, Data Science, Healthcare IT — strong hiring pipeline.",
    },
  ];

  const expertiseAreas = [
    {
      icon: <Code size={32} />,
      title: "Core & Advanced IT Recruitment",
      skills: ["Full Stack: Java, Python, .NET, MEAN/MERN", "Mobile & Web: Android, PHP, JavaScript", "Emerging Tech: AI, ML, Blockchain, Cloud"],
    },
    {
      icon: <HeartPulse size={32} />,
      title: "Specialized Niche Hiring",
      subtitle: "(Healthcare & Pharma)",
      skills: ["Clinical Research, Clinical Data Management, Pharmacovigilance", "Medical Coding, SAS, Bioinformatics"],
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Data & Analytics",
      skills: ["Data Science", "Business Analytics", "Advanced Excel"],
    },
  ];

  const hiringModels = ["Campus/Fresher Hiring", "Lateral Hiring", "Contract-to-Hire"];

  const processSteps = [
    { icon: <Search />, name: "Requirement Analysis" },
    { icon: <FileText />, name: "Sourcing & Screening" },
    { icon: <Users />, name: "Interview Coordination" },
    { icon: <UserCheck />, name: "Final Selection & Onboarding" },
  ];

  const trustedBy = [
    { name: "Accenture", logo: "/logos/accenture.png" },
    { name: "Tech Mahindra", logo: "/logos/tech-mahindra.png" },
    { name: "TCS", logo: "/logos/tcs.png" },
    { name: "Zensar", logo: "/logos/zensar.png" },
    { name: "Sutherland", logo: "/logos/sutherland.png" },
    { name: "Sumasoft", logo: "/logos/sumasoft.png" },
    { name: "Syntelligence Tech", logo: "/logos/syntelligence.png" },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <motion.section
        className="py-20 sm:py-24"
        style={{ backgroundColor: SECONDARY_BG }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
            style={{ color: PRIMARY_COLOR }}
          >
            <ArrowLeft size={16} />
            Back to Services
          </Link>

          <h1
            className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold"
            style={{ color: PRIMARY_COLOR }}
          >
            Recruitment Solutions
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl leading-relaxed">
            Fast, reliable and industry-focused hiring for modern businesses.
          </p>
        </div>
      </motion.section>

      {/* MAIN CONTENT */}
      <motion.div
        className="max-w-7xl mx-auto px-6 py-16 sm:py-24 space-y-20 sm:space-y-28"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* SECTION 1 — Our Value Proposition */}
        <motion.section variants={itemVariants}>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12" style={{ color: PRIMARY_COLOR }}>
            Why Choose CODEIT?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valuePropositions.map((item) => (
              <div key={item.title} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="inline-block p-4 rounded-full bg-gray-100 mb-4" style={{ color: PRIMARY_COLOR }}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* SECTION 2 — Our Recruitment Expertise */}
        <motion.section variants={itemVariants}>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12" style={{ color: PRIMARY_COLOR }}>
            Our Recruitment Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertiseAreas.map((area) => (
              <div key={area.title} className="p-8 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0" style={{ color: PRIMARY_COLOR }}>{area.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{area.title}</h3>
                    {area.subtitle && <p className="text-sm text-gray-500">{area.subtitle}</p>}
                  </div>
                </div>
                <ul className="space-y-2 pl-2">
                  {area.skills.map((skill) => (
                    <li key={skill} className="flex items-start">
                      <CheckCircle className="w-4 h-4 mt-1 mr-2 flex-shrink-0" style={{ color: PRIMARY_COLOR }} />
                      <span className="text-gray-600">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* SECTION 3 — Hiring Models We Support */}
        <motion.section variants={itemVariants} className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8" style={{ color: PRIMARY_COLOR }}>
            Hiring Models We Support
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
            {hiringModels.map((model, index) => (
              <React.Fragment key={model}>
                <div className="bg-gray-100 rounded-full px-6 py-3">
                  <p className="font-semibold text-lg" style={{ color: PRIMARY_COLOR }}>{model}</p>
                </div>
                {index < hiringModels.length - 1 && <div className="hidden sm:block text-gray-300 text-2xl">&rarr;</div>}
              </React.Fragment>
            ))}
          </div>
        </motion.section>

        {/* SECTION 4 — Our Process */}
        <motion.section variants={itemVariants}>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12" style={{ color: PRIMARY_COLOR }}>
            Our Process
          </h2>
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center relative">
              {processSteps.map((step, index) => (
                <motion.div key={step.name} variants={itemVariants} className="flex flex-col items-center">
                  <div className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center border-2 bg-white" style={{ borderColor: PRIMARY_COLOR }}>
                    <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: SECONDARY_BG, color: PRIMARY_COLOR }}>
                      {step.icon}
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm font-bold text-gray-500">STEP {index + 1}</p>
                    <h3 className="text-lg font-semibold text-gray-800">{step.name}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* SECTION 5 — Trusted By Industry Leaders */}
        <motion.section variants={itemVariants} className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8" style={{ color: PRIMARY_COLOR }}>
            Trusted By Industry Leaders
          </h2>
          <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-x-8 gap-y-10 sm:gap-x-12 sm:gap-y-12 items-center">
            {trustedBy.map((company) => (
              <motion.div
                key={company.name}
                variants={itemVariants}
                className="text-center transition-transform duration-300 hover:scale-105 group"
              >
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={140}
                  height={70}
                  className="mx-auto h-14 object-contain grayscale opacity-80 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                />
                <p className="mt-3 text-sm font-medium text-gray-600 transition-colors duration-300 group-hover:text-gray-900">
                  {company.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </motion.div>

      {/* CTA SECTION */}
      <motion.section
        className="py-20"
        style={{ backgroundColor: SECONDARY_BG }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: PRIMARY_COLOR }}>
            Ready to Find Your Next Hire?
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg 
            hover:shadow-xl transition hover:scale-105"
            style={{ color: PRIMARY_COLOR }}
          >
            Contact Us
            <ChevronRight size={20} />
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
