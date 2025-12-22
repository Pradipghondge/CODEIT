'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: 'What IT outsourcing models does CODEIT offer?',
    answer:
      'CODEIT provides flexible IT outsourcing models, including project-based engagements, dedicated development teams, and staff augmentation. We tailor our approach to align with your specific business objectives, ensuring seamless integration and optimal performance.',
  },
  {
    question: 'How do you ensure security and compliance in your software solutions?',
    answer:
      'We embed security and compliance into every stage of the development lifecycle. Our processes include regular code reviews, vulnerability assessments, and adherence to industry standards like ISO 27001 and GDPR to protect your data and ensure regulatory compliance.',
  },
  {
    question: 'What is your approach to Application Support and Maintenance?',
    answer:
      'Our Application Support & Maintenance services are designed for business continuity. We offer proactive monitoring, 24/7 incident management, and continuous improvement to ensure your applications are stable, secure, and optimized for performance.',
  },
  {
    question: 'Can CODEIT build scalable enterprise software from the ground up?',
    answer:
      'Yes, we specialize in end-to-end software development, from ideation and architecture to deployment and maintenance. Our teams use modern technologies and agile methodologies to build robust, scalable, and future-proof enterprise applications.',
  },
  {
    question: 'How do you structure long-term enterprise partnerships?',
    answer:
      'We focus on building strategic, long-term partnerships based on trust and mutual growth. Our engagement models include transparent governance, dedicated account management, and a commitment to understanding your evolving business needs to drive sustained value.',
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