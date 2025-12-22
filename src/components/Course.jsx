import { useState, useEffect } from 'react';
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
  Calendar
} from 'lucide-react';

const Course = () => {
  const [activeModule, setActiveModule] = useState(0);
  const [expandedModules, setExpandedModules] = useState([0]);
  const [completedLessons, setCompletedLessons] = useState([1, 4, 7]);
  const [selectedLesson, setSelectedLesson] = useState(1);
  const [progress, setProgress] = useState(35);

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
    { id: 1, name: "Course Syllabus", type: "pdf", size: "2.4 MB" },
    { id: 2, name: "HTML5 Cheat Sheet", type: "pdf", size: "1.8 MB" },
    { id: 3, name: "CSS Grid Guide", type: "pdf", size: "3.2 MB" },
    { id: 4, name: "JavaScript ES6+ Features", type: "pdf", size: "4.1 MB" },
    { id: 5, name: "React Hooks Reference", type: "pdf", size: "2.9 MB" },
    { id: 6, name: "API Design Patterns", type: "pdf", size: "3.5 MB" },
    { id: 7, name: "Project Source Code", type: "zip", size: "15.2 MB" },
    { id: 8, name: "Interview Questions", type: "pdf", size: "2.1 MB" }
  ];

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
      case 'practice': return <Code className="w-5 h-5 text-green-500" />;
      case 'quiz': return <FileQuestion className="w-5 h-5 text-purple-500" />;
      case 'project': return <Award className="w-5 h-5 text-yellow-500" />;
      case 'assignment': return <FileText className="w-5 h-5 text-red-500" />;
      default: return <PlayCircle className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{courseData.title}</h1>
              <p className="text-gray-600 mt-2">Instructor: <span className="font-semibold">{courseData.instructor}</span></p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="ml-1 font-semibold">{courseData.rating}</span>
                <span className="text-gray-500 ml-2">({courseData.totalStudents.toLocaleString()} students)</span>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Continue Learning
              </button>
            </div>
          </div>

          {/* Course Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-blue-500 mr-2" />
                <span className="font-semibold">Duration</span>
              </div>
              <p className="text-lg font-bold mt-2">{courseData.duration}</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="flex items-center">
                <Users className="w-5 h-5 text-green-500 mr-2" />
                <span className="font-semibold">Level</span>
              </div>
              <p className="text-lg font-bold mt-2">{courseData.level}</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="flex items-center">
                <BookOpen className="w-5 h-5 text-purple-500 mr-2" />
                <span className="font-semibold">Category</span>
              </div>
              <p className="text-lg font-bold mt-2">{courseData.category}</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-red-500 mr-2" />
                <span className="font-semibold">Updated</span>
              </div>
              <p className="text-lg font-bold mt-2">{courseData.lastUpdated}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Course Content */}
          <div className="lg:col-span-2">
            {/* Progress Bar */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold">Course Progress</h2>
                <span className="font-bold text-blue-600">{Math.round(progress)}% Complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-gray-600 text-sm mt-2">
                {completedLessons.length} of 50 lessons completed
              </p>
            </div>

            {/* Course Modules */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Course Content</h2>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-600">{modules.length} modules</span>
                  <span className="text-gray-600">•</span>
                  <span className="text-gray-600">50 lessons</span>
                </div>
              </div>

              {modules.map((module, index) => (
                <div 
                  key={module.id} 
                  className={`mb-4 border rounded-xl overflow-hidden transition-all duration-300 ${
                    expandedModules.includes(index) ? 'border-blue-200 shadow-md' : 'border-gray-200'
                  }`}
                >
                  {/* Module Header */}
                  <div 
                    className="bg-gray-50 p-4 cursor-pointer hover:bg-gray-100 transition-colors"
                    onClick={() => toggleModule(index)}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-lg font-bold mr-3">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{module.title}</h3>
                          <p className="text-gray-600 text-sm">{module.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right hidden md:block">
                          <div className="text-sm text-gray-600">{module.duration}</div>
                          <div className="text-sm text-gray-600">{module.lessons} lessons</div>
                        </div>
                        {expandedModules.includes(index) ? (
                          <ChevronUp className="w-5 h-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Module Content */}
                  {expandedModules.includes(index) && (
                    <div className="p-4">
                      {module.lessonsList.map((lesson) => (
                        <div 
                          key={lesson.id}
                          className={`flex items-center p-3 rounded-lg mb-2 cursor-pointer transition-all hover:bg-gray-50 ${
                            selectedLesson === lesson.id ? 'bg-blue-50 border border-blue-100' : ''
                          }`}
                          onClick={() => setSelectedLesson(lesson.id)}
                        >
                          <div className="flex items-center justify-center w-10">
                            {getLessonIcon(lesson.type)}
                          </div>
                          <div className="flex-grow ml-3">
                            <div className="flex items-center">
                              <span className="font-medium">{lesson.title}</span>
                              {completedLessons.includes(lesson.id) && (
                                <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                              )}
                            </div>
                            <div className="flex items-center text-sm text-gray-500 mt-1">
                              <span className="capitalize">{lesson.type}</span>
                              <span className="mx-2">•</span>
                              <span>{lesson.duration}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                markLessonComplete(lesson.id);
                              }}
                              className={`p-2 rounded-full ${
                                completedLessons.includes(lesson.id)
                                  ? 'text-green-600 bg-green-50'
                                  : 'text-gray-400 bg-gray-100 hover:bg-gray-200'
                              }`}
                            >
                              <CheckCircle className="w-5 h-5" />
                            </button>
                            <button className="p-2 rounded-full text-gray-400 hover:text-blue-600 hover:bg-blue-50">
                              <PlayCircle className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Resources & Info */}
          <div className="space-y-6">
            {/* Resources Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Resources</h3>
                <Download className="w-5 h-5 text-gray-500" />
              </div>
              <div className="space-y-3">
                {resources.map((resource) => (
                  <div key={resource.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="flex items-center">
                      <FileText className="w-5 h-5 text-gray-500 mr-3" />
                      <div>
                        <p className="font-medium">{resource.name}</p>
                        <p className="text-sm text-gray-500">{resource.type.toUpperCase()} • {resource.size}</p>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <Download className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Community</h3>
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <MessageSquare className="w-5 h-5 text-blue-600 mr-3" />
                  <div>
                    <p className="font-medium">Q&A Forum</p>
                    <p className="text-sm text-gray-600">Get help from instructors and peers</p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-green-50 rounded-lg">
                  <Users className="w-5 h-5 text-green-600 mr-3" />
                  <div>
                    <p className="font-medium">Study Groups</p>
                    <p className="text-sm text-gray-600">Join groups based on your timezone</p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                  <BarChart className="w-5 h-5 text-purple-600 mr-3" />
                  <div>
                    <p className="font-medium">Progress Leaderboard</p>
                    <p className="text-sm text-gray-600">Compare your progress with others</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certificate Card */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg p-6 text-white">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 mr-3" />
                <h3 className="text-xl font-bold">Certificate</h3>
              </div>
              <p className="mb-4">Complete this course to earn your certificate of completion</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90">Requirements:</p>
                  <p className="font-medium">Complete all lessons & final project</p>
                </div>
                <div className="bg-white text-blue-600 px-4 py-2 rounded-lg font-bold">
                  65%
                </div>
              </div>
            </div>

            {/* Instructor Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">About Instructor</h3>
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mr-4">
                  SJ
                </div>
                <div>
                  <h4 className="font-bold text-lg">{courseData.instructor}</h4>
                  <p className="text-gray-600">Senior Web Developer at TechCorp</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <p className="font-bold text-2xl">15+</p>
                  <p className="text-gray-600 text-sm">Years Experience</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <p className="font-bold text-2xl">50K+</p>
                  <p className="text-gray-600 text-sm">Students Taught</p>
                </div>
              </div>
              <button className="w-full bg-gray-100 text-gray-800 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                View Profile
              </button>
            </div>
          </div>
        </div>

        {/* Course Overview */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-2xl font-bold mb-6">What You'll Learn</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <p>Build responsive websites using modern HTML5, CSS3, and JavaScript</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <p>Master React.js for building dynamic user interfaces</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <p>Create REST APIs with Node.js and Express</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <p>Implement authentication and authorization systems</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <p>Deploy full-stack applications to production</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <p>Apply best practices for performance and security</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;