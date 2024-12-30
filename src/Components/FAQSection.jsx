import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus, FiSearch } from 'react-icons/fi';
import { RiCustomerService2Line, RiSecurePaymentLine, RiTeamLine, RiQuestionLine } from 'react-icons/ri';
import { BiSupport, BiCodeAlt, BiRocket } from 'react-icons/bi';
import { TbWorldWww } from 'react-icons/tb';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredCategory, setHoveredCategory] = useState(null);

  // Enhanced categories with more metadata
  const categories = [
    {
      id: 'all',
      label: 'All Questions',
      icon: RiQuestionLine,
      color: 'from-purple-500 to-indigo-500',
      lightColor: 'purple-500',
      count: 12
    },
    {
      id: 'services',
      label: 'Our Services',
      icon: RiCustomerService2Line,
      color: 'from-blue-500 to-cyan-500',
      lightColor: 'blue-500',
      count: 4
    },
    {
      id: 'technical',
      label: 'Technical',
      icon: BiCodeAlt,
      color: 'from-green-500 to-emerald-500',
      lightColor: 'green-500',
      count: 3
    },
    {
      id: 'support',
      label: '24/7 Support',
      icon: BiSupport,
      color: 'from-orange-500 to-yellow-500',
      lightColor: 'orange-500',
      count: 5
    }
  ];

  // Enhanced FAQ data with more metadata
  const faqData = {
    services: [
      {
        question: "What development services do you offer?",
        answer: `Our comprehensive development services include:
        • Custom Web Applications
        • Mobile App Development
        • E-commerce Solutions
        • Cloud Integration
        • API Development
        • UI/UX Design`,
        icon: TbWorldWww,
        category: 'services',
        helpful: 128,
        tags: ['development', 'services']
      },
      // Add more FAQs...
    ]
  };

  return (
    <div className="min-h-screen bg-[#71b3ff] py-20 relative overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1C] via-[#1A1F2E] to-[#0A0F1C] opacity-50"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        {/* Enhanced Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <span className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-4 inline-block">
              Got Questions? We've Got Answers
            </span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mt-6 mb-6">
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Questions
            </span>
          </h1>
          
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Everything you need to know about our services. Can't find the answer you're looking for? 
            <a href="#contact" className="text-blue-400 hover:text-blue-300 transition-colors ml-1">
              Reach out to our support team
            </a>
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Search your questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-2xl
                text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50
                transition-all duration-300"
            />
          </div>
        </motion.div>

        {/* Category Pills */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            const isHovered = hoveredCategory === category.id;

            return (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
                className={`relative group flex items-center space-x-2 px-6 py-4 rounded-xl
                  transition-all duration-300 ${
                    isActive
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'bg-gray-800/50 text-gray-400 hover:text-white'
                  }`}
              >
                <div className={`p-2 rounded-lg ${
                  isActive ? 'bg-white/20' : 'bg-gray-700/50'
                }`}>
                  <Icon className="text-xl" />
                </div>
                <span className="font-medium">{category.label}</span>
                <span className={`ml-2 px-2 py-1 rounded-full text-sm ${
                  isActive ? 'bg-white/20' : 'bg-gray-700/50'
                }`}>
                  {category.count}
                </span>
                
                {/* Hover Effect */}
                {isHovered && !isActive && (
                  <motion.div
                    layoutId="hoverBackground"
                    className="absolute inset-0 bg-gradient-to-r from-gray-700/50 to-gray-600/50 rounded-xl -z-10"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* FAQ Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <AnimatePresence>
            {faqData[activeCategory === 'all' ? 'services' : activeCategory]?.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`bg-gray-800/50 backdrop-blur-xl rounded-2xl overflow-hidden
                  border border-gray-700/50 transition-all duration-300
                  ${openIndex === index ? 'ring-2 ring-blue-500/50' : ''}`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 flex items-start justify-between text-left"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl ${
                      openIndex === index
                        ? 'bg-blue-500/20 text-blue-400'
                        : 'bg-gray-700/50 text-gray-400'
                    }`}>
                      <faq.icon className="text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                      {faq.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-block px-3 py-1 bg-gray-700/50 text-gray-400 rounded-full text-sm mr-2"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`p-2 rounded-full flex-shrink-0 ${
                      openIndex === index
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-700/50 text-gray-400'
                    }`}
                  >
                    {openIndex === index ? <FiMinus /> : <FiPlus />}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="prose prose-invert max-w-none"
                        dangerouslySetInnerHTML={{ __html: faq.answer.replace(/•/g, '<br>•') }}
                      />
                      
                      <div className="mt-4 flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-4">
                          <button className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors">
                            <BiRocket />
                            <span>Helpful ({faq.helpful})</span>
                          </button>
                        </div>
                        <button className="text-blue-400 hover:text-blue-300 transition-colors">
                          Share
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Contact Support Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-12 border border-blue-500/20"
        >
          <RiTeamLine className="text-5xl text-blue-400 mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-white mb-4">Still have questions?</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our team is here to help. 
            Contact our support team for personalized assistance.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold
              hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            Contact Support
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQSection;