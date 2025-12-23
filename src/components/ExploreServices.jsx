import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ai from '../images/ai.webp';
import aiint from '../images/aiint.webp';
import cloud from '../images/cloud.webp';
import scale from '../images/scale.webp';
import secuter from '../images/secuter.webp';
import speed from '../images/speed.webp';

const ExploreServices = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Enhanced color themes with vibrant gradients
  const themes = {
    primary: 'from-violet-600 to-fuchsia-600',
    secondary: 'from-cyan-500 to-blue-600',
    accent: 'from-amber-500 to-orange-600',
    success: 'from-emerald-500 to-teal-600',
    warning: 'from-rose-500 to-pink-600',
    info: 'from-indigo-500 to-purple-600'
  };

  const slides = [
    {
      id: 1,
      title: "AI & Machine Learning",
      description: "Master AI fundamentals, machine learning algorithms, and practical applications in various industries",
      icon: "🤖",
      color: themes.primary,
      gradient: "bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500",
      image: ai
    },
    {
      id: 2,
      title: "Web Development",
      description: "Full-stack development courses covering modern frameworks, databases, and deployment strategies",
      icon: "💻",
      color: themes.secondary,
      gradient: "bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500",
      image: speed
    },
    {
      id: 3,
      title: "Cloud Computing",
      description: "Learn cloud infrastructure, AWS, Azure, and Google Cloud platforms with hands-on projects",
      icon: "☁️",
      color: themes.info,
      gradient: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
      image: cloud
    },
    {
      id: 4,
      title: "Data Science",
      description: "Comprehensive data analysis, visualization, and statistical modeling techniques",
      icon: "📊",
      color: themes.success,
      gradient: "bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500",
      image: aiint
    },
    {
      id: 5,
      title: "Cybersecurity",
      description: "Protect digital assets with ethical hacking, network security, and threat analysis skills",
      icon: "🔒",
      color: themes.warning,
      gradient: "bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500",
      image: scale
    },
    {
      id: 6,
      title: "Mobile Development",
      description: "Build cross-platform mobile applications using React Native, Flutter, and native technologies",
      icon: "📱",
      color: themes.accent,
      gradient: "bg-gradient-to-r from-amber-500 via-orange-500 to-red-500",
      image: secuter
    }
  ];

  const services = [
    {
      title: "Corporate Training",
      description: "Customized learning solutions for organizations looking to upskill their teams with the latest technologies",
      icon: "🏢",
      link: "/services",
      color: themes.primary,
      gradient: "bg-gradient-to-r from-violet-500 to-fuchsia-500",
      image: cloud
    },
    {
      title: "Individual Learning",
      description: "Self-paced courses and guided learning paths for personal skill development and career advancement",
      icon: "🎓",
      link: "/services",
      color: themes.secondary,
      gradient: "bg-gradient-to-r from-cyan-500 to-blue-500",
      image: aiint
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-pink-900/20 overflow-x-hidden">
      {/* Enhanced Hero Section with Floating Particles */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 pb-8 min-[320px]:pb-10 sm:pb-12 px-3 min-[320px]:px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Particle Background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              animate={{
                y: [0, -100, 0],
                x: [0, Math.sin(i) * 40, 0],
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
          
          {/* Animated Gradient Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-violet-500/30 to-fuchsia-500/30 rounded-full blur-3xl"
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
            className="absolute bottom-1/4 right-1/4 w-56 h-56 sm:w-80 sm:h-80 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl"
          />
        </div>

        {/* Background Image with Enhanced Overlay */}
        <div className="absolute inset-0">
          <img
            src="hero.png"
            alt="Online Education Platform"
            className="w-full h-full object-cover object-center scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-purple-900/40 to-pink-900/30 backdrop-blur-[2px]"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10 w-full px-2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="mb-4 min-[320px]:mb-6 sm:mb-8 mt-4 min-[320px]:mt-6 sm:mt-8"
          >
            {/* Enhanced Main Heading */}
            <motion.div variants={fadeInUp}>
              <h1 className="text-2xl min-[320px]:text-2xl min-[375px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 min-[320px]:mb-5 sm:mb-8 leading-tight">
                <span className="block text-xl min-[320px]:text-xl min-[375px]:text-2xl sm:text-3xl md:text-4xl mb-3">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Skill Development
                  </span>
                </span>
                <span className="block mt-2 min-[320px]:mt-2 sm:mt-4">
                  <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent text-2xl min-[320px]:text-2xl min-[375px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                    Future-Ready Learning
                  </span>
                </span>
              </h1>
            </motion.div>

            {/* Enhanced Description */}
            <motion.div variants={fadeInUp}>
              <p className="text-sm min-[320px]:text-base sm:text-lg md:text-xl text-white/90 max-w-xs min-[320px]:max-w-sm sm:max-w-md lg:max-w-2xl mx-auto mb-6 min-[320px]:mb-7 sm:mb-12 leading-relaxed px-2">
                Master in-demand skills with industry-expert instructors and hands-on projects.
                <span className="block mt-2 min-[320px]:mt-2 sm:mt-3 text-white/70 text-xs min-[320px]:text-sm sm:text-base md:text-lg">
                  Transform your career with cutting-edge online education.
                </span>
              </p>
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-col min-[320px]:flex-row gap-2 min-[320px]:gap-3 sm:gap-4 md:gap-6 justify-center items-center px-2">
              <Link
                to="/contact"
                className="group relative bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white px-4 min-[320px]:px-5 sm:px-8 md:px-10 lg:px-12 py-2 min-[320px]:py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold text-sm min-[320px]:text-base sm:text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-xl shadow-lg overflow-hidden w-full min-[320px]:w-auto text-center"
              >
                {/* Animated Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  animate={{ translateX: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
                <span className="relative z-10 flex items-center gap-1 min-[320px]:gap-2 justify-center">
                  <span className="text-lg">🚀</span>
                  Get Learning Consultation
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </Link>

              <Link
                to="/courses"
                className="group relative bg-white/10 backdrop-blur-md border-2 border-white/30 hover:border-white/50 text-white hover:bg-white/20 px-4 min-[320px]:px-5 sm:px-6 md:px-8 lg:px-10 py-2 min-[320px]:py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold text-sm min-[320px]:text-base sm:text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-lg w-full min-[320px]:w-auto text-center overflow-hidden"
              >
                {/* Neon Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10 flex items-center gap-1 min-[320px]:gap-2 justify-center">
                  <span className="text-lg">📚</span>
                  Explore Courses
                  <span className="group-hover:rotate-180 transition-transform duration-500">⚡</span>
                </span>
              </Link>
            </motion.div>

            {/* Enhanced Stats with Animation */}
            <motion.div variants={staggerContainer} className="grid grid-cols-3 gap-3 min-[320px]:gap-4 sm:gap-6 md:gap-8 mt-8 min-[320px]:mt-10 sm:mt-12 md:mt-16 max-w-xs min-[320px]:max-w-sm sm:max-w-md md:max-w-2xl mx-auto px-2">
              {[
                { number: '50K+', label: 'Students', color: themes.primary, icon: '👥' },
                { number: '200+', label: 'Courses', color: themes.secondary, icon: '📚' },
                { number: '98%', label: 'Success Rate', color: themes.success, icon: '⭐' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                  className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/10 hover:border-white/30 transition-all duration-300"
                >
                  <div className="text-lg min-[320px]:text-xl sm:text-2xl mb-1">{stat.icon}</div>
                  <motion.div 
                    className={`text-xl min-[320px]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1 min-[320px]:mb-2`}
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
                  <div className="text-white/70 text-xs min-[320px]:text-sm font-medium leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

       
      </section>

      {/* Enhanced Innovation Slides Section */}
      <section className="py-8 min-[320px]:py-10 sm:py-12 md:py-16 lg:py-20 px-3 min-[320px]:px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-pink-900/20">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent animate-scan-line"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-6 min-[320px]:mb-8 sm:mb-10 md:mb-12 lg:mb-16"
          >
            <h2 className="text-xl min-[320px]:text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 min-[320px]:mb-3 sm:mb-4 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Cutting-Edge Skills
              </span>
            </h2>
            <p className="text-sm min-[320px]:text-base sm:text-lg lg:text-xl text-gray-300 max-w-xs min-[320px]:max-w-sm sm:max-w-md md:max-w-2xl mx-auto leading-relaxed">
              Master the Most In-Demand Technologies
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col lg:flex-row gap-4 min-[320px]:gap-5 sm:gap-6 md:gap-8 lg:gap-12"
          >
            {/* Main Slide with Enhanced Animation */}
            <motion.div variants={scaleIn} className="w-full lg:w-1/2">
              <div className="relative h-48 min-[320px]:h-52 sm:h-64 md:h-72 lg:h-80 xl:h-96 rounded-2xl overflow-hidden group">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slides[activeSlide].image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-purple-900/60 to-pink-900/50"></div>
                </motion.div>
                
                <div className="relative z-10 h-full flex items-center justify-center p-3 min-[320px]:p-4 sm:p-6 lg:p-8">
                  <div className="text-center max-w-md mx-auto">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`text-3xl min-[320px]:text-4xl sm:text-5xl lg:text-6xl mb-2 min-[320px]:mb-3 sm:mb-4`}
                    >
                      {slides[activeSlide].icon}
                    </motion.div>
                    <h3 className="text-lg min-[320px]:text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 min-[320px]:mb-3 sm:mb-4 leading-tight">
                      {slides[activeSlide].title}
                    </h3>
                    <p className="text-gray-300 text-xs min-[320px]:text-sm sm:text-base lg:text-lg leading-relaxed">
                      {slides[activeSlide].description}
                    </p>
                  </div>
                </div>
                
                <div className={`absolute inset-0 bg-gradient-to-br ${slides[activeSlide].color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
              </div>
            </motion.div>

            {/* Enhanced Slide Navigation */}
            <motion.div variants={staggerContainer} className="w-full lg:w-1/2">
              <div className="grid grid-cols-2 min-[320px]:grid-cols-2 min-[425px]:grid-cols-3 gap-2 min-[320px]:gap-3 sm:gap-4 lg:gap-6 h-full">
                {slides.map((slide, index) => (
                  <motion.div
                    key={slide.id}
                    variants={scaleIn}
                    whileHover={{ scale: 1.05, y: -5 }}
                    onMouseEnter={() => setHoveredCard(slide.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className="relative overflow-hidden rounded-xl sm:rounded-2xl group cursor-pointer"
                  >
                    <button
                      onClick={() => setActiveSlide(index)}
                      className={`relative w-full h-full p-2 min-[320px]:p-3 sm:p-4 lg:p-5 text-left transition-all duration-500 min-h-[80px] min-[320px]:min-h-[90px] sm:min-h-[100px] lg:min-h-[120px] ${
                        activeSlide === index
                          ? `bg-gradient-to-br ${slide.color} text-white shadow-2xl scale-105`
                          : 'bg-white/10 text-gray-300 hover:bg-white/20 backdrop-blur-sm'
                      }`}
                    >
                      <div 
                        className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                        style={{ backgroundImage: `url(${slide.image})` }}
                      ></div>
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                      
                      <div className="relative z-10 h-full flex flex-col justify-center">
                        <motion.div 
                          animate={hoveredCard === slide.id ? { rotate: 360 } : {}}
                          transition={{ duration: 0.6 }}
                          className={`text-lg min-[320px]:text-xl sm:text-2xl lg:text-3xl mb-1 min-[320px]:mb-2 ${
                            activeSlide === index ? 'animate-pulse' : ''
                          }`}
                        >
                          {slide.icon}
                        </motion.div>
                        <h4 className="font-semibold text-xs min-[320px]:text-sm sm:text-base lg:text-lg mb-1 leading-tight line-clamp-1">
                          {slide.title}
                        </h4>
                        <p className="text-xs opacity-80 line-clamp-2 leading-tight hidden min-[375px]:block">
                          {slide.description}
                        </p>
                      </div>
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Animated Slide Indicators */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex justify-center mt-4 min-[320px]:mt-5 sm:mt-6 lg:mt-8 space-x-1 min-[320px]:space-x-2 sm:space-x-3"
          >
            {slides.map((_, index) => (
              <motion.button
                key={index}
                variants={scaleIn}
                onClick={() => setActiveSlide(index)}
                className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                  activeSlide === index
                    ? `bg-gradient-to-r ${slides[index].color.replace('from-', '').replace('to-', '')}`
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                style={{
                  width: activeSlide === index ? '2.5rem' : '0.5rem',
                  height: activeSlide === index ? '0.5rem' : '0.5rem',
                }}
                whileHover={{ scale: 1.2 }}
              >
                {activeSlide === index && (
                  <motion.div
                    className="absolute inset-0 bg-white/30"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-8 min-[320px]:py-10 sm:py-12 md:py-16 lg:py-20 px-3 min-[320px]:px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-purple-900/30 to-pink-900/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(168,85,247,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-6 min-[320px]:mb-8 sm:mb-10 md:mb-12 lg:mb-16"
          >
            <h2 className="text-xl min-[320px]:text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 min-[320px]:mb-3 sm:mb-4 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Our Learning Solutions
              </span>
            </h2>
            <p className="text-sm min-[320px]:text-base sm:text-lg lg:text-xl text-gray-300 max-w-xs min-[320px]:max-w-sm sm:max-w-md md:max-w-2xl mx-auto leading-relaxed">
              Tailored Education Programs for Every Need
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-4 min-[320px]:gap-5 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl p-4 min-[320px]:p-5 sm:p-6 lg:p-8 text-white transition-all duration-500 min-h-[200px] min-[320px]:min-h-[220px] sm:min-h-[250px] lg:min-h-[300px]"
                style={{ animationDelay: `${index * 300}ms` }}
              >
                {/* Animated Background Image */}
                <motion.div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                  animate={{
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                ></motion.div>
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-90 group-hover:opacity-80 transition-opacity duration-500`}></div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="text-3xl min-[320px]:text-4xl sm:text-5xl lg:text-6xl mb-3 min-[320px]:mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300"
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-lg min-[320px]:text-xl sm:text-2xl lg:text-3xl font-bold mb-2 min-[320px]:mb-3 sm:mb-4 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-white/80 mb-4 min-[320px]:mb-5 sm:mb-6 lg:mb-8 leading-relaxed text-sm min-[320px]:text-base sm:text-lg lg:text-xl">
                    {service.description}
                  </p>
                  <Link
                    to="/404"
                    className="group/link inline-flex items-center gap-1 min-[320px]:gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 px-3 min-[320px]:px-4 sm:px-5 lg:px-6 xl:px-8 py-2 min-[320px]:py-2.5 sm:py-3 lg:py-3.5 xl:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 text-sm min-[320px]:text-base sm:text-lg w-fit overflow-hidden"
                  >
                    {/* Button Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/link:translate-x-full transition-transform duration-700"></div>
                    <span className="relative z-10">Learn More</span>
                    <span className="relative z-10 group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Final CTA Section */}
      <section className="py-8 min-[320px]:py-10 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden">
        {/* Particle Background */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              animate={{
                y: [0, -80, 0],
                x: [0, Math.cos(i) * 30, 0],
                opacity: [0.1, 0.6, 0.1],
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
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/40 via-purple-900/50 to-pink-900/40"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-3 min-[320px]:px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-xl min-[320px]:text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 min-[320px]:mb-3 sm:mb-4 leading-tight">
                Ready to <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Transform</span> Your Skills?
              </h2>
              <p className="text-sm min-[320px]:text-base sm:text-lg lg:text-xl mb-4 min-[320px]:mb-5 sm:mb-6 lg:mb-8 text-gray-300 leading-relaxed">
                Start your learning journey today with industry-leading courses and expert instructors
              </p>
            </motion.div>
            
            <motion.div variants={scaleIn}>
              <Link 
                to="/contact" 
                className="group inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 min-[320px]:px-5 sm:px-6 lg:px-8 py-2 min-[320px]:py-2.5 sm:py-3 lg:py-4 rounded-xl sm:rounded-2xl font-semibold text-sm min-[320px]:text-base sm:text-lg md:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl w-full sm:w-auto text-center overflow-hidden"
              >
                {/* Animated Shine */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  animate={{ translateX: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span className="text-xl">🚀</span>
                  Start Learning Today
                  <span className="group-hover:rotate-90 transition-transform duration-500">✨</span>
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced CSS Animations */}
      <style jsx global>{`
        @keyframes scanLine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-scan-line {
          animation: scanLine 10s linear infinite;
        }

        .line-clamp-1 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
        }

        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
      `}</style>
    </div>
  );
};

export default ExploreServices;