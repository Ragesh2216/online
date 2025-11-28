import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import WarehouseManagement from '../components/WarehouseManagement';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: '🎓',
      title: 'Online Degree Programs',
      subtitle: 'Accredited Education',
      description: 'Fully accredited bachelor\'s, master\'s, and doctoral programs with flexible scheduling and global recognition.'
    },
    {
      icon: '📚',
      title: 'Professional Certificates',
      subtitle: 'Career Advancement',
      description: 'Industry-recognized certificate programs with hands-on projects and expert mentorship for career growth.'
    },
    {
      icon: '👨‍🏫',
      title: 'Live Instructor Sessions',
      subtitle: 'Interactive Learning',
      description: 'Real-time classes with expert instructors, interactive discussions, and personalized feedback.'
    },
    {
      icon: '🏢',
      title: 'Corporate Training',
      subtitle: 'Team Development',
      description: 'Customized training solutions for organizations to upskill teams and drive business growth.'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Students Enrolled' },
    { number: '95%', label: 'Completion Rate' },
    { number: '150+', label: 'Countries Reached' }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Learning Assessment',
      description: 'Comprehensive analysis of your learning goals and personalized education path creation.',
      button: 'Start Assessment'
    },
    {
      step: '02',
      title: 'Course Enrollment',
      description: 'Seamless enrollment process with dedicated academic advisor support and resource allocation.',
      button: 'Enroll Now'
    }
  ];

  const teamMembers = [
    {
      name: 'Dr. Sarah Wilson',
      role: 'Academic Director',
      avatar: '👩‍🏫'
    },
    {
      name: 'Prof. Michael Chen',
      role: 'Curriculum Designer',
      avatar: '👨‍💻'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Student Success Manager',
      avatar: '👩‍🎓'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900 overflow-x-hidden">
      {/* Hero Section - Mobile First */}
      <section className="relative min-h-screen flex items-center justify-center mt-8 pt-16 pb-12 px-3 sm:px-4 lg:px-8 overflow-hidden">
        {/* Enhanced Background Image with Animations */}
        <div className="absolute inset-0">
          <img
            src="hero.png"
            alt="Global Online Education Platform"
            className="w-full h-full object-cover object-center scale-110 animate-parallax-slow"
          />
          {/* Multi-layer Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-500/15 to-indigo-400/10 animate-gradient-shift"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-purple-900/30"></div>
        </div>

        {/* Animated Background Elements - Reduced for Mobile */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Gradient Orbs - Smaller on Mobile */}
          <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-2xl sm:blur-3xl animate-float-orb-1"></div>
          <div className="absolute top-1/3 right-1/4 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-r from-blue-400/20 to-indigo-500/20 rounded-full blur-2xl sm:blur-3xl animate-float-orb-2"></div>
          <div className="absolute bottom-1/4 left-1/3 w-36 h-36 sm:w-72 sm:h-72 bg-gradient-to-r from-pink-400/20 to-purple-500/20 rounded-full blur-2xl sm:blur-3xl animate-float-orb-3"></div>
          
          {/* Education Network Animation */}
          <div className="absolute inset-0 opacity-5 sm:opacity-10">
            <div className="network-pattern-animated"></div>
          </div>

          {/* Education-themed Floating Particles - Fewer on Mobile */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-particle-float hidden xs:block"
              style={{
                width: `${Math.random() * 8 + 3}px`,
                height: `${Math.random() * 8 + 3}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: ['#A78BFA', '#F472B6', '#60A5FA', '#34D399', '#FBBF24', '#C084FC'][Math.floor(Math.random() * 6)],
                opacity: Math.random() * 0.3 + 0.1,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${Math.random() * 25 + 15}s`
              }}
            />
          ))}

          {/* Education Icons Floating - Adjusted for Mobile */}
          {['🎓', '📚', '👨‍🏫', '🏆', '💡', '🌍'].map((icon, i) => (
            <div
              key={`icon-${i}`}
              className="absolute text-lg sm:text-2xl animate-education-float hidden sm:block"
              style={{
                left: `${20 + i * 15}%`,
                top: `${Math.random() * 80 + 10}%`,
                animationDelay: `${i * 3}s`,
                animationDuration: `${20 + i * 2}s`
              }}
            >
              {icon}
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10 w-full px-2">
          <div className={`mb-6 sm:mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Animated Main Heading - Responsive */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 sm:mb-8 leading-tight drop-shadow-2xl">
              <span className="block animate-slide-in-up text-2xl xs:text-3xl sm:text-4xl md:text-5xl">
                Global Online Education
              </span>
              <span className="block mt-2 sm:mt-4">
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-600 bg-clip-text text-transparent animate-gradient-flow text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                  Future Ready Learning
                </span>
              </span>
            </h1>

            {/* Animated Description - Responsive */}
            <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-white/80 max-w-xs xs:max-w-sm sm:max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed animate-fade-in-up delay-300 drop-shadow-lg px-2">
              Transforming careers through world-class online education and personalized learning experiences.
              <span className="block mt-2 sm:mt-3 text-white/60 text-sm sm:text-base md:text-lg">
                95% course completion rate with expert instructors and industry-relevant curriculum.
              </span>
            </p>

            {/* Enhanced CTA Buttons - Stack on Mobile */}
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center animate-fade-in-up delay-500 px-2">
              <Link
                to="/contact"
                className="group relative bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-6 xs:px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl font-bold text-sm xs:text-base sm:text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-lg sm:hover:shadow-2xl shadow-md overflow-hidden w-full xs:w-auto text-center"
              >
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <span className="relative z-10 flex items-center gap-2 justify-center">
                  🎓 Start Learning Journey
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </Link>

              <Link
                to="/courses"
                className="group relative bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-5 xs:px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl font-bold text-sm xs:text-base sm:text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-lg w-full xs:w-auto text-center"
              >
                <span className="flex items-center gap-2 justify-center">
                  📚 Explore Courses
                  <span className="group-hover:scale-110 transition-transform duration-300">⚡</span>
                </span>
              </Link>
            </div>

            {/* Animated Stats - Adjusted for Mobile */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-10 sm:mt-12 md:mt-16 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl mx-auto animate-fade-in-up delay-700 px-2">
              {[
                { number: '50K+', label: 'Students Enrolled', color: 'from-purple-400 to-pink-500' },
                { number: '95%', label: 'Completion Rate', color: 'from-blue-400 to-indigo-500' },
                { number: '150+', label: 'Countries Reached', color: 'from-pink-400 to-purple-500' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1 sm:mb-2 animate-count-up`}>
                    {stat.number}
                  </div>
                  <div className="text-white/60 text-xs xs:text-sm font-medium leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-scroll-indicator">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-purple-400 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section - Responsive */}
      <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 lg:px-8 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-indigo-900/20 to-pink-900/20"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 animate-fade-in-up">
              Our Learning Programs
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-xs sm:max-w-md md:max-w-2xl mx-auto animate-fade-in-up delay-200">
              Comprehensive Education Solutions
            </p>
            <p className="text-gray-400 mt-3 sm:mt-4 max-w-xs sm:max-w-lg md:max-w-3xl mx-auto animate-fade-in-up delay-300 text-sm sm:text-base">
              From individual skill development to corporate training, we offer diverse learning programs designed to meet your educational goals and career aspirations.
            </p>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative overflow-hidden bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:shadow-lg sm:hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 animate-fade-in-up group border border-white/20"
                style={{ animationDelay: `${index * 200 + 400}ms` }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 group-hover:text-purple-300 transition-colors duration-300 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-purple-400 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">{service.subtitle}</p>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 text-xs sm:text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Responsive */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-r from-purple-600 to-pink-700 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-3 sm:px-4 lg:px-8 relative z-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 animate-fade-in-up leading-tight">
            Ready to transform your career through education?
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 animate-fade-in-up delay-200">
            Join thousands of successful learners worldwide
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-purple-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg sm:hover:shadow-2xl animate-pulse-slow backdrop-blur-sm w-full sm:w-auto"
          >
            🎓 Get Free Learning Consultation
          </Link>
        </div>
      </section>

      {/* Quality Promise Section - Responsive */}
      <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 to-yellow-900/20"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <div className="animate-fade-in-left">
              <div className="bg-gradient-to-br from-orange-400 to-yellow-500 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 text-white relative overflow-hidden">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">⭐</div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 leading-tight">10+ Years of Educational Excellence</h2>
                <h3 className="text-lg sm:text-xl mb-3 sm:mb-4">What we promise: High-Quality Learning Experiences</h3>
                <p className="text-orange-100 leading-relaxed text-sm sm:text-base">
                  With over a decade of experience in online education, we've perfected the art of digital learning. Our programs deliver measurable results through innovative technology, proven teaching methodologies, and deep expertise in curriculum design and student success.
                </p>
              </div>
            </div>

            <div className="animate-fade-in-right mt-6 lg:mt-0">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">👥</div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Academic Team Members</h2>
                <p className="text-gray-300 mb-6 sm:mb-8 max-w-xs sm:max-w-md md:max-w-2xl mx-auto text-sm sm:text-base">
                  Meet our expert educators and academic professionals
                </p>
                <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">
                  Our team brings together decades of experience in education, curriculum development, and student success from prestigious institutions worldwide.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  {teamMembers.map((member, index) => (
                    <div
                      key={index}
                      className="relative overflow-hidden bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-center hover:shadow-lg sm:hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 animate-fade-in-up group border border-white/20"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                        {member.avatar}
                      </div>
                      <h3 className="font-bold text-white mb-1 text-sm sm:text-base leading-tight">{member.name}</h3>
                      <p className="text-purple-400 text-xs sm:text-sm">{member.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Responsive */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/30 to-purple-900/30"></div>
        
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 animate-fade-in-up">
            Student Success Stories
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 animate-fade-in-up delay-200">
            What our learners say about us?
          </p>

          <div className="relative overflow-hidden bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-white/20 max-w-xs sm:max-w-md md:max-w-4xl mx-auto transform hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500 animate-fade-in-up delay-400">
            {/* Quote Icon */}
            <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4 text-purple-400">🎓</div>
            <p className="text-gray-300 text-base sm:text-lg md:text-lg italic mb-4 sm:mb-6 leading-relaxed">
              "The online degree program completely transformed my career. I was able to balance full-time work with studies and landed a promotion before graduation. The instructors were incredibly supportive and the curriculum was perfectly aligned with industry needs."
            </p>
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white">
                👤
              </div>
              <div className="text-left">
                <p className="font-semibold text-white text-sm sm:text-base">Sarah Johnson</p>
                <p className="text-gray-400 text-xs sm:text-sm">Marketing Director, Tech Startup</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WarehouseManagement/>

      {/* Enhanced CSS Animations for Mobile */}
      <style jsx global>{`
        /* Extra small devices (phones, 320px and up) */
        @media (min-width: 320px) {
          .xs\\:block { display: block; }
          .xs\\:hidden { display: none; }
          .xs\\:flex-row { flex-direction: row; }
          .xs\\:w-auto { width: auto; }
        }

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
        
        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-10px) translateX(5px);
          }
          66% {
            transform: translateY(5px) translateX(-5px);
          }
        }
        
        @keyframes bounceSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        @keyframes pulseSlow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
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
            transform: translate(20px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-15px, 20px) scale(0.9);
          }
        }

        @keyframes floatOrb2 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-30px, 25px) scale(1.2);
          }
          66% {
            transform: translate(20px, -15px) scale(0.8);
          }
        }

        @keyframes floatOrb3 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(20px, 30px) scale(1.05);
          }
          66% {
            transform: translate(-25px, -20px) scale(0.95);
          }
        }

        @keyframes particleFloat {
          0%, 100% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          25% {
            transform: translateY(-25px) translateX(15px) rotate(90deg);
          }
          50% {
            transform: translateY(15px) translateX(-20px) rotate(180deg);
          }
          75% {
            transform: translateY(-15px) translateX(25px) rotate(270deg);
          }
        }

        @keyframes educationFloat {
          0%, 100% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0.7;
          }
          25% {
            transform: translateY(-50px) translateX(25px) rotate(90deg);
            opacity: 1;
          }
          50% {
            transform: translateY(25px) translateX(-40px) rotate(180deg);
            opacity: 0.7;
          }
          75% {
            transform: translateY(-40px) translateX(50px) rotate(270deg);
            opacity: 1;
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
            transform: translateY(4px);
            opacity: 1;
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

        .animate-particle-float {
          animation: particleFloat 25s ease-in-out infinite;
        }

        .animate-education-float {
          animation: educationFloat 20s ease-in-out infinite;
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
        
        .animate-float-slow {
          animation: floatSlow 15s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounceSlow 2s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 2s ease-in-out infinite;
        }
        
        .animate-count-up {
          animation: countUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-scroll-indicator {
          animation: scrollIndicator 2s ease-in-out infinite;
        }
        
        .delay-200 {
          animation-delay: 200ms;
        }
        
        .delay-300 {
          animation-delay: 300ms;
        }
        
        .delay-400 {
          animation-delay: 400ms;
        }

        .network-pattern-animated {
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(168, 85, 247, 0.1) 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.1) 2px, transparent 2px);
          background-size: 80px 80px;
          animation: gradientShift 60s linear infinite;
        }

        /* Mobile-first responsive design */
        @media (max-width: 639px) {
          .leading-tight {
            line-height: 1.2;
          }
          
          .leading-relaxed {
            line-height: 1.5;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;