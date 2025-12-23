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
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative overflow-hidden bg-cover bg-center bg-no-repeat pt-20" style={{backgroundImage: "url('/images/office2.png')"}}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="relative min-h-screen flex items-center justify-center z-20">
        <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">

          <motion.div
            className="grid grid-cols-1 gap-12 sm:gap-16 items-center text-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* CONTENT */}
            <motion.div
              className="flex flex-col justify-center items-center"
              variants={itemVariants}
            >
              <motion.h1
                className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
                variants={itemVariants}
              >
                 Transforming Business Through Technology
              </motion.h1>

              <motion.h2
                variants={itemVariants}
                className="mt-4 text-lg font-semibold tracking-wide text-gray-200"
              >
                Secure | Scalable | Business-Focused Solutions
              </motion.h2>

              <motion.p
                className="mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-300 max-w-xl"
                variants={itemVariants}
              >
                We deliver premier IT outsourcing and application support solutions to help businesses scale efficiently and achieve long-term success.
              </motion.p>

              {/* CTA BUTTONS */}
              <motion.div
                className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
                variants={itemVariants}
              >
                <Link
                  href="/services"
                  className="rounded-md bg-[#0F4F3F] px-5 py-3 text-sm sm:text-base font-semibold text-white shadow-lg hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F4F3F] transition-transform duration-200 hover:scale-105"
                >
                  Learn More
                </Link>

                <Link
                  href="/contact"
                  className="rounded-md px-5 py-3 text-sm sm:text-base font-semibold leading-6 text-white ring-1 ring-inset ring-gray-200 hover:bg-white/10 transition-transform duration-200 hover:scale-105"
                >
                  Get Started  →
                </Link>
              </motion.div>
            </motion.div>

            {/* RIGHT IMAGE */}
             

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
