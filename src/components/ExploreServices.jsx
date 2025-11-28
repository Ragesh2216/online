import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ai from '../images/ai.webp';
import aiint from '../images/aiint.webp';
import cloud from '../images/cloud.webp';
import scale from '../images/scale.webp';
import secuter from '../images/secuter.webp';
import speed from '../images/speed.webp';

const ExploreServices = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const slides = [
    {
      id: 1,
      title: "AI & Machine Learning",
      description: "Master AI fundamentals, machine learning algorithms, and practical applications in various industries",
      icon: "🤖",
      color: "from-blue-500 to-purple-500",
      image: ai
    },
    {
      id: 2,
      title: "Web Development",
      description: "Full-stack development courses covering modern frameworks, databases, and deployment strategies",
      icon: "💻",
      color: "from-purple-500 to-indigo-500",
      image: speed
    },
    {
      id: 3,
      title: "Cloud Computing",
      description: "Learn cloud infrastructure, AWS, Azure, and Google Cloud platforms with hands-on projects",
      icon: "☁️",
      color: "from-indigo-500 to-blue-500",
      image: cloud
    },
    {
      id: 4,
      title: "Data Science",
      description: "Comprehensive data analysis, visualization, and statistical modeling techniques",
      icon: "📊",
      color: "from-green-500 to-teal-500",
      image: aiint
    },
    {
      id: 5,
      title: "Cybersecurity",
      description: "Protect digital assets with ethical hacking, network security, and threat analysis skills",
      icon: "🔒",
      color: "from-teal-500 to-cyan-500",
      image: scale
    },
    {
      id: 6,
      title: "Mobile Development",
      description: "Build cross-platform mobile applications using React Native, Flutter, and native technologies",
      icon: "📱",
      color: "from-cyan-500 to-blue-500",
      image: secuter
    }
  ];

  const customerStories = [
    {
      id: 1,
      company: "Tech Innovators Inc",
      title: "Upskilled entire team with cutting-edge AI courses",
      description: "The tech company transformed their workforce with our AI and machine learning programs, increasing productivity by 40%.",
      link: "/404",
      industry: "Technology",
      icon: "🚀",
      color: "from-blue-500 to-purple-500",
    },
    {
      id: 2,
      company: "Global Finance Corp",
      title: "Implemented cybersecurity training across departments",
      description: "Financial institution enhanced security protocols through comprehensive cybersecurity education for all employees.",
      link: "/404",
      industry: "Finance",
      icon: "💳",
      color: "from-green-500 to-teal-500",
    },
    {
      id: 3,
      company: "Healthcare Solutions",
      title: "Trained staff in data analysis and cloud computing",
      description: "Healthcare provider improved patient data management and analytics capabilities through specialized training programs.",
      link: "/404",
      industry: "Healthcare",
      icon: "🏥",
      color: "from-purple-500 to-indigo-500",
    },
    {
      id: 4,
      company: "E-commerce Giant",
      title: "Scaled development team with full-stack expertise",
      description: "Online retailer accelerated platform development by upskilling their engineering team with modern web technologies.",
      link: "/404",
      industry: "E-commerce",
      icon: "🛒",
      color: "from-orange-500 to-red-500",
    }
  ];

  const services = [
    {
      title: "Corporate Training",
      description: "Customized learning solutions for organizations looking to upskill their teams with the latest technologies",
      icon: "🏢",
      link: "/services",
      color: "from-blue-500 to-purple-600",
      image: cloud
    },
    {
      title: "Individual Learning",
      description: "Self-paced courses and guided learning paths for personal skill development and career advancement",
      icon: "🎓",
      link: "/services",
      color: "from-green-500 to-teal-600",
      image: aiint
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 overflow-x-hidden">
      {/* Hero Section - Mobile Optimized */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 pb-8 min-[320px]:pb-10 sm:pb-12 px-3 min-[320px]:px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute inset-0">
          <img
            src="hero.png"
            alt="Online Education Platform"
            className="w-full h-full object-cover object-center scale-110 animate-parallax-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-500/15 to-indigo-400/10 animate-gradient-shift"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-blue-900/30"></div>
        </div>

        {/* Animated Background Elements - Reduced for Mobile */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 min-[320px]:w-40 min-[320px]:h-40 sm:w-96 sm:h-96 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-xl sm:blur-3xl animate-float-orb-1"></div>
          <div className="absolute top-1/3 right-1/4 w-28 h-28 min-[320px]:w-36 min-[320px]:h-36 sm:w-80 sm:h-80 bg-gradient-to-r from-indigo-400/20 to-blue-500/20 rounded-full blur-xl sm:blur-3xl animate-float-orb-2"></div>
          <div className="absolute bottom-1/4 left-1/3 w-24 h-24 min-[320px]:w-32 min-[320px]:h-32 sm:w-72 sm:h-72 bg-gradient-to-r from-purple-400/20 to-blue-500/20 rounded-full blur-xl sm:blur-3xl animate-float-orb-3"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10 w-full px-2">
          <div className={`mb-4 min-[320px]:mb-6 sm:mb-8 mt-4 min-[320px]:mt-6 sm:mt-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Main Heading - Mobile Optimized */}
            <h1 className="text-2xl min-[320px]:text-2xl min-[375px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 min-[320px]:mb-5 sm:mb-8 leading-tight drop-shadow-2xl">
              <span className="block animate-slide-in-up text-xl min-[320px]:text-xl min-[375px]:text-2xl sm:text-3xl md:text-4xl">
                Skill Development
              </span>
              <span className="block mt-2 min-[320px]:mt-2 sm:mt-4">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent animate-gradient-flow text-2xl min-[320px]:text-2xl min-[375px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                  Future-Ready Learning
                </span>
              </span>
            </h1>

            {/* Description - Mobile Optimized */}
            <p className="text-sm min-[320px]:text-base sm:text-lg md:text-xl text-white/80 max-w-xs min-[320px]:max-w-sm sm:max-w-md lg:max-w-2xl mx-auto mb-6 min-[320px]:mb-7 sm:mb-12 leading-relaxed animate-fade-in-up delay-300 drop-shadow-lg px-2">
              Master in-demand skills with industry-expert instructors and hands-on projects.
              <span className="block mt-2 min-[320px]:mt-2 sm:mt-3 text-white/60 text-xs min-[320px]:text-sm sm:text-base md:text-lg">
                Transform your career with cutting-edge online education.
              </span>
            </p>

            {/* CTA Buttons - Mobile Optimized */}
            <div className="flex flex-col min-[320px]:flex-row gap-2 min-[320px]:gap-3 sm:gap-4 md:gap-6 justify-center items-center animate-fade-in-up delay-500 px-2">
              <Link
                to="/contact"
                className="group relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 min-[320px]:px-5 sm:px-8 md:px-10 lg:px-12 py-2 min-[320px]:py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold text-sm min-[320px]:text-base sm:text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-lg sm:hover:shadow-xl shadow-md overflow-hidden w-full min-[320px]:w-auto text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <span className="relative z-10 flex items-center gap-1 min-[320px]:gap-2 justify-center">
                  🎓 Get Learning Consultation
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </Link>

              <Link
                to="/courses"
                className="group relative bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-4 min-[320px]:px-5 sm:px-6 md:px-8 lg:px-10 py-2 min-[320px]:py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold text-sm min-[320px]:text-base sm:text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-lg w-full min-[320px]:w-auto text-center"
              >
                <span className="flex items-center gap-1 min-[320px]:gap-2 justify-center">
                  📚 Explore Courses
                  <span className="group-hover:scale-110 transition-transform duration-300">🎯</span>
                </span>
              </Link>
            </div>

            {/* Stats - Mobile Optimized */}
            <div className="grid grid-cols-3 gap-3 min-[320px]:gap-4 sm:gap-6 md:gap-8 mt-8 min-[320px]:mt-10 sm:mt-12 md:mt-16 max-w-xs min-[320px]:max-w-sm sm:max-w-md md:max-w-2xl mx-auto animate-fade-in-up delay-700 px-2">
              {[
                { number: '50K+', label: 'Students', color: 'from-blue-400 to-purple-500' },
                { number: '200+', label: 'Courses', color: 'from-purple-400 to-indigo-500' },
                { number: '98%', label: 'Success Rate', color: 'from-indigo-400 to-blue-500' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-base min-[320px]:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1 min-[320px]:mb-2 animate-count-up`}>
                    {stat.number}
                  </div>
                  <div className="text-white/60 text-xs min-[320px]:text-sm font-medium leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Mobile Optimized */}
        <div className="absolute bottom-3 min-[320px]:bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-scroll-indicator">
          <div className="w-4 h-6 min-[320px]:w-5 min-[320px]:h-8 sm:w-6 sm:h-10 border-2 border-blue-400 rounded-full flex justify-center">
            <div className="w-1 h-1 min-[320px]:h-2 sm:h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Innovation Slides Section - Mobile Optimized */}
      <section className="py-8 min-[320px]:py-10 sm:py-12 md:py-16 lg:py-20 px-3 min-[320px]:px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-6 min-[320px]:mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-xl min-[320px]:text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 min-[320px]:mb-3 sm:mb-4 animate-fade-in-up leading-tight">
              Cutting-Edge Skills
            </h2>
            <p className="text-sm min-[320px]:text-base sm:text-lg lg:text-xl text-gray-300 max-w-xs min-[320px]:max-w-sm sm:max-w-md md:max-w-2xl mx-auto animate-fade-in-up delay-200 leading-relaxed">
              Master the Most In-Demand Technologies
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 min-[320px]:gap-5 sm:gap-6 md:gap-8 lg:gap-12">
            {/* Main Slide */}
            <div className="w-full lg:w-1/2 animate-fade-in-left">
              <div className="relative h-48 min-[320px]:h-52 sm:h-64 md:h-72 lg:h-80 xl:h-96 rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden group">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
                  style={{ backgroundImage: `url(${slides[activeSlide].image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-purple-900/60"></div>
                </div>
                
                <div className="relative z-10 h-full flex items-center justify-center p-3 min-[320px]:p-4 sm:p-6 lg:p-8">
                  <div className="text-center max-w-md mx-auto">
                    <div className={`text-2xl min-[320px]:text-3xl sm:text-4xl lg:text-5xl mb-2 min-[320px]:mb-3 sm:mb-4 animate-bounce ${slides[activeSlide].color.replace('from-', 'text-').replace('to-', '')}`}>
                      {slides[activeSlide].icon}
                    </div>
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
            </div>

            {/* Slide Navigation - Mobile Optimized */}
            <div className="w-full lg:w-1/2 animate-fade-in-right">
              <div className="grid grid-cols-2 min-[320px]:grid-cols-2 min-[425px]:grid-cols-3 gap-2 min-[320px]:gap-3 sm:gap-4 lg:gap-6 h-full">
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => setActiveSlide(index)}
                    className={`relative overflow-hidden p-2 min-[320px]:p-3 sm:p-4 lg:p-5 rounded-lg sm:rounded-xl lg:rounded-2xl text-left transition-all duration-500 transform hover:scale-105 group min-h-[80px] min-[320px]:min-h-[90px] sm:min-h-[100px] lg:min-h-[120px] ${
                      activeSlide === index
                        ? `bg-gradient-to-br ${slide.color} text-white shadow-lg scale-105`
                        : 'bg-white/10 text-gray-300 hover:bg-white/20 backdrop-blur-sm'
                    }`}
                  >
                    <div 
                      className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                      style={{ backgroundImage: `url(${slide.image})` }}
                    ></div>
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                    
                    <div className="relative z-10 h-full flex flex-col justify-center">
                      <div className={`text-lg min-[320px]:text-xl sm:text-2xl lg:text-3xl mb-1 min-[320px]:mb-2 ${activeSlide === index ? 'animate-pulse' : ''}`}>
                        {slide.icon}
                      </div>
                      <h4 className="font-semibold text-xs min-[320px]:text-sm sm:text-base lg:text-lg mb-1 leading-tight line-clamp-1">
                        {slide.title}
                      </h4>
                      <p className="text-xs opacity-80 line-clamp-2 leading-tight hidden min-[375px]:block">
                        {slide.description}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Slide Indicators - Mobile Optimized */}
          <div className="flex justify-center mt-4 min-[320px]:mt-5 sm:mt-6 lg:mt-8 space-x-1 min-[320px]:space-x-2 sm:space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-2 h-2 min-[320px]:w-2.5 min-[320px]:h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4 rounded-full transition-all duration-300 ${
                  activeSlide === index
                    ? 'bg-blue-500 w-6 min-[320px]:w-7 sm:w-8 lg:w-10'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      
      {/* Services Section - Mobile Optimized */}
      <section className="py-8 min-[320px]:py-10 sm:py-12 md:py-16 lg:py-20 px-3 min-[320px]:px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-6 min-[320px]:mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-xl min-[320px]:text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 min-[320px]:mb-3 sm:mb-4 animate-fade-in-up leading-tight">
              Our Learning Solutions
            </h2>
            <p className="text-sm min-[320px]:text-base sm:text-lg lg:text-xl text-gray-300 max-w-xs min-[320px]:max-w-sm sm:max-w-md md:max-w-2xl mx-auto animate-fade-in-up delay-200 leading-relaxed">
              Tailored Education Programs for Every Need
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 min-[320px]:gap-5 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl p-4 min-[320px]:p-5 sm:p-6 lg:p-8 text-white transition-all duration-500 transform hover:-translate-y-1 lg:hover:-translate-y-2 hover:shadow-lg sm:hover:shadow-xl min-h-[200px] min-[320px]:min-h-[220px] sm:min-h-[250px] lg:min-h-[300px] animate-fade-in-up"
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                ></div>
                
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-90 group-hover:opacity-80 transition-opacity duration-500`}></div>
                
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                <div className="relative z-10 h-full flex flex-col justify-center">
                  <div className="text-2xl min-[320px]:text-3xl sm:text-4xl lg:text-5xl mb-3 min-[320px]:mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-lg min-[320px]:text-xl sm:text-2xl lg:text-3xl font-bold mb-2 min-[320px]:mb-3 sm:mb-4 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-white/80 mb-4 min-[320px]:mb-5 sm:mb-6 lg:mb-8 leading-relaxed text-sm min-[320px]:text-base sm:text-lg lg:text-xl">
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-1 min-[320px]:gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 px-3 min-[320px]:px-4 sm:px-5 lg:px-6 xl:px-8 py-2 min-[320px]:py-2.5 sm:py-3 lg:py-3.5 xl:py-4 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-sm min-[320px]:text-base sm:text-lg w-fit"
                  >
                    Learn More
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section - Mobile Optimized */}
      <section className="py-8 min-[320px]:py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-3 min-[320px]:px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-xl min-[320px]:text-2xl sm:text-3xl md:text-4xl font-bold mb-2 min-[320px]:mb-3 sm:mb-4 animate-fade-in-up leading-tight">
            Ready to Transform Your Skills?
          </h2>
          <p className="text-sm min-[320px]:text-base sm:text-lg lg:text-xl mb-4 min-[320px]:mb-5 sm:mb-6 lg:mb-8 opacity-90 animate-fade-in-up delay-200 leading-relaxed">
            Start your learning journey today with industry-leading courses and expert instructors
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-4 min-[320px]:px-5 sm:px-6 lg:px-8 py-2 min-[320px]:py-2.5 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl font-semibold text-sm min-[320px]:text-base sm:text-lg md:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg sm:hover:shadow-xl animate-pulse-slow backdrop-blur-sm w-full sm:w-auto"
          >
            🎓 Start Learning Today
          </Link>
        </div>
      </section>

      {/* Enhanced CSS Animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes parallaxSlow {
          0%, 100% {
            transform: scale(1.1) translateY(0);
          }
          50% {
            transform: scale(1.15) translateY(-5px);
          }
        }

        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes gradientFlow {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes floatOrb1 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(15px, -20px) scale(1.1);
          }
          66% {
            transform: translate(-10px, 15px) scale(0.9);
          }
        }

        @keyframes floatOrb2 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-20px, 20px) scale(1.2);
          }
          66% {
            transform: translate(15px, -10px) scale(0.8);
          }
        }

        @keyframes floatOrb3 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(15px, 20px) scale(1.05);
          }
          66% {
            transform: translate(-20px, -15px) scale(0.95);
          }
        }

        @keyframes countUp {
          from {
            opacity: 0;
            transform: scale(0.5) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes scrollIndicator {
          0%, 100% {
            transform: translateY(0);
            opacity: 0.5;
          }
          50% {
            transform: translateY(3px);
            opacity: 1;
          }
        }

        @keyframes pulseSlow {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.9;
          }
        }

        .animate-parallax-slow {
          animation: parallaxSlow 30s ease-in-out infinite;
        }

        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradientShift 15s ease infinite;
        }

        .animate-gradient-flow {
          background-size: 200% 200%;
          animation: gradientFlow 3s ease infinite;
        }

        .animate-float-orb-1 {
          animation: floatOrb1 20s ease-in-out infinite;
        }

        .animate-float-orb-2 {
          animation: floatOrb2 25s ease-in-out infinite;
        }

        .animate-float-orb-3 {
          animation: floatOrb3 18s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in-left {
          animation: fadeInLeft 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-up {
          animation: slideInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-count-up {
          animation: countUp 1s ease-out forwards;
        }

        .animate-scroll-indicator {
          animation: scrollIndicator 2s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulseSlow 3s ease-in-out infinite;
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        .delay-300 {
          animation-delay: 300ms;
        }

        .delay-500 {
          animation-delay: 500ms;
        }

        .delay-700 {
          animation-delay: 700ms;
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

        .line-clamp-3 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
        }
      `}</style>
    </div>
  );
};

export default ExploreServices;