"use client";

import { CheckCircle, Users, Headset, Briefcase, GraduationCap } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

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

const iconCardVariants: Variants = {
  hover: {
    scale: 1.03,
    boxShadow: "0 10px 15px -3px rgba(15, 79, 63, 0.1), 0 4px 6px -2px rgba(15, 79, 63, 0.05)",
  },
};

// Type for children props
interface ServiceBlockProps {
  children: ReactNode[];
  reverse?: boolean;
}

export default function ServicesPage() {
  const PRIMARY_COLOR = "#0F4F3F";
  const SECONDARY_BG = "#F7F8FA";

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
        className="py-20 sm:py-28"
        style={{ backgroundColor: SECONDARY_BG }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold"
            style={{ color: PRIMARY_COLOR }}
          >
            Our Professional Services
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            CodeIT Pvt. Ltd. delivers professional IT outsourcing, reliable application support,
            and result-driven recruitment solutions to help businesses scale efficiently.
          </p>
        </div>
      </motion.section>

      {/* SERVICES GRID */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-24 sm:space-y-32">

          {/* SERVICE 3 */}
          <ServiceBlock>
            <motion.div
              className="p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow w-full max-w-md text-center border-b-4"
              style={{ backgroundColor: SECONDARY_BG, borderColor: PRIMARY_COLOR }}
              variants={iconCardVariants}
              whileHover="hover"
            >
              <Briefcase className="w-16 h-16 mx-auto" style={{ color: PRIMARY_COLOR }} />
              <h3 className="mt-6 text-2xl font-bold" style={{ color: PRIMARY_COLOR }}>
                Recruitment Solutions
              </h3>
              <p className="mt-4 text-gray-600">
                Access to the best pre-screened candidates with fast hiring cycles.
              </p>
              <Link href="/services/recruitment" className="mt-4 inline-block font-semibold hover:underline" style={{ color: PRIMARY_COLOR }}>
                Learn More →
              </Link>
            </motion.div>

            <motion.div className="space-y-6" variants={itemVariants}>
              <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: PRIMARY_COLOR }}>
                Staffing & Hiring Solutions
              </h2>
              <p className="text-gray-600 text-lg">
                Boost efficiency with skilled IT and non-IT talent.
              </p>
            </motion.div>
          </ServiceBlock>

          <hr className="border-gray-200" />

          {/* SERVICE 4 */}
          <ServiceBlock reverse>
            <motion.div
              className="p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow w-full max-w-md text-center border-b-4"
              style={{ backgroundColor: SECONDARY_BG, borderColor: PRIMARY_COLOR }}
              variants={iconCardVariants}
              whileHover="hover"
            >
              <GraduationCap className="w-16 h-16 mx-auto" style={{ color: PRIMARY_COLOR }} />
              <h3 className="mt-6 text-2xl font-bold" style={{ color: PRIMARY_COLOR }}>
                Training & Development
              </h3>
              <p className="mt-4 text-gray-600">
                Industry-led programs designed for 100% job-ready skills.
              </p>
              <Link href="/services/training" className="mt-4 inline-block font-semibold hover:underline" style={{ color: PRIMARY_COLOR }}>
                Learn More →
              </Link>
            </motion.div>

            <motion.div className="space-y-6" variants={itemVariants}>
              <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: PRIMARY_COLOR }}>
                Skill Development Training
              </h2>
              <p className="text-gray-600 text-lg">
                Full-stack development, testing, analytics & more.
              </p>
            </motion.div>
          </ServiceBlock>

          <hr className="border-gray-200" />

          {/* SERVICE 2 */}
          <ServiceBlock>
            <motion.div
              className="p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow w-full max-w-md text-center border-b-4"
              style={{ backgroundColor: SECONDARY_BG, borderColor: PRIMARY_COLOR }}
              variants={iconCardVariants}
              whileHover="hover"
            >
              <Headset className="w-16 h-16 mx-auto" style={{ color: PRIMARY_COLOR }} />
              <h3 className="mt-6 text-2xl font-bold" style={{ color: PRIMARY_COLOR }}>
                Application Support
              </h3>
              <p className="mt-4 text-gray-600">
                Proactive monitoring, incident management & downtime prevention.
              </p>
              <Link href="/services/support" className="mt-4 inline-block font-semibold hover:underline" style={{ color: PRIMARY_COLOR }}>
                Learn More →
              </Link>
            </motion.div>

            <motion.div className="space-y-6" variants={itemVariants}>
              <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: PRIMARY_COLOR }}>
                Application Support Services
              </h2>
              <p className="text-gray-600 text-lg">
                We ensure your application performance is optimized round-the-clock.
              </p>
            </motion.div>
          </ServiceBlock>


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
            Let’s Build Something Great Together
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto opacity-90">
            Contact us for IT outsourcing, development & recruitment services.
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
