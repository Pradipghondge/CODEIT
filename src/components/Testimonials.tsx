'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const testimonialData = [
  {
    title: 'Trusted Delivery Excellence',
    description:
      'We combine strong technical capabilities with proven execution discipline. From strategy to deployment, we ensure reliable outcomes, transparent visibility, and faster time-to-value for every project.',
    image: '/images/your-image-1.jpg',
    ctaText: 'Our Approach',
    ctaLink: '/why-us',
  },
  {
    title: 'Industry-Led Expertise',
    description:
      'We support digital transformation across key industries including IT, BFSI, Healthcare, Oil & Gas, Manufacturing, and Telecom — solving real challenges with domain-focused solutions.',
    image: '/images/your-image-2.jpg',
    ctaText: 'Industries',
    ctaLink: '/industries',
  },
  {
    title: 'Scalable Growth Partner',
    description:
      'Whether you’re expanding teams, upgrading systems, or modernizing operations, we provide scalable solutions that grow with your business without disruption — ensuring long-term success and flexibility.',
    image: '/images/your-image-3.jpg',
    ctaText: 'Scale with Us',
    ctaLink: '/growth',
  },
];

const Testimonials = () => {
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col space-y-16 sm:space-y-20">
          {testimonialData.map((item, index) => (
            <motion.div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 sm:gap-12 lg:gap-16"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* TEXT */}
              <div className={`flex flex-col justify-center text-center md:text-left ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
                <h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
                  style={{ color: '#133B31' }}
                >
                  {item.title}
                </h2>

                <p
                  className="mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed"
                  style={{ color: '#52606D' }}
                >
                  {item.description}
                </p>

                <div className="mt-6 sm:mt-8 flex justify-center md:justify-start">
                  <a
                    href={item.ctaLink}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0F2027] to-[#2C5364] px-5 sm:px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-lg transition-transform hover:scale-105"
                  >
                    {item.ctaText}
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* IMAGE */}
              <div className="flex justify-center items-center">
                <div className="w-full max-w-md sm:max-w-lg md:max-w-none">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-xl object-cover shadow-lg"
                  />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
