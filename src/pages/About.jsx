import React, { useState, useEffect } from "react";
import sakthi from '../images/www.webp';
import abi from '../images/abi.webp';
import dhara from '../images/soe.webp';
import yuva from '../images/yuva.webp';
import { Link, useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sections = [
    {
      section: 'Mission & Vision',
      icon: '🎯',
      content: 'We democratize education through innovative online learning solutions that make quality education accessible, engaging, and transformative for learners worldwide.',
      importance: 'This defines our purpose and commitment to delivering exceptional educational experiences that empower personal and professional growth.',
      details: [
        'Commitment to accessible education for all',
        'Focus on student success and learning outcomes',
        'Innovation in teaching methodologies',
        'Lifelong learning and skill development'
      ],
      color: 'from-blue-400 to-cyan-400'
    },
    {
      section: 'Our Story',
      icon: '📚',
      content: 'Founded by education experts passionate about bridging the gap between traditional education and digital learning through cutting-edge solutions.',
      importance: 'Shows our journey, expertise, and commitment to revolutionizing education through technology.',
      details: [
        'Founded in 2016 by education technology pioneers',
        'Grew from startup to serving 50,000+ students globally',
        'Expanded to international markets in 2019',
        'Achieved 95% student satisfaction rate'
      ],
      color: 'from-green-400 to-emerald-400'
    },
    {
      section: 'Educational Expertise',
      icon: '⚡',
      content: 'Comprehensive online learning services including course development, virtual classrooms, learning management, and educational consulting.',
      importance: 'Demonstrates our technical capabilities and specialized knowledge across multiple educational domains.',
      details: [
        'Certified instructional designers and educators',
        'Expertise in 100+ academic and professional subjects',
        'Advanced learning analytics and assessment systems',
        'Pedagogical methodology experts'
      ],
      color: 'from-purple-400 to-pink-400'
    },
    {
      section: 'Quality Standards',
      icon: '🏆',
      content: 'Rigorous quality assurance processes, accreditation standards, and educational best practices in every course.',
      importance: 'Ensures reliability, credibility, and excellence in all our educational offerings.',
      details: [
        'Accredited educational programs',
        'Real-time progress tracking and monitoring',
        'Continuous curriculum improvement processes',
        'Comprehensive student support services'
      ],
      color: 'from-orange-400 to-red-400'
    },
    {
      section: 'Student Partnership',
      icon: '🤝',
      content: 'We build long-term relationships with our students, acting as their trusted educational partners throughout their learning journey.',
      importance: 'Focus on understanding student needs and delivering sustainable learning solutions.',
      details: [
        'Dedicated learning advisors for each student',
        'Regular progress reviews and feedback sessions',
        '24/7 academic support channels',
        'Flexible learning pathways'
      ],
      color: 'from-indigo-400 to-violet-400'
    },
    {
      section: 'Innovation & Technology',
      icon: '🔬',
      content: 'Continuous investment in educational technology and innovation to stay ahead of learning trends and methodologies.',
      importance: 'Ensures we deliver cutting-edge learning experiences using the latest educational technologies.',
      details: [
        'Advanced learning management systems',
        'Interactive virtual classroom technology',
        'AI-powered personalized learning paths',
        'Gamification and engagement tools'
      ],
      color: 'from-teal-400 to-blue-400'
    },
    {
      section: 'Industry Recognition',
      icon: '⭐',
      content: 'Award-winning online education platform recognized for excellence and innovation in digital learning.',
      importance: 'Validates our expertise and commitment to quality educational delivery.',
      details: [
        '2023 Best Online Learning Platform Award',
        'International education accreditation',
        'Top 5 EdTech Innovators 2024',
        'Student Choice Excellence Award 2023'
      ],
      color: 'from-yellow-400 to-amber-400'
    },
  ];

  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Academic Officer",
      bio: "15+ years in education technology and curriculum development. Former Dean of Digital Learning at TechUniversity.",
      expertise: ["Curriculum Design", "Educational Strategy", "Learning Outcomes"],
      color: "from-blue-400 to-cyan-500",
      image: abi
    },
    {
      name: "Marcus Johnson",
      role: "Head of Learning Technology",
      bio: "EdTech expert with extensive experience in virtual learning environments and educational software development.",
      expertise: ["Learning Platforms", "Technology Integration", "UX Design"],
      color: "from-green-400 to-emerald-500",
      image: yuva
    },
    {
      name: "Dr. Priya Patel",
      role: "Learning Analytics Lead",
      bio: "PhD in Educational Psychology with focus on learning analytics, assessment models, and student success prediction.",
      expertise: ["Data Analytics", "Assessment Design", "Student Success"],
      color: "from-purple-400 to-violet-500",
      image: dhara
    },
    {
      name: "David Kim",
      role: "Course Development Director",
      bio: "Instructional design expert with extensive experience in creating engaging online learning experiences.",
      expertise: ["Instructional Design", "Content Development", "Multimedia Learning"],
      color: "from-orange-400 to-red-500",
      image: sakthi
    }
  ];

  const technologies = [
    { name: "LMS", icon: "🏫", category: "Learning" },
    { name: "Video", icon: "🎥", category: "Content" },
    { name: "VR/AR", icon: "👓", category: "Immersion" },
    { name: "AI", icon: "🤖", category: "Personalization" },
    { name: "Analytics", icon: "📊", category: "Insights" },
    { name: "Mobile", icon: "📱", category: "Access" },
    { name: "Cloud", icon: "☁️", category: "Platform" },
    { name: "Gamification", icon: "🎮", category: "Engagement" },
    { name: "Collaboration", icon: "👥", category: "Social" },
    { name: "Assessment", icon: "📝", category: "Evaluation" },
    { name: "Accessibility", icon: "♿", category: "Inclusion" },
    { name: "Security", icon: "🔒", category: "Privacy" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-slow opacity-20"
            style={{
              width: `${Math.random() * 16 + 4}px`,
              height: `${Math.random() * 16 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['#3B82F6', '#10B981', '#6366F1', '#06B6D4', '#8B5CF6', '#EF4444', '#F59E0B'][i % 7],
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 20 + 10}s`
            }}
          />
        ))}
      </div>

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <section className="text-center mb-16">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            About Global Online Education
          </h1>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            We are a premier online education platform delivering innovative learning solutions 
            that transform lives and drive educational excellence across the globe.
          </p>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "50K+", label: "Students Enrolled", color: "from-blue-500 to-cyan-500" },
              { number: "95%", label: "Satisfaction Rate", color: "from-green-500 to-emerald-500" },
              { number: "100+", label: "Courses Available", color: "from-purple-500 to-pink-500" },
              { number: "24/7", label: "Learning Access", color: "from-orange-500 to-red-500" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl animate-fade-in-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:-translate-y-1 transition-all duration-500 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
              Our Educational Technology
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {technologies.map((tech, index) => (
                <div 
                  key={index}
                  className="text-center transform hover:-translate-y-2 transition-all duration-300 group animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-2 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                    <span className="text-2xl">{tech.icon}</span>
                  </div>
                  <div className="font-semibold text-gray-700 text-sm group-hover:text-gray-900 transition-colors duration-300">
                    {tech.name}
                  </div>
                  <div className="text-xs text-gray-500 group-hover:text-blue-600 transition-colors duration-300">
                    {tech.category}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Sections */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:-translate-y-1 transition-all duration-500 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <div className="grid grid-cols-1 lg:grid-cols-4">
              {/* Navigation */}
              <div className="lg:col-span-1 bg-gradient-to-b from-gray-50 to-blue-50 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Our Expertise
                </h2>
                <nav className="space-y-2">
                  {sections.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSection(index)}
                      className={`w-full text-left px-4 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                        activeSection === index
                          ? `bg-gradient-to-r ${item.color} text-white shadow-md`
                          : 'text-gray-700 hover:bg-white hover:border-2 hover:border-gray-200'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{item.icon}</span>
                        <span className="font-medium">{item.section}</span>
                      </div>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Content */}
              <div className="lg:col-span-3 p-8 bg-gradient-to-br from-white to-blue-50">
                <div className="flex items-center gap-4 mb-6 animate-fade-in-left">
                  <div className={`w-16 h-16 bg-gradient-to-r ${sections[activeSection].color} rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg`}>
                    {sections[activeSection].icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    {sections[activeSection].section}
                  </h2>
                </div>
                
                <div className="space-y-6">
                  <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <div className={`w-2 h-2 bg-gradient-to-r ${sections[activeSection].color} rounded-full`}></div>
                      Overview
                    </h3>
                    <p className="text-gray-700 leading-relaxed bg-gradient-to-r from-gray-50 to-white p-4 rounded-xl border-l-4 border-blue-300">
                      {sections[activeSection].content}
                    </p>
                  </div>

                  <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <div className={`w-2 h-2 bg-gradient-to-r ${sections[activeSection].color} rounded-full`}></div>
                      Educational Impact
                    </h3>
                    <p className="text-gray-700 leading-relaxed bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl border-l-4 border-green-300">
                      {sections[activeSection].importance}
                    </p>
                  </div>

                  <div className="animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <div className={`w-2 h-2 bg-gradient-to-r ${sections[activeSection].color} rounded-full`}></div>
                      Key Capabilities
                    </h3>
                    <ul className="space-y-3 bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-l-4 border-purple-300">
                      {sections[activeSection].details.map((detail, index) => (
                        <li 
                          key={index} 
                          className="flex items-start gap-3 text-gray-700 group hover:translate-x-2 transition-transform duration-300"
                        >
                          <span className={`w-6 h-6 bg-gradient-to-r ${sections[activeSection].color} rounded-full flex items-center justify-center text-white text-sm mt-0.5 group-hover:scale-110 transition-transform duration-300`}>
                            ✓
                          </span>
                          <span className="group-hover:text-gray-900 transition-colors duration-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Updated Team Section with Images */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4 animate-fade-in-up">
              Academic Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Meet the education experts driving innovation and excellence at Global Online Education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-fade-in-up group"
                style={{ animationDelay: `${index * 150 + 400}ms` }}
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60`}></div>
                  {/* Role Badge */}
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                      {member.role.split(' ')[0]}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className={`font-semibold mb-3 bg-gradient-to-r ${member.color} bg-clip-text text-transparent text-sm`}>
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="bg-gradient-to-r from-gray-100 to-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium group-hover:scale-105 transition-transform duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-all duration-500 opacity-0 group-hover:opacity-100 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Commitment Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-8 text-white transform hover:-translate-y-1 transition-all duration-500 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-lg">Our Commitment to Learning Excellence</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: "🎓",
                    title: "Quality Education",
                    description: "Accredited programs with expert instructors and comprehensive learning materials",
                    color: "from-green-400 to-teal-400"
                  },
                  {
                    icon: "💻",
                    title: "Flexible Learning",
                    description: "Learn at your own pace with 24/7 access to courses and resources",
                    color: "from-blue-400 to-indigo-400"
                  },
                  {
                    icon: "🌍",
                    title: "Global Access",
                    description: "Accessible education for students worldwide, breaking geographical barriers",
                    color: "from-purple-400 to-pink-400"
                  }
                ].map((commitment, index) => (
                  <div 
                    key={index} 
                    className="text-center transform hover:scale-105 transition-all duration-300 animate-fade-in-up group"
                    style={{ animationDelay: `${800 + index * 100}ms` }}
                  >
                    <div className={`text-4xl mb-4 bg-gradient-to-r ${commitment.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                      {commitment.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white drop-shadow">{commitment.title}</h3>
                    <p className="text-blue-100 leading-relaxed group-hover:text-white transition-colors duration-300">
                      {commitment.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-white to-blue-50 rounded-2xl shadow-2xl p-8 transform hover:-translate-y-1 transition-all duration-500 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent mb-4">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join Global Online Education to access world-class courses and transform your career and personal growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/contact')}
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-pulse-slow flex items-center justify-center gap-2"
              >
                <span>Start Learning Today</span>
                <span className="text-lg">🎓</span>
              </button>
              
              <button 
                onClick={() => navigate('/courses')}
                className="border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
              >
                <span>Explore Our Courses</span>
                <span className="text-lg">📚</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-15px) translateX(10px);
          }
          66% {
            transform: translateY(10px) translateX(-10px);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in-left {
          animation: fadeInLeft 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
        
        .delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </div>
  );
};

export default About;