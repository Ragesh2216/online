import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PlayCircle, 
  BookOpen, 
  FileText, 
  CheckCircle, 
  Clock, 
  Users,
  ChevronDown,
  ChevronUp,
  Star,
  Download,
  MessageSquare,
  BarChart,
  Award,
  Globe,
  Video,
  FileQuestion,
  Code,
  Calendar,
  Sparkles,
  Zap,
  Target,
  Rocket,
  GraduationCap,
  Layers,
  Database,
  Cpu,
  Shield,
  Eye,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Course = () => {
  const [activeModule, setActiveModule] = useState(0);
  const [expandedModules, setExpandedModules] = useState([0]);
  const [completedLessons, setCompletedLessons] = useState([1, 4, 7]);
  const [selectedLesson, setSelectedLesson] = useState(1);
  const [progress, setProgress] = useState(35);
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

  // Enhanced color themes
  const themes = {
    primary: 'from-violet-600 to-purple-600',
    secondary: 'from-cyan-500 to-blue-600',
    accent: 'from-emerald-500 to-teal-600',
    warning: 'from-amber-500 to-orange-600',
    success: 'from-green-500 to-emerald-600',
    info: 'from-indigo-500 to-violet-600'
  };

  // Course data
  const courseData = {
    title: "Modern Web Development Masterclass",
    instructor: "Sarah Johnson",
    rating: 4.8,
    totalStudents: 12500,
    duration: "42 hours",
    level: "Intermediate",
    category: "Web Development",
    lastUpdated: "February 2024"
  };

  const modules = [
    {
      id: 1,
      title: "Introduction to Web Development",
      description: "Get started with the fundamentals of modern web development",
      duration: "4h 30m",
      lessons: 8,
      resources: 12,
      icon: <Globe className="w-5 h-5" />,
      color: themes.primary,
      lessonsList: [
        { id: 1, title: "Course Overview & Setup", type: "video", duration: "25m", completed: true },
        { id: 2, title: "Understanding the Web Stack", type: "video", duration: "45m", completed: false },
        { id: 3, title: "Introduction to HTML5", type: "video", duration: "60m", completed: false },
        { id: 4, title: "HTML5 Semantic Elements", type: "practice", duration: "30m", completed: true },
        { id: 5, title: "CSS Fundamentals", type: "video", duration: "50m", completed: false },
        { id: 6, title: "Flexbox Layout System", type: "video", duration: "40m", completed: false },
        { id: 7, title: "CSS Grid Mastery", type: "quiz", duration: "20m", completed: true },
        { id: 8, title: "Module 1 Project: Portfolio Page", type: "project", duration: "40m", completed: false }
      ]
    },
    {
      id: 2,
      title: "JavaScript Fundamentals",
      description: "Master the core concepts of JavaScript programming",
      duration: "8h 15m",
      lessons: 10,
      resources: 18,
      icon: <Code className="w-5 h-5" />,
      color: themes.secondary,
      lessonsList: [
        { id: 9, title: "JavaScript Basics & Syntax", type: "video", duration: "55m", completed: false },
        { id: 10, title: "Variables & Data Types", type: "video", duration: "45m", completed: false },
        { id: 11, title: "Functions & Scope", type: "video", duration: "60m", completed: false },
        { id: 12, title: "Arrays & Objects", type: "practice", duration: "40m", completed: false },
        { id: 13, title: "DOM Manipulation", type: "video", duration: "70m", completed: false },
        { id: 14, title: "Event Handling", type: "video", duration: "50m", completed: false },
        { id: 15, title: "Async JavaScript", type: "video", duration: "65m", completed: false },
        { id: 16, title: "API Integration", type: "project", duration: "90m", completed: false },
        { id: 17, title: "Error Handling", type: "video", duration: "35m", completed: false },
        { id: 18, title: "Module 2 Quiz", type: "quiz", duration: "25m", completed: false }
      ]
    },
    {
      id: 3,
      title: "React & Modern Frontend",
      description: "Build dynamic user interfaces with React and state management",
      duration: "12h 45m",
      lessons: 14,
      resources: 25,
      icon: <Cpu className="w-5 h-5" />,
      color: themes.accent,
      lessonsList: [
        { id: 19, title: "Introduction to React", type: "video", duration: "50m", completed: false },
        { id: 20, title: "JSX & Components", type: "video", duration: "60m", completed: false },
        { id: 21, title: "Props & State", type: "video", duration: "75m", completed: false },
        { id: 22, title: "Hooks Deep Dive", type: "video", duration: "80m", completed: false },
        { id: 23, title: "React Router", type: "video", duration: "65m", completed: false },
        { id: 24, title: "Context API", type: "practice", duration: "45m", completed: false },
        { id: 25, title: "Redux Toolkit", type: "video", duration: "90m", completed: false },
        { id: 26, title: "API Calls with React", type: "video", duration: "70m", completed: false },
        { id: 27, title: "Authentication", type: "video", duration: "85m", completed: false },
        { id: 28, title: "Testing with Jest", type: "video", duration: "60m", completed: false },
        { id: 29, title: "Performance Optimization", type: "video", duration: "55m", completed: false },
        { id: 30, title: "Deployment Strategies", type: "video", duration: "40m", completed: false },
        { id: 31, title: "Final Project Setup", type: "project", duration: "120m", completed: false },
        { id: 32, title: "Module 3 Assignment", type: "assignment", duration: "60m", completed: false }
      ]
    },
    {
      id: 4,
      title: "Backend Development with Node.js",
      description: "Create robust server-side applications and REST APIs",
      duration: "10h 20m",
      lessons: 12,
      resources: 20,
      icon: <Database className="w-5 h-5" />,
      color: themes.warning,
      lessonsList: [
        { id: 33, title: "Node.js Fundamentals", type: "video", duration: "55m", completed: false },
        { id: 34, title: "Express.js Framework", type: "video", duration: "70m", completed: false },
        { id: 35, title: "REST API Design", type: "video", duration: "80m", completed: false },
        { id: 36, title: "Database Integration", type: "video", duration: "90m", completed: false },
        { id: 37, title: "Authentication & Authorization", type: "video", duration: "85m", completed: false },
        { id: 38, title: "File Uploads", type: "video", duration: "60m", completed: false },
        { id: 39, title: "WebSockets & Real-time", type: "video", duration: "75m", completed: false },
        { id: 40, title: "Testing Backend", type: "practice", duration: "50m", completed: false },
        { id: 41, title: "Deployment & DevOps", type: "video", duration: "65m", completed: false },
        { id: 42, title: "Security Best Practices", type: "video", duration: "55m", completed: false },
        { id: 43, title: "Performance Optimization", type: "video", duration: "45m", completed: false },
        { id: 44, title: "Final Backend Project", type: "project", duration: "120m", completed: false }
      ]
    },
    {
      id: 5,
      title: "Capstone Project",
      description: "Build a full-stack application from scratch",
      duration: "6h 30m",
      lessons: 6,
      resources: 15,
      icon: <Rocket className="w-5 h-5" />,
      color: themes.success,
      lessonsList: [
        { id: 45, title: "Project Planning & Design", type: "video", duration: "40m", completed: false },
        { id: 46, title: "Frontend Implementation", type: "project", duration: "120m", completed: false },
        { id: 47, title: "Backend Development", type: "project", duration: "120m", completed: false },
        { id: 48, title: "Database Design", type: "video", duration: "50m", completed: false },
        { id: 49, title: "Integration & Testing", type: "project", duration: "90m", completed: false },
        { id: 50, title: "Deployment & Presentation", type: "video", duration: "30m", completed: false }
      ]
    }
  ];

  const resources = [
    { id: 1, name: "Course Syllabus", type: "pdf", size: "2.4 MB", icon: <FileText className="w-4 h-4" /> },
    { id: 2, name: "HTML5 Cheat Sheet", type: "pdf", size: "1.8 MB", icon: <Code className="w-4 h-4" /> },
    { id: 3, name: "CSS Grid Guide", type: "pdf", size: "3.2 MB", icon: <Layers className="w-4 h-4" /> },
    { id: 4, name: "JavaScript ES6+ Features", type: "pdf", size: "4.1 MB", icon: <Zap className="w-4 h-4" /> },
    { id: 5, name: "React Hooks Reference", type: "pdf", size: "2.9 MB", icon: <Cpu className="w-4 h-4" /> },
    { id: 6, name: "API Design Patterns", type: "pdf", size: "3.5 MB", icon: <Database className="w-4 h-4" /> },
    { id: 7, name: "Project Source Code", type: "zip", size: "15.2 MB", icon: <Download className="w-4 h-4" /> },
    { id: 8, name: "Interview Questions", type: "pdf", size: "2.1 MB", icon: <Target className="w-4 h-4" /> }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleModule = (moduleId) => {
    if (expandedModules.includes(moduleId)) {
      setExpandedModules(expandedModules.filter(id => id !== moduleId));
    } else {
      setExpandedModules([...expandedModules, moduleId]);
    }
  };

  const markLessonComplete = (lessonId) => {
    if (completedLessons.includes(lessonId)) {
      setCompletedLessons(completedLessons.filter(id => id !== lessonId));
    } else {
      setCompletedLessons([...completedLessons, lessonId]);
      setProgress(((completedLessons.length + 1) / 50) * 100);
    }
  };

  const getLessonIcon = (type) => {
    switch (type) {
      case 'video': return <PlayCircle className="w-5 h-5 text-blue-500" />;
      case 'practice': return <Code className="w-5 h-5 text-emerald-500" />;
      case 'quiz': return <FileQuestion className="w-5 h-5 text-purple-500" />;
      case 'project': return <Award className="w-5 h-5 text-amber-500" />;
      case 'assignment': return <FileText className="w-5 h-5 text-rose-500" />;
      default: return <PlayCircle className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <div className="min-h-screen mt-16 bg-gradient-to-br from-slate-50 via-purple-50/20 to-blue-50/20">
      {/* Animated Background Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 40, 0],
              opacity: [0.1, 0.6, 0.1],
              scale: [0.3, 1.2, 0.3]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="relative p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="mb-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <motion.div variants={fadeInUp}>
                <h1 className="text-3xl md:text-5xl font-bold text-slate-900">
                  <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                    {courseData.title}
                  </span>
                </h1>
                <p className="text-slate-600 mt-2 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  Instructor: <span className="font-semibold text-violet-600">{courseData.instructor}</span>
                </p>
              </motion.div>
              
              <motion.div variants={scaleIn} className="flex items-center space-x-4">
                <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg">
                  <Star className="w-5 h-5 text-amber-500 fill-current" />
                  <span className="ml-2 font-semibold">{courseData.rating}</span>
                  <span className="text-slate-500 ml-2">({courseData.totalStudents.toLocaleString()} students)</span>
                </div>
                
                {/* Preview Course Button - Links to 404 */}
                <Link to="/404">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    <Eye className="w-4 h-4" />
                    Preview Course
                  </motion.button>
                </Link>
              </motion.div>
            </div>

            {/* Enhanced Course Stats */}
            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6"
            >
              {[
                { icon: <Clock className="w-5 h-5" />, label: "Duration", value: courseData.duration, color: "from-blue-500 to-cyan-500" },
                { icon: <Users className="w-5 h-5" />, label: "Level", value: courseData.level, color: "from-emerald-500 to-teal-500" },
                { icon: <BookOpen className="w-5 h-5" />, label: "Category", value: courseData.category, color: "from-purple-500 to-violet-500" },
                { icon: <Calendar className="w-5 h-5" />, label: "Updated", value: courseData.lastUpdated, color: "from-amber-500 to-orange-500" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`bg-gradient-to-br ${stat.color} p-4 rounded-2xl text-white shadow-lg`}
                >
                  <div className="flex items-center gap-2">
                    {stat.icon}
                    <span className="font-semibold">{stat.label}</span>
                  </div>
                  <p className="text-2xl font-bold mt-2">{stat.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Course Content */}
            <div className="lg:col-span-2">
              {/* Animated Progress Bar */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-xl p-6 mb-6 border border-slate-100"
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-slate-900">Course Progress</h2>
                  <motion.span 
                    className="font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {Math.round(progress)}% Complete
                  </motion.span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                  <motion.div 
                    className="h-3 rounded-full bg-gradient-to-r from-violet-500 to-purple-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>
                <p className="text-slate-600 text-sm mt-2">
                  {completedLessons.length} of 50 lessons completed
                </p>
                
                {/* Continue Learning Button - Links to 404 */}
                <div className="mt-6">
                  <Link to="/404">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <PlayCircle className="w-5 h-5" />
                      Continue Learning
                    </motion.button>
                  </Link>
                </div>
              </motion.div>

              {/* Enhanced Course Modules */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="bg-white rounded-2xl shadow-xl p-6 border border-slate-100"
              >
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-slate-900">Course Content</h2>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-600">{modules.length} modules</span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-600">50 lessons</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {modules.map((module, index) => (
                    <motion.div
                      key={module.id}
                      variants={fadeInUp}
                      whileHover={{ scale: 1.005 }}
                      className={`rounded-2xl overflow-hidden border transition-all duration-300 ${
                        expandedModules.includes(index) 
                          ? 'border-violet-200 shadow-lg' 
                          : 'border-slate-200 hover:border-violet-100'
                      }`}
                    >
                      {/* Module Header */}
                      <motion.div
                        whileHover={{ backgroundColor: "rgba(245, 243, 255, 0.5)" }}
                        className={`p-4 cursor-pointer transition-colors ${
                          expandedModules.includes(index) ? 'bg-violet-50' : 'bg-slate-50'
                        }`}
                        onClick={() => toggleModule(index)}
                      >
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-4">
                            <motion.div
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                              className={`flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${module.color} text-white font-bold`}
                            >
                              {index + 1}
                            </motion.div>
                            <div>
                              <h3 className="font-bold text-lg text-slate-900">{module.title}</h3>
                              <p className="text-slate-600 text-sm">{module.description}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-right hidden md:block">
                              <div className="text-sm text-slate-600">{module.duration}</div>
                              <div className="text-sm text-slate-600">{module.lessons} lessons</div>
                            </div>
                            <motion.div
                              animate={{ rotate: expandedModules.includes(index) ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown className="w-5 h-5 text-slate-500" />
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Module Content */}
                      <AnimatePresence>
                        {expandedModules.includes(index) && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="p-4"
                          >
                            {module.lessonsList.map((lesson) => (
                              <motion.div
                                key={lesson.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: lesson.id * 0.05 }}
                                whileHover={{ x: 5, backgroundColor: "rgba(245, 243, 255, 0.3)" }}
                                className={`flex items-center p-3 rounded-xl mb-2 cursor-pointer transition-all ${
                                  selectedLesson === lesson.id ? 'bg-violet-50 border border-violet-100' : ''
                                }`}
                                onClick={() => setSelectedLesson(lesson.id)}
                              >
                                <div className="flex items-center justify-center w-12">
                                  {getLessonIcon(lesson.type)}
                                </div>
                                <div className="flex-grow ml-4">
                                  <div className="flex items-center">
                                    <span className="font-medium text-slate-900">{lesson.title}</span>
                                    {completedLessons.includes(lesson.id) && (
                                      <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="ml-2"
                                      >
                                        <CheckCircle className="w-5 h-5 text-emerald-500" />
                                      </motion.div>
                                    )}
                                  </div>
                                  <div className="flex items-center text-sm text-slate-500 mt-1">
                                    <span className="capitalize">{lesson.type}</span>
                                    <span className="mx-2">•</span>
                                    <span>{lesson.duration}</span>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      markLessonComplete(lesson.id);
                                    }}
                                    className={`p-2 rounded-full ${
                                      completedLessons.includes(lesson.id)
                                        ? 'bg-emerald-100 text-emerald-600'
                                        : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
                                    }`}
                                  >
                                    <CheckCircle className="w-5 h-5" />
                                  </motion.button>
                                  <Link to="/404">
                                    <motion.button
                                      whileHover={{ scale: 1.1 }}
                                      whileTap={{ scale: 0.9 }}
                                      className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200"
                                    >
                                      <PlayCircle className="w-5 h-5" />
                                    </motion.button>
                                  </Link>
                                </div>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Resources & Info */}
            <div className="space-y-6">
              {/* Enhanced Resources Card */}
              <motion.div
                variants={floatAnimation}
                animate="visible"
                className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-xl p-6 text-white"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-400" />
                    Resources
                  </h3>
                  <Link to="/404">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-2 text-sm bg-white/20 hover:bg-white/30 px-3 py-2 rounded-lg transition-all duration-300"
                    >
                      <Download className="w-4 h-4" />
                      Download All
                    </motion.button>
                  </Link>
                </div>
                <div className="space-y-3">
                  {resources.map((resource) => (
                    <motion.div
                      key={resource.id}
                      whileHover={{ x: 5, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-white/10 rounded-lg">
                          {resource.icon}
                        </div>
                        <div>
                          <p className="font-medium">{resource.name}</p>
                          <p className="text-slate-400 text-sm">{resource.type.toUpperCase()} • {resource.size}</p>
                        </div>
                      </div>
                      <Link to="/404">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 hover:bg-white/20 rounded-lg"
                        >
                          <Download className="w-4 h-4" />
                        </motion.button>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Enhanced Community Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl shadow-xl p-6 border border-slate-100"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-6">Community</h3>
                <div className="space-y-4">
                  {[
                    { icon: <MessageSquare className="w-5 h-5 text-blue-600" />, title: "Q&A Forum", desc: "Get help from instructors and peers" },
                    { icon: <Users className="w-5 h-5 text-emerald-600" />, title: "Study Groups", desc: "Join groups based on your timezone" },
                    { icon: <BarChart className="w-5 h-5 text-purple-600" />, title: "Progress Leaderboard", desc: "Compare your progress with others" }
                  ].map((item, index) => (
                    <Link to="/404" key={index}>
                      <motion.div
                        whileHover={{ scale: 1.02, x: 5 }}
                        className="flex items-center p-4 bg-gradient-to-r from-slate-50 to-white rounded-xl border border-slate-100"
                      >
                        <div className="p-3 bg-slate-100 rounded-lg mr-4">
                          {item.icon}
                        </div>
                        <div>
                          <p className="font-medium text-slate-900">{item.title}</p>
                          <p className="text-slate-600 text-sm">{item.desc}</p>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Enhanced Certificate Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 rounded-2xl shadow-xl p-6 text-white relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="w-8 h-8" />
                    <h3 className="text-xl font-bold">Certificate</h3>
                  </div>
                  <p className="mb-4 text-violet-100">Complete this course to earn your certificate of completion</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-violet-200">Requirements:</p>
                      <p className="font-medium">Complete all lessons & final project</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg font-bold">
                      65%
                    </div>
                  </div>
                  
                  {/* View Certificate Button - Links to 404 */}
                  <Link to="/404" className="block mt-6">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-white text-violet-700 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Certificate Sample
                    </motion.button>
                  </Link>
                </div>
              </motion.div>

              {/* Enhanced Instructor Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl shadow-xl p-6 border border-slate-100"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-6">About Instructor</h3>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    SJ
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900">{courseData.instructor}</h4>
                    <p className="text-slate-600">Senior Web Developer at TechCorp</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                    <p className="font-bold text-2xl text-slate-900">15+</p>
                    <p className="text-slate-600 text-sm">Years Experience</p>
                  </div>
                  <div className="text-center p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                    <p className="font-bold text-2xl text-slate-900">50K+</p>
                    <p className="text-slate-600 text-sm">Students Taught</p>
                  </div>
                </div>
                <Link to="/404">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-slate-900 to-slate-800 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Instructor Profile
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Enhanced Course Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-xl p-8 border border-slate-100"
          >
               <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              What You'll <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">Learn</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Build responsive websites using modern HTML5, CSS3, and JavaScript",
                "Master React.js for building dynamic user interfaces",
                "Create REST APIs with Node.js and Express",
                "Implement authentication and authorization systems",
                "Deploy full-stack applications to production",
                "Apply best practices for performance and security"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="flex-shrink-0"
                  >
                    <CheckCircle className="w-6 h-6 text-emerald-500" />
                  </motion.div>
                  <p className="text-slate-700 text-lg">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}; export default Course;