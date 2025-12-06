"use client";

import { CheckCircle, Users, Headset, Briefcase, GraduationCap, Code, Cloud, Search, Link as LinkIcon, Heart } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

// --- Configuration ---
const PRIMARY_COLOR = "#0F4F3F"; // Deep Green (From the document's design/branding)
const SECONDARY_BG = "#F7F8FA"; // Light Gray Background
const ACCENT_COLOR = "#FFC72C"; // Gold/Yellow accent

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
    },
  },
};

const cardVariants: Variants = {
  hover: {
    y: -5,
    boxShadow: "0 15px 25px -5px rgba(15, 79, 63, 0.2), 0 8px 10px -6px rgba(15, 79, 63, 0.1)",
  },
};

// Type for children props
interface ServiceBlockProps {
  children: ReactNode[];
  reverse?: boolean;
}

// Custom Card Component for Key Factors
interface KeyFactorCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const KeyFactorCard = ({ icon, title, description }: KeyFactorCardProps) => (
  <motion.div 
    className="p-6 rounded-xl border border-gray-200 shadow-sm transition-all text-center"
    style={{ backgroundColor: 'white' }}
    variants={cardVariants}
    whileHover="hover"
  >
    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full" style={{ backgroundColor: PRIMARY_COLOR, color: 'white' }}>
      {icon}
    </div>
    <h4 className="text-lg font-bold" style={{ color: PRIMARY_COLOR }}>{title}</h4>
    <p className="mt-2 text-sm text-gray-600">{description}</p>
  </motion.div>
);

export default function ServicesPage() {
  const ServiceBlock = ({ children, reverse = false }: ServiceBlockProps) => (
    <motion.div
      // Responsive grid setup: single column on mobile, two columns on large screens
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center" 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Dynamic ordering based on reverse prop, ensuring correct stacking on mobile */}
      {reverse ? (
        <>
          <div className="flex justify-center order-last lg:order-first">{children[0]}</div>
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
        // Using responsive padding classes
        className="py-20 sm:py-28" 
        style={{ backgroundColor: SECONDARY_BG }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold" // Responsive text size
            style={{ color: PRIMARY_COLOR }}
          >
            Empowering Your IT Career & Business Growth 
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            CODE IT Software Training Institute is a premier destination for IT education, founded in Rajasthan in 2021. Under the leadership of CTO Preeti Kalra, we offer a blend of foundational programming, advanced technologies, and industry-focused training. Our mission is to empower individuals with cutting-edge IT skills and ensure career success.
          </p>
        </div>
      </motion.section>

      {/* --- CORE SERVICE 1: SKILL DEVELOPMENT & TRAINING --- */}
      <section className="py-6 sm:py-8"> 
        <div className="max-w-7xl mx-auto px-6">
          <ServiceBlock reverse>
            <motion.div
              className="p-10 rounded-2xl shadow-2xl w-full max-w-md text-left border-t-4"
              style={{ backgroundColor: SECONDARY_BG, borderColor: PRIMARY_COLOR }}
              variants={cardVariants}
              whileHover="hover"
            >
              <GraduationCap className="w-12 h-12 mb-4" style={{ color: PRIMARY_COLOR }} />
              <h3 className="text-3xl font-extrabold" style={{ color: PRIMARY_COLOR }} >
                Industry-Aligned Training
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Our programs bridge the gap between academia and industry needs by offering a diverse range of industry-aligned courses.
              </p>

              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 mt-1 shrink-0" style={{ color: ACCENT_COLOR }} />
                  <span>Core Programming (Java, Python, C++, PHP, SQL, Go)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 mt-1 shrink-0" style={{ color: ACCENT_COLOR }} />
                  <span>Advanced IT: Full Stack Development (MEAN/MERN), Cloud Computing, Software Testing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 mt-1 shrink-0" style={{ color: ACCENT_COLOR }} />
                  <span>Future-Ready Tech: AI, Machine Learning, Data Science, Blockchain, Cybersecurity</span>
                </li>
              </ul>
              <Link href="/services/training" className="mt-6 inline-block font-semibold hover:underline" style={{ color: PRIMARY_COLOR }}>
                Explore All Courses →
              </Link>
            </motion.div>

            <motion.div className="space-y-6" variants={itemVariants}>
              <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight" style={{ color: PRIMARY_COLOR }}>
                Advanced Skill Development Training
              </h2>
              <p className="text-gray-600 text-xl leading-relaxed">
                We are dedicated to shaping the future of tech talent. Our curriculum is designed by **expert trainers** focusing on technical proficiency and professional development.
              </p>
              <div className="mt-6">
                <h3 className="text-2xl font-bold mb-4" style={{ color: PRIMARY_COLOR }}>Why Train With Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-lg text-gray-700">
                    <CheckCircle className="w-6 h-6 mr-3 shrink-0" style={{ color: ACCENT_COLOR }} />
                    Hands-on learning & Real-world projects
                  </li>
                  <li className="flex items-center text-lg text-gray-700">
                    <CheckCircle className="w-6 h-6 mr-3 shrink-0" style={{ color: ACCENT_COLOR }} />
                    Curriculum relevant and forward-thinking in emerging technologies
                  </li>
                  <li className="flex items-center text-lg text-gray-700">
                    <CheckCircle className="w-6 h-6 mr-3 shrink-0" style={{ color: ACCENT_COLOR }} />
                    Industry connections and placement support
                  </li>
                </ul>
              </div>
            </motion.div>
          </ServiceBlock>
        </div>
      </section>

      <hr className="border-gray-200 max-w-7xl mx-auto" />

      {/* --- CORE SERVICE 2: PLACEMENT & RECRUITMENT --- */}
      <section className="py-6 sm:py-8" style={{ backgroundColor: SECONDARY_BG }}> 
        <div className="max-w-7xl mx-auto px-6">
          <ServiceBlock>
            <motion.div
              className="p-10 rounded-2xl shadow-2xl w-full max-w-md text-left border-t-4"
              style={{ backgroundColor: 'white', borderColor: ACCENT_COLOR }}
              variants={cardVariants}
              whileHover="hover"
            >
              <Briefcase className="w-12 h-12 mb-4" style={{ color: PRIMARY_COLOR }} />
              <h3 className="text-3xl font-extrabold" style={{ color: PRIMARY_COLOR }}>
                100% Placement Guarantee
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                We are committed to comprehensive support ensuring **100% placement assistance** for all graduates.
              </p>

              <div className="mt-4">
                <p className="font-semibold text-gray-700">Key Placement Partners:</p>
                <ul className="mt-2 text-sm text-gray-600 list-disc list-inside space-y-1">
                  <li>Major MNCs: Accenture, TCS, Tech Mahindra, Sutherland, Zensar</li>
                  <li>Industry Partners: Work Together Group, PiSyst India, Syntelligence Tech</li>
                </ul>
              </div>
              <Link href="/services/recruitment" className="mt-6 inline-block font-semibold hover:underline" style={{ color: PRIMARY_COLOR }}>
                View Partner Network →
              </Link>
            </motion.div>

            <motion.div className="space-y-6" variants={itemVariants}>
              <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight" style={{ color: PRIMARY_COLOR }}>
                Career Success & Corporate Recruitment
              </h2>
              <p className="text-gray-600 text-xl leading-relaxed">
                Our focus is on building a strong network of industry partners, creating direct placement opportunities for our students and helping companies access pre-screened, job-ready talent.
              </p>
              <div className="mt-6">
                <h3 className="text-2xl font-bold mb-4" style={{ color: PRIMARY_COLOR }}>Internship Programs</h3>
                <p className="text-gray-700">
                  We run ongoing industry programs, such as the **Automation & Robotics internship** in collaboration with **JSPM College**, focusing on Robotics Programming and Embedded Systems.
                </p>
              </div>
            </motion.div>
          </ServiceBlock>
        </div>
      </section>

      <hr className="border-gray-200 max-w-7xl mx-auto" />

      {/* --- CORE SERVICE 3: INSTITUTIONAL & CORPORATE COLLABORATION --- */}
      <section className="py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-6">
          <ServiceBlock reverse>
            <motion.div
              className="p-10 rounded-2xl shadow-2xl w-full max-w-md text-left border-t-4"
              style={{ backgroundColor: SECONDARY_BG, borderColor: PRIMARY_COLOR }}
              variants={cardVariants}
              whileHover="hover"
            >
              <LinkIcon className="w-12 h-12 mb-4" style={{ color: PRIMARY_COLOR }} />
              <h3 className="text-3xl font-extrabold" style={{ color: PRIMARY_COLOR }}>
                Academic Partnerships
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                We collaborate with top colleges and universities to enhance academic learning with industry exposure and practical experience.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside">
                  <li>Angel College of Pharmacy, Hadapsar</li>
                  <li>PDEA Colleges (Manjari & Pune)</li>
                  <li>Jayawantrao Sawant Group</li>
                  <li>Dr. Jadhavar College, Narhe</li>
              </ul>
              <Link href="/services/support" className="mt-6 inline-block font-semibold hover:underline" style={{ color: PRIMARY_COLOR }}>
                View All Affiliations →
              </Link>
            </motion.div>

            <motion.div className="space-y-6" variants={itemVariants}>
              <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight" style={{ color: PRIMARY_COLOR }}>
                Institutional & Corporate Collaboration
              </h2>
              <p className="text-gray-600 text-xl leading-relaxed">
                We partner with educational institutions to embed real-world projects and industry standards into student curricula, fostering hands-on learning environments.
              </p>
              <div className="mt-6">
                <h3 className="text-2xl font-bold mb-4" style={{ color: PRIMARY_COLOR }}>Bridging Academia & Industry</h3>
                <p className="text-gray-700">
                  Our partnerships are designed to provide students with placement opportunities, internships, and essential real-world exposure, fulfilling our commitment to career success.
                </p>
              </div>
            </motion.div>
          </ServiceBlock>
        </div>
      </section>

      <hr className="border-gray-200 max-w-7xl mx-auto" />
      
      {/* --- CORE SERVICE 4: BUSINESS CONSULTING --- */}
      <section className="py-6 sm:py-8" style={{ backgroundColor: SECONDARY_BG }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight" style={{ color: PRIMARY_COLOR }}>
              Business & Management Consulting
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto mt-4">
              Leveraging our strategic insight to drive organizational growth and efficiency for our partners.
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants}>
              <KeyFactorCard 
                icon={<Code />}
                title="Strategic Planning"
                description="Developing and executing strategies that stimulate business expansion."
              /> 
            </motion.div>
            <motion.div variants={itemVariants}>
              <KeyFactorCard 
                icon={<Users />}
                title="HR Consulting"
                description="Specialized services in talent management, leadership development, and HR strategy."
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <KeyFactorCard 
                icon={<Search />}
                title="Operational Efficiency"
                description="Streamlining processes and improving operational effectiveness."
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        className="py-20 text-white"
        style={{ backgroundColor: PRIMARY_COLOR }}
        id="contact"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Ready to Shape Your Future in Tech?
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto opacity-90">
            Contact CODE IT today for admission, placement queries, or corporate collaboration.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-white px-10 py-4 rounded-full font-semibold text-lg shadow-xl 
            hover:shadow-2xl transition hover:scale-105"
            style={{ color: PRIMARY_COLOR }}
          >
            Contact Our Experts
          </Link>
        </div>
      </motion.section>
    </div>
  );
}