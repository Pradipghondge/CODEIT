import React from 'react';
import {
  Lightbulb,
  Briefcase,
  Zap,
  Laptop,
  Award,
  Users,
  Eye,
  Goal,
} from 'lucide-react';

const Landing2: React.FC = () => {
  const keyFactors = [
    {
      icon: <Zap className="h-10 w-10 text-[#0F4F3F]" />,
      title: 'Secure & Scalable Solutions',
      text: 'Delivering robust, enterprise-grade solutions that grow with your business and protect your data.',
    },
    {
      icon: <Briefcase className="h-10 w-10 text-[#0F4F3F]" />,
      title: 'Structured Delivery Process',
      text: 'Following proven methodologies to ensure projects are delivered on time, on budget, and to the highest quality standards.',
    },
    {
      icon: <Users className="h-10 w-10 text-[#0F4F3F]" />,
      title: 'Experienced Technology Teams',
      text: 'Leveraging deep industry expertise and technical knowledge to solve complex business challenges.',
    },
    {
      icon: <Goal className="h-10 w-10 text-[#0F4F3F]" />,
      title: 'Business-Aligned Outcomes',
      text: 'Ensuring every technology solution is directly tied to achieving measurable business goals and ROI.',
    },
    {
      icon: <Award className="h-10 w-10 text-[#0F4F3F]" />,
      title: 'Long-Term Partnership Approach',
      text: 'Building lasting relationships with clients through a focus on shared success and continuous improvement.',
    },
    {
      icon: <Laptop className="h-10 w-10 text-[#0F4F3F]" />,
      title: 'Reliable Support & Maintenance',
      text: 'Providing dependable, ongoing support to ensure your systems operate smoothly and efficiently.',
    },
  ];
  
  const missionPoints = [
    'To provide industry-aligned, hands-on IT education that equips students with the practical skills and knowledge needed to thrive in the rapidly evolving technology sector.',
    'To build a community of learners, professionals, and industry experts by creating a supportive learning environment that emphasizes real-world projects, mentorship, and continuous development.',
    'To foster innovation and career success by offering cutting-edge training in emerging technologies, ensuring our students are ready to tackle the challenges of the future.',
    'To establish strong industry connections and placement opportunities, empowering students to launch successful careers and contribute to the growth of the global tech industry.',
  ];

 const timelineEvents = [
    {
      year: '2021',
      title: 'Foundation of an IT Services Firm',
      description:
        'In 2021, <strong>CODEIT Pvt. Ltd.</strong> was founded with a clear vision: to provide <strong>reliable IT services</strong> for enterprises. The company was established to address the growing demand for business-aligned technology solutions, starting with a core focus on IT outsourcing and application support.',
    },
    {
      year: '2022',
      title: 'Strengthening Core Service Offerings',
      description:
        'The following year, CODEIT focused on <strong>expanding its core capabilities</strong>. The company enhanced its offerings in <strong>Application Support, IT Outsourcing, and Custom Software Development,</strong> building a reputation for operational excellence and structured delivery processes that met enterprise standards.',
    },
    {
      year: '2023',
      title: 'Building Strategic Partnerships',
      description:
        'During this period, CODEIT concentrated on building a <strong>strong network of technology partners</strong> and enterprise clients. The company’s dedication to delivering measurable business value and fostering long-term relationships became the cornerstone of its growth strategy, solidifying its position as a trusted IT services provider.',
    },
    {
      year: '2024',
      title: 'Expansion into a Major Technology Hub',
      description:
        'By 2024, CODEIT had successfully <strong>expanded its operations to Pune</strong>, a key technology hub. This strategic move enabled the company to scale its delivery capabilities and better serve a growing portfolio of enterprise clients, marking a significant milestone in its geographic expansion.',
    },
    {
      year: '2025',
      title: 'A Future of Scalable Solutions',
      description:
        'As 2025 approaches, CODEIT’s journey reflects a relentless commitment to excellence and innovation in IT services. Looking ahead, the company plans to continue its expansion, focusing on <strong>delivering secure, scalable, and business-aligned technology solutions</strong> that support the long-term success of its enterprise partners.',
    },
  ];


  return (
    <div className="bg-white text-gray-800">

       {/* Section 3: Founder & Director Message */}
<section className="pt-16 lg:pt-24 bg-white">
  <div className="container mx-auto px-4">
    <div className="flex flex-col lg:flex-row items-center gap-12">
      <div className="lg:w-1/3 w-full flex justify-center">
        <img
          src="/images/member1.jpg"
          alt="Preeti Kalra, Founder & Director"
          className="rounded-lg shadow-2xl w-full max-w-sm object-cover"
        />
      </div>
      <div className="lg:w-2/3 w-full text-left">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Dear Associates,</h2>

        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            At <strong className="text-gray-800">CODEIT Pvt. Ltd.</strong>, our purpose is clear — to deliver reliable, scalable, and business-aligned technology solutions that help organizations operate efficiently and grow with confidence. We believe technology creates the greatest impact when it is thoughtfully aligned with business strategy.
          </p>

          <p>
            With strong capabilities in IT Outsourcing, Application Support, and Software Development, we partner with organizations to design, build, and manage technology platforms that are secure, resilient, and future-ready. Our focus is on enabling operational excellence while supporting long-term digital transformation goals.
          </p>

          <p>
            Every engagement we undertake is guided by structured processes, technical expertise, and a commitment to accountability. At <strong className="text-gray-800">CODEIT Pvt. Ltd.</strong>, excellence is not an aspiration — it is a standard embedded in our culture and delivery approach.
          </p>

          <p>
            Together with our clients and partners, we strive to build sustainable technology foundations that foster innovation, reliability, and measurable business value in an ever-evolving digital landscape.
          </p>
        </div>

        <div className="mt-8">
          <p className="font-bold text-lg text-gray-900">— Preeti Kalra</p>
          <p className="text-md text-[#0F4F3F] font-semibold">
            Founder & Director, CODEIT Pvt. Ltd.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* Section 1: Key Factors */}
      <section className="py-16 lg:py-24 bg-white pb-16 lg:pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">KEY FACTORS</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              We deliver professional IT services and digital solutions that align technology with business objectives. Our focus is on providing secure, scalable, and reliable platforms that drive operational excellence and support long-term growth for our enterprise clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFactors.map((factor, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {factor.icon}
                  <h3 className="ml-4 text-xl font-semibold text-gray-900">{factor.title}</h3>
                </div>
                <p className="text-gray-600">{factor.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


  



    </div>
  );
};

export default Landing2;


/**
 * To make the timeline responsive on smaller screens, you might need to adjust the Tailwind classes.
 * The current implementation uses a centered timeline which looks best on desktop.
 * For mobile, a stacked approach is implicitly handled by flexbox wrapping, but you can add
 * explicit mobile-first styles for a cleaner look.
 *
 * Example for mobile timeline adjustment in your global CSS or a style block:
 *
 * @media (max-width: 768px) {
 *   .timeline-container .left-timeline,
 *   .timeline-container .right-timeline {
 *     justify-content: flex-start;
 *     flex-direction: row;
 *   }
 *   .timeline-container .left-timeline .order-1,
 *   .timeline-container .right-timeline .order-1 {
 *     order: 2;
 *   }
 *   .timeline-container .left-timeline .z-20,
 *   .timeline-container .right-timeline .z-20 {
 *     order: 1;
 *     margin-right: 1rem;
 *   }
 *   .timeline-container .left-timeline > div:first-child,
 *   .timeline-container .right-timeline > div:first-child {
 *      display: none; // Hide the empty spacer div
 *   }
 *   .timeline-container .border-2-2 {
 *      left: 24px !important; // Adjust line position
 *   }
 * }
 */