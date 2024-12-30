import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExpand, FaHeart, FaShare } from 'react-icons/fa';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Gallery data with Unsplash images
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop",
      title: "Modern Workspace",
      category: "Office",
      description: "Contemporary tech office setup with multiple displays",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&auto=format&fit=crop",
      title: "Team Collaboration",
      category: "Development",
      description: "Development team working on coding project",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&auto=format&fit=crop",
      title: "Code Development",
      category: "Programming",
      description: "Clean code on modern display",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop",
      title: "Team Meeting",
      category: "Business",
      description: "Tech team discussion and planning",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&auto=format&fit=crop",
      title: "Developer Setup",
      category: "Workspace",
      description: "Professional development environment",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&auto=format&fit=crop",
      title: "Mobile Development",
      category: "Development",
      description: "Mobile app development process",
    },
  ];

  return (
    <div className="min-h-screen bg-[#ffffff] py-20 px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-6xl font-bold text-black mb-4">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">Gallery</span>
        </h1>
        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full"></div>
      </motion.div>

      {/* Gallery Grid */}
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {/* Featured Image - Large */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="col-span-12 md:col-span-8 row-span-2 group relative h-[600px] overflow-hidden rounded-3xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-indigo-600/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img
              src={galleryImages[0].src}
              alt={galleryImages[0].title}
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl font-bold text-white mb-2">{galleryImages[0].title}</h3>
                <p className="text-gray-300">By {galleryImages[0].photographer}</p>
              </div>
            </div>
          </motion.div>

          {/* Tall Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="col-span-12 md:col-span-4 row-span-3 group relative h-[600px] overflow-hidden rounded-3xl"
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-violet-600/20 to-indigo-600/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img
              src={galleryImages[1].src}
              alt={galleryImages[1].title}
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{galleryImages[1].title}</h3>
                <p className="text-gray-300">By {galleryImages[1].photographer}</p>
              </div>
            </div>
          </motion.div>

          {/* Bottom Grid Images */}
          {galleryImages.slice(2).map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + (index * 0.1) }}
              className={`col-span-12 ${
                index === 2 ? 'md:col-span-8' : 'md:col-span-4'
              } row-span-1 group relative h-[300px] overflow-hidden rounded-3xl`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-indigo-600/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{image.title}</h3>
                  <p className="text-gray-300">By {image.photographer}</p>
                </div>
              </div>
              
              {/* Hover Icons */}
              <div className="absolute top-4 right-4 space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                <button className="p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-colors">
                  <FaExpand className="text-white text-sm" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .grid {
          grid-auto-rows: minmax(200px, auto);
        }
        
        @media (min-width: 768px) {
          .grid {
            grid-auto-rows: minmax(250px, auto);
          }
        }

        .image-hover {
          @apply relative overflow-hidden rounded-3xl transition-all duration-300;
        }

        .image-hover:hover img {
          @apply scale-110;
        }
      `}</style>
    </div>
  );
};

export default Gallery;