"use client";

import React, { ReactNode, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";

import {
  CheckCircle,
  Users,
  Briefcase,
  GraduationCap,
  Code,
  BookOpen,
  FileText,
  Award,
  HeartPulse,
  Cloud,
} from "lucide-react";

// CONFIG
const PRIMARY_COLOR = "#0F4F3F";
const SECONDARY_BG = "#F7F8FA";
const ACCENT_COLOR = "#FFC72C";

// -------------------------
// TRAINING CONTENT (UPDATED)
// -------------------------
const TrainingContent = () => {
  // Intro paragraph
  const introText =
    "At CODE IT, our training programs are designed to build strong technical foundations while preparing students for real-world industry environments. We focus on practical learning, hands-on projects, modern technologies, and placement-oriented skill development. Our mission is to transform every learner into a confident, job-ready professional.";

  // Core Programming
  const coreProgrammingDetails = [
    { title: "C & C++", icon: <Code size={24} />, description: "Master procedural & OOP programming." },
    { title: "Java Development", icon: <Code size={24} />, description: "Complete Java training for enterprise apps." },
    { title: "Python & Data Languages", icon: <Code size={24} />, description: "Python + R training for analytics & automation." },
    { title: "PHP", icon: <Code size={24} />, description: "Backend development using PHP." },
    { title: "SQL & Databases", icon: <Code size={24} />, description: "MySQL, PostgreSQL, DB modeling & optimization." },
    { title: "JavaScript", icon: <Code size={24} />, description: "Modern JS, ES6+, DOM & async programming." },
    { title: "Ruby", icon: <Code size={24} />, description: "Backend scripting fundamentals." },
    { title: "Swift", icon: <Code size={24} />, description: "iOS app development basics." },
    { title: "Go (Golang)", icon: <Code size={24} />, description: "High-performance backend programming." },
  ];

  // Advanced Courses
  const advancedCourses = [
    {
      icon: <GraduationCap size={32} />,
      title: "Advanced IT & Full Stack Development",
      description: "Master full-stack frameworks and industry workflows.",
      skills: [
        "Full Stack Java Development",
        "Full Stack ASP.NET Development",
        "Full Stack Python Development",
        "Full Stack Web Development",
        "MEAN / MERN Stack",
        "Android App Development",
        "Software Testing & QA",
        "Business Analytics",
        "Data Analytics",
        "System Design Basics",
      ],
    },
    {
      icon: <Cloud size={32} />,
      title: "Trending & Future-Ready Technologies",
      description: "Build expertise in modern and emerging tech domains.",
      skills: [
        "Artificial Intelligence",
        "Machine Learning",
        "Cybersecurity",
        "Blockchain",
        "IoT",
        "DevOps",
        "Cloud Computing (AWS / Azure / GCP)",
        "AR / VR Development",
        "Big Data",
      ],
    },
    {
      icon: <HeartPulse size={32} />,
      title: "Healthcare & Life Science IT",
      description: "Industry-ready professional healthcare technology training.",
      skills: [
        "Medical Coding",
        "Pharmacovigilance",
        "SAS Programming",
        "Clinical Research",
        "Health Informatics",
        "Bioinformatics",
        "Pharma Analytics",
      ],
    },
  ];

  // Additional Skills
  const additionalSkills = [
    "Data Structures & Algorithms",
    "Git & GitHub Version Control",
    "Linux Commands & Shell Scripting",
    "REST API Fundamentals",
    "Debugging & Optimization",
    "Microservices Basics",
    "CI/CD Foundations",
    "Soft Skills & Communication",
    "Mock Interviews & Resume Building",
    "Live Industry Projects",
  ];

  // Internship Programs
  const internships = [
    "Artificial Intelligence & Machine Learning (AI/ML)",
    "Data Science",
    "Full Stack Development (Java / Python / PHP / .NET)",
    "Cyber Security",
    "Cloud Computing (AWS / Azure / GCP)",
    "SAP – FICO, MM, HR, ABAP, Basis",
  ];

  const internshipBenefits = [
    "Hands-on training with real industry projects",
    "Guidance from industry professionals",
    "Build job-ready skills",
    "Certification after completion",
    "Placement Assistance",
    "Portfolio & resume building",
    "Team-based project experience",
  ];

  // Placed Students
  const students = [
    { name: "Amit Sharma", role: "Java Developer", company: "TCS", package: "4.5 LPA" },
    { name: "Priya Nair", role: "Python Developer", company: "Accenture", package: "5 LPA" },
    { name: "Rohit Verma", role: "Full Stack Developer", company: "Sutherland", package: "4 LPA" },
    { name: "Sneha Patel", role: "Tester", company: "Tech Mahindra", package: "3.6 LPA" },
  ];

  return (
    <motion.div className="space-y-16 pt-10">
      {/* INTRO TEXT */}
      <p className="text-lg text-gray-700 max-w-4xl mx-auto text-center">{introText}</p>

      {/* CORE PROGRAMMING */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8" style={{ color: PRIMARY_COLOR }}>
          Core Programming & Foundations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreProgrammingDetails.map((item) => (
            <div key={item.title} className="p-5 rounded-xl border shadow bg-white">
              <div className="flex items-center gap-3 mb-3" style={{ color: PRIMARY_COLOR }}>
                {item.icon}
                <h3 className="text-xl font-bold">{item.title}</h3>
              </div>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <hr />

      {/* ADVANCED COURSES */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8" style={{ color: PRIMARY_COLOR }}>
          Advanced & Specialized Courses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advancedCourses.map((course) => (
            <div key={course.title} className="p-5 rounded-xl border shadow bg-white">
              <div className="flex items-center gap-3 mb-3" style={{ color: PRIMARY_COLOR }}>
                {course.icon}
                <h3 className="text-xl font-bold">{course.title}</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">{course.description}</p>

              <ul className="space-y-1">
                {course.skills.map((s) => (
                  <li key={s} className="flex items-start text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 mt-1 mr-2" style={{ color: ACCENT_COLOR }} />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <hr />

      {/* ADDITIONAL SKILLS */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8" style={{ color: PRIMARY_COLOR }}>
          Additional Skills You Will Learn
        </h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {additionalSkills.map((skill) => (
            <p key={skill} className="flex items-start gap-2 text-gray-700">
              <CheckCircle className="w-5 h-5 mt-1" style={{ color: ACCENT_COLOR }} />
              {skill}
            </p>
          ))}
        </div>
      </section>

      <hr />

      {/* INTERNSHIP PROGRAMS */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8" style={{ color: PRIMARY_COLOR }}>
          Internship Programs
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
          {internships.map((it) => (
            <p key={it} className="flex items-start gap-2 text-gray-700">
              <CheckCircle className="w-5 h-5 mt-1" style={{ color: PRIMARY_COLOR }} />
              {it}
            </p>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-center mt-12 mb-6" style={{ color: PRIMARY_COLOR }}>
          Internship Benefits
        </h3>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
          {internshipBenefits.map((b) => (
            <p key={b} className="flex items-start gap-2 text-gray-700">
              <CheckCircle className="w-5 h-5 mt-1" style={{ color: ACCENT_COLOR }} />
              {b}
            </p>
          ))}
        </div>
      </section>

      <hr />

      {/* PLACED STUDENTS */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: PRIMARY_COLOR }}>
          Our Successfully Placed Students
        </h2>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
          {students.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="p-6 text-center bg-white shadow rounded-xl border-b-4"
              style={{ borderColor: PRIMARY_COLOR }}
            >
              <h3 className="text-xl font-bold" style={{ color: PRIMARY_COLOR }}>{s.name}</h3>
              <p className="text-gray-600 mt-2">{s.role}</p>
              <p className="text-gray-700 font-semibold">{s.company}</p>
              <p className="text-green-600 font-bold mt-2">{s.package}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <hr />

      {/* ⭐ ADDED HERE ⭐ WHY COMPANIES HIRE FROM CODE IT */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: PRIMARY_COLOR }}>
          Why Companies Hire From CODE IT
        </h2>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
          {[
            { icon: Award, text: "Industry-Ready Skills" },
            { icon: CheckCircle, text: "Project-Based Training" },
            { icon: Users, text: "Soft Skills & Interview Prep" },
            { icon: Briefcase, text: "Dedicated Placement Assistance" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="p-6 rounded-xl shadow bg-white text-center border-b-4"
              style={{ borderColor: PRIMARY_COLOR }}
            >
              <item.icon className="w-12 h-12 mx-auto mb-4" style={{ color: PRIMARY_COLOR }} />
              <p className="text-lg font-semibold text-gray-700">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

// -------------------------
// RECRUITMENT CONTENT (UPDATED - REMOVED WHY HIRE)
// -------------------------
const RecruitmentContent = () => {
  const partners = [
    { name: "Accenture", logo: "/images/companies/accenture.png" },
    { name: "TCS", logo: "/images/companies/tcs.png" },
    { name: "Tech Mahindra", logo: "/images/companies/tech-mahindra.png" },
    { name: "Sutherland", logo: "/images/companies/sutherland.png" },
    { name: "Infosys", logo: "/images/companies/infosys.jpg" },
    { name: "Zensar", logo: "/images/companies/zensar.png" },
    { name: "Kudzu Infotech", logo: "/images/companies/kudzo.png", url: "https://www.kudzuinfotech.com/en/" },
    { name: "Bpointers", logo: "/images/companies/bpointers.png" },
    { name: "Pisyst India", logo: "/images/companies/pisyst-india-pvt-ltd.png" },
    { name: "Sumasoft", logo: "/images/companies/sumasoft.png" },
    { name: "SynITelligence", logo: "/images/companies/syntelligence-tech-pune.png" },
  ];

  return (
    <motion.div className="space-y-16 pt-10">

      {/* ⭐ HERO SECTION ADDED TO RECRUITMENT TAB ⭐ */}
      <Hero />

      {/* HIRING PARTNERS */}
      <section style={{ backgroundColor: SECONDARY_BG }} className="py-10">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: PRIMARY_COLOR }}>
          Our Hiring Partners
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 px-6">
          {partners.map((partner, index) => (
            <motion.a
              key={index}
              href={partner.url || "#"}
              target={partner.url ? "_blank" : undefined}
              className="p-4 bg-white rounded-xl shadow flex flex-col items-center"
            >
              <img src={partner.logo} alt={partner.name} className="w-20 h-20 object-contain mb-3" />
              <p className="text-md font-semibold text-gray-700 text-center">{partner.name}</p>
            </motion.a>
          ))}
        </div>
      </section>

    </motion.div>
  );
};


// -------------------------
// MAIN PAGE
// -------------------------
export default function ServicesPage() {
  const [activeService, setActiveService] = useState<"training" | "recruitment">("training");

  const NavItem = ({ id, label, icon, isActive, onClick }: any) => (
    <button
      className={`flex-1 flex items-center justify-center p-5 rounded-t-lg transition-all ${
        isActive ? "text-white font-bold border-b-4" : "text-gray-300"
      }`}
      style={{
        borderColor: isActive ? ACCENT_COLOR : "transparent",
        backgroundColor: isActive ? PRIMARY_COLOR : PRIMARY_COLOR + "E0",
      }}
      onClick={onClick}
    >
      <span className="mr-3">{icon}</span>
      <span className="text-lg">{label}</span>
    </button>
  );

  return (
    <div className="bg-white min-h-screen">
      {/* TAB SWITCHER */}
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="flex justify-center rounded-lg overflow-hidden shadow-lg mb-12"
            style={{ backgroundColor: PRIMARY_COLOR }}
          >
            <NavItem
              id="training"
              label="Training & Placements"
              icon={<BookOpen className="w-6 h-6" />}
              isActive={activeService === "training"}
              onClick={() => setActiveService("training")}
            />
            <NavItem
              id="recruitment"
              label="Recruitment"
              icon={<FileText className="w-6 h-6" />}
              isActive={activeService === "recruitment"}
              onClick={() => setActiveService("recruitment")}
            />
          </div>

          <AnimatePresence mode="wait">
            {activeService === "training" && <TrainingContent />}
            {activeService === "recruitment" && <RecruitmentContent />}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <motion.section className="py-20 text-white" style={{ backgroundColor: PRIMARY_COLOR }}>
        <div className="max-w-7xl mx-auto text-center px-6">
          <h2 className="text-3xl font-extrabold">Ready to Shape Your Future in Tech?</h2>
          <p className="mt-4 text-lg opacity-90">
            Contact CODE IT today for admission, placement queries, or corporate collaboration.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-white px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:scale-105"
            style={{ color: PRIMARY_COLOR }}
          >
            Contact Our Experts
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
