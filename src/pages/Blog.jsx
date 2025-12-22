import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Blog = () => {
  // Sample blog posts data
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: "The Future of Online Learning in 2024",
      excerpt: "Discover how AI and VR are transforming digital education platforms.",
      category: "Trends",
      date: "Mar 15, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&h=250&fit=crop",
      gradient: "from-violet-500 to-purple-600"
    },
    {
      id: 2,
      title: "Interactive Learning: Engaging Students Virtually",
      excerpt: "Techniques to keep students engaged during online sessions.",
      category: "Teaching",
      date: "Mar 10, 2024",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=250&fit=crop",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      id: 3,
      title: "Best Tools for Online Education Platforms",
      excerpt: "A comprehensive review of essential tools for educators.",
      category: "Tools",
      date: "Mar 5, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      id: 4,
      title: "Accessibility in Digital Education",
      excerpt: "Making online learning inclusive for all students.",
      category: "Accessibility",
      date: "Feb 28, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
      gradient: "from-amber-500 to-orange-600"
    },
    {
      id: 5,
      title: "Gamification Strategies for E-Learning",
      excerpt: "How game elements can boost learning outcomes.",
      category: "Engagement",
      date: "Feb 20, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=400&h=250&fit=crop",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      id: 6,
      title: "Data Analytics in Education Technology",
      excerpt: "Using data to improve student performance and engagement.",
      category: "Analytics",
      date: "Feb 15, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      gradient: "from-indigo-500 to-violet-600"
    }
  ]);

  const [categories] = useState([
    "All", "Trends", "Teaching", "Tools", "Accessibility", "Engagement", "Analytics"
  ]);
  
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [isVisible, setIsVisible] = useState(false);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scaleIn = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const floatAnimation = {
    hidden: { y: 0 },
    visible: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Filter posts by category
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredPosts(blogPosts);
    } else {
      const filtered = blogPosts.filter(post => post.category === selectedCategory);
      setFilteredPosts(filtered);
    }
  }, [selectedCategory, blogPosts]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen mt-8 bg-gradient-to-br from-slate-50 via-purple-50/20 to-pink-50/20">
      {/* Enhanced Hero Section with Floating Particles */}
      <section className="relative overflow-hidden py-16 md:py-24">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full"
              animate={{
                y: [0, -80, 0],
                x: [0, Math.sin(i) * 30, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [0.5, 1.5, 0.5]
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}
          
          {/* Gradient Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.2, 0.4]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6">
                <span className="block text-xl md:text-3xl mb-4">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Course Insights & Learning
                  </span>
                </span>
                <span className="block mt-4">
                  <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600 bg-clip-text text-transparent">
                    Education Technology Blog
                  </span>
                </span>
              </h1>
            </motion.div>

            <motion.div variants={fadeInUp} className="mb-10">
              <p className="text-lg md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto">
                Stay updated with the latest trends, tools, and strategies in digital learning
              </p>
              <motion.button 
                onClick={() => scrollToSection('articles')}
                className="group relative bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl shadow-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  animate={{ translateX: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  🎓 Explore Courses Content
                  <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                </span>
              </motion.button>
            </motion.div>

            {/* Animated Stats */}
            <motion.div variants={staggerContainer} className="grid grid-cols-3 gap-6 max-w-xl mx-auto">
              {[
                { number: '50K+', label: 'Readers', color: 'from-violet-500 to-purple-600', icon: '👥' },
                { number: '200+', label: 'Articles', color: 'from-cyan-500 to-blue-600', icon: '📚' },
                { number: '98%', label: 'Engagement', color: 'from-emerald-500 to-teal-600', icon: '⭐' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                  className="text-center bg-white/50 backdrop-blur-sm rounded-2xl p-4 border border-white/30 hover:border-white/50 transition-all duration-300"
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <motion.div 
                    className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: index * 0.2
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-slate-600 text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Featured Post */}
      <motion.section
        id="featured"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 mb-16"
      >
        <motion.div
          variants={floatAnimation}
          animate="visible"
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
              Featured Course Insights
            </span>
          </h2>
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto">
            Discover cutting-edge educational content
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scaleIn}
          whileHover={{ scale: 1.01 }}
          className="bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-2xl overflow-hidden border border-slate-100"
        >
          <div className="md:flex">
            <div className="md:w-2/3 p-8 md:p-12">
              <motion.span 
                className="inline-block bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🔥 Featured
              </motion.span>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                The Evolution of Virtual Classrooms in Modern Education
              </h3>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                How technology is reshaping traditional learning environments and creating 
                immersive educational experiences that bridge geographical gaps. Explore the 
                future of digital learning platforms.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full flex items-center justify-center text-white text-lg font-bold">
                    JL
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Jessica Lee</p>
                    <p className="text-slate-500 text-sm">Senior Education Specialist</p>
                  </div>
                </div>
                <Link 
                  to="/404" 
                  className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center gap-2">
                    Read Full Article
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                </Link>
              </div>
            </div>
            <div className="md:w-1/3 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10"></div>
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=400&fit=crop"
                alt="Virtual Classroom"
                className="w-full h-64 md:h-full object-cover transform hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Enhanced Articles Section */}
<section id="articles" className="container mx-auto px-4 mb-16">
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={staggerContainer}
    className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12"
  >
    <motion.div variants={fadeInUp}>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
        Latest <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">Course Content</span>
      </h2>
      <p className="text-slate-600">Explore trending educational topics</p>
    </motion.div>
    
    {/* Enhanced Category Filter */}
    <motion.div variants={staggerContainer} className="flex flex-wrap gap-2 mt-4 md:mt-0">
      {categories.map((category, index) => (
        <motion.button
          key={category}
          variants={scaleIn}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSelectedCategory(category)}
          className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 transform ${
            selectedCategory === category
              ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-lg'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          {category}
        </motion.button>
      ))}
    </motion.div>
  </motion.div>

  {/* Enhanced Blog Posts Grid */}
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={staggerContainer}
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
  >
    {filteredPosts.map((post, index) => (
      <motion.article
        key={post.id}
        variants={fadeInUp}
        whileHover={{ y: -8, scale: 1.02 }}
        className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100"
      >
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
        
        {/* Image Container */}
        <div className="relative overflow-hidden h-48">
          <motion.img 
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            whileHover={{ scale: 1.1 }}
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${post.gradient} opacity-20`}></div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <motion.span 
              className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${post.gradient} text-white`}
              whileHover={{ scale: 1.1 }}
            >
              {post.category}
            </motion.span>
            <span className="text-slate-500 text-sm">{post.date}</span>
          </div>
          
          {/* Remove Link from title or fix it */}
          <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-violet-600 transition-colors duration-300">
            {post.title}
          </h3>
          
          <p className="text-slate-600 mb-4 line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <span className="text-slate-500 text-sm flex items-center gap-1">
              ⏱️ {post.readTime}
            </span>
            
            {/* SOLUTION 1: Use a working route that exists */}
            <Link 
              to="/courses" 
              className="group/link text-violet-600 hover:text-violet-700 font-semibold transition-colors duration-300 flex items-center gap-1"
            >
              Read More
              <span className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
            </Link>
            
            {/* OR SOLUTION 2: Use a button with onClick */}
            {/* <button 
              onClick={() => {
                console.log('Read more clicked for:', post.title);
                // You can add modal or other functionality here
              }}
              className="group/link text-violet-600 hover:text-violet-700 font-semibold transition-colors duration-300 flex items-center gap-1"
            >
              Read More
              <span className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
            </button> */}
            
            {/* OR SOLUTION 3: Create dynamic blog post routes */}
            {/* <Link 
              to={`/blog/${post.id}`}
              className="group/link text-violet-600 hover:text-violet-700 font-semibold transition-colors duration-300 flex items-center gap-1"
            >
              Read More
              <span className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
            </Link> */}
          </div>
        </div>
      </motion.article>
    ))}
  </motion.div>
</section>

      {/* Enhanced Newsletter Section */}
      <motion.section
        id="newsletter"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative overflow-hidden py-16"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              animate={{
                y: [0, -60, 0],
                x: [0, Math.cos(i) * 20, 0],
                opacity: [0.1, 0.5, 0.1],
                scale: [0.3, 1.1, 0.3]
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}
          
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated with Course Content
            </h2>
            <p className="text-violet-100 text-lg mb-8">
              Get the latest articles and insights on online education delivered to your inbox
            </p>
            
            <motion.form 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-violet-200 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
              />
              <Link 
                to="/404"
                className="group relative bg-white text-violet-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 text-center overflow-hidden"
              >
                {/* Button Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                  animate={{ translateX: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  📧 Subscribe
                  <span className="group-hover:rotate-180 transition-transform duration-500">✨</span>
                </span>
              </Link>
            </motion.form>
            
            <p className="text-violet-200 text-sm mt-4">
              No spam, unsubscribe at any time
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Blog;