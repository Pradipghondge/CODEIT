'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: 'How can CodeIT support my business with skilled IT resources?',
    answer:
      'We provide trained and experienced IT professionals through outsourcing, staff augmentation, and dedicated teams. This helps your business scale faster, reduce hiring efforts, and maintain continuous productivity.',
  },
  {
    question: 'Do you offer 24/7 application support services?',
    answer:
      'Yes, CodeIT offers round-the-clock L1, L2, and L3 support, including monitoring, incident handling, bug fixing, patch updates, and performance optimization — ensuring your applications run smoothly and securely.',
  },
  {
    question: 'How does CodeIT handle recruitment and staffing for companies?',
    answer:
      'We offer end-to-end recruitment for IT & Non-IT roles including sourcing, technical screening, shortlisting, and onboarding support. As an official hiring partner for multiple companies, we ensure fast hiring and a high joining ratio.',
  },
  {
    question: 'Do you provide training programs for students and professionals?',
    answer:
      'Yes, through our CODEIT Software Training Institute, we offer practical IT courses like Java, Python, Full Stack Development, Software Testing, Data Analytics, and more — with 100% placement support.',
  },
  {
    question: 'Can CodeIT customize services based on our business needs?',
    answer:
      'Absolutely. We design flexible and scalable engagement models — whether you need outsourced teams, long-term staffing support, or customized application support services tailored to your goals.',
  },
];


const AccordionItem = ({
  item,
  isOpen,
  onClick,
}: {
  item: { question: string; answer: string };
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className={`border-b border-gray-200 transition-colors duration-300 ${isOpen ? 'bg-[#eef5ff]' : 'bg-white'}`}>
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between p-6 text-left"
      >
        <span className="text-lg font-semibold text-gray-800">{item.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="h-6 w-6 text-gray-500" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-gray-600">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Questions = () => {
  // Default: Q1 open
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleItemClick = (index: number) => {
    // If the clicked item is already open, close it. Otherwise, open the new one.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-[1100px] px-4">
        <h2 className="mb-12 text-center text-4xl font-extrabold text-gray-800 sm:text-5xl">
          Any questions?
        </h2>
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Questions;