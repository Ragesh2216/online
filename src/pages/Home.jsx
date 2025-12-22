import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import abc from "../images/dhara.webp";
import ceo from "../images/yuva.webp";
import abi from "../images/abi.webp";
import WarehouseManagement from "../components/WarehouseManagement.jsx";

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
      description: 'Fully accredited bachelor\'s, master\'s, and doctoral programs with flexible scheduling and global recognition.',
      gradient: 'from-violet-500 to-purple-600'
    },
    {
      icon: '📚',
      title: 'Professional Certificates',
      subtitle: 'Career Advancement',
      description: 'Industry-recognized certificate programs with hands-on projects and expert mentorship for career growth.',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      icon: '👨‍🏫',
      title: 'Live Instructor Sessions',
      subtitle: 'Interactive Learning',
      description: 'Real-time classes with expert instructors, interactive discussions, and personalized feedback.',
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      icon: '🏢',
      title: 'Corporate   Training solutions',
      subtitle: 'Team Development',
      description: 'Customized training solutions for organizations to upskill teams and drive business growth.',
      gradient: 'from-orange-500 to-amber-600'
    }
  ];

  const teamMembers = [
    {
      name: 'Dr. Sarah Wilson',
      role: 'Academic Director',
      image: abc,
      gradient: 'from-violet-400 to-purple-500'
    },
    {
      name: 'Prof. Michael Chen',
      role: 'Curriculum Designer',
      image : ceo,
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Student Success Manager',
      image :abi,
      gradient: 'from-emerald-400 to-teal-500'
    }
  ];

  // Create inline styles for SVGs to avoid quote escaping issues
  const svgPattern1 = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='1' fill='white' opacity='0.1'/%3E%3C/svg%3E")`
  };

  const svgPattern2 = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60'%3E%3Cpath d='M30,30 m-20,0 a20,20 0 1,1 40,0 a20,20 0 1,1 -40,0' fill='none' stroke='white' stroke-width='0.5' opacity='0.1'/%3E%3C/svg%3E")`
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900 overflow-x-hidden">
      {/* Hero Section - Enhanced with Glass Morphism */}
      <section className="relative min-h-screen flex items-center justify-center mt-8 pt-16 pb-12 px-3 sm:px-4 lg:px-8 overflow-hidden">
        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated Gradient Mesh */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/30 via-transparent to-transparent animate-gradient-pulse"></div>
          
          {/* Floating Glow Orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-violet-500/30 to-fuchsia-500/30 rounded-full blur-3xl animate-float-glow-1"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl animate-float-glow-2"></div>
          <div className="absolute top-3/4 left-1/3 w-56 h-56 bg-gradient-to-r from-rose-500/30 to-pink-500/30 rounded-full blur-3xl animate-float-glow-3"></div>
          
          {/* Animated Geometric Shapes */}
          <div className="absolute top-1/3 right-1/5 w-32 h-32 border-4 border-cyan-400/20 rounded-3xl animate-spin-slow"></div>
          <div className="absolute bottom-1/3 left-1/5 w-24 h-24 border-4 border-violet-400/20 rounded-full animate-pulse-float"></div>
          
          {/* Floating Icons with Enhanced Animation */}
          {['🎓', '📚', '⭐', '💡', '🏆', '🚀'].map((icon, i) => (
            <div
              key={`icon-${i}`}
              className="absolute text-2xl sm:text-3xl animate-float-3d"
              style={{
                left: `${15 + i * 12}%`,
                top: `${Math.random() * 70 + 15}%`,
                animationDelay: `${i * 2}s`,
                animationDuration: `${15 + i * 3}s`
              }}
            >
              {icon}
            </div>
          ))}
        </div>

        {/* Background Image with Parallax */}
        <div className="absolute inset-0">
          <img
            src="hero.png"
            alt="Global Online Education Platform"
            className="w-full h-full object-cover object-center scale-110 animate-parallax-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-purple-900/30 to-pink-900/20 backdrop-blur-[1px]"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10 w-full px-2">
          <div className={`mb-6 sm:mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Enhanced Main Heading with Glitch Effect */}
            <div className="relative mb-6 sm:mb-8">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight">
                <span className="block text-xl xs:text-2xl sm:text-3xl md:text-4xl animate-slide-in-up mb-2">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Global Online Education
                  </span>
                </span>
                <span className="block mt-2 sm:mt-4 relative">
                  <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent animate-gradient-flow text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                    Future Ready Learning
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent animate-gradient-flow opacity-50 blur-sm">
                    Future Ready Learning
                  </span>
                </span>
              </h1>
            </div>

            {/* Animated Description */}
            <div className="relative mb-8 sm:mb-12">
              <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-white/90 max-w-xs xs:max-w-sm sm:max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-300 drop-shadow-lg px-2">
                Transforming careers through 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-bold mx-1">
                  world-class
                </span>
                online education
                <span className="text-white/60 block mt-2 sm:mt-3 text-sm sm:text-base md:text-lg">
                  ⭐ 95% completion rate • 🎯 Industry-aligned • 🌍 Global community
                </span>
              </p>
            </div>

            {/* Enhanced CTA Buttons with Holographic Effect */}
            <div className="flex flex-col xs:flex-row gap-4 sm:gap-6 justify-center items-center animate-fade-in-up delay-500 px-2">
              <Link
                to="/contact"
                className="group relative bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 hover:from-violet-700 hover:via-purple-700 hover:to-fuchsia-700 text-white px-8 sm:px-10 md:px-12 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg md:text-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl shadow-lg w-full xs:w-auto text-center overflow-hidden"
              >
                {/* Holographic Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                {/* Inner Glow */}
                <div className="absolute inset-0 rounded-2xl border-2 border-white/20 group-hover:border-white/40 transition-all duration-300"></div>
                
                <span className="relative z-10 flex items-center gap-3 justify-center">
                  <span className="text-xl">🎓</span>
                  Start Learning Journey
                  <span className="group-hover:translate-x-2 transition-transform duration-300 text-xl">→</span>
                </span>
              </Link>

              <Link
                to="/courses"
                className="group relative bg-white/5 backdrop-blur-md border-2 border-white/20 hover:border-white/40 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-xl w-full xs:w-auto text-center"
              >
                {/* Neon Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <span className="relative z-10 flex items-center gap-2 justify-center">
                  <span className="text-xl">📚</span>
                  Explore Courses
                  <span className="group-hover:rotate-180 transition-transform duration-500 text-xl">⚡</span>
                </span>
              </Link>
            </div>

            {/* Animated Stats with Floating Cards */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 mt-12 sm:mt-16 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl mx-auto animate-fade-in-up delay-700 px-2">
              {[
                { number: '50K+', label: 'Students Enrolled', color: 'from-violet-500 to-purple-600', icon: '👥' },
                { number: '95%', label: 'Completion Rate', color: 'from-emerald-500 to-teal-600', icon: '📊' },
                { number: '150+', label: 'Countries Reached', color: 'from-cyan-500 to-blue-600', icon: '🌍' }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="relative bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10 hover:border-white/20 transition-all duration-300 animate-float-stat"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="text-lg xs:text-xl sm:text-2xl mb-2">{stat.icon}</div>
                  <div className={`text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1 animate-count-up`}>
                    {stat.number}
                  </div>
                  <div className="text-white/70 text-xs xs:text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* Services Section - Enhanced with Glass Cards */}
      <section className="py-16 sm:py-20 md:py-24 px-3 sm:px-4 lg:px-8 relative overflow-hidden">
       {/* Animated Background */}
<div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-pink-900/20">
  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent animate-scan-line"></div>
</div>

<div className="max-w-7xl mx-auto relative z-10">
  <div className="text-center mb-12 sm:mb-16 md:mb-20">
    <div className="inline-block mb-4">
      <span className="text-4xl animate-pulse-float">✨</span>
    </div>
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
      Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Learning Programs</span>
    </h2>
    <p className="text-lg sm:text-xl text-gray-300 max-w-xs sm:max-w-md md:max-w-2xl mx-auto animate-fade-in-up delay-200">
      Empowering Your Educational Journey
    </p>
  </div>

  <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
    {services.map((service, index) => (
      <div
        key={index}
        className="relative group animate-fade-in-up"
        style={{ animationDelay: `${index * 200 + 400}ms` }}
      >
        {/* Floating Card with Enhanced Effects */}
        <div className="relative h-full bg-white/5 backdrop-blur-md rounded-2xl p-5 sm:p-6 overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl">
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
          
          {/* Animated Corner Accents */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-white/20 group-hover:border-white/40 transition-all duration-300"></div>
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-white/20 group-hover:border-white/40 transition-all duration-300"></div>
          
          <div className="relative z-10">
            {/* Animated Icon */}
            <div className="text-4xl sm:text-5xl mb-4 animate-bounce-gentle group-hover:animate-spin-slow">
              {service.icon}
            </div>
            
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
              {service.title}
            </h3>
            
            <p className="text-sm sm:text-base font-semibold bg-gradient-to-r from-white/70 to-white/50 bg-clip-text text-transparent mb-3">
              {service.subtitle}
            </p>
            
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {service.description}
            </p>
            
            {/* Enhanced Button */}
            <Link 
              to="/404" 
              className="inline-block mt-6 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg text-white text-sm font-semibold transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg border border-white/20 hover:border-white/40"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
</section>

      {/* CTA Section - Enhanced with Particles */}
      <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
        
        <div className="absolute inset-0 bg-gradient-to-r from-violet-700/80 via-purple-700/80 to-fuchsia-700/80">
          <div className="absolute inset-0 opacity-20" style={svgPattern1}></div>
        </div>
        
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-particle-sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-3 sm:px-4 lg:px-8 relative z-10">
          <div className="mb-8">
            <span className="text-5xl animate-pulse-float">🚀</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up leading-tight">
            Ready to <span className="bg-gradient-to-r from-cyan-400 via-yellow-400 to-pink-400 bg-clip-text text-transparent">Transform</span> Your Career?
          </h2>
          
          <p className="text-xl sm:text-2xl mb-8 sm:mb-10 opacity-90 animate-fade-in-up delay-200">
            Join <span className="font-bold text-cyan-300">50,000+</span> successful learners worldwide
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl animate-pulse-soft"
            >
              <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center gap-3">
                <span className="text-2xl">🎓</span>
                Get Free Consultation
                <span className="group-hover:rotate-90 transition-transform duration-500">✨</span>
              </span>
            </Link>
            
            <Link 
              to="/courses" 
              className="group relative bg-white/10 backdrop-blur-md border-2 border-white/30 hover:border-white/50 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-xl"
            >
              <span className="flex items-center gap-2">
                <span className="text-xl">📊</span>
                View Success Stories
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </Link>
          </div>
          
          <p className="text-white/70 text-sm sm:text-base mt-6 animate-fade-in-up delay-400">
            ⚡ Limited spots available for personalized mentorship
          </p>
        </div>
      </section>

   {/* Enhanced Team Section */}
<section className="py-16 sm:py-20 md:py-24 px-3 sm:px-4 lg:px-8 relative overflow-hidden">
  {/* Background Pattern */}
  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-cyan-900/20">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(120,119,198,0.1),transparent_50%)]"></div>
  </div>
  
  <div className="max-w-7xl mx-auto relative z-10">
    <div className="text-center mb-12 sm:mb-16">
      <div className="inline-block mb-4">
        <span className="text-5xl animate-bounce-gentle">👥</span>
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
        Meet Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Expert Team</span>
      </h2>
      <p className="text-lg sm:text-xl text-gray-300 max-w-xs sm:max-w-md md:max-w-2xl mx-auto animate-fade-in-up delay-200">
        Leading educators and mentors dedicated to your success
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="relative group animate-fade-in-up"
          style={{ animationDelay: `${index * 200}ms` }}
        >
          <div className="relative bg-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-8 overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl">
            {/* Floating Avatar - Corrected with img tag */}
            <div className={`relative w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br ${member.gradient} p-0.5 group-hover:scale-110 transition-transform duration-500 overflow-hidden`}>
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full rounded-full object-cover"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-2">
              {member.name}
            </h3>
            
            <p className="text-cyan-300 font-semibold text-center mb-4">
              {member.role}
            </p>
            
            <p className="text-gray-300 text-sm text-center mb-6">
              15+ years of experience in educational leadership
            </p>
            
            <Link 
              to="/404" 
              className="flex w-full py-3 bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 backdrop-blur-sm rounded-xl text-white font-semibold transition-all duration-300 transform hover:scale-105 border border-white/20 hover:border-white/40 justify-center items-center"
            >
              View Profile
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* Enhanced Testimonials Section */}
      <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/40 via-purple-900/40 to-pink-900/40">
          <div className="absolute inset-0" style={svgPattern2}></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-3 sm:px-4 lg:px-8 text-center relative z-10">
          <div className="mb-10 sm:mb-12">
            <div className="text-5xl mb-4 animate-spin-slow">⭐</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
              Student <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Success Stories</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 animate-fade-in-up delay-200">
              Hear from our thriving community of learners
            </p>
          </div>

          {/* Enhanced Testimonial Card */}
          <div className="relative group animate-fade-in-up delay-400">
            <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-10 md:p-12 border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
              {/* Quote Marks */}
              <div className="absolute top-6 left-8 text-5xl text-cyan-400/30">"</div>
              <div className="absolute bottom-6 right-8 text-5xl text-cyan-400/30">"</div>
              
              <div className="text-4xl mb-6 text-yellow-400 animate-pulse-float">🎓</div>
              
              <p className="text-gray-200 text-lg sm:text-xl md:text-2xl italic mb-8 leading-relaxed">
                "The online degree program completely transformed my career. I was able to balance full-time work with studies and landed a promotion before graduation. The instructors were incredibly supportive!"
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white text-2xl">
                  👤
                </div>
                <div className="text-left">
                  <p className="font-bold text-white text-lg">Sarah Johnson</p>
                  <p className="text-cyan-300 font-semibold">Marketing Director</p>
                  <p className="text-gray-400 text-sm">Tech Startup • Class of 2023</p>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </section>
      < WarehouseManagement />

      {/* Enhanced CSS Animations */}
      <style jsx global>{`
        @keyframes gradientPulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes floatGlow1 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.4;
          }
          33% {
            transform: translate(30px, -40px) scale(1.2);
            opacity: 0.6;
          }
          66% {
            transform: translate(-20px, 30px) scale(0.8);
            opacity: 0.3;
          }
        }

        @keyframes floatGlow2 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          33% {
            transform: translate(-40px, 35px) scale(1.3);
            opacity: 0.5;
          }
          66% {
            transform: translate(30px, -25px) scale(0.7);
            opacity: 0.2;
          }
        }

        @keyframes floatGlow3 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.5;
          }
          33% {
            transform: translate(35px, 40px) scale(1.1);
            opacity: 0.7;
          }
          66% {
            transform: translate(-30px, -35px) scale(0.9);
            opacity: 0.4;
          }
        }

        @keyframes float3D {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg);
          }
          25% {
            transform: translate3d(20px, -30px, 20px) rotateX(10deg) rotateY(10deg);
          }
          50% {
            transform: translate3d(-15px, 20px, -15px) rotateX(-10deg) rotateY(-10deg);
          }
          75% {
            transform: translate3d(25px, 15px, 25px) rotateX(5deg) rotateY(5deg);
          }
        }

        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulseFloat {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-10px) scale(1.05);
          }
        }

        @keyframes bounceGentle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulseFast {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes scanLine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes particleSparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes floatStat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes pulseSoft {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }

        /* Animation Classes */
        .animate-gradient-pulse {
          animation: gradientPulse 8s ease-in-out infinite;
        }

        .animate-float-glow-1 {
          animation: floatGlow1 25s ease-in-out infinite;
        }

        .animate-float-glow-2 {
          animation: floatGlow2 30s ease-in-out infinite;
        }

        .animate-float-glow-3 {
          animation: floatGlow3 20s ease-in-out infinite;
        }

        .animate-float-3d {
          animation: float3D 15s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spinSlow 20s linear infinite;
        }

        .animate-pulse-float {
          animation: pulseFloat 3s ease-in-out infinite;
        }

        .animate-bounce-gentle {
          animation: bounceGentle 2s ease-in-out infinite;
        }

        .animate-pulse-fast {
          animation: pulseFast 1s ease-in-out infinite;
        }

        .animate-scan-line {
          animation: scanLine 10s linear infinite;
        }

        .animate-particle-sparkle {
          animation: particleSparkle 2s ease-in-out infinite;
        }

        .animate-float-stat {
          animation: floatStat 3s ease-in-out infinite;
        }

        .animate-pulse-soft {
          animation: pulseSoft 2s ease-in-out infinite;
        }

        /* Original Animations (keep these) */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        @keyframes parallaxSlow {
          0%, 100% {
            transform: scale(1.1) translateY(0);
          }
          50% {
            transform: scale(1.15) translateY(-10px);
          }
        }

        .animate-parallax-slow {
          animation: parallaxSlow 20s ease-in-out infinite;
        }

        @keyframes gradientFlow {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient-flow {
          background-size: 200% 200%;
          animation: gradientFlow 4s ease infinite;
        }

        @keyframes countUp {
          from {
            opacity: 0;
            transform: scale(0.5) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-count-up {
          animation: countUp 1s ease-out forwards;
          opacity: 0;
        }

        /* Delays */
        .delay-200 {
          animation-delay: 200ms;
        }
        
        .delay-300 {
          animation-delay: 300ms;
        }
        
        .delay-400 {
          animation-delay: 400ms;
        }

        .delay-600 {
          animation-delay: 600ms;
        }
      `}</style>
    </div>
  );
};

export default Home;