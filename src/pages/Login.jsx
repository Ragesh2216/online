import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isVerySmall, setIsVerySmall] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    rememberMe: false,
    agreeToTerms: false,
    learningInterest: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
    
    // Check screen size
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsVerySmall(width < 375);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      navigate('/404');
    }, 2000);
  };

  const toggleAuthMode = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsLogin(!isLogin);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        rememberMe: false,
        agreeToTerms: false,
        learningInterest: ""
      });
      setIsVisible(true);
    }, 300);
  };

  return (
    <div className="min-h-screen  mt-8 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 flex items-center justify-center p-2 sm:p-4 overflow-x-hidden">
      <div className="w-full max-w-6xl mx-auto">
        {/* Mobile-only back button */}
        {isMobile && (
          <button 
            onClick={() => navigate(-1)}
            className="fixed top-3 left-3 z-50 w-7 h-7 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-gray-600 text-sm"
          >
            ←
          </button>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center">
          {/* Left Side - Education Illustration & Info */}
          {!isVerySmall && (
            <div className={`text-center lg:text-left transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} px-1`}>
              <div className="mb-4">
                <h1 className={`font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 ${
                  isVerySmall ? 'text-xl' : 
                  isMobile ? 'text-2xl' : 
                  'text-3xl sm:text-4xl md:text-5xl lg:text-6xl'
                }`}>
                  {isLogin ? "Welcome Back" : "Start Learning"}
                </h1>
                <p className={`text-gray-300 max-w-md mx-auto lg:mx-0 ${
                  isVerySmall ? 'text-xs' : 'text-sm sm:text-base lg:text-xl'
                }`}>
                  {isLogin 
                    ? "Sign in to access your courses and track progress."
                    : "Join our learning community today."
                  }
                </p>
              </div>

              {/* Education Features List - Simplified for mobile */}
              <div className="space-y-2 max-w-md mx-auto lg:mx-0">
                {[
                  { icon: "🎓", text: "1000+ courses", color: "from-purple-500 to-indigo-500" },
                  { icon: "📚", text: "Learn at your pace", color: "from-pink-500 to-rose-500" },
                  { icon: "👨‍🏫", text: "Expert instructors", color: "from-blue-500 to-cyan-500" },
                  { icon: "🏆", text: "Earn certificates", color: "from-green-500 to-emerald-500" }
                ].map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 p-2 bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group border border-gray-700"
                  >
                    <div className={`w-8 h-8 ${isMobile && !isVerySmall ? 'w-9 h-9' : ''} bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center text-white text-sm ${isMobile && !isVerySmall ? 'text-base' : ''} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      {feature.icon}
                    </div>
                    <span className={`text-gray-300 font-medium group-hover:text-white transition-colors duration-300 truncate ${
                      isVerySmall ? 'text-xs' : 'text-sm'
                    }`}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Education Stats - Hidden on very small screens */}
              {!isVerySmall && (
                <div className={`mt-4 grid ${isMobile ? 'grid-cols-3' : 'grid-cols-3'} gap-2 max-w-md mx-auto lg:mx-0`}>
                  {[
                    { number: "50K+", label: "Students" },
                    { number: "95%", label: "Rate" },
                    { number: "24/7", label: "Access" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className={`font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent ${
                        isMobile ? 'text-base' : 'text-lg lg:text-xl'
                      }`}>
                        {stat.number}
                      </div>
                      <div className={`text-gray-400 mt-0.5 ${
                        isMobile ? 'text-xs' : 'text-sm'
                      }`}>{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Right Side - Auth Form */}
          <div className={`bg-gray-800 mt-16 rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg p-3 sm:p-5 lg:p-8 xl:p-12 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} border border-gray-700 ${isVerySmall ? 'mt-0' : 'mt-12 lg:mt-16'}`}>
            {/* Form Header */}
            <div className="text-center mt-8  mb-4 sm:mb-6">
              <div className={`${
                isVerySmall ? 'w-12 h-12' : 
                isMobile ? 'w-14 h-14' : 
                'w-16 sm:w-20 h-16 sm:h-20'
              } bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3`}>
                <span className={`${
                  isVerySmall ? 'text-base' : 
                  isMobile ? 'text-lg' : 
                  'text-xl sm:text-2xl'
                } text-white`}>
                  {isLogin ? "📚" : "🎓"}
                </span>
              </div>
              <h2 className={`font-bold text-white mb-1 sm:mb-2 ${
                isVerySmall ? 'text-lg' : 
                isMobile ? 'text-xl' : 
                'text-xl sm:text-2xl lg:text-3xl'
              }`}>
                {isLogin ? "Sign In" : "Create Account"}
              </h2>
              <p className={`text-gray-400 ${
                isVerySmall ? 'text-xs' : 'text-sm'
              }`}>
                {isLogin 
                  ? "Enter credentials to continue"
                  : "Register to start learning"
                }
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              {/* Name Fields - Only for Signup */}
              {!isLogin && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 animate-fade-in-up">
                  <div>
                    <label htmlFor="firstName" className="block text-xs font-medium text-gray-300 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required={!isLogin}
                      className="w-full px-2 py-1.5 sm:px-3 sm:py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 text-sm placeholder-gray-400"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs font-medium text-gray-300 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required={!isLogin}
                      className="w-full px-2 py-1.5 sm:px-3 sm:py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 text-sm placeholder-gray-400"
                      placeholder="Doe"
                    />
                  </div>
                </div>
              )}

              {/* Email Field */}
              <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                <label htmlFor="email" className="block text-xs font-medium text-gray-300 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-2 py-1.5 sm:px-3 sm:py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 text-sm placeholder-gray-400"
                  placeholder="email@domain.com"
                />
              </div>

              {/* Learning Interest - Only for Signup */}
              {!isLogin && (
                <div className="animate-fade-in-up" style={{ animationDelay: '150ms' }}>
                  <label htmlFor="learningInterest" className="block text-xs font-medium text-gray-300 mb-1">
                    Learning Interest
                  </label>
                  <select
                    id="learningInterest"
                    name="learningInterest"
                    value={formData.learningInterest}
                    onChange={handleInputChange}
                    className="w-full px-2 py-1.5 sm:px-3 sm:py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 text-sm"
                  >
                    <option value="">Select interest</option>
                    <option value="programming">Programming</option>
                    <option value="business">Business</option>
                    <option value="design">Design</option>
                    <option value="data">Data Science</option>
                  </select>
                </div>
              )}

              {/* Password Field */}
              <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <label htmlFor="password" className="block text-xs font-medium text-gray-300 mb-1">
                  Password *
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="w-full px-2 py-1.5 sm:px-3 sm:py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 text-sm placeholder-gray-400 pr-8"
                    placeholder="••••••••"
                  />
                  <div className="absolute right-2 top-1.5 sm:top-2 text-purple-400">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L6.59 6.59m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  </div>
                </div>
                <p className="text-[10px] text-gray-400 mt-0.5">8+ characters required</p>
              </div>

              {/* Confirm Password - Only for Signup */}
              {!isLogin && (
                <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                  <label htmlFor="confirmPassword" className="block text-xs font-medium text-gray-300 mb-1">
                    Confirm Password *
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required={!isLogin}
                    className={`w-full px-2 py-1.5 sm:px-3 sm:py-2 bg-gray-700 border text-white rounded-lg focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 text-sm placeholder-gray-400 ${
                      formData.confirmPassword && formData.password !== formData.confirmPassword
                        ? 'border-red-500'
                        : 'border-gray-600'
                    }`}
                    placeholder="••••••••"
                  />
                  {/* Error message */}
                  {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                    <p className="text-red-400 text-[10px] mt-1 flex items-center">
                      <svg className="w-2.5 h-2.5 mr-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      Passwords don't match
                    </p>
                  )}
                </div>
              )}

              {/* Checkboxes */}
              <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                {isLogin ? (
                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleInputChange}
                        className="w-3 h-3 text-purple-500 bg-gray-700 border-gray-600 rounded focus:ring-purple-500"
                      />
                      <span className="ml-1.5 text-xs text-gray-300">Remember me</span>
                    </label>
                    <Link to="/404" className="text-xs text-purple-400 hover:text-purple-300 transition-colors duration-300">
                      Forgot?
                    </Link>
                  </div>
                ) : (
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      required
                      className="w-3 h-3 text-purple-500 bg-gray-700 border-gray-600 rounded focus:ring-purple-500 mt-0.5 flex-shrink-0"
                    />
                    <span className="ml-1.5 text-xs text-gray-300">
                      I agree to{" "}
                      <Link to="/404" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
                        Terms
                      </Link>
                    </span>
                  </label>
                )}
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={isLoading}
                className={`w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-2 sm:py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center animate-fade-in-up text-sm ${
                  isLoading ? 'animate-pulse' : ''
                }`}
                style={{ animationDelay: '500ms' }}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-3 w-3 sm:h-4 sm:w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {isLogin ? "Accessing..." : "Creating..."}
                  </>
                ) : (
                  isLogin ? "Continue Learning" : "Start Learning"
                )}
              </button>

              {/* Divider */}
              <div className="relative animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-2 bg-gray-800 text-gray-400">Or continue with</span>
                </div>
              </div>

              {/* Social Login */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 animate-fade-in-up" style={{ animationDelay: '700ms' }}>
                <button
                  type="button"
                  onClick={() => navigate('/404')}
                  className="w-full bg-gray-700 border border-gray-600 text-gray-300 py-1.5 sm:py-2 px-2 sm:px-3 rounded-lg font-medium hover:bg-gray-600 transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2 text-xs"
                >
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  </svg>
                  Google
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/404')}
                  className="w-full bg-gray-700 border border-gray-600 text-gray-300 py-1.5 sm:py-2 px-2 sm:px-3 rounded-lg font-medium hover:bg-gray-600 transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2 text-xs"
                >
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                  Twitter
                </button>
              </div>

              {/* Switch Auth Mode */}
              <div className="text-center animate-fade-in-up" style={{ animationDelay: '800ms' }}>
                <p className={`text-gray-400 ${isVerySmall ? 'text-xs' : 'text-sm'}`}>
                  {isLogin ? "New here? " : "Have account? "}
                  <button
                    type="button"
                    onClick={toggleAuthMode}
                    className="text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-300 text-xs sm:text-sm"
                  >
                    {isLogin ? "Join now" : "Sign in"}
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Background Animation - Reduced for performance */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-10"
            style={{
              width: `${Math.random() * 6 + 3}px`,
              height: `${Math.random() * 6 + 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['#8B5CF6', '#EC4899', '#6366F1'][i % 3],
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${Math.random() * 12 + 8}s`,
              borderRadius: Math.random() > 0.5 ? '50%' : '25%'
            }}
          />
        ))}
        
        {/* Simplified animated blobs */}
        {!isVerySmall && (
          <>
            <div className="absolute top-1/4 -left-20 w-48 h-48 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 -right-20 w-48 h-48 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse-slow" style={{animationDelay: '2s'}}></div>
          </>
        )}
      </div>

      {/* Responsive CSS */}
      <style jsx global>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(15px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-12px) translateX(8px);
          }
          66% {
            transform: translateY(8px) translateX(-8px);
          }
        }
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.05;
            transform: scale(1);
          }
          50% {
            opacity: 0.08;
            transform: scale(1.03);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
          opacity: 0;
        }
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 5s ease-in-out infinite;
        }
        
        /* 320px specific fixes */
        @media (max-width: 320px) {
          .text-xl {
            font-size: 1.125rem !important;
          }
          .text-lg {
            font-size: 1rem !important;
          }
          .text-sm {
            font-size: 0.75rem !important;
          }
          .text-xs {
            font-size: 0.65rem !important;
          }
          .text-\[10px\] {
            font-size: 0.6rem !important;
          }
          .p-3 {
            padding: 0.5rem !important;
          }
          .px-2 {
            padding-left: 0.375rem !important;
            padding-right: 0.375rem !important;
          }
          .py-1\.5 {
            padding-top: 0.25rem !important;
            padding-bottom: 0.25rem !important;
          }
          .gap-2 > * {
            margin-top: 0.25rem !important;
          }
          .space-y-3 > * + * {
            margin-top: 0.5rem !important;
          }
          input, select, button {
            font-size: 0.75rem !important;
            min-height: 36px !important;
          }
        }
        
        /* Better touch targets for mobile */
        @media (max-width: 768px) {
          input, select, button {
            min-height: 38px;
          }
        }
        
        /* Prevent horizontal scrolling */
        .overflow-x-hidden {
          overflow-x: hidden;
        }
        
        /* Ensure form elements don't overflow */
        input, select, textarea {
          max-width: 100%;
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}