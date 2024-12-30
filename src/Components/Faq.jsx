import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { RiCustomerService2Line, RiSecurePaymentLine, RiTeamLine } from 'react-icons/ri';
import { BiSupport, BiCodeAlt } from 'react-icons/bi';
import { TbWorldWww } from 'react-icons/tb';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // FAQ Categories with icons
  const categories = [
    { id: 'services', label: 'Services', icon: RiCustomerService2Line },
    { id: 'technical', label: 'Technical', icon: BiCodeAlt },
    { id: 'support', label: 'Support', icon: BiSupport },
    { id: 'billing', label: 'Billing', icon: RiSecurePaymentLine },
  ];

  const [activeCategory, setActiveCategory] = useState('services');

  // Update the faqData object in your component with this expanded version:

const faqData = {
  services: [
      {
          question: "What web development services do you offer?",
          answer: "We provide comprehensive web development services including custom website development, e-commerce solutions, web applications, CMS development, and API integration. Our team specializes in both frontend and backend development using the latest technologies.",
          icon: TbWorldWww,
      },
      {
          question: "How long does it take to complete a project?",
          answer: "Project timelines vary depending on complexity and requirements. Typically, a basic website takes 4-6 weeks, while complex web applications may take 3-6 months. We provide detailed timelines during project scoping.",
          icon: RiTeamLine,
      },
      {
          question: "Do you provide maintenance and support after launch?",
          answer: "Yes, we offer comprehensive post-launch support and maintenance packages. This includes regular updates, security patches, performance monitoring, content updates, and technical support to ensure your website runs smoothly.",
          icon: BiSupport,
      },
      {
          question: "Can you help with website redesign projects?",
          answer: "Absolutely! We specialize in website redesign projects, helping businesses modernize their online presence. Our process includes thorough analysis of your current site, user experience optimization, and implementation of modern design trends while maintaining your brand identity.",
          icon: RiCustomerService2Line,
      },
      {
          question: "Do you offer mobile app development services?",
          answer: "Yes, we provide full-stack mobile app development services for both iOS and Android platforms. We can develop native apps, cross-platform solutions using React Native or Flutter, and progressive web apps (PWAs) based on your specific needs.",
          icon: TbWorldWww,
      },
      {
          question: "What industries do you specialize in?",
          answer: "We have experience working across various industries including e-commerce, healthcare, education, finance, and technology. Our diverse portfolio demonstrates our ability to understand and meet industry-specific requirements and compliance standards.",
          icon: RiTeamLine,
      }
  ],
  technical: [
      {
          question: "Which technologies do you use for development?",
          answer: "We utilize modern tech stacks including React.js, Node.js, Python, PHP, and various databases. Our technology choices are based on project requirements and scalability needs.",
          icon: BiCodeAlt,
      },
      {
          question: "How do you ensure website security?",
          answer: "We implement multiple layers of security including SSL certificates, secure authentication systems, regular security audits, DDoS protection, and data encryption. We also follow OWASP security guidelines and industry best practices.",
          icon: RiSecurePaymentLine,
      },
      {
          question: "What is your approach to responsive design?",
          answer: "We follow a mobile-first approach to ensure optimal performance across all devices. Our responsive design implementation includes flexible grids, adaptive images, and progressive enhancement techniques for the best user experience.",
          icon: TbWorldWww,
      },
      {
          question: "Do you provide API integration services?",
          answer: "Yes, we offer comprehensive API integration services, including third-party API integration, custom API development, and API maintenance. We work with RESTful APIs, GraphQL, and various API protocols.",
          icon: BiCodeAlt,
      },
      {
          question: "How do you handle website performance optimization?",
          answer: "Our performance optimization strategy includes code minification, image optimization, caching implementation, CDN integration, database optimization, and regular performance monitoring using tools like Google Lighthouse.",
          icon: RiTeamLine,
      }
  ],
  support: [
      {
          question: "What kind of support do you provide?",
          answer: "We offer 24/7 technical support, regular maintenance updates, content management assistance, and emergency issue resolution. Our support team is available via email, phone, and ticket system.",
          icon: BiSupport,
      },
      {
          question: "What is your average response time for support tickets?",
          answer: "Our initial response time is typically within 2-4 hours for standard issues and within 1 hour for critical issues. We prioritize tickets based on urgency and impact on business operations.",
          icon: RiCustomerService2Line,
      },
      {
          question: "Do you offer training for content management?",
          answer: "Yes, we provide comprehensive training sessions for your team on how to manage and update website content. This includes video tutorials, documentation, and hands-on training sessions.",
          icon: RiTeamLine,
      },
      {
          question: "What is included in the maintenance package?",
          answer: "Our maintenance package includes regular security updates, performance monitoring, content updates, backup management, technical support, and monthly reports on website performance and security status.",
          icon: BiSupport,
      },
      {
          question: "How do you handle emergency situations?",
          answer: "We have a dedicated emergency response team available 24/7 for critical issues. We provide priority support with guaranteed response times and escalation procedures for emergency situations.",
          icon: RiCustomerService2Line,
      }
  ],
  billing: [
      {
          question: "What are your payment terms?",
          answer: "We offer flexible payment terms with milestone-based payments for projects. Typically, we require a 30% upfront deposit, with remaining payments tied to project milestones and final delivery.",
          icon: RiSecurePaymentLine,
      },
      {
          question: "Do you offer monthly maintenance packages?",
          answer: "Yes, we offer various monthly maintenance packages tailored to different needs and budgets. These packages include regular updates, support hours, and monitoring services.",
          icon: RiTeamLine,
      },
      {
          question: "What payment methods do you accept?",
          answer: "We accept multiple payment methods including credit cards, bank transfers, and digital payments through secure payment gateways. All transactions are processed through encrypted channels.",
          icon: RiSecurePaymentLine,
      },
      {
          question: "Are there any hidden costs?",
          answer: "No, we maintain complete transparency in our pricing. All costs are clearly outlined in our proposal and contract. Any additional requirements or changes are discussed and approved before implementation.",
          icon: RiTeamLine,
      },
      {
          question: "Do you offer refunds?",
          answer: "Our refund policy is based on project stages and deliverables. We offer partial refunds for cancelled projects based on the work completed and resources allocated.",
          icon: RiSecurePaymentLine,
      }
  ]
};
  return (
    <div className="min-h-screen bg-white py-20 px-4">
      {/* Header Section */}
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
              Questions
            </span>
          </h1>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Find answers to common questions about our services, technical capabilities, and support options.
          </p>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-blue-600 to-blue-800 rounded-full mt-6"></div>
        </motion.div>

        {/* Category Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300
                  ${activeCategory === category.id 
                    ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg shadow-blue-500/25' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                <Icon className="text-xl" />
                <span>{category.label}</span>
              </motion.button>
            );
          })}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          <AnimatePresence>
            {faqData[activeCategory]?.map((faq, index) => {
              const isOpen = openIndex === index;
              const Icon = faq.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`bg-white rounded-2xl overflow-hidden
                    border border-gray-200 transition-all duration-300
                    ${isOpen ? 'shadow-lg shadow-blue-500/10' : 'shadow-sm'}
                    ${hoveredIndex === index ? 'transform scale-[1.02]' : ''}`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full p-6 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-full ${
                        isOpen ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                      }`}>
                        <Icon className="text-xl" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`p-2 rounded-full ${
                        isOpen ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {isOpen ? <FiMinus /> : <FiPlus />}
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6"
                      >
                        <motion.p
                          initial={{ y: -20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="text-gray-600 leading-relaxed"
                        >
                          {faq.answer}
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Contact Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-16 text-center bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Please chat with our friendly team.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full font-semibold
              hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            Contact Support
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};


export default Faq;