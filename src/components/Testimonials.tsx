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
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col space-y-20">
          {testimonialData.map((item, index) => (
            <motion.div
              key={index}
              className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-16"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Text Content */}
              <div className={`flex flex-col justify-center ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
                <h2
                  className="text-4xl font-extrabold tracking-tight sm:text-5xl"
                  style={{ color: '#133B31' }}
                >
                  {item.title}
                </h2>
                <p className="mt-6 text-lg leading-relaxed" style={{ color: '#52606D' }}>
                  {item.description}
                </p>
                <div className="mt-8">
                  <a
                    href={item.ctaLink}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0F2027] to-[#2C5364] px-6 py-3 text-base font-semibold text-white shadow-lg transition-transform hover:scale-105"
                  >
                    {item.ctaText}
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Image Content */}
              <div className="flex items-center justify-center">
                <div className="w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full rounded-xl object-cover shadow-lg"
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
