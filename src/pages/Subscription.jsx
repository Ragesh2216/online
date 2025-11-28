import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Mock Lucide-style Icons (for a single-file mandate)
const Check = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
);

const X = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
);

const Book = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
);

const Graduation = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>
);

const Users = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);

const pricingTiers = [
  {
    id: 'learner',
    name: 'Learner Plan',
    icon: '📚',
    price: 29,
    description: 'Perfect for individual learners looking to build skills and advance their career.',
    features: [
      { text: 'Access to 100+ Courses', included: true },
      { text: 'Self-Paced Learning', included: true },
      { text: 'Basic Certificates', included: true },
      { text: 'Community Access', included: true },
      { text: 'Live Instructor Sessions', included: false },
      { text: 'Personalized Mentoring', included: false },
      { text: 'Career Support', included: false },
      { text: 'Advanced Certifications', included: false },
    ],
    highlight: false,
    buttonText: 'Start Learning',
    popular: false,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'pro',
    name: 'Pro Learner',
    icon: '🎓',
    price: 79,
    description: 'Comprehensive learning experience with live sessions and career support.',
    features: [
      { text: 'Access to 500+ Courses', included: true },
      { text: 'Live Instructor Sessions', included: true },
      { text: 'Professional Certificates', included: true },
      { text: 'Personalized Learning Path', included: true },
      { text: '1-on-1 Mentoring', included: true },
      { text: 'Career Coaching', included: true },
      { text: 'Portfolio Reviews', included: false },
      { text: 'Job Guarantee Program', included: false },
    ],
    highlight: true,
    buttonText: 'Go Pro',
    popular: true,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'enterprise',
    name: 'Enterprise Education',
    icon: '🏫',
    price: 199,
    description: 'Complete learning solutions for teams and organizations with advanced features.',
    features: [
      { text: 'Unlimited Course Access', included: true },
      { text: 'Custom Learning Paths', included: true },
      { text: 'Advanced Certifications', included: true },
      { text: 'Dedicated Success Manager', included: true },
      { text: 'Team Progress Analytics', included: true },
      { text: 'Custom Content Creation', included: true },
      { text: 'Job Guarantee Program', included: true },
      { text: 'Priority 24/7 Support', included: true },
    ],
    highlight: false,
    buttonText: 'Contact Team',
    popular: false,
    color: 'from-green-500 to-emerald-500'
  },
];

const FeatureItem = ({ text, included }) => {
  const iconColor = included ? 'text-green-500' : 'text-red-400';
  const textColor = included ? 'text-gray-700' : 'text-gray-500 line-through';

  return (
    <li className="flex items-center space-x-3 mb-3 animate-fade-in">
      {included ? (
        <Check className={`w-5 h-5 ${iconColor} flex-shrink-0 transition-transform duration-300 hover:scale-110`} />
      ) : (
        <X className={`w-5 h-5 ${iconColor} flex-shrink-0 transition-transform duration-300 hover:scale-110`} />
      )}
      <span className={`text-sm font-medium ${textColor} transition-all duration-300`}>
        {text}
      </span>
    </li>
  );
};

const PlanCard = ({ plan, onSelect, delay = 0 }) => {
  const isHighlighted = plan.highlight;
  const [isHovered, setIsHovered] = useState(false);

  // Conditional classes for highlighting the Pro plan
  const cardClasses = isHighlighted
    ? 'bg-white border-4 border-blue-500 shadow-2xl scale-[1.02] hover:scale-[1.05] transition-all duration-500 animate-pop-in'
    : 'bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-slide-up';
  
  const headerClasses = isHighlighted
    ? `bg-gradient-to-r ${plan.color} text-white p-6 rounded-t-lg`
    : `bg-gradient-to-r ${plan.color} p-6`;

  const priceColor = isHighlighted ? 'text-white' : 'text-white';
  const buttonClasses = isHighlighted
    ? 'bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transform hover:scale-105'
    : `bg-white text-gray-800 hover:bg-gray-50 shadow-md hover:shadow-lg transform hover:scale-105`;

  return (
    <div 
      className={`flex flex-col rounded-2xl overflow-hidden transform ${cardClasses} relative`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
          
        </div>
      )}

      {/* Animated background effect for highlighted card */}
      {isHighlighted && (
        <div className={`absolute inset-0 bg-gradient-to-r ${plan.color} opacity-5 rounded-2xl`}></div>
      )}
      
      {/* Floating particles animation on hover */}
      {isHovered && isHighlighted && (
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-float"
              style={{
                left: `${20 + i * 15}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '3s'
              }}
            />
          ))}
        </div>
      )}

      {/* Header */}
      <div className={headerClasses}>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">{plan.icon}</span>
          <h3 className={`text-xl font-extrabold ${isHighlighted ? 'text-white' : 'text-white'} animate-fade-in`}>
            {plan.name}
          </h3>
        </div>
        <p className={`text-sm mb-4 ${isHighlighted ? 'text-blue-200' : 'text-white/90'} animate-fade-in delay-100`}>
          {plan.description}
        </p>
        
        <div className="flex items-baseline animate-scale-in">
          <span className={`text-5xl font-extrabold tracking-tight ${priceColor}`}>
            ${plan.price}
          </span>
          <span className={`ml-1 text-xl font-medium ${isHighlighted ? 'text-blue-200' : 'text-white/90'}`}>
            /month
          </span>
        </div>
      </div>

      {/* Features & Button */}
      <div className="flex flex-col flex-grow p-6 relative z-10">
        <ul className="flex-grow space-y-2">
          {plan.features.map((feature, index) => (
            <FeatureItem 
              key={index} 
              text={feature.text} 
              included={feature.included}
            />
          ))}
        </ul>

        {/* Animated Button */}
        <button 
          type="button" 
          onClick={() => onSelect(plan.id)}
          className={`mt-6 w-full py-4 rounded-xl text-lg font-semibold transition-all duration-300 ${buttonClasses} animate-pulse-slow`}>
          {plan.buttonText}
        </button>
      </div>
    </div>
  );
};

// Checkout Component with animations
const CheckoutPage = ({ planId, onBack, onComplete }) => {
    const plan = pricingTiers.find(p => p.id === planId);
    const navigate = useNavigate();
    const [isProcessing, setIsProcessing] = useState(false);
    
    if (!plan) {
        return (
            <div className="text-center p-20 animate-fade-in">
                <h2 className="text-2xl font-bold text-red-600 mb-4">Error: Plan Not Found</h2>
                <button 
                    onClick={onBack}
                    className="mt-4 py-2 px-6 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition transform hover:scale-105">
                    Back to Plans
                </button>
            </div>
        );
    }

    const handleComplete = async () => {
        setIsProcessing(true);
        // Simulate processing delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        onComplete();
        navigate('/404');
    };

    return (
        <div className="max-w-xl mx-auto p-8  mt-12 bg-white rounded-2xl shadow-2xl animate-slide-up border border-purple-100">
            <div className="animate-fade-in">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-6 border-b pb-4">
                    Enroll Now - {plan.name}
                </h1>
                <p className="text-gray-700 mb-4 animate-fade-in delay-200">
                    You are about to enroll in the <strong>{plan.name}</strong> for <strong>${plan.price}/month</strong>.
                </p>
                <ul className="space-y-3 mb-8 text-sm text-gray-600 bg-gradient-to-r from-gray-50 to-purple-50 p-6 rounded-xl animate-fade-in delay-300">
                    <li className="font-semibold text-purple-600">Key Learning Features:</li>
                    {plan.features.filter(f => f.included).map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 animate-fade-in" style={{ animationDelay: `${400 + index * 100}ms` }}>
                            <Check className="w-4 h-4 text-purple-500 flex-shrink-0" /> 
                            <span>{feature.text}</span>
                        </li>
                    ))}
                </ul>
                
                {/* Additional Education Services Info */}
                <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200 animate-fade-in delay-600">
                    <h3 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                        <Graduation className="w-4 h-4" />
                        What's Included:
                    </h3>
                    <ul className="text-sm text-blue-700 space-y-1">
                        <li>• Dedicated learning support</li>
                        <li>• 95% course completion rate</li>
                        <li>• Real-time progress tracking</li>
                        <li>• Career advancement support</li>
                    </ul>
                </div>

                <div className="flex justify-between items-center pt-6 border-t animate-fade-in delay-700">
                    <button onClick={onBack}
                        className="text-purple-600 hover:text-purple-800 transition transform hover:scale-105 font-semibold">
                        &larr; Change Plan
                    </button>
                    <button 
                        onClick={handleComplete}
                        disabled={isProcessing}
                        className={`py-3 px-8 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 ${
                            isProcessing 
                                ? 'bg-gray-400 cursor-not-allowed' 
                                : 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white shadow-lg hover:shadow-xl'
                        }`}>
                        {isProcessing ? (
                            <div className="flex items-center space-x-2">
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                <span>Processing...</span>
                            </div>
                        ) : (
                            'Start Learning Journey'
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}

const SubscriptionView = ({ handleSubscription }) => (
    <div className="max-w-7xl mx-auto pt-10 pb-20">
        
        {/* Animated Header Section */}
        <div className="text-center mb-16 mt-4 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Choose Your Learning Path
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-300">
            Transform your career with world-class education. From individual skill-building to team training, we have the perfect plan for your learning journey.
          </p>
          
          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto">
            {[
              { number: '95%', label: 'Completion Rate' },
              { number: '50K+', label: 'Students' },
              { number: '500+', label: 'Courses' }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${500 + index * 200}ms` }}>
                <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm text-purple-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Grid with staggered animations */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
          {pricingTiers.map((plan, index) => (
            <PlanCard 
              key={plan.id} 
              plan={plan} 
              onSelect={handleSubscription}
              delay={300 + index * 200}
            />
          ))}
        </div>
        
        {/* Enterprise CTA */}
        <div className="mt-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-8 text-center animate-fade-in delay-1000 border border-purple-200/30 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white mb-4">Need Custom Team Training?</h3>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            We offer tailored learning solutions for organizations with specific training requirements. 
            Get a custom quote with dedicated learning managers and premium support.
          </p>
          <Link to="/contact" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
            Contact Education Experts
          </Link>
        </div>
    </div>
);

// Main App Component with proper routing logic
const Subscription = () => {
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState('home');
  const [selectedPlanId, setSelectedPlanId] = useState(null);
  const [message, setMessage] = useState('');
  const [isAuthReady, setIsAuthReady] = useState(false); 

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  // Function to handle moving to checkout
  const handleSubscription = (planId) => {
    setSelectedPlanId(planId);
    setCurrentView('checkout');
    setMessage(`📚 Loading enrollment for ${planId}...`);
    setTimeout(() => setMessage(''), 1500);
    
    // Scroll to top when switching to checkout
    setTimeout(() => {
      scrollToTop();
    }, 100);
  }

  // Function to handle purchase completion
  const handlePurchaseComplete = () => {
    setMessage(`🎉 Enrollment complete! Welcome to ${selectedPlanId}! Our education team will contact you within 2 hours.`);
    setTimeout(() => setMessage(''), 5000);
    setCurrentView('home');
    setSelectedPlanId(null);
    
    // Scroll to top when returning home
    setTimeout(() => {
      scrollToTop();
    }, 100);
  }

  // Function to go back to subscription view
  const handleBackToPlans = () => {
    setCurrentView('home');
    setSelectedPlanId(null);
    
    // Scroll to top when going back to plans
    setTimeout(() => {
      scrollToTop();
    }, 100);
  }

  // Scroll to top when component mounts and when view changes
  useEffect(() => {
    scrollToTop();
  }, [currentView]);

  // Mock Firebase initialization hook
  useEffect(() => {
    setIsAuthReady(true);
  }, []);

  // Router Logic
  let content;
  switch (currentView) {
      case 'checkout':
          content = <CheckoutPage 
            planId={selectedPlanId} 
            onBack={handleBackToPlans} 
            onComplete={handlePurchaseComplete}
          />;
          break;
      case 'home':
      default:
          content = <SubscriptionView handleSubscription={handleSubscription} />;
          break;
  }

  return (
    <div className="font-sans bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900 min-h-screen p-4 sm:p-8 pt-24 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-slow opacity-20"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(45deg, ${
                ['#A78BFA', '#F472B6', '#60A5FA', '#34D399', '#FBBF24'][i % 5]
              }, ${
                ['#C084FC', '#FB7185', '#3B82F6', '#10B981', '#F59E0B'][(i + 2) % 5]
              })`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 20 + 15}s`,
              filter: 'blur(40px)'
            }}
          />
        ))}
      </div>

      {/* Global Message Box with enhanced animation */}
      {message && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 p-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-2xl transition-all duration-500 animate-slide-down">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
            <span>{message}</span>
          </div>
        </div>
      )}

      {/* Add a top anchor for scrolling */}
      <div id="top-anchor" className="absolute top-0"></div>

      <div className="relative z-10">
        {content}
      </div>

      {/* Add CSS animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
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
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) translateX(10px) rotate(120deg);
          }
          66% {
            transform: translateY(10px) translateX(-10px) rotate(240deg);
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
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slideUp 0.6s ease-out forwards;
        }
        
        .animate-slide-down {
          animation: slideDown 0.4s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.5s ease-out forwards;
        }
        
        .animate-pop-in {
          animation: popIn 0.6s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: floatSlow 25s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 2s ease-in-out infinite;
        }
        
        .delay-100 {
          animation-delay: 100ms;
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
        
        .delay-1000 {
          animation-delay: 1000ms;
        }
        
        .delay-1200 {
          animation-delay: 1200ms;
        }
      `}</style>
    </div>
  );
};

export default Subscription;