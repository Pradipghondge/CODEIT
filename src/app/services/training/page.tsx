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
import React from "react";

// --- Configuration ---
const PRIMARY_COLOR = "#0F4F3F"; // Deep Green
const SECONDARY_BG = "#F7F8FA"; // Light Gray Background
const ACCENT_COLOR = "#FFC72C"; // Gold/Yellow accent

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 15, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 90,
    },
  },
};

// --- Reusable Section Component ---
const Section = ({ children }: { children: React.ReactNode }) => (
  <motion.section variants={itemVariants}>{children}</motion.section>
);

export default function ComprehensiveTrainingPage() {
  const PRIMARY_COLOR = "#0F4F3F";
  const SECONDARY_BG = "#F7F8FA";

  // --- Data: Core Programming ---
  const coreProgrammingDetails = [
    {
      title: "C & C++",
      icon: <Code size={24} />,
      description: "Foundational mastery in procedural and object-oriented programming.",
    },
    {
      title: "Java Development",
      icon: <Code size={24} />,
      description:
        "Comprehensive training in Java for enterprise and full-stack development, covering core concepts and advanced features.",
    },
    {
      title: "Python & Data Languages",
      icon: <Code size={24} />,
      description:
        "Master Python for scripting, web, and data analysis, alongside R for statistical computing.",
    },
    {
      title: "Web & Scripting",
      icon: <Code size={24} />,
      description: "Training in PHP, JavaScript, and Ruby for web development and backend engineering.",
    },
    {
      title: "Database & Modern Languages",
      icon: <Code size={24} />,
      description:
        "SQL mastery for database management, plus modern languages like Swift (iOS) and Go (Golang).",
    },
    {
      title: "C# & Other Languages",
      icon: <Code size={24} />,
      description:
        "Advanced training in C# (for .NET/enterprise), Swift (iOS), and Go (Golang).",
    },
  ];

  // --- Data: Advanced & Trending Courses ---
  const advancedCourses = [
    {
      icon: <GraduationCap size={32} />,
      title: "Advanced IT & Full Stack Development",
      description: "Master modern development frameworks and software specialization for job readiness.",
      skills: [
        "Full Stack Java, Asp.net, Python, and Web Development",
        "MEAN / MERN Stack Development",
        "Android App Development",
        "Software Testing",
        "Business Analytics, Data Analytics, Advanced Excel",
      ],
    },
    {
      icon: <Cloud size={32} />,
      title: "Trending & Future-Ready Technologies",
      description: "Get certified in cutting-edge domains like AI, Blockchain, and cloud infrastructure.",
      skills: [
        "Artificial Intelligence (AI) & Machine Learning (ML)",
        "Cybersecurity and Ethical Hacking",
        "Blockchain Development",
        "DevOps and Cloud-Native Architectures",
        "Cloud Computing",
        "Big Data & Advanced Analytics",
        "Internet of Things (IoT)",
        "AR/VR Development, Quantum Computing Basics",
      ],
    },
    {
      icon: <HeartPulse size={32} />,
      title: "Specialized Training & Healthcare IT",
      description: "Niche training for the pharmaceutical and healthcare technology sectors.",
      skills: [
        "Medical Coding",
        "Pharmacovigilance, SAS, Clinical research",
        "Health Informatics, Clinical Data Management",
        "Pharmaceutical Data Analytics, Healthcare Software Development",
        "Data Entry Operator, Bioinformatics",
      ],
    },
  ];

  // --- Data: Methodology ---
  const methodologySteps = [
    {
      icon: <GraduationCap size={32} />,
      title: "Industry-Aligned Curriculum",
      description:
        "Bridging the gap between academia and industry with relevant, updated courses.",
    },
    {
      icon: <Code size={32} />,
      title: "Hands-on Training & Projects",
      description:
        "Hands-on training and real-world projects ensure deep practical understanding.",
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Training and Certification",
      description:
        "Assessments and certifications validate skills and boost employability.",
    },
   
    
  ];

  // --- Data: Universities ---
  const universityPartners = [
    "Angel College of Pharmacy, Hadapsar",
    "Jayawantrao Sawant Group (Handewadi & Hadapsar)",
    "PDEA Colleges (Manjari & Pune)",
    "Dr. Jadhavar College, Narhe",
    "Padmashree Desai College, Urli Kanchan",
    "Krishna College of Pharmacy, Karad",
    "Mahadev Kanchan College, Urli Kanchan",
    "Annasaheb Magar College of Engineering, Hadapsar",
    "Prithviraj Kapoor Memorial High School, Loni Kalbhor",
  ];

  const ClickableCard = ({ children, className }: any) => (
    <Link href="/contact" passHref className={className}>
      {children}
    </Link>
  );

  return (
    <div className="bg-white min-h-screen">

      {/* HERO SECTION */}
      <motion.section
        className="py-14 sm:py-16 relative overflow-hidden"
        style={{ backgroundColor: SECONDARY_BG }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="max-w-7xl mx-auto px-6">

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold hover:underline mb-6"
            style={{ color: PRIMARY_COLOR }}
          >
            <ArrowLeft size={16} />
            Back to Services
          </Link>

          <div className="text-center">
            <h1
              className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold"
              style={{ color: PRIMARY_COLOR }}
            >
              IT Courses & Skill Development
            </h1>
            <p className="mt-4 text-lg sm:text-xl max-w-3xl mx-auto text-gray-700">
              Industry-focused IT training with hands-on learning and career-oriented development.
            </p>
          </div>
        </div>
      </motion.section>

      {/* MAIN CONTENT */}
      <motion.div
        className="max-w-7xl mx-auto px-6 py-12 sm:py-14 space-y-16 sm:space-y-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        {/* SECTION 1 */}
        <Section>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8" style={{ color: PRIMARY_COLOR }}>
            Core Programming & Foundations
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600 text-center mb-8">
            Strong foundation in programming and databases for a successful tech career.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreProgrammingDetails.slice(0, 3).map((item) => (
              <ClickableCard key={item.title} className="block group">
                <div className="p-5 rounded-xl border border-gray-200 bg-white shadow group-hover:shadow-lg group-hover:scale-[1.02] transition">
                  <div className="flex items-center gap-3 mb-3" style={{ color: PRIMARY_COLOR }}>
                    {item.icon}
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </ClickableCard>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {coreProgrammingDetails.slice(3).map((item) => (
              <ClickableCard key={item.title} className="block group">
                <div className="p-5 rounded-xl border border-gray-200 bg-white shadow group-hover:shadow-lg group-hover:scale-[1.02] transition">
                  <div className="flex items-center gap-3 mb-3" style={{ color: PRIMARY_COLOR }}>
                    {item.icon}
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </ClickableCard>
            ))}
          </div>
        </Section>

        <hr className="border-gray-300" />

        {/* SECTION 2 */}
        <Section>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8" style={{ color: PRIMARY_COLOR }}>
            Advanced & Specialized Course Categories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advancedCourses.map((pool) => (
              <ClickableCard key={pool.title} className="block group">
                <div className="p-5 rounded-xl border border-gray-200 bg-white shadow group-hover:shadow-lg group-hover:scale-[1.02] transition">
                  <div className="flex items-center gap-3 mb-3" style={{ color: PRIMARY_COLOR }}>
                    {pool.icon}
                    <h3 className="text-xl font-bold">{pool.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{pool.description}</p>
                  <ul className="space-y-1">
                    {pool.skills.map((skill) => (
                      <li key={skill} className="flex items-start">
                        <CheckCircle className="w-4 h-4 mt-1 mr-2" style={{ color: ACCENT_COLOR }} />
                        <span className="text-gray-700 text-sm">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ClickableCard>
            ))}
          </div>
        </Section>

        <hr className="border-gray-300" />

        {/* SECTION 3 */}
        <Section>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8" style={{ color: PRIMARY_COLOR }}>
            Training Methodology & Key Factors
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {methodologySteps.slice(0, 3).map((step) => (
              <ClickableCard key={step.title} className="block group">
                <div className="p-5 rounded-xl bg-gray-100 shadow-sm group-hover:shadow-lg group-hover:scale-[1.02] transition">
                  <div className="inline-block p-3 rounded-full mb-3" style={{ backgroundColor: PRIMARY_COLOR, color: "white" }}>
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </ClickableCard>
            ))}
          </div>

          <div className="max-w-5xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {methodologySteps.slice(3).map((step) => (
              <ClickableCard key={step.title} className="block group">
                <div className="p-5 rounded-xl bg-gray-100 shadow-sm group-hover:shadow-lg group-hover:scale-[1.02] transition">
                  <div className="flex items-center gap-3 mb-3" style={{ color: PRIMARY_COLOR }}>
                    {step.icon}
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </ClickableCard>
            ))}
          </div>
        </Section>

        <hr className="border-gray-300" />

        {/* SECTION 4 */}
        <Section>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8" style={{ color: PRIMARY_COLOR }}>
            Colleges & University Partners
          </h2>

          <p className="text-lg max-w-3xl mx-auto text-gray-600 text-center mb-8">
            Collaborating with institutions to bring real-world learning experiences to students.
          </p>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
            {universityPartners.map((partner) => (
              <p key={partner} className="text-gray-700 flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-1" style={{ color: PRIMARY_COLOR }} />
                <span className="text-base">{partner}</span>
              </p>
            ))}
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-3" style={{ color: PRIMARY_COLOR }}>
              Leadership & Vision
            </h3>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              Founded in <strong>Rajasthan in 2021</strong>, guided by CTO <strong>Preeti Kalra</strong>, CODE IT is committed to delivering high-quality technical and professional education.
            </p>
          </div>
        </Section>
      </motion.div>

      {/* CTA */}
      <motion.section
        className="py-14"
        style={{ backgroundColor: PRIMARY_COLOR }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Shield className="w-16 h-16 mx-auto mb-4" style={{ color: SECONDARY_BG }} />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Ready to Begin Your IT Journey?
          </h2>
          <p className="mt-3 text-lg text-white opacity-90">
            Contact us for course schedules, admission, and placement support.
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 bg-white px-8 py-4 rounded-full font-semibold text-lg shadow hover:scale-105 transition"
            style={{ color: PRIMARY_COLOR }}
          >
            Contact Admissions
            <ChevronRight size={20} />
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
