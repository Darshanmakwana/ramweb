import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiClock, FiUser, FiTag, FiArrowRight, FiSearch } from "react-icons/fi";

const BlogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredPost, setHoveredPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Sample blog posts data
 const blogPosts = [
  // Technology Category
  {
    id: 1,
    title: "The Future of AI in Web Development: 2024 Trends",
    excerpt:
      "Discover how artificial intelligence is revolutionizing web development, from automated coding to intelligent user experiences.",
    category: "technology",
    author: {
      name: "John Smith",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1470&auto=format&fit=crop",
    readTime: "5 min read",
    date: "Jan 15, 2024",
    tags: ["AI", "Web Development", "Technology"],
    isPopular: true,
    isFeatured: true,
  },
  {
    id: 2,
    title: "Cloud Computing: AWS vs Azure vs Google Cloud in 2024",
    excerpt:
      "A comprehensive comparison of major cloud platforms to help you choose the right solution for your business needs.",
    category: "technology",
    author: {
      name: "Emily Wilson",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1472&auto=format&fit=crop",
    readTime: "8 min read",
    date: "Jan 18, 2024",
    tags: ["Cloud Computing", "AWS", "Azure"],
  },
  {
    id: 3,
    title: "5G Technology and Its Impact on Web Applications",
    excerpt:
      "Explore how 5G technology is transforming web applications and creating new possibilities for digital experiences.",
    category: "technology",
    author: {
      name: "Michael Chen",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1470&auto=format&fit=crop",
    readTime: "6 min read",
    date: "Jan 20, 2024",
    tags: ["5G", "Web Apps", "Innovation"],
  },
  {
    id: 4,
    title: "Blockchain Technology in Modern Web Applications",
    excerpt:
      "Understanding the implementation and benefits of blockchain technology in web development.",
    category: "technology",
    author: {
      name: "Sarah Johnson",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    image:
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1632&auto=format&fit=crop",
    readTime: "7 min read",
    date: "Jan 22, 2024",
    tags: ["Blockchain", "Web3", "Technology"],
  },
  {
    id: 5,
    title: "IoT Integration in Web Development",
    excerpt:
      "Learn how to integrate IoT devices with web applications for enhanced functionality and user experience.",
    category: "technology",
    author: {
      name: "David Brown",
      avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1470&auto=format&fit=crop",
    readTime: "6 min read",
    date: "Jan 24, 2024",
    tags: ["IoT", "Integration", "Web Development"],
  },

  // Development Category
  {
    id: 6,
    title: "Modern JavaScript Features Every Developer Should Know",
    excerpt:
      "Essential JavaScript features and best practices for modern web development in 2024.",
    category: "development",
    author: {
      name: "Alex Turner",
      avatar: "https://randomuser.me/api/portraits/men/6.jpg",
    },
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1469&auto=format&fit=crop",
    readTime: "7 min read",
    date: "Jan 25, 2024",
    tags: ["JavaScript", "Development", "Coding"],
    isPopular: true,
  },
  {
    id: 7,
    title: "Building Scalable React Applications",
    excerpt:
      "Best practices and architectural patterns for building large-scale React applications.",
    category: "development",
    author: {
      name: "Lisa Chen",
      avatar: "https://randomuser.me/api/portraits/women/7.jpg",
    },
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1470&auto=format&fit=crop",
    readTime: "8 min read",
    date: "Jan 26, 2024",
    tags: ["React", "Architecture", "Frontend"],
  },
  {
    id: 8,
    title: "API Development with Node.js and Express",
    excerpt:
      "A comprehensive guide to building robust APIs using Node.js and Express framework.",
    category: "development",
    author: {
      name: "Mark Wilson",
      avatar: "https://randomuser.me/api/portraits/men/8.jpg",
    },
    image:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1474&auto=format&fit=crop",
    readTime: "6 min read",
    date: "Jan 27, 2024",
    tags: ["Node.js", "API", "Backend"],
  },
  {
    id: 9,
    title: "Testing Strategies for Modern Web Applications",
    excerpt:
      "Effective testing approaches and tools for ensuring web application quality.",
    category: "development",
    author: {
      name: "Rachel Green",
      avatar: "https://randomuser.me/api/portraits/women/9.jpg",
    },
    image:
      "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1506&auto=format&fit=crop",
    readTime: "7 min read",
    date: "Jan 28, 2024",
    tags: ["Testing", "QA", "Development"],
  },
  {
    id: 10,
    title: "Database Design Patterns and Best Practices",
    excerpt:
      "Learn about efficient database design patterns for modern web applications.",
    category: "development",
    author: {
      name: "Chris Anderson",
      avatar: "https://randomuser.me/api/portraits/men/10.jpg",
    },
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop",
    readTime: "9 min read",
    date: "Jan 29, 2024",
    tags: ["Database", "Architecture", "Backend"],
  },

  // Design Category
  {
    id: 11,
    title: "UI/UX Design Trends for 2024",
    excerpt:
      "Explore the latest design trends shaping the future of digital experiences.",
    category: "design",
    author: {
      name: "Sophie Taylor",
      avatar: "https://randomuser.me/api/portraits/women/11.jpg",
    },
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1472&auto=format&fit=crop",
    readTime: "5 min read",
    date: "Jan 30, 2024",
    tags: ["UI/UX", "Design", "Trends"],
    isPopular: true,
  },
  {
    id: 12,
    title: "Designing for Accessibility: A Complete Guide",
    excerpt:
      "Best practices for creating accessible web designs that work for everyone.",
    category: "design",
    author: {
      name: "James Miller",
      avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    image:
      "https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=1471&auto=format&fit=crop",
    readTime: "6 min read",
    date: "Jan 31, 2024",
    tags: ["Accessibility", "Design", "Inclusion"],
  },
  {
    id: 13,
    title: "Color Theory in Web Design",
    excerpt:
      "Understanding and applying color theory principles in web design projects.",
    category: "design",
    author: {
      name: "Emma Davis",
      avatar: "https://randomuser.me/api/portraits/women/13.jpg",
    },
    image:
      "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?q=80&w=1470&auto=format&fit=crop",
    readTime: "7 min read",
    date: "Feb 1, 2024",
    tags: ["Color Theory", "Design", "Web Design"],
  },
  {
    id: 14,
    title: "Responsive Design Best Practices",
    excerpt:
      "Creating seamless experiences across all devices with responsive design.",
    category: "design",
    author: {
      name: "Tom Harris",
      avatar: "https://randomuser.me/api/portraits/men/14.jpg",
    },
    image:
      "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?q=80&w=1470&auto=format&fit=crop",
    readTime: "8 min read",
    date: "Feb 2, 2024",
    tags: ["Responsive", "Design", "Mobile"],
  },
  {
    id: 15,
    title: "Design Systems: From Theory to Implementation",
    excerpt:
      "Building and maintaining effective design systems for web applications.",
    category: "design",
    author: {
      name: "Nina Patel",
      avatar: "https://randomuser.me/api/portraits/women/15.jpg",
    },
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1470&auto=format&fit=crop",
    readTime: "9 min read",
    date: "Feb 3, 2024",
    tags: ["Design Systems", "UI", "Documentation"],
  },
];

  // Dynamic categories with counts
  const categories = [
    { 
      id: 'all', 
      label: 'All Posts', 
      count: blogPosts.length 
    },
    { 
      id: 'technology', 
      label: 'Technology', 
      count: blogPosts.filter(post => post.category === 'technology').length 
    },
    { 
      id: 'development', 
      label: 'Development', 
      count: blogPosts.filter(post => post.category === 'development').length 
    },
    { 
      id: 'design', 
      label: 'Design', 
      count: blogPosts.filter(post => post.category === 'design').length 
    }
  ];

  // Handle category change with loading state
  const handleCategoryChange = (categoryId) => {
    setIsLoading(true);
    setSelectedCategory(categoryId);
    setTimeout(() => setIsLoading(false), 300);
  };

  // Filter posts by category and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const searchTerm = searchQuery.toLowerCase();
    const matchesSearch = 
      post.title.toLowerCase().includes(searchTerm) ||
      post.excerpt.toLowerCase().includes(searchTerm) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium inline-block mb-4"
          >
            Our Blog
          </motion.span>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Latest Insights & News
          </h1>

          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Stay updated with the latest trends, insights, and innovations in technology and development.
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative w-full md:w-96"
            >
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl
                  focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
                  transition-all duration-300"
              />
            </motion.div>

            {/* Category Pills */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-4 py-2 rounded-xl transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category.label}
                  <span className="ml-2 text-sm opacity-80">({category.count})</span>
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Category Indicator */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            {selectedCategory === 'all' 
              ? 'All Posts' 
              : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Posts`}
          </h2>
          <p className="text-gray-600">
            Showing {filteredPosts.length} posts
          </p>
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          /* Blog Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onHoverStart={() => setHoveredPost(post.id)}
                    onHoverEnd={() => setHoveredPost(null)}
                    className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {/* Image Container */}
                    <div className="relative h-64 overflow-hidden">
                      <motion.img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        animate={{
                          scale: hoveredPost === post.id ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.4 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                        {post.category}
                      </span>

                      <h2 className="text-xl font-bold text-gray-900 mt-4 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {post.title}
                      </h2>

                      <p className="text-gray-600 mb-4">{post.excerpt}</p>

                      {/* Meta Information */}
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <img
                              src={post.author.avatar}
                              alt={post.author.name}
                              className="w-8 h-8 rounded-full mr-2"
                            />
                            <span>{post.author.name}</span>
                          </div>
                          <div className="flex items-center">
                            <FiClock className="mr-1" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>

                      {/* Read More Button */}
                      <motion.button
                        whileHover={{ x: 5 }}
                        className="mt-4 flex items-center text-blue-600 font-medium group"
                      >
                        Read More
                        <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </div>

                    {/* Tags */}
                    <div className="px-6 pb-6 flex flex-wrap gap-2">
                      {post.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </motion.article>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full text-center py-12"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No posts found
                  </h3>
                  <p className="text-gray-600">
                    {searchQuery 
                      ? `No results found for "${searchQuery}"`
                      : `No posts available in ${selectedCategory} category`}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* Load More Button */}
        {filteredPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-blue-500 text-white rounded-xl font-medium
                hover:bg-blue-600 transition-colors duration-300
                shadow-lg shadow-blue-500/25"
            >
              Load More Articles
            </motion.button>
          </motion.div>
        )}

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-20 text-center bg-blue-50 rounded-2xl p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get the latest articles, news and insights delivered directly to your inbox.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 bg-white border border-gray-200 rounded-xl
                focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-blue-500 text-white rounded-xl font-medium
                hover:bg-blue-600 transition-colors duration-300"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogSection;

 