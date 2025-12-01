"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const Landing = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      <div className="relative min-h-screen flex items-center justify-center">
        <div className="mx-auto max-w-7xl w-full px-6 py-24 sm:py-32 lg:px-8">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 items-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Left: Content */}
            <motion.div
              className="flex flex-col justify-center text-center lg:text-left"
              variants={itemVariants}
            >
              {/* <motion.p
                className="font-semibold text-lg text-[#0F4F3F]"
                variants={itemVariants}
              >
                Code IT Pvt. Ltd.
              </motion.p> */}
              <motion.h1
                className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F4F3F]"
                variants={itemVariants}
              >
                Empowering Businesses & Careers Through Technology.
              </motion.h1>
              <motion.p
                className="mt-6 text-lg leading-8 text-gray-600 max-w-xl mx-auto lg:mx-0"
                variants={itemVariants}
              >
                We deliver premier IT outsourcing, application support,
                professional training, and recruitment services to accelerate
                your growth and success.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="mt-10 flex items-center justify-center lg:justify-start gap-x-6"
                variants={itemVariants}
              >
                <Link
                  href="/services"
                  className="rounded-md bg-[#0F4F3F] px-5 py-3 text-base font-semibold text-white shadow-lg hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F4F3F] transition-transform duration-200 hover:scale-105"
                >
                  Explore Services
                </Link>
                <Link
                  href="/contact"
                  className="rounded-md px-5 py-3 text-base font-semibold leading-6 text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-100 transition-transform duration-200 hover:scale-105"
                >
                  Contact Us <span aria-hidden="true">→</span>
                </Link>
              </motion.div> 
            </motion.div>

            {/* Right: Illustration */}
            <motion.div
              className="flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.8, delay: 0.5, ease: "easeOut" },
              }}
            >
              <div className="relative w-full max-w-lg">
                <Image
                  src="/images/logo.png"
                  alt="IT Outsourcing and Talent Solutions Illustration"
                  width={600}
                  height={600}
                  priority
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
