import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Latest() {
  const [activeTab, setActiveTab] = useState("monthly");
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: '', text: '' });

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setMessage({ type: 'success', text: 'Thank you! Our team will contact you shortly.' });
      setEmail('');
    } catch (error) {
      setMessage({ type: 'error', text: 'Submission failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const pricingPlans = [
    {
      id: 1,
      name: "Student",
      description: "Perfect for individual learners starting their educational journey",
      price: { monthly: 29, yearly: 290 },
      popular: false,
      color: "from-green-500 to-emerald-500",
      icon: "🎓",
      features: [
        "Access to 100+ Basic Courses",
        "Video Lectures & Materials",
        "Basic Quizzes & Assessments",
        "Email Support",
        "1 User Account",
        "Mobile App Access",
        "Progress Tracking",
        "Certificate of Completion"
      ],
      cta: "Start Free Trial",
      link: "/signup"
    },
    {
      id: 2,
      name: "Professional",
      description: "Advanced learning for career advancement and skill development",
      price: { monthly: 79, yearly: 790 },
      popular: true,
      color: "from-blue-500 to-cyan-500",
      icon: "💼",
      features: [
        "Access to 500+ Premium Courses",
        "Live Online Classes",
        "AI-Powered Learning Paths",
        "Priority Support",
        "3 User Accounts",
        "Advanced Analytics",
        "Project-Based Learning",
        "Industry Certifications",
        "Mentor Sessions (2/month)",
        "Career Services"
      ],
      cta: "Get Started",
      link: "/signup"
    },
    {
      id: 3,
      name: "Enterprise",
      description: "Complete learning solution for organizations and institutions",
      price: { monthly: 199, yearly: 1990 },
      popular: false,
      color: "from-purple-500 to-pink-500",
      icon: "🏢",
      features: [
        "Everything in Professional",
        "Unlimited Course Access",
        "Dedicated Account Manager",
        "24/7 Phone Support",
        "Unlimited User Accounts",
        "Custom Learning Paths",
        "Advanced Reporting & Analytics",
        "Custom Integrations (LMS, HRIS)",
        "SLA Guarantee",
        "White-label Option",
        "Instructor Training",
        "Custom Content Development"
      ],
      cta: "Contact Sales",
      link: "/contact"
    }
  ];

  const featuresComparison = [
    {
      feature: "Course Access",
      starter: "100+ Courses",
      professional: "500+ Courses",
      enterprise: "Unlimited Courses"
    },
    {
      feature: "Live Classes",
      starter: "✗",
      professional: "✓",
      enterprise: "✓ Unlimited"
    },
    {
      feature: "AI Learning Paths",
      starter: "✗",
      professional: "✓",
      enterprise: "✓ Custom"
    },
    {
      feature: "User Accounts",
      starter: "1",
      professional: "3",
      enterprise: "Unlimited"
    },
    {
      feature: "Mentor Sessions",
      starter: "✗",
      professional: "2/month",
      enterprise: "Unlimited"
    },
    {
      feature: "Support",
      starter: "Email",
      professional: "Priority",
      enterprise: "24/7 Dedicated"
    },
    {
      feature: "Certifications",
      starter: "Basic",
      professional: "Industry",
      enterprise: "Custom"
    },
    {
      feature: "Career Services",
      starter: "✗",
      professional: "✓",
      enterprise: "✓ Advanced"
    },
    {
      feature: "Custom Integrations",
      starter: "✗",
      professional: "Limited",
      enterprise: "✓ Full"
    },
    {
      feature: "Analytics & Reporting",
      starter: "Basic",
      professional: "Advanced",
      enterprise: "Enterprise"
    }
  ];

  const savings = {
    yearly: 17
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 py-6 min-[320px]:py-8 px-3 min-[320px]:px-4 sm:px-6 lg:px-8 relative overflow-hidden pt-16">
      {/* Animated Background Elements - Reduced for Mobile */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-slow opacity-20 hidden min-[320px]:block"
            style={{
              width: `${Math.random() * 60 + 20}px`,
              height: `${Math.random() * 60 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(45deg, ${['#10B981', '#3B82F6', '#8B5CF6', '#EC4899', '#F59E0B', '#84CC16', '#06B6D4', '#EF4444'][i % 8]
                }, ${['#059669', '#2563EB', '#7C3AED', '#DB2777', '#D97706', '#65A30D', '#0891B2', '#DC2626'][(i + 4) % 8]
                })`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 20 + 15}s`,
              filter: 'blur(12px)'
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section - Mobile Optimized */}
        <div className={`text-center mt-4 min-[320px]:mt-12 mb-8 min-[320px]:mb-12 lg:mb-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-2xl min-[320px]:text-2xl min-[375px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 min-[320px]:mb-5 lg:mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent leading-tight px-2">
            Online Education Plans
          </h1>
          <p className="text-sm min-[320px]:text-base sm:text-lg lg:text-xl text-gray-300 max-w-xs min-[320px]:max-w-sm sm:max-w-md lg:max-w-3xl mx-auto mb-8 min-[320px]:mb-10 lg:mb-12 leading-relaxed px-2">
            Choose the perfect learning plan to advance your career, develop new skills, and achieve your educational goals with expert-led courses.
          </p>

          {/* Billing Toggle - Mobile Optimized */}
          <div className="flex justify-center items-center mb-8 min-[320px]:mb-10 lg:mb-16 px-2">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-1 min-[320px]:p-1.5 border border-white/20">
              <button
                onClick={() => setActiveTab("monthly")}
                className={`px-4 min-[320px]:px-5 sm:px-6 lg:px-8 py-2 min-[320px]:py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-sm min-[320px]:text-base ${activeTab === "monthly"
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg"
                    : "text-gray-300 hover:text-white"
                  }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setActiveTab("yearly")}
                className={`px-4 min-[320px]:px-5 sm:px-6 lg:px-8 py-2 min-[320px]:py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 relative text-sm min-[320px]:text-base ${activeTab === "yearly"
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg"
                    : "text-gray-300 hover:text-white"
                  }`}
              >
                Yearly
                
              </button>
            </div>
          </div>

          {/* Stats - Mobile Optimized */}
          <div className="grid grid-cols-2 min-[320px]:grid-cols-2 md:grid-cols-4 gap-4 min-[320px]:gap-5 sm:gap-6 lg:gap-8 max-w-xs min-[320px]:max-w-sm sm:max-w-md lg:max-w-2xl mx-auto mb-4">
            {[
              { number: "50K+", label: "Students", color: "from-green-500 to-emerald-500" },
              { number: "500+", label: "Courses", color: "from-blue-500 to-cyan-500" },
              { number: "98%", label: "Completion", color: "from-purple-500 to-pink-500" },
              { number: "24/7", label: "Support", color: "from-orange-500 to-amber-500" }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-500"
              >
                <div className={`text-lg min-[320px]:text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 mb-1 min-[320px]:mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-400 text-xs min-[320px]:text-sm group-hover:text-gray-300 transition-colors duration-300 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Cards - Mobile Optimized */}
        <div className="grid grid-cols-1 min-[320px]:grid-cols-1 md:grid-cols-3 gap-4 min-[320px]:gap-5 sm:gap-6 lg:gap-8 mb-12 min-[320px]:mb-16 lg:mb-20 items-stretch">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.id}
              className={`group relative overflow-hidden rounded-xl sm:rounded-2xl backdrop-blur-sm border transition-all duration-500 transform hover:-translate-y-1 lg:hover:-translate-y-2 hover:shadow-xl flex flex-col h-full ${plan.popular
                  ? "border-cyan-500/50 lg:scale-105 scale-100"
                  : "border-white/20 hover:border-cyan-500/30"
                }`}
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  
                </div>
              )}

              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-10 group-hover:opacity-15 transition-opacity duration-500`}></div>

              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              <div className="relative z-10 p-4 min-[320px]:p-5 sm:p-6 lg:p-8 flex flex-col flex-grow">
                {/* Plan Header */}
                <div className="text-center mb-4 min-[320px]:mb-5 lg:mb-8">
                  <div className={`w-12 h-12 min-[320px]:w-14 min-[320px]:h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto mb-3 min-[320px]:mb-4 rounded-lg sm:rounded-xl lg:rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center text-white text-xl min-[320px]:text-2xl sm:text-3xl shadow-lg`}>
                    {plan.icon}
                  </div>
                  <h3 className="text-lg min-[320px]:text-xl sm:text-2xl font-bold text-white mb-2 min-[320px]:mb-3 leading-tight">{plan.name}</h3>
                  <p className="text-gray-300 text-xs min-[320px]:text-sm leading-relaxed">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="text-center mb-4 min-[320px]:mb-5 lg:mb-8">
                  <div className="flex items-baseline justify-center space-x-1 min-[320px]:space-x-2">
                    <span className="text-2xl min-[320px]:text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                      ${activeTab === "monthly" ? plan.price.monthly : plan.price.yearly}
                    </span>
                    <span className="text-gray-400 text-sm min-[320px]:text-base lg:text-lg">
                      /{activeTab === "monthly" ? "month" : "year"}
                    </span>
                  </div>
                
                </div>

                {/* Features */}
                <div className="flex-grow mb-4 min-[320px]:mb-5 lg:mb-8">
                  <ul className="space-y-2 min-[320px]:space-y-3 sm:space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2 min-[320px]:space-x-3">
                        <span className="w-4 h-4 min-[320px]:w-5 min-[320px]:h-5 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-2 h-2 min-[320px]:w-3 min-[320px]:h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="text-gray-300 text-xs min-[320px]:text-sm leading-relaxed flex-1">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="mt-auto">
                  <Link
                    to={plan.link}
                    className={`block w-full text-center py-2 min-[320px]:py-3 sm:py-4 px-4 min-[320px]:px-5 sm:px-6 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-sm min-[320px]:text-base ${plan.popular
                        ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 shadow-lg hover:shadow-xl"
                        : "bg-white/10 text-white backdrop-blur-sm border border-white/20 hover:bg-white/20"
                      }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        

        {/* Custom Enterprise Solution - Mobile Optimized */}
        <div className={`relative overflow-hidden rounded-xl sm:rounded-2xl p-4 min-[320px]:p-5 sm:p-6 lg:p-8 md:p-12 text-center text-white mb-8 min-[320px]:mb-12 lg:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/30 via-blue-600/30 to-purple-600/30"></div>

          <div className="absolute inset-0">
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full animate-pulse-slow opacity-20"
                style={{
                  width: `${80 + i * 40}px`,
                  height: `${80 + i * 40}px`,
                  left: `${20 + i * 20}%`,
                  top: `${30 + i * 10}%`,
                  background: `radial-gradient(circle, cyan, transparent)`,
                  animationDelay: `${i * 2}s`
                }}
              />
            ))}
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-2xl min-[375px]:text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 min-[375px]:mb-4 lg:mb-6 leading-tight">
              Need a Custom Learning Solution?
            </h2>
            <p className="text-cyan-100 text-base min-[375px]:text-base lg:text-lg mb-5 min-[375px]:mb-5 lg:mb-8 max-w-xs min-[375px]:max-w-sm sm:max-w-md lg:max-w-2xl mx-auto leading-relaxed">
              Our education team can build a tailored learning platform for your organization with custom courses, integrations, and dedicated support.
            </p>
            <form onSubmit={handleContactSubmit} className="flex flex-col gap-3 min-[375px]:gap-3 sm:gap-4 max-w-xs min-[375px]:max-w-sm sm:max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your work email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                className="w-full px-4 py-3 sm:py-4 rounded-lg sm:rounded-xl border border-cyan-300/50 bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-cyan-200 disabled:opacity-50 text-base min-[375px]:text-base"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-3 min-[375px]:py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none backdrop-blur-sm text-base min-[375px]:text-base whitespace-nowrap"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-sm">Contacting...</span>
                  </div>
                ) : (
                  <>
                    <span className="block min-[375px]:inline">Contact</span>
                    <span className="hidden min-[375px]:inline">&nbsp;Education Team</span>
                  </>
                )}
              </button>
            </form>
            {message.text && (
              <p className={`mt-4 text-base font-medium ${message.type === 'success' ? 'text-green-300' : 'text-red-300'
                }`}>
                {message.text}
              </p>
            )}
          </div>
        </div>

        
        
      
      
      </div>

      <style jsx>{`
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
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-15px) translateX(8px) rotate(120deg);
          }
          66% {
            transform: translateY(8px) translateX(-8px) rotate(240deg);
          }
        }
        @keyframes pulseSlow {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        .animate-float-slow {
          animation: floatSlow 25s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulseSlow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default Latest;