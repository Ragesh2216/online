import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    interest: "",
    students: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (isSubmitted) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [isSubmitted]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ 
        name: "", 
        company: "", 
        email: "", 
        phone: "", 
        interest: "", 
        students: "", 
        message: "" 
      });
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 text-center animate-success-pop border border-white/50">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4 animate-fade-in-up">
              Enrollment Consultation Requested!
            </h2>
            <p className="text-gray-600 mb-8 text-lg animate-fade-in-up delay-200">
              Thank you for contacting Global Online Education. Our academic advisors will review your requirements 
              and get back to you within 24 hours with personalized learning recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setTimeout(() => {
                    const formSection = document.querySelector('form');
                    if (formSection) {
                      formSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }}
                className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-md"
              >
                Submit Another Inquiry
              </button>
              <Link
                to="/"
                className="border-2 border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-center shadow-sm"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Shapes */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-slow opacity-20"
            style={{
              width: `${Math.random() * 16 + 4}px`,
              height: `${Math.random() * 16 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['#8B5CF6', '#EC4899', '#6366F1', '#06B6D4', '#F59E0B', '#10B981'][i % 6],
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 20 + 10}s`,
              borderRadius: Math.random() > 0.5 ? '50%' : '25%'
            }}
          />
        ))}
        
        {/* Animated Gradients */}
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute top-1/2 -right-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow" style={{animationDelay: '4s'}}></div>
      </div>

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <section className="text-center mb-16">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent mb-4 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            Start Your Learning Journey
          </h1>
          <p className={`text-xl text-gray-600 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            Ready to transform your future through quality education? Let's discuss your goals and create the perfect learning path together.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-100 rounded-2xl shadow-2xl p-8 h-full transform hover:-translate-y-2 transition-all duration-500 animate-fade-in-left border border-white/50">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Academic Support
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    icon: (
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    bg: "bg-gradient-to-r from-purple-100 to-violet-100",
                    title: "Admissions & Enrollment",
                    content: "admissions@globaledu.com",
                    link: "mailto:admissions@globaledu.com",
                    color: "text-purple-600 hover:text-purple-700"
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                    bg: "bg-gradient-to-r from-pink-100 to-rose-100",
                    title: "Student Support",
                    content: "+1 (555) 123-LEARN",
                    link: "tel:+155512353276",
                    color: "text-pink-600 hover:text-pink-700"
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    bg: "bg-gradient-to-r from-indigo-100 to-blue-100",
                    title: "Academic Headquarters",
                    content: "Education Hub, San Francisco, CA 94102",
                    link: null,
                    color: "text-gray-600"
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    bg: "bg-gradient-to-r from-amber-100 to-yellow-100",
                    title: "Support Hours",
                    content: "24/7 Learning Support Center",
                    link: null,
                    color: "text-gray-600"
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up bg-white/50 backdrop-blur-sm border border-white/50"
                    style={{ animationDelay: `${index * 100 + 400}ms` }}
                  >
                    <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      {item.link ? (
                        <a href={item.link} className={`${item.color} transition-colors duration-300`}>
                          {item.content}
                        </a>
                      ) : (
                        <p className={item.color}>{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Enrollment */}
              <div className="mt-8 p-4 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl text-white transform hover:scale-105 transition-all duration-300 shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <h3 className="font-bold">Quick Enrollment?</h3>
                </div>
                <p className="text-sm opacity-90">
                  Ready to start learning immediately? 
                  <a href="tel:+155512353276" className="font-bold ml-1 hover:underline">
                    Call now for instant enrollment!
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-indigo-700 rounded-2xl shadow-2xl p-8 transform hover:-translate-y-1 transition-all duration-500 animate-fade-in-right border border-purple-500/30">
              <h2 className="text-2xl font-bold text-white mb-6 drop-shadow-lg flex items-center gap-3">
                <span>🎓</span>
                Request Learning Consultation
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      label: "Full Name *",
                      name: "name",
                      type: "text",
                      placeholder: "Your full name"
                    },
                    {
                      label: "Organization",
                      name: "company",
                      type: "text",
                      placeholder: "School/Company (if applicable)"
                    },
                    {
                      label: "Email Address *",
                      name: "email",
                      type: "email",
                      placeholder: "your.email@domain.com"
                    },
                    {
                      label: "Phone Number",
                      name: "phone",
                      type: "tel",
                      placeholder: "+1 (555) 123-4567"
                    }
                  ].map((field, index) => (
                    <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 100 + 600}ms` }}>
                      <label htmlFor={field.name} className="block text-sm font-medium text-white mb-2 drop-shadow">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        id={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-white/30 bg-white/90 rounded-xl focus:ring-2 focus:ring-white focus:border-white focus:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg"
                        placeholder={field.placeholder}
                        required={field.name !== 'phone' && field.name !== 'company'}
                      />
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="animate-fade-in-up" style={{ animationDelay: '800ms' }}>
                    <label htmlFor="interest" className="block text-sm font-medium text-white mb-2 drop-shadow">
                      Learning Interest *
                    </label>
                    <select
                      name="interest"
                      id="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-white/30 bg-white/90 rounded-xl focus:ring-2 focus:ring-white focus:border-white focus:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg"
                      required
                    >
                      <option value="">Select your interest</option>
                      <option value="professional">Professional Development</option>
                      <option value="degree">Degree Programs</option>
                      <option value="certificate">Certificate Courses</option>
                      <option value="corporate">Corporate Training</option>
                      <option value="k12">K-12 Education</option>
                      <option value="language">Language Learning</option>
                      <option value="tech">Technology & Coding</option>
                    </select>
                  </div>

                  <div className="animate-fade-in-up" style={{ animationDelay: '900ms' }}>
                    <label htmlFor="students" className="block text-sm font-medium text-white mb-2 drop-shadow">
                      Learning Scale
                    </label>
                    <select
                      name="students"
                      id="students"
                      value={formData.students}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-white/30 bg-white/90 rounded-xl focus:ring-2 focus:ring-white focus:border-white focus:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      <option value="">Select scale</option>
                      <option value="individual">Individual Learner</option>
                      <option value="small-group">Small Group (2-10)</option>
                      <option value="classroom">Classroom (10-50)</option>
                      <option value="institution">Institution-wide</option>
                      <option value="corporate">Corporate Program</option>
                    </select>
                  </div>
                </div>

                <div className="animate-fade-in-up" style={{ animationDelay: '1000ms' }}>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2 drop-shadow">
                    Learning Goals & Requirements *
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-3 border-2 border-white/30 bg-white/90 rounded-xl focus:ring-2 focus:ring-white focus:border-white focus:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg resize-vertical"
                    placeholder="Tell us about your learning objectives, preferred learning style, schedule availability, and any specific requirements..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center animate-fade-in-up shadow-md ${
                    isSubmitting ? 'animate-pulse' : ''
                  }`}
                  style={{ animationDelay: '1200ms' }}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing Your Request...
                    </>
                  ) : (
                    "Get Free Learning Consultation 📚"
                  )}
                </button>
                
                <p className="text-sm text-white/80 text-center animate-fade-in-up" style={{ animationDelay: '1400ms' }}>
                  * Required fields. We'll provide personalized learning recommendations within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-16">
          <div className="bg-gradient-to-r from-purple-500 via-pink-600 to-indigo-700 rounded-2xl shadow-2xl p-8 transform hover:-translate-y-1 transition-all duration-500 animate-fade-in-up border border-purple-500/30" style={{ animationDelay: '1600ms' }}>
            <h2 className="text-2xl font-bold text-white mb-8 text-center drop-shadow-lg flex items-center justify-center gap-3">
              <span>❓</span>
              Education FAQs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  question: "What's your typical response time for enrollment inquiries?",
                  answer: "We respond to all education inquiries within 24 hours. Urgent enrollment requests are processed immediately during business hours."
                },
                {
                  question: "Do you offer free learning consultations?",
                  answer: "Yes, we provide complimentary learning consultations to help identify the best educational path for your goals and schedule."
                },
                {
                  question: "What learning formats do you offer?",
                  answer: "We offer self-paced courses, live virtual classes, hybrid learning, corporate training, and customized learning programs."
                },
                {
                  question: "Do you provide academic support and tutoring?",
                  answer: "Absolutely! We offer 24/7 academic support, one-on-one tutoring sessions, and dedicated learning advisors for all students."
                },
                {
                  question: "Are your programs accredited?",
                  answer: "Yes, all our degree and certificate programs are fully accredited with recognized educational authorities and industry partners."
                },
                {
                  question: "Do you offer flexible payment options?",
                  answer: "We provide various payment plans, scholarships, corporate discounts, and financial aid options to make education accessible."
                }
              ].map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-6 transform hover:scale-105 transition-all duration-300 animate-fade-in-up group hover:bg-white/30"
                  style={{ animationDelay: `${1800 + index * 100}ms` }}
                >
                  <h3 className="font-semibold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <p className="text-white/90 text-sm group-hover:text-white transition-colors duration-300">
                    {faq.answer}
                  </p>
                </div>
              ))}
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
            transform: translateX(-30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          0% {
            opacity: 0;
            transform: translateX(30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) translateX(10px) rotate(5deg);
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
        
        @keyframes success-pop {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
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
          animation: float-slow 15s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        
        .animate-success-pop {
          animation: success-pop 0.6s ease-out forwards;
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
      `}</style>
    </div>
  );
}; 

export default Contact;