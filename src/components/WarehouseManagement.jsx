import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  School,
  Book,
  TrendingUp,
  Analytics,
  Speed,
  Security,
  AutoGraph,
  CheckCircle,
  Timeline,
  Dashboard,
  ShowChart,
  PlayArrow,
  Storage,
  LocationOn,
  SmartToy,
  VideoLibrary,
  Assignment,
  Quiz,
  Groups,
  EmojiEvents,
  Star,
  Rocket,
  Lightbulb,
  TrendingUp as TrendingUpIcon,
  School as SchoolIcon,
  WorkspacePremium
} from "@mui/icons-material";

const WarehouseManagement = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    setIsVisible(true);
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Enhanced Color Theme
  const themeColors = {
    primary: "from-violet-600 to-purple-600",
    secondary: "from-cyan-500 to-blue-500",
    accent: "from-pink-500 to-rose-500",
    success: "from-emerald-500 to-teal-500",
    warning: "from-amber-500 to-orange-500",
    gradient: "from-purple-900/90 via-indigo-900/80 to-pink-900/90"
  };

  const courseFeatures = [
    {
      icon: <VideoLibrary className="text-2xl min-[320px]:text-2xl sm:text-3xl lg:text-4xl" />,
      title: "Interactive Video Lessons",
      description: "Engaging video content with interactive quizzes and real-time progress tracking",
      color: "from-violet-500 to-purple-500",
      delay: 0
    },
    {
      icon: <Assignment className="text-2xl min-[320px]:text-2xl sm:text-3xl lg:text-4xl" />,
      title: "Hands-on Projects",
      description: "Real-world projects and assignments to build practical skills and portfolio",
      color: "from-pink-500 to-rose-500",
      delay: 200
    },
    {
      icon: <Analytics className="text-2xl min-[320px]:text-2xl sm:text-3xl lg:text-4xl" />,
      title: "Progress Analytics",
      description: "AI-powered learning analytics to track progress and recommend improvements",
      color: "from-cyan-500 to-blue-500",
      delay: 300
    }
  ];

  const learningStats = [
    { number: "95%", label: "Completion Rate", icon: <CheckCircle />, color: "text-emerald-400" },
    { number: "50K+", label: "Active Learners", icon: <Groups />, color: "text-cyan-400" },
    { number: "500+", label: "Expert Courses", icon: <Book />, color: "text-violet-400" },
    { number: "24/7", label: "Learning Access", icon: <Speed />, color: "text-pink-400" }
  ];

  const learningProcess = [
    {
      step: "01",
      title: "Course Enrollment",
      description: "Easy enrollment with personalized learning path recommendations",
      icon: <School />,
      color: themeColors.primary
    },
    {
      step: "02",
      title: "Interactive Learning",
      description: "Engage with video lessons, quizzes, and hands-on exercises",
      icon: <VideoLibrary />,
      color: themeColors.secondary
    },
    {
      step: "03",
      title: "Project Work",
      description: "Build real-world projects with expert guidance and peer feedback",
      icon: <Assignment />,
      color: themeColors.accent
    },
    {
      step: "04",
      title: "Skill Assessment",
      description: "Comprehensive assessments to validate your learning and skills",
      icon: <Quiz />,
      color: themeColors.success
    },
    {
      step: "05",
      title: "Certification",
      description: "Earn industry-recognized certificates and showcase achievements",
      icon: <EmojiEvents />,
      color: themeColors.warning
    }
  ];

  const benefitsData = [
    {
      title: "Career Advancement",
      description: "85% of learners report career growth including promotions and new job opportunities",
      improvement: "85%",
      color: themeColors.primary
    },
    {
      title: "Skill Mastery",
      description: "Master in-demand skills with project-based learning and expert mentorship",
      improvement: "500+",
      color: themeColors.secondary
    },
    {
      title: "Learning Flexibility",
      description: "Learn at your own pace with 24/7 access across all devices and platforms",
      improvement: "24/7",
      color: themeColors.accent
    }
  ];

  const popularCourses = [
    { 
      name: "React Mastery", 
      category: "Web Dev", 
      students: 8500, 
      rating: "4.9", 
      description: "Complete React development",
      color: "from-violet-500 to-purple-500"
    },
    { 
      name: "Python Data Science", 
      category: "Data", 
      students: 7200, 
      rating: "4.8", 
      description: "Data analysis with Python",
      color: "from-cyan-500 to-blue-500"
    },
    { 
      name: "Digital Marketing", 
      category: "Business", 
      students: 6800, 
      rating: "4.7", 
      description: "Modern marketing strategies",
      color: "from-emerald-500 to-teal-500"
    },
    { 
      name: "UI/UX Design", 
      category: "Design", 
      students: 5400, 
      rating: "4.9", 
      description: "User-centered design principles",
      color: "from-pink-500 to-rose-500"
    },
    { 
      name: "Cloud Computing", 
      category: "Tech", 
      students: 4900, 
      rating: "4.8", 
      description: "AWS and cloud infrastructure",
      color: "from-amber-500 to-orange-500"
    }
  ];

  // Floating animation variants
  const floatAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-pink-900/20 pt-16">
      {/* Hero Section - Enhanced with Smooth Animations */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/90 to-pink-900/80 text-white py-8 min-[320px]:py-10 sm:py-12 md:py-16 lg:py-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0],
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
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full blur-3xl"
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
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-3 min-[320px]:px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <div className="inline-block mb-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="inline-block"
                >
                  <Rocket className="text-4xl min-[320px]:text-5xl text-cyan-400" />
                </motion.div>
              </div>
              <h1 className="text-2xl min-[320px]:text-2xl min-[375px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 min-[320px]:mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
                Future-Ready <br className="hidden sm:block" /> Online Learning
              </h1>
              <p className="text-sm min-[320px]:text-base sm:text-lg md:text-xl mb-4 min-[320px]:mb-5 sm:mb-8 text-gray-300 max-w-xs min-[320px]:max-w-sm sm:max-w-md lg:max-w-3xl mx-auto px-2 min-[320px]:px-4 leading-relaxed">
                Transform your career with AI-powered courses, hands-on projects, and industry-recognized certifications.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="flex flex-col min-[320px]:flex-row gap-2 min-[320px]:gap-3 sm:gap-4 justify-center items-center px-2">
              <Link 
                to="/courses"
                className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 min-[320px]:px-5 sm:px-6 lg:px-8 py-2 min-[320px]:py-2.5 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl font-semibold text-sm min-[320px]:text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg w-full min-[320px]:w-auto text-center overflow-hidden"
              >
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Star className="text-lg" />
                  Explore All Courses
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Popular Courses Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative max-w-4xl mx-auto mt-6 min-[320px]:mt-7 sm:mt-8 lg:mt-12 px-3 min-[320px]:px-4"
        >
          <motion.div
            variants={floatAnimation}
            animate="animate"
            className="bg-white/10 backdrop-blur-md rounded-2xl p-3 min-[320px]:p-4 sm:p-6 border border-white/20 shadow-2xl"
          >
            <div className="flex flex-col min-[320px]:flex-row items-center justify-between mb-3 min-[320px]:mb-4 gap-1 min-[320px]:gap-2">
              <div className="text-white font-semibold text-sm min-[320px]:text-base flex items-center gap-2">
                <TrendingUpIcon className="text-cyan-400" />
                Trending Courses
              </div>
              <motion.div 
                className="text-cyan-300 text-xs min-[320px]:text-sm"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🚀 Live Enrollment
              </motion.div>
            </div>
            
            {/* Animated Course List */}
            <motion.div variants={staggerContainer} className="space-y-2 min-[320px]:space-y-3">
              {popularCourses.map((course, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center justify-between bg-gradient-to-r from-black/30 to-black/20 rounded-xl p-2 min-[320px]:p-3 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group cursor-pointer backdrop-blur-sm"
                >
                  <div className="flex items-center gap-2 min-[320px]:gap-3 flex-1 min-w-0">
                    <motion.div 
                      className={`w-3 h-3 min-[320px]:w-4 min-[320px]:h-4 rounded-full bg-gradient-to-r ${course.color} flex-shrink-0`}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    />
                    <div className="min-w-0 flex-1">
                      <div className="text-white font-semibold text-xs min-[320px]:text-sm truncate">{course.name}</div>
                      <div className="text-cyan-200 text-xs truncate">{course.description}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 min-[320px]:gap-2 flex-shrink-0">
                    <motion.div 
                      className="text-cyan-300 text-xs min-[320px]:text-sm font-bold"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    >
                      {course.students}
                    </motion.div>
                    <div className="text-gray-400 text-xs">students</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Animated Stats */}
            <div className="grid grid-cols-2 gap-2 min-[320px]:gap-3 mt-3 min-[320px]:mt-4 pt-3 min-[320px]:pt-4 border-t border-white/10">
              {[
                { value: "50K+", label: "Active Learners", color: "text-cyan-300" },
                { value: "95%", label: "Success Rate", color: "text-emerald-300" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className={`${stat.color} text-lg min-[320px]:text-xl font-bold`}>{stat.value}</div>
                  <div className="text-gray-300 text-xs min-[320px]:text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

      
      </section>

      {/* Features Section - Enhanced with Smooth Animations */}
      <section className="py-8 min-[320px]:py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-3 min-[320px]:px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-6 min-[320px]:mb-8 sm:mb-10 md:mb-12 lg:mb-16"
          >
            <h2 className="text-xl min-[320px]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 min-[320px]:mb-4 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Advanced Learning
              </span> Features
            </h2>
            <p className="text-sm min-[320px]:text-base sm:text-lg md:text-xl text-gray-300 max-w-xs min-[320px]:max-w-sm sm:max-w-md lg:max-w-3xl mx-auto px-2 min-[320px]:px-4 leading-relaxed">
              Experience cutting-edge learning technology designed for your success
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 min-[320px]:grid-cols-2 lg:grid-cols-3 gap-3 min-[320px]:gap-4 sm:gap-5 lg:gap-6 xl:gap-8"
          >
            {courseFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-3 min-[320px]:p-4 sm:p-5 lg:p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-700 relative overflow-hidden group"
              >
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <motion.div
                  variants={scaleIn}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-12 h-12 min-[320px]:w-14 min-[320px]:h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-white mb-3 min-[320px]:mb-4 lg:mb-6 mx-auto shadow-lg`}
                >
                  {feature.icon}
                </motion.div>
                
                <h3 className="text-base min-[320px]:text-lg sm:text-xl font-bold text-white mb-2 min-[320px]:mb-3 lg:mb-4 text-center leading-tight">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 text-xs min-[320px]:text-sm sm:text-base text-center leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Animated Underline */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className={`h-0.5 bg-gradient-to-r ${feature.color} mt-4 rounded-full`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Enhanced with Counter Animation */}
      <section className="py-8 min-[320px]:py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-r from-slate-900 via-purple-900/90 to-pink-900/90 text-white">
        <div className="max-w-7xl mx-auto px-3 min-[320px]:px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 min-[320px]:grid-cols-2 lg:grid-cols-4 gap-3 min-[320px]:gap-4 sm:gap-5 lg:gap-6 xl:gap-8"
          >
            {learningStats.map((stat, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                className="text-center p-3 min-[320px]:p-4 sm:p-5 lg:p-6"
              >
                <motion.div
                  variants={scaleIn}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 min-[320px]:w-14 min-[320px]:h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center text-white mb-3 min-[320px]:mb-4 lg:mb-6 mx-auto shadow-xl border border-slate-700"
                >
                  {stat.icon}
                </motion.div>
                
                <motion.div 
                  className={`text-2xl min-[320px]:text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 min-[320px]:mb-3 ${stat.color}`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: index * 0.1
                  }}
                >
                  {stat.number}
                </motion.div>
                
                <div className="text-gray-300 font-medium text-xs min-[320px]:text-sm leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section - Enhanced with Parallax Effect */}
      <section className="py-8 min-[320px]:py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-slate-900 to-purple-900/30">
        <div className="max-w-7xl mx-auto px-3 min-[320px]:px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-6 min-[320px]:mb-8 sm:mb-10 md:mb-12 lg:mb-16"
          >
            <h2 className="text-xl min-[320px]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 min-[320px]:mb-4 leading-tight">
              Transformative <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Learning Benefits</span>
            </h2>
            <p className="text-sm min-[320px]:text-base sm:text-lg md:text-xl text-gray-300 max-w-xs min-[320px]:max-w-sm sm:max-w-md lg:max-w-3xl mx-auto px-2 min-[320px]:px-4 leading-relaxed">
              Achieve significant career growth and skill development with our proven learning approach
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 min-[320px]:grid-cols-2 lg:grid-cols-3 gap-3 min-[320px]:gap-4 sm:gap-5 lg:gap-6 xl:gap-8"
          >
            {benefitsData.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-3 min-[320px]:p-4 sm:p-5 lg:p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-slate-700/50 relative overflow-hidden group backdrop-blur-sm"
              >
                {/* Animated Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.2, 0.1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.div
                  variants={scaleIn}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-14 h-14 min-[320px]:w-16 min-[320px]:h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center text-white mb-3 min-[320px]:mb-4 lg:mb-6 mx-auto shadow-xl`}
                >
                  <WorkspacePremium className="text-xl min-[320px]:text-2xl lg:text-3xl" />
                </motion.div>
                
                <h3 className="text-base min-[320px]:text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 min-[320px]:mb-3 lg:mb-4 text-center leading-tight">
                  {benefit.title}
                </h3>
                
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: index * 0.2
                  }}
                  className={`text-2xl min-[320px]:text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-2 min-[320px]:mb-3 lg:mb-4 bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`}
                >
                  {benefit.improvement}
                </motion.div>
                
                <p className="text-gray-400 text-xs min-[320px]:text-sm sm:text-base text-center leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Enhanced with Particle Background */}
      <section className="py-8 min-[320px]:py-10 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden">
        {/* Animated Particle Background */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              animate={{
                y: [0, -150, 0],
                x: [0, Math.sin(i) * 50, 0],
                opacity: [0.1, 0.8, 0.1],
                scale: [0.3, 1.2, 0.3]
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}
          
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/40 via-purple-900/50 to-pink-900/40" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-3 min-[320px]:px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-6 min-[320px]:mb-8 lg:mb-10">
              <Lightbulb className="text-4xl min-[320px]:text-5xl text-cyan-400 mx-auto mb-4" />
              <h2 className="text-xl min-[320px]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 min-[320px]:mb-4 lg:mb-6 leading-tight">
                Ready to <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Launch</span> Your Career?
              </h2>
              <p className="text-sm min-[320px]:text-base sm:text-lg md:text-xl text-gray-300 mb-4 min-[320px]:mb-5 lg:mb-8 max-w-xs min-[320px]:max-w-sm sm:max-w-md lg:max-w-2xl mx-auto px-2 leading-relaxed">
                Join thousands of learners who have transformed their careers with our expert-led courses.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="flex flex-col min-[320px]:flex-row gap-2 min-[320px]:gap-3 sm:gap-4 justify-center items-center">
              <Link 
                to="/courses"
                className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 min-[320px]:px-5 sm:px-6 lg:px-8 py-2 min-[320px]:py-2.5 sm:py-3 lg:py-4 rounded-xl sm:rounded-2xl font-semibold text-sm min-[320px]:text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl w-full min-[320px]:w-auto text-center overflow-hidden"
              >
                {/* Animated Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  animate={{ translateX: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <SchoolIcon className="text-lg" />
                  Browse All Courses
                  <Rocket className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
              
              <Link 
                to="/contact"
                className="group relative border-2 border-cyan-400 text-cyan-400 px-4 min-[320px]:px-5 sm:px-6 lg:px-8 py-2 min-[320px]:py-2.5 sm:py-3 lg:py-4 rounded-xl sm:rounded-2xl font-semibold text-sm min-[320px]:text-base sm:text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 w-full min-[320px]:w-auto text-center overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Star className="text-lg" />
                  Get Learning Advice
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WarehouseManagement;