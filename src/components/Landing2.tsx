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
  BookOpen,
  Building,
  Rocket,
  GraduationCap,
  BriefcaseBusiness,
  Cpu,
  Code,
  TrendingUp,
  FlaskConical,
} from 'lucide-react';

const Landing2: React.FC = () => {
  const keyFactors = [
    {
      icon: <Lightbulb className="h-10 w-10 text-[#0F4F3F]" />,
      title: 'Strategic Planning',
      text: 'Developing and executing strategies that stimulate business expansion.',
    },
    {
      icon: <Briefcase className="h-10 w-10 text-[#0F4F3F]" />,
      title: 'HR Consulting',
      text: 'Talent management, leadership development, and HR strategy.',
    },
    {
      icon: <Zap className="h-10 w-10 text-[#0F4F3F]" />,
      title: 'Operational Efficiency',
      text: 'Streamlining processes and improving operational effectiveness.',
    },
    {
      icon: <Laptop className="h-10 w-10 text-[#0F4F3F]" />,
      title: 'Hands-on practice',
      text: 'Engage in immersive, practical learning experience with hands-on.',
    },
    {
      icon: <Award className="h-10 w-10 text-[#0F4F3F]" />,
      title: 'Training And Certification',
      text: 'Enhancing Skills & Knowledge and Validating Standardized Assessment.',
    },
    {
      icon: <Users className="h-10 w-10 text-[#0F4F3F]" />,
      title: '100% Placement Assistance',
      text: 'Comprehensive support ensuring 100% placement assistance for all graduates.',
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
      title: 'The Beginning of a Dream',
      description:
        'In 2021, <strong>CODEIT</strong> Software Training Institute was <strong>founded in Rajasthan</strong> with a bold vision to transform the IT education landscape. Recognizing the growing demand for skilled tech professionals, the institute aimed to bridge the gap between academia and industry needs by offering industry-aligned courses in core programming, advanced IT, and emerging technologies like Data Science and Cloud Computing.',
    },
    {
      year: '2022',
      title: 'Building a Well Build Foundation',
      description:
        'In the following years, Leadership helped <strong>CODEIT establish a strong reputation</strong> for providing quality IT education. The institute expanded its course offerings to include <strong>Full Stack Development, Data Science, Cloud Computing, and specialized areas like Software Testing and Business Analytics.</strong> With Preeti’s expertise and industry knowledge, <strong>CODEIT</strong> developed a curriculum that was both relevant and forward-thinking, positioning students for success in emerging technologies.',
    },
    {
      year: '2023',
      title: 'Building Powerfull network',
      description:
        'During this period, Our focused on building a <strong>strong network</strong> of industry partners, creating placement opportunities for students, and establishing internships with top tech companies. Her dedication to student success and career growth became the cornerstone of <strong>CODEIT</strong>’s mission.',
    },
    {
      year: '2024',
      title: 'Expanding Horizons – Pune at Beginning',
      description:
        'By 2024, We had successfully <strong>expanded CODEIT to Pune</strong>, a major tech hub in India. This new campus marked a significant milestone in her journey, allowing <strong>CODEIT</strong> to reach a wider audience and cater to the growing demand for IT professionals in the region. The Pune campus was designed to offer the same high-quality education and industry exposure that had become synonymous with <strong>CODEIT</strong>.',
    },
    {
      year: '2025',
      title: 'A Legacy of Innovation',
      description:
        'As 2025 approaches, Our journey is a testament to the power of vision, leadership, and a relentless commitment to excellence. Looking ahead, Preeti plans to expand <strong>CODEIT</strong>’s reach even further, with more campuses across India and a broader curriculum to meet the demands of an ever-changing tech industry. <strong>CODEIT</strong>, under Preeti’s visionary leadership, is poised to continue shaping the future of technology education.',
    },
  ];

  const courses = {
    'Core Programming': {
      icon: <Code className="h-8 w-8 text-[#0F4F3F]" />,
      list: ['C', 'C++', 'Python', 'PHP', 'Java', 'R', 'SQL', 'JavaScript', 'Ruby', 'Swift', 'Go (Golang)'],
    },
    'Advanced IT Technologies': {
      icon: <Cpu className="h-8 w-8 text-[#0F4F3F]" />,
      list: [
        'Full Stack Java Development',
        'Full Stack Asp .net Development',
        'MEAN / MERN Stack Development',
        'Full Stack Python Development',
        'Full Stack Web Development',
        'Android App Development',
        'Data Science',
        'Cloud Computing',
        'Software Testing',
        'Business Analytics',
        'Advanced Excel',
        'Data Analytics',
      ],
    },
    'Trending & Future-Ready Technologies': {
      icon: <TrendingUp className="h-8 w-8 text-[#0F4F3F]" />,
      list: [
        'Artificial Intelligence (AI) & Machine Learning (ML)',
        'Blockchain Development',
        'Cybersecurity and Ethical Hacking',
        'Internet of Things (IoT)',
        'DevOps and Cloud-Native Architectures',
        'Big Data & Advanced Analytics',
        'AR/VR Development',
        'Quantum Computing Basics',
      ],
    },
    'Specialized Training': {
      icon: <FlaskConical className="h-8 w-8 text-[#0F4F3F]" />,
      list: [
        'Medical Coding',
        'Pharmacovigilance',
        'SAS',
        'Clinical research',
        'Health Informatics',
        'Data Entry Operator',
        'Clinical Data Management',
        'Pharmaceutical Data Analytics',
        'Healthcare Software Development',
        'Bioinformatics',
      ],
    },
  };
  
  const colleges = [
    { name: 'Angel College of Pharmacy, Hadapsar', logo: '/images/colleges/angel-college-of-pharmacy-hadapsar.png' },
    { name: 'Jayawantrao Sawant Group (Handewadi & Hadapsar)', logo: '/images/colleges/jayawantrao-sawant-group.png' },
    { name: 'PDEA Colleges (Manjari & Pune)', logo: '/images/colleges/pdea-colleges.png' },
    { name: 'Dr. Jadhavar College, Narhe', logo: '/images/colleges/dr-jadhavar-college-narhe.png' },
    { name: 'Padmashree Desai College, Urli Kanchan', logo: '/images/colleges/padmashree-desai-college-urli-kanchan.png' },
    { name: 'Krishna College of Pharmacy, Karad', logo: '/images/colleges/krishna-college-of-pharmacy-karad.png' },
    { name: 'Mahadev Kanchan College, Urli Kanchan', logo: '/images/colleges/mahadev-kanchan-college-urli-kanchan.png' },
    { name: 'Annasaheb Magar College of Engineering, Hadapsar', logo: '/images/colleges/annasaheb-magar-college-of-engineering-hadapsar.png' },
    { name: 'Prithviraj Kapoor Memorial High School, Loni Kalbhor', logo: '/images/colleges/prithviraj-kapoor-memorial-high-school-loni-kalbhor.png' },
  ];
  
  const companies = [
    { name: 'Work Together Group', logo: '/images/companies/work-together-group.png' },
    { name: 'PiSyst India Pvt. Ltd.', logo: '/images/companies/pisyst-india-pvt-ltd.png' },
    { name: 'TRON Softech, Hadapsar', logo: '/images/companies/tron-softech-hadapsar.png' },
    { name: 'Syntelligence Tech, Pune', logo: '/images/companies/syntelligence-tech-pune.png' },
    { name: 'Avanir Edutech Services Pvt. Ltd', logo: '/images/companies/avanir-edutech-services-pvt-ltd.png' },
    { name: 'Accenture', logo: '/images/companies/accenture.png' },
    { name: 'Sutherland', logo: '/images/companies/sutherland.png' },
    { name: 'Tech Mahindra', logo: '/images/companies/tech-mahindra.png' },
    { name: 'Sumasoft', logo: '/images/companies/sumasoft.png' },
    { name: 'Traya', logo: '/images/companies/traya.png' },
    { name: 'Zensar', logo: '/images/companies/zensar.png' },
    { name: 'TCS', logo: '/images/companies/tcs.png' },
    { name: 'Rabbit & Tortoise', logo: '/images/companies/rabbit-tortoise.png' },
    { name: 'Bpointers', logo: '/images/companies/bpointers.png' },
  ];
  
  const placedStudents = [
    { name: 'Mr. Atul Patil', role: 'Android Developer', company: 'Syntelligence Tech', lpa: '3.5 LPA', image: '/images/students/student1.jpg' },
    { name: 'Ms. Shivani Jenna', role: 'Data Analyst', company: 'MD India', lpa: '4.8 LPA', image: '/images/students/student2.jpg' },
    { name: 'Miss. Prachi Patil', role: 'Data Analyst', company: 'JKL', lpa: '5.5 LPA', image: '/images/students/student3.jpg' },
    { name: 'Mr. Sunil Patil', role: 'Business Analyst', company: 'SumaSoft', lpa: '4.0 LPA', image: '/images/students/student4.jpg' },
    { name: 'Ms. Pratiksha Jadhav', role: 'Flutter Developer', company: 'Syntelligence Tech', lpa: '3.0 LPA', image: '/images/students/student5.jpg' },
    { name: 'Mr. Mangesh Chalode', role: 'Assi. Service Engineer', company: 'BitSoft', lpa: '4.5 LPA', image: '/images/students/student6.jpg' },
    { name: 'Mr. Ganesh Deshmukh', role: 'React Native Developer', company: 'Avanair Technologies', lpa: '11 LPA', image: '/images/students/student7.jpg' },
    { name: 'Mr. Sachin Honrao', role: 'Power BI Developer', company: 'Empyreal Solution', lpa: '3.5 LPA', image: '/images/students/student8.jpg' },
    { name: 'Miss. Aarti Nhalve', role: 'Full Stack Developer', company: 'Avanair Technologies', lpa: '6.5 LPA', image: '/images/students/student9.jpg' },
  ];

  return (
    <div className="bg-white text-gray-800">

        {/* Section 3: CTO Message */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3 w-full flex justify-center">
              <img
                src="/images/member1.jpg"
                alt="Preeti Kalra, CTO"
                className="rounded-lg shadow-2xl w-full max-w-sm object-cover"
              />
            </div>
            <div className="lg:w-2/3 w-full text-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Dear Associates,</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  At <strong className="text-gray-800">CODEIT</strong> Software Training Institute, our mission has always been to empower individuals with cutting-edge IT skills, and this remains our top priority. Under the leadership of Preeti Kalra, our CTO, we continue to deliver high-quality education, focusing on both technical proficiency and professional development.
                </p>
                <p>
                  Throughout the years, <strong className="text-gray-800">CODEIT</strong> has maintained its commitment to excellence by offering a diverse range of industry-aligned courses, fostering real-world learning experiences, and providing strong industry connections for our students. We are dedicated to shaping the future of tech talent and ensuring their success in the competitive IT landscape.
                </p>
                <p>
                  Thank you for your ongoing trust and support as we work together toward a brighter, technology-driven future.
                </p>
              </div>
              <div className="mt-8">
                <p className="font-bold text-lg text-gray-900">Preeti Kalra</p>
                <p className="text-md text-[#0F4F3F] font-semibold">CTO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Key Factors */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">KEY FACTORS</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              We groom our students with practical, industry-aligned skills through hands-on training and real-world projects. Our goal is to foster innovation and career success, preparing students to excel in the ever-evolving tech industry.
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

      {/* Section 2: Vision & Mission */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="bg-white p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <Eye className="h-8 w-8 mr-3 text-[#0F4F3F]" /> VISION
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To be a leading institution in IT education, empowering individuals with the skills and knowledge to excel in the ever-evolving tech landscape. We aim to bridge the gap between industry demands and academic learning, fostering innovation, driving career success, and shaping the next generation of tech leaders.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <Goal className="h-8 w-8 mr-3 text-[#0F4F3F]" /> MISSION
              </h2>
              <ul className="space-y-4">
                {missionPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#0F4F3F] font-bold mr-3 mt-1">&#10003;</span>
                    <p className="text-gray-600">{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
      </section>

      {/* Section 4: Success Story Timeline */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">A Success Story</h2>
          <div className="relative wrap overflow-hidden p-10 h-full">
            <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{ left: '50%' }}></div>
            {timelineEvents.map((event, index) => (
              <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse left-timeline' : 'right-timeline'}`}>
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-[#0F4F3F] shadow-xl w-12 h-12 rounded-full">
                  <h3 className="mx-auto font-bold text-lg text-white">{event.year}</h3>
                </div>
                <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-5/12 px-6 py-4">
                  <h4 className="font-bold text-lg text-gray-900 mb-2">{event.title}</h4>
                  <p
                    className="text-sm leading-snug tracking-wide text-gray-600"
                    dangerouslySetInnerHTML={{ __html: event.description }}
                  ></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Courses */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">Our Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {Object.entries(courses).map(([category, details]) => (
              <div key={category} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  {details.icon}
                  <span className="ml-3">{category}</span>
                </h3>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {details.list.map((course, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#0F4F3F] mr-2 mt-1">&#8227;</span>
                      <span className="text-gray-600">{course}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 & 7: Partners */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-12">
            {/* Colleges & Universities */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <GraduationCap className="h-8 w-8 mr-3 text-[#0F4F3F]" />
                Colleges & Universities
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                  {colleges.map((college, index) => (
                    <li key={index} className="flex items-center text-gray-700 gap-3">
                      <img
                        src={college.logo}
                        alt={`${college.name} logo`}
                        className="h-6 w-6 object-contain flex-shrink-0"
                      />
                      <span>{college.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Placement Partner Companies */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <BriefcaseBusiness className="h-8 w-8 mr-3 text-[#0F4F3F]" />
                Placement Partner Companies
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                  {companies.map((company, index) => (
                    <li key={index} className="flex items-center text-gray-700 gap-3">
                       <img
                        src={company.logo}
                        alt={`${company.name} logo`}
                        className="h-6 w-6 object-contain flex-shrink-0"
                      />
                      <span>{company.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Our Placed Students */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 flex items-center justify-center">
              <Users className="h-8 w-8 mr-3 text-[#0F4F3F]" />
              Our Placed Students
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {placedStudents.map((student, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-bold text-[#0F4F3F]">{student.name}</h3>
                <p className="text-gray-600 font-medium">{student.role}</p>
                <p className="mt-2">
                  at <span className="font-bold text-[#0F4F3F]">{student.company}</span>
                </p>
                <p className="mt-1">
                  Package: <span className="font-bold text-[#0F4F3F]">{student.lpa}</span>
                </p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <img
              src="/images/congratulations.png"
              alt="Congratulations"
              className="mx-auto"
            />
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