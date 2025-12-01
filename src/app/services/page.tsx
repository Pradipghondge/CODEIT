"use client";

import { CheckCircle, Users, Headset, Briefcase, GraduationCap } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { motion } from "framer-motion";

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
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

const iconCardVariants = {
  hover: {
    scale: 1.03,
    boxShadow: "0 10px 15px -3px rgba(15, 79, 63, 0.1), 0 4px 6px -2px rgba(15, 79, 63, 0.05)",
  },
};

// 🟢 Required type fix for children
interface ServiceBlockProps {
  children: ReactNode[];
  reverse?: boolean;
}

export default function ServicesPage() {
  const PRIMARY_COLOR = "#0F4F3F"; // Dark Green
  const SECONDARY_BG = "#F7F8FA"; // Light Gray Background

  // --- Utility Component for Service Blocks ---
  const ServiceBlock = ({ children, reverse = false }: ServiceBlockProps) => (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {reverse ? (
        <>
          <div className="flex justify-center order-last lg:order-first">
            {children[0]}
          </div>
          <div>{children[1]}</div>
        </>
      ) : (
        <>
          <div>{children[1]}</div>
          <div className="flex justify-center">{children[0]}</div>
        </>
      )}
    </motion.div>
  );

  return (
    <div className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <motion.section
        className={`py-20 sm:py-28 ${SECONDARY_BG}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[${PRIMARY_COLOR}]`}>
            <span className="block animate-fade-in">Our Professional Services</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Code IT Pvt. Ltd. delivers professional IT outsourcing, reliable application support,
            and result-driven recruitment solutions to help businesses scale efficiently and operate seamlessly.
          </p>
        </div>
      </motion.section>

      {/* SERVICES GRID */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-24 sm:space-y-32">

          {/* 1. IT OUTSOURCING SECTION */}
          <ServiceBlock>
            <motion.div
              className={`p-10 rounded-2xl bg-[${SECONDARY_BG}] shadow-xl hover:shadow-2xl transition-shadow w-full max-w-md text-center border-b-4 border-[${PRIMARY_COLOR}]`}
              variants={iconCardVariants}
              whileHover="hover"
            >
              <Users className={`w-16 h-16 text-[${PRIMARY_COLOR}] mx-auto`} />
              <h3 className={`mt-6 text-2xl font-bold text-[${PRIMARY_COLOR}]`}>
                Scalable IT Outsourcing
              </h3>
              <p className="mt-4 text-gray-600">
                Deploy skilled resources quickly and efficiently with flexible hiring models tailored to your business needs.
              </p>
              <Link href="#contact" className={`mt-4 inline-block text-[${PRIMARY_COLOR}] font-semibold hover:underline`}>
                Start Outsourcing →
              </Link>
            </motion.div>

            <motion.div className="space-y-6" variants={itemVariants}>
              <h2 className={`text-3xl sm:text-4xl font-bold text-[${PRIMARY_COLOR}]`}>
                IT Outsourcing Solutions
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                We provide **skilled, trained, and dependable professionals** to support development,
                operations, analytics, cloud, testing, and more—helping companies reduce operational burden
                and accelerate project delivery with **SLA-driven execution**.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className={`mt-8 text-xl font-semibold text-[${PRIMARY_COLOR}]`}>
                    Our Expertise
                  </h3>
                  <ul className="mt-4 space-y-3 text-gray-600">
                    <li className="flex items-center gap-2"><CheckCircle className={`text-[${PRIMARY_COLOR}] w-5 h-5`} /> **Dedicated Technical Teams**</li>
                    <li className="flex items-center gap-2"><CheckCircle className={`text-[${PRIMARY_COLOR}] w-5 h-5`} /> **Staff Augmentation**</li>
                    <li className="flex items-center gap-2"><CheckCircle className={`text-[${PRIMARY_COLOR}] w-5 h-5`} /> Project-Based Outsourcing</li>
                  </ul>
                </div>
                <div>
                  <h3 className={`mt-8 text-xl font-semibold text-[${PRIMARY_COLOR}]`}>
                    Roles Provided
                  </h3>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    Developers (Java, Python, .NET), QA Engineers, DevOps, Cloud Engineers,
                    UI/UX Designers, Data Analysts, and Technical Support.
                  </p>
                </div>
              </div>
            </motion.div>
          </ServiceBlock>

          <hr className="border-gray-200" />

          {/* 2. APPLICATION SUPPORT SECTION */}
          <ServiceBlock reverse={true}>
            <motion.div
              className={`p-10 rounded-2xl bg-[${SECONDARY_BG}] shadow-xl hover:shadow-2xl transition-shadow w-full max-w-md text-center border-b-4 border-[${PRIMARY_COLOR}]`}
              variants={iconCardVariants}
              whileHover="hover"
            >
              <Headset className={`w-16 h-16 text-[${PRIMARY_COLOR}] mx-auto`} />
              <h3 className={`mt-6 text-2xl font-bold text-[${PRIMARY_COLOR}]`}>
                Responsive 24/7 Support
              </h3>
              <p className="mt-4 text-gray-600">
                Always-on monitoring, troubleshooting, and performance optimization to ensure
                maximum application stability and minimal downtime.
              </p>
              <Link href="#contact" className={`mt-4 inline-block text-[${PRIMARY_COLOR}] font-semibold hover:underline`}>
                Get Expert Support →
              </Link>
            </motion.div>

            <motion.div className="space-y-6" variants={itemVariants}>
              <h2 className={`text-3xl sm:text-4xl font-bold text-[${PRIMARY_COLOR}]`}>
                Application Support Services
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                We provide **reliable, round-the-clock support** ensuring your applications remain stable,
                optimized, and secure — boosting user experience and reducing downtime.
              </p>

              <h3 className={`mt-8 text-xl font-semibold text-[${PRIMARY_COLOR}]`}>
                Comprehensive Support Coverage
              </h3>
              <ul className="mt-4 space-y-3 text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className={`text-[${PRIMARY_COLOR}] w-5 h-5`} /> **L1, L2 & L3 Technical Support**</li>
                <li className="flex items-center gap-2"><CheckCircle className={`text-[${PRIMARY_COLOR}] w-5 h-5`} /> 24/7 Monitoring & Incident Management</li>
                <li className="flex items-center gap-2"><CheckCircle className={`text-[${PRIMARY_COLOR}] w-5 h-5`} /> Bug Fixing, Patch Deployment & Upgrades</li>
                <li className="flex items-center gap-2"><CheckCircle className={`text-[${PRIMARY_COLOR}] w-5 h-5`} /> Performance Optimization & RCA</li>
              </ul>
            </motion.div>
          </ServiceBlock>

          <hr className="border-gray-200" />

          {/* 3. RECRUITMENT SECTION */}
          <ServiceBlock>
            <motion.div
              className={`p-10 rounded-2xl bg-[${SECONDARY_BG}] shadow-xl hover:shadow-2xl transition-shadow w-full max-w-md text-center border-b-4 border-[${PRIMARY_COLOR}]`}
              variants={iconCardVariants}
              whileHover="hover"
            >
              <Briefcase className={`w-16 h-16 text-[${PRIMARY_COLOR}] mx-auto`} />
              <h3 className={`mt-6 text-2xl font-bold text-[${PRIMARY_COLOR}]`}>
                Result-Driven Recruitment
              </h3>
              <p className="mt-4 text-gray-600">
                High-quality, pre-screened candidates delivered quickly through a domain-expert hiring process.
              </p>
              <Link href="#contact" className={`mt-4 inline-block text-[${PRIMARY_COLOR}] font-semibold hover:underline`}>
                Find Your Talent →
              </Link>
            </motion.div>

            <motion.div className="space-y-6" variants={itemVariants}>
              <h2 className={`text-3xl sm:text-4xl font-bold text-[${PRIMARY_COLOR}]`}>
                Recruitment & Staffing Solutions
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                We offer **end-to-end hiring solutions** — helping organizations build highly skilled,
                reliable teams across **IT & non-IT domains** using structured technical screening.
              </p>

              <h3 className={`mt-8 text-xl font-semibold text-[${PRIMARY_COLOR}]`}>
                Official Recruitment Partner
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Proudly partnered with **Kudzu Pvt. Ltd., CAIT Pvt. Ltd.,** and other reputed organizations
                for fast, reliable recruitment.
              </p>

              <h3 className={`mt-8 text-xl font-semibold text-[${PRIMARY_COLOR}]`}>
                Our Hiring Expertise
              </h3>
              <ul className="mt-4 space-y-3 text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className={`text-[${PRIMARY_COLOR}] w-5 h-5`} /> IT & Non-IT Permanent Staffing</li>
                <li className="flex items-center gap-2"><CheckCircle className={`text-[${PRIMARY_COLOR}] w-5 h-5`} /> **Bulk Hiring & Campus Recruitment**</li>
                <li className="flex items-center gap-2"><CheckCircle className={`text-[${PRIMARY_COLOR}] w-5 h-5`} /> Technical Screening & Onboarding Support</li>
              </ul>
            </motion.div>
          </ServiceBlock>

          <hr className="border-gray-200" />

          {/* 4. TRAINING & DEVELOPMENT SECTION */}
          <ServiceBlock reverse={true}>
            <motion.div
              className={`p-10 rounded-2xl bg-[${SECONDARY_BG}] shadow-xl hover:shadow-2xl transition-shadow w-full max-w-md text-center border-b-4 border-[${PRIMARY_COLOR}]`}
              variants={iconCardVariants}
              whileHover="hover"
            >
              <GraduationCap className={`w-16 h-16 text-[${PRIMARY_COLOR}] mx-auto`} />
              <h3 className={`mt-6 text-2xl font-bold text-[${PRIMARY_COLOR}]`}>
                CODEIT Training Institute
              </h3>
              <p className="mt-4 text-gray-600">
                Hands-on, job-oriented courses with **100% placement support** for a future-ready workforce.
              </p>
              <Link href="#contact" className={`mt-4 inline-block text-[${PRIMARY_COLOR}] font-semibold hover:underline`}>
                View Courses →
              </Link>
            </motion.div>

            <motion.div className="space-y-6" variants={itemVariants}>
              <h2 className={`text-3xl sm:text-4xl font-bold text-[${PRIMARY_COLOR}]`}>
                Training & Skill Development
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Practical, industry-led training programs designed to develop skilled professionals
                ready for corporate challenges.
              </p>

              <h3 className={`mt-8 text-xl font-semibold text-[${PRIMARY_COLOR}]`}>
                Key Training Domains
              </h3>
              <ul className="mt-4 space-y-3 text-gray-600 grid grid-cols-1 sm:grid-cols-2">
                <li className="flex items-center gap-2"><CheckCircle className={`text-[${PRIMARY_COLOR}] w-5 h-5`} /> Full Stack Development</li>
                <li className="flex items-center gap-2"><CheckCircle className={`text-[${PRIMARY_COLOR}] w-5 h-5`} /> Software Testing (Manual/Automation)</li>
                <li className="flex items-center gap-2"><CheckCircle className={`text-[${PRIMARY_COLOR}] w-5 h-5`} /> Data Science & Analytics</li>
                <li className="flex items-center gap-2"><CheckCircle className={`text-[${PRIMARY_COLOR}] w-5 h-5`} /> Business Analyst & Programming</li>
              </ul>
            </motion.div>
          </ServiceBlock>

        </div>
      </section>

      {/* CTA */}
      <motion.section
        className={`py-20 bg-[${PRIMARY_COLOR}] text-white`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        id="contact"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Let’s Build Something Great Together
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto opacity-90">
            Whether you need outsourcing support, application management,
            or skilled talent, we’re here to help your business grow.
          </p>

          <Link
            href="/contact"
            className={`mt-8 inline-block bg-white text-[${PRIMARY_COLOR}] px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02]`}
          >
            Contact Our Experts Today
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
