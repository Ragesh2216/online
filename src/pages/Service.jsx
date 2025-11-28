import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function EducationService() {
  const [activeService, setActiveService] = useState(0);
  const [isHovered, setIsHovered] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: "Online Degree Programs",
      icon: "🎓",
      description: "Accredited bachelor's, master's, and doctoral programs with flexible scheduling and global recognition. Learn from world-class faculty and industry experts.",
      detailsLink: "/degrees",
      buttonText: "Explore Degrees",
      features: [
        "Fully accredited programs",
        "Flexible learning schedules",
        "Industry-relevant curriculum",
        "Global faculty network",
        "Career support services"
      ],
      stats: "95% graduation rate",
      color: "from-purple-500 to-indigo-500",
      hoverColor: "from-purple-600 to-indigo-600",
      iconColor: "text-purple-400"
    },
    {
      title: "Professional Certificates",
      icon: "📜",
      description: "Industry-recognized certificate programs to advance your career. Gain in-demand skills with hands-on projects and expert mentorship.",
      detailsLink: "/certificates",
      buttonText: "View Certificates",
      features: [
        "Industry-recognized credentials",
        "Hands-on project experience",
        "Expert mentorship programs",
        "Career advancement focus",
        "Flexible completion timelines"
      ],
      stats: "89% career advancement",
      color: "from-pink-500 to-rose-500",
      hoverColor: "from-pink-600 to-rose-600",
      iconColor: "text-pink-400"
    },
    {
      title: "Corporate Training",
      icon: "🏢",
      description: "Customized training solutions for organizations. Upskill your workforce with tailored programs and measurable learning outcomes.",
      detailsLink: "/corporate",
      buttonText: "Train Team",
      features: [
        "Customized learning paths",
        "Team progress tracking",
        "ROI measurement tools",
        "Dedicated account managers",
        "Scalable solutions"
      ],
      stats: "Increased productivity 45%",
      color: "from-blue-500 to-cyan-500",
      hoverColor: "from-blue-600 to-cyan-600",
      iconColor: "text-blue-400"
    },
    {
      title: "K-12 Online Learning",
      icon: "👨‍🏫",
      description: "Comprehensive online education for primary and secondary students. Personalized learning paths with certified teachers and engaging content.",
      detailsLink: "/k12",
      buttonText: "Learn More",
      features: [
        "Certified teacher guidance",
        "Personalized learning paths",
        "Interactive learning materials",
        "Parent progress tracking",
        "Social learning opportunities"
      ],
      stats: "Improved test scores 35%",
      color: "from-green-500 to-emerald-500",
      hoverColor: "from-green-600 to-emerald-600",
      iconColor: "text-green-400"
    },
    {
      title: "Language Learning",
      icon: "🌍",
      description: "Master new languages with immersive online courses. Live classes with native speakers and AI-powered pronunciation feedback.",
      detailsLink: "/language",
      buttonText: "Start Learning",
      features: [
        "Native speaker instructors",
        "AI pronunciation coaching",
        "Cultural immersion activities",
        "Progress certification",
        "Conversation practice groups"
      ],
      stats: "Fluency in 6-12 months",
      color: "from-orange-500 to-amber-500",
      hoverColor: "from-orange-600 to-amber-600",
      iconColor: "text-orange-400"
    },
    {
      title: "Tech & Coding Bootcamps",
      icon: "💻",
      description: "Intensive coding bootcamps and tech skill development. Learn in-demand technologies with project-based curriculum and career support.",
      detailsLink: "/tech",
      buttonText: "Code Now",
      features: [
        "Project-based learning",
        "Industry mentor guidance",
        "Career placement support",
        "Latest tech stack focus",
        "Portfolio development"
      ],
      stats: "85% job placement rate",
      color: "from-indigo-500 to-violet-500",
      hoverColor: "from-indigo-600 to-violet-600",
      iconColor: "text-indigo-400"
    }
  ];

  const testimonials = [
    {
      quote: "The online degree program transformed my career. I balanced full-time work with studies and landed a promotion before graduation.",
      author: "Sarah Chen",
      company: "Marketing Director, Tech Startup",
      rating: 5
    },
    {
      quote: "Our team's productivity increased by 45% after the corporate training program. The customized content was exactly what we needed.",
      author: "Michael Rodriguez",
      company: "CTO, Financial Services",
      rating: 5
    },
    {
      quote: "My children thrived with the K-12 program. The personalized attention and engaging content made learning enjoyable and effective.",
      author: "Dr. Emily Watson",
      company: "Parent & Healthcare Professional",
      rating: 5
    },
    {
      quote: "The coding bootcamp gave me the skills to switch careers. I went from retail to software engineer in just 6 months!",
      author: "James Kim",
      company: "Software Engineer, Fortune 500",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-slow opacity-10"
            style={{
              width: `${Math.random() * 20 + 5}px`,
              height: `${Math.random() * 20 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['#8B5CF6', '#EC4899', '#6366F1', '#06B6D4', '#F59E0B'][i % 5],
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 20 + 10}s`,
              borderRadius: Math.random() > 0.5 ? '50%' : '25%'
            }}
          />
        ))}
        
        {/* Animated Gradient Blobs */}
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute top-1/2 -right-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow" style={{animationDelay: '4s'}}></div>
      </div>

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <section className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent animate-gradient">
            Transform Your Future Through Learning
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            World-class online education programs designed for success in the digital age. 
            From degrees to professional certificates, we provide learning paths that transform careers and lives.
          </p>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "50K+", label: "Students Enrolled", color: "from-purple-500 to-indigo-500", icon: "👨‍🎓" },
              { number: "95%", label: "Satisfaction Rate", color: "from-pink-500 to-rose-500", icon: "⭐" },
              { number: "150+", label: "Countries Reached", color: "from-blue-500 to-cyan-500", icon: "🌍" },
              { number: "89%", label: "Career Advancement", color: "from-green-500 to-emerald-500", icon: "🚀" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-500 transform hover:scale-105 group overflow-hidden relative border border-white/50"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <div className="relative">
                  <div className="text-2xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium group-hover:text-gray-900 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-l-4 ${
                  isHovered === index ? 'border-purple-500' : 'border-transparent'
                } group relative flex flex-col h-full border border-white/50`}
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
              >
                {/* Animated gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Header Section - Fixed height */}
                <div className={`p-8 bg-gradient-to-br ${service.color} text-white relative overflow-hidden group-hover:bg-gradient-to-br ${service.hoverColor} transition-all duration-500 min-h-[180px] flex flex-col justify-center`}>
                  {/* Subtle shimmer effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  
                  <div className="flex items-center gap-4 mb-4 relative">
                    <div className={`text-4xl transform group-hover:scale-110 transition-transform duration-300 ${service.iconColor}`}>
                      {service.icon}
                    </div>
                    <h2 className="text-2xl font-bold leading-tight drop-shadow-sm">{service.title}</h2>
                  </div>
                  <p className="text-purple-100/90 text-lg leading-relaxed group-hover:text-white transition-colors duration-300 line-clamp-3">
                    {service.description}
                  </p>
                </div>
                
                {/* Content Section - Flexible but consistent */}
                <div className="p-6 relative flex-1 flex flex-col">
                  <div className="mb-6 flex-1">
                    <h3 className="font-semibold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300 flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></span>
                      Program Features:
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex} 
                          className="flex items-start gap-3 text-gray-700 group-hover:text-gray-900 transition-colors duration-300 transform group-hover:translate-x-2 transition-transform"
                          style={{ transitionDelay: `${featureIndex * 100}ms` }}
                        >
                          <span className={`${service.iconColor} transform group-hover:scale-125 transition-transform duration-300 flex-shrink-0 mt-0.5`}>
                            ✓
                          </span>
                          <span className="text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Footer - Fixed at bottom */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100/50 mt-auto">
                    <span className="text-sm text-gray-500 font-medium group-hover:text-gray-700 transition-colors duration-300">
                      {service.stats}
                    </span>
                    <Link
                      to={service.detailsLink}
                      className={`bg-gradient-to-r ${service.color} hover:${service.hoverColor} text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm whitespace-nowrap shadow-md`}
                    >
                      {service.buttonText}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Learning Process Section */}
        <section className="mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 relative overflow-hidden border border-white/50">
            {/* Background gradient */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 animate-pulse"></div>
            
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Our Learning Journey Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Assessment & Planning",
                  description: "Comprehensive skills assessment and personalized learning path creation",
                  icon: "📋",
                  color: "from-purple-500 to-indigo-500"
                },
                {
                  step: "02",
                  title: "Interactive Learning",
                  description: "Engage with interactive content, live sessions, and hands-on projects",
                  icon: "💡",
                  color: "from-pink-500 to-rose-500"
                },
                {
                  step: "03",
                  title: "Practice & Feedback",
                  description: "Apply knowledge with real-world projects and receive expert feedback",
                  icon: "🔄",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  step: "04",
                  title: "Achievement & Growth",
                  description: "Earn credentials and continue with advanced learning opportunities",
                  icon: "🏆",
                  color: "from-green-500 to-emerald-500"
                }
              ].map((step, index) => (
                <div 
                  key={index} 
                  className="text-center group cursor-pointer transform hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="relative">
                    <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-500 relative overflow-hidden shadow-md`}>
                      <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors duration-300"></div>
                      <span className="text-2xl relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                        {step.icon}
                      </span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors duration-300 text-lg">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Success Stories from Our Learners
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how our education programs have transformed careers and lives worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 group relative overflow-hidden border border-white/50"
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span 
                      key={i} 
                      className="text-yellow-400 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-sm"
                      style={{ transitionDelay: `${i * 100}ms` }}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <blockquote className="text-gray-700 text-lg italic mb-4 group-hover:text-gray-900 transition-colors duration-300 relative">
                  <span className="absolute -top-2 -left-2 text-4xl text-purple-200 opacity-50 group-hover:opacity-70 transition-opacity duration-300">"</span>
                  {testimonial.quote}
                  <span className="absolute -bottom-4 -right-2 text-4xl text-purple-200 opacity-50 group-hover:opacity-70 transition-opacity duration-300">"</span>
                </blockquote>
                <div className="relative">
                  <div className="font-semibold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technology & Platform Stack */}
        <section className="mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/50">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Our Learning Technology Platform
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: "LMS", icon: "🏫", color: "from-purple-500 to-indigo-500" },
                { name: "Video", icon: "🎥", color: "from-pink-500 to-rose-500" },
                { name: "VR/AR", icon: "👓", color: "from-blue-500 to-cyan-500" },
                { name: "AI Tutor", icon: "🤖", color: "from-green-500 to-emerald-500" },
                { name: "Mobile", icon: "📱", color: "from-orange-500 to-amber-500" },
                { name: "Cloud", icon: "☁️", color: "from-indigo-500 to-violet-500" },
                { name: "Analytics", icon: "📊", color: "from-purple-400 to-pink-400" },
                { name: "Collaborate", icon: "👥", color: "from-blue-400 to-cyan-400" },
                { name: "Gamify", icon: "🎮", color: "from-green-400 to-emerald-400" },
                { name: "Assess", icon: "📝", color: "from-orange-400 to-amber-400" },
                { name: "Secure", icon: "🔒", color: "from-indigo-400 to-violet-400" },
                { name: "Accessible", icon: "♿", color: "from-purple-300 to-pink-300" }
              ].map((tech, index) => (
                <div 
                  key={index}
                  className="text-center group transform hover:-translate-y-2 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 shadow-md`}>
                    <span className="text-2xl">{tech.icon}</span>
                  </div>
                  <div className="font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300 text-sm">
                    {tech.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-indigo-700 rounded-2xl p-12 text-white text-center relative overflow-hidden group border border-purple-500/30">
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-pink-400 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/50 via-pink-600/50 to-indigo-700/50 group-hover:from-purple-600/60 group-hover:via-pink-600/60 group-hover:to-indigo-700/60 transition-all duration-1000"></div>
            
            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${i * 2}s`,
                    animationDuration: `${15 + i * 5}s`
                  }}
                ></div>
              ))}
            </div>

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 transform group-hover:scale-105 transition-transform duration-500 drop-shadow-sm">
                Ready to Start Your Learning Journey?
              </h2>
              <p className="text-purple-100 text-xl mb-8 max-w-2xl mx-auto group-hover:text-white transition-colors duration-300 leading-relaxed">
                Whether you're seeking career advancement, skill development, or personal growth, 
                our expert advisors are ready to help you find the perfect learning path.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group/btn border border-white/20"
                >
                  <span className="relative z-10">Speak with Learning Advisor</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300"></div>
                </Link>
                <Link
                  to="/courses"
                  className="border border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-purple-600 hover:scale-105 transform transition-all duration-300 relative overflow-hidden group/btn backdrop-blur-sm"
                >
                  <span className="relative z-10">Browse All Courses</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300"></div>
                </Link>
              </div>
              <p className="text-purple-200 mt-6 text-sm group-hover:text-purple-100 transition-colors duration-300">
                Get personalized course recommendations within 24 hours
              </p>
            </div>
          </div>
        </section>
      </main>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-15px) translateX(10px) rotate(5deg);
          }
          66% {
            transform: translateY(10px) translateX(-10px) rotate(-5deg);
          }
        }
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.1);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}