'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const testimonialData = [
  {
    title: 'Services Provided',
    description:
      'We offer a comprehensive suite of services including SAP for cloud, analytics, integration, reporting, modules, and management, alongside infra and BPO capabilities, information design and development, cloud infrastructure, Oracle Apps, and data center capabilities.',
    image: '/images/your-image-1.jpg',
    ctaText: 'Learn more',
    ctaLink: '/services',
  },
  {
    title: 'Industry Verticals',
    description:
      'In the ever-evolving sectors of IT, BFSI, Healthcare, Oil and Gas, Manufacturing, and Telecom, our profound expertise enables us to tackle diverse challenges, driving impactful outcomes for our clients.',
    image: '/images/your-image-2.jpg',
    ctaText: 'Learn more',
    ctaLink: '/industries',
  },
  {
    title: 'Innovation',
    description:
      'In the dynamic landscape of industry evolution, our consulting team champions innovation and creativity, delivering visionary solutions ahead of trends.',
    image: '/images/your-image-3.jpg',
    ctaText: 'Learn more',
    ctaLink: '/innovation',
  },
];

const Testimonials = () => {
  const sectionVariants = {
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