import React, { useState } from 'react';
import { 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaPhone, 
  FaPaperPlane, 
  FaUserCircle, 
  FaCommentDots 
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Web3Forms API submission
    const formDataToSend = new FormData();
    formDataToSend.append('access_key', '373fa754-1f0e-438a-aadd-40f3ad11e314');
    formDataToSend.append('subject', 'New Contact Form Submission from Web3Forms');
    formDataToSend.append('from_name', 'My Website');
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('message', formData.message);
    
    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Reset form after successful submission
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    })
    .catch((error) => {
        console.error('Error:', error);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-16 px-4">
      {/* Modern Container */}
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white shadow-2xl rounded-3xl p-10 transform transition-all hover:scale-105">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact Information</h2>
            
            {/* Contact Details */}
            <div className="space-y-6">
              {/* Location */}
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-blue-500 text-3xl" />
                <div>
                  <h3 className="font-semibold text-gray-700">Address</h3>
                  <p className="text-gray-500"> Genda Circle, Sara
                  Bhai Campus, Opp Honest Restaurant, Vadodara, Gujarat – 390007</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-green-500 text-3xl" />
                <div>
                  <h3 className="font-semibold text-gray-700">Email</h3>
                  <a  href="https://wa.me/919998048275" className="text-gray-500">sales@ramwebsolution.com</a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4">
                <FaPhone className="text-purple-500 text-3xl" />
                <div>
                  <h3 className="font-semibold text-gray-700">Phone</h3>
                  <a href='tel:919998048275' className="text-gray-500">9998048275</a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-2xl rounded-3xl p-10 transform transition-all hover:scale-105">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="relative">
                <FaUserCircle className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-all"
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-all"
                />
              </div>

              {/* Message Textarea */}
              <div className="relative">
                <FaCommentDots className="absolute left-4 top-5 text-gray-400" />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl h-32 focus:outline-none focus:border-blue-500 transition-all"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <FaPaperPlane />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
