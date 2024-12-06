import React from "react";
import { motion } from "framer-motion"; // Importing framer-motion for animations
import logo from "../assets/logo1.png"; // Import your logo image

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
     
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="font-bold mb-2 text-lg">About Us</h2>
            <hr className="mb-2" />
            <p className="mb-2">
              RAM Web Solution is a next-gen software company providing IT
              training and internships.
            </p>
            
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="font-bold mb-2 text-lg">Services</h2>
            <hr className="mb-2" />
            <ul>
              <li className="mb-2">Web Development</li>
              <li className="mb-2">Web Design</li>
              <li className="mb-2">Digital Marketing</li>
            </ul>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="font-bold mb-2 text-lg">Quick Links</h2>
            <hr className="mb-2" />
            <ul>
              <li className="mb-2">
                <a href="about-page.html">About</a>
              </li>
              <li className="mb-2">
                <a href="contact-page.html">Contact</a>
              </li>
              <li className="mb-2">
                <a href="courses.html">Courses</a>
              </li>
            </ul>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="font-bold mb-2 text-lg">Address</h2>
            <hr className="mb-2" />
            <address className="mb-2">
             K10 Atlantis, C tower, Near Genda Circle, Sara
              Bhai Campus, Opp Honest Restaurant, Vadodara, Gujarat – 390007
            </address>
            <a href="tel:9998048275" className="mb-2">
              <i className="fas fa-phone-alt"></i> +91 99980 48275
            </a>
          </motion.div>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row justify-between items-center">
          <motion.p
            className="text-sm"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            © 2024 Ram Web Solution. All Rights Reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
