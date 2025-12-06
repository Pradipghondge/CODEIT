"use client";

import {
  ArrowLeft,
  BarChart3,
  Briefcase,
  CheckCircle,
  ChevronRight,
  Cloud,
  Code,
  Cpu,
  GraduationCap,
  HeartPulse,
  Shield,
  Users,
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
      staggerChildren: 0.1,
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

// --- Reusable Section Component ---
const Section = ({ children }: { children: React.ReactNode }) => (
  <motion.section variants={itemVariants}>{children}</motion.section>
);

export default function HireFromCodeITPage() {
  const PRIMARY_COLOR = "#0F4F3F";
  const SECONDARY_BG = "#F7F8FA";

  const valuePropositions = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Industry-Aligned Curriculum",
      description: "Our candidates are trained on a curriculum designed to bridge the gap between academia and industry demands.",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Hands-On Experience",
      description: "Students work on real-world projects, ensuring they are productive from day one.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Diverse Talent Pool",
      description: "From Core Programming to niche skills like Medical Coding and SAP FICO.",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Pre-Vetted Candidates",
      description: "Standardized assessments save your time in initial screening, providing job-ready talent.",
    },
  ];

  const talentPools = [
    {
      icon: <Code size={32} />,
      title: "Software Development & Web",
      skills: ["Full Stack: Java, Python, ASP.NET", "MEAN/MERN Specialization", "Android + Flutter", "Core: C, C++, PHP, SQL, Go, Swift"],
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Data Science & Analytics",
      skills: ["Data Science & AI: Python, R, ML, DL", "Power BI + Advanced Excel", "Big Data: Hadoop, Spark, AWS/GCP"],
    },
    {
      icon: <Cloud size={32} />,
      title: "Cloud, Security & Enterprise",
      skills: ["Cyber Security: Ethical Hacking, Pen-testing", "Cloud: AWS, Azure, GCP, Docker, Kubernetes", "SAP FICO: GL, AP/AR, GST, Asset Accounting"],
    },
    {
      icon: <HeartPulse size={32} />,
      title: "Specialized Healthcare IT",
      skills: ["Clinical Data Management, Pharmacovigilance", "Medical Coding, Health Informatics", "Bioinformatics, SAS"],
    },
    {
      icon: <Cpu size={32} />,
      title: "Engineering & Automation",
      skills: ["Robotics Programming", "Sensor Integration", "Industrial Automation (via JSPM partnership)"],
    },
  ];

  const methodologySteps = [
    {
      title: "Project-Based Learning",
      description: "Candidates build capstone projects that solve real-world problems, ensuring practical expertise.",
    },
    {
      title: "Soft Skills & Professional Growth",
      description: "We focus on communication, teamwork, and problem-solving to create well-rounded professionals.",
    },
    {
      title: "Corporate Collaboration",
      description: "Partnerships with JSPM, PDEA, and others provide access to a broad and continuous talent pipeline.",
    },
  ];

  const trustedBy = [
    { name: "Accenture", logo: "/logos/accenture.png" },
    { name: "Tech Mahindra", logo: "/logos/tech-mahindra.png" },
    { name: "TCS", logo: "/logos/tcs.png" },
    { name: "Zensar", logo: "/logos/zensar.png" },
    { name: "SumaSoft", logo: "/logos/sumasoft.png" },
    { name: "Syntelligence Tech", logo: "/logos/syntelligence.png" },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <motion.section
        className="py-20 sm:py-24 relative overflow-hidden"
        style={{ backgroundColor: SECONDARY_BG }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* <div
          className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)]"
          style={{
            // @ts-ignore
            "--grid-color": "rgba(15, 79, 63, 0.05)",
            "--grid-size": "30px",
            backgroundSize: "var(--grid-size) var(--grid-size)",
            backgroundImage: "linear-gradient(to right, var(--grid-color) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)",
          }}
        ></div> */}
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
            Hire Skilled Talent from CODEIT
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl leading-relaxed">
            Access a pipeline of pre-vetted, project-trained professionals ready to contribute from day one.
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
        {/* SECTION 1 — Why Hire From ? */}
        <Section>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12" style={{ color: PRIMARY_COLOR }}>
            Why Hire From CODEIT?
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
        </Section>

        {/* SECTION 2 — Our Talent Pool Segments */}
        <Section>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12" style={{ color: PRIMARY_COLOR }}>
            Our Talent Pool Segments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {talentPools.map((pool) => (
              <div key={pool.title} className="p-8 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0" style={{ color: PRIMARY_COLOR }}>{pool.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">{pool.title}</h3>
                </div>
                <ul className="space-y-2 pl-2">
                  {pool.skills.map((skill) => (
                    <li key={skill} className="flex items-start">
                      <CheckCircle className="w-4 h-4 mt-1 mr-2 flex-shrink-0" style={{ color: PRIMARY_COLOR }} />
                      <span className="text-gray-600">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* SECTION 3 — Our Training Methodology */}
        <Section>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12" style={{ color: PRIMARY_COLOR }}>
            Our Training Methodology
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {methodologySteps.map((step, index) => (
              <motion.div key={step.title} variants={itemVariants} className="flex flex-col items-center">
                <div className="relative w-24 h-24 rounded-full flex items-center justify-center border-2 bg-white" style={{ borderColor: PRIMARY_COLOR }}>
                  <div className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold" style={{ backgroundColor: SECONDARY_BG, color: PRIMARY_COLOR }}>
                    {index + 1}
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* SECTION 4 — Our Placement Track Record */}
        <Section>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: PRIMARY_COLOR }}>
              Our Placement Track Record
            </h2>
            <p className="mt-4 text-lg max-w-3xl mx-auto text-gray-600">
              We have a proven history of placing our candidates in key roles such as <span className="font-semibold text-gray-700">Android Developer</span>, <span className="font-semibold text-gray-700">Data Analyst</span>, and <span className="font-semibold text-gray-700">Full Stack Developer</span> at competitive packages.
            </p>
          </div>
          <div className="mt-12 max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-10 items-center">
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
                  className="mx-auto h-12 object-contain grayscale opacity-80 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                />
              </motion.div>
            ))}
          </div>
        </Section>
      </motion.div>

      {/* CTA SECTION */}
      <motion.section
        className="py-20"
        style={{ backgroundColor: SECONDARY_BG }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Shield className="w-16 h-16 mx-auto mb-4" style={{ color: PRIMARY_COLOR }} />
          <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: PRIMARY_COLOR }}>
            Start Hiring Today
          </h2>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-gray-600">
            Ready to find the perfect candidate? Connect with us to access our talent pool and streamline your hiring process.
          </p>
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