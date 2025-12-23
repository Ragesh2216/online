import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  FaFacebookF, 
  FaLinkedinIn, 
  FaGithub, 
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaChevronUp,
  FaExternalLinkAlt,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaBuilding,
  FaTools,
  FaShieldAlt,
  FaFileContract,
  FaSitemap,
  FaBriefcase,
  FaDollarSign,
  FaLaptopCode,
  FaChartLine,
  FaMobileAlt,
  FaCloud,
  FaDatabase,
  FaRobot,
  FaNetworkWired
} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const location = useLocation();

  // Check if we're on homepage2 OR pricing OR course routes
  const isHomePage2Group = ['/homepage2', '/latest', '/course'].includes(location.pathname);

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Show back to top button on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Homepage2 Group Services
  const homepage2Services = [
    { label: "Cloud Solutions", url: "/404", icon: <FaCloud className="w-3 h-3" /> },
    { label: "Cybersecurity", url: "/404", icon: <FaShieldAlt className="w-3 h-3" /> },
    { label: "AI & ML Solutions", url: "/404", icon: <FaRobot className="w-3 h-3" /> },
    { label: "Data Analytics", url: "/404", icon: <FaDatabase className="w-3 h-3" /> },
    { label: "DevOps Services", url: "/404", icon: <FaTools className="w-3 h-3" /> },
    { label: "IoT Solutions", url: "/404", icon: <FaNetworkWired className="w-3 h-3" /> }
  ];

  // Homepage2 Group Quick Links
  const homepage2QuickLinks = [
    { label: "Home2", url: "/homepage2", icon: <FaExternalLinkAlt className="w-3 h-3" /> },
    { label: "Pricing", url: "/latest", icon: <FaDollarSign className="w-3 h-3" /> },
    { label: "Course", url: "/course", icon: <FaGraduationCap className="w-3 h-3" /> },
    { label: "Case Studies", url: "/404", icon: <FaChartLine className="w-3 h-3" /> },
    { label: "Contact Us", url: "/contact", icon: <FaEnvelope className="w-3 h-3" /> }
  ];

  // Homepage2 Group Technologies
  const homepage2Technologies = [
    { label: "Web Development", url: "/404", icon: <FaLaptopCode className="w-3 h-3" /> },
    { label: "Mobile Apps", url: "/404", icon: <FaMobileAlt className="w-3 h-3" /> },
    { label: "Cloud Infrastructure", url: "/404", icon: <FaCloud className="w-3 h-3" /> },
    { label: "Data Science", url: "/404", icon: <FaDatabase className="w-3 h-3" /> },
    { label: "AI Integration", url: "/404", icon: <FaRobot className="w-3 h-3" /> },
    { label: "DevOps", url: "/404", icon: <FaTools className="w-3 h-3" /> }
  ];

  // Original Learning Programs (for non-homepage2 pages)
  const originalLearningPrograms = [
    { label: "Online Degree Programs", url: "/404" },
    { label: "Live Instructor Sessions", url: "/404" },
    { label: "Corporate Training", url: "/404" },
    { label: "Skill Development", url: "/404" }
  ];

  // Original Quick Links (for non-homepage2 pages)
  const originalQuickLinks = [
    { label: "Home", url: "/", icon: <FaExternalLinkAlt className="w-3 h-3" /> },
    { label: "About Us", url: "/about", icon: <FaBuilding className="w-3 h-3" /> },
    { label: "Services", url: "/services", icon: <FaTools className="w-3 h-3" /> },
    { label: "Contact Us", url: "/contact", icon: <FaEnvelope className="w-3 h-3" /> },
    { label: "Login", url: "/login", icon: <FaGraduationCap className="w-3 h-3" /> }
  ];

  // Homepage2 Group Stats
  const homepage2Stats = [
    { number: "500+", label: "Clients", icon: <FaBuilding className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime", icon: <FaChartLine className="w-6 h-6" /> },
    { number: "24/7", label: "Support", icon: <FaPhoneAlt className="w-6 h-6" /> },
    { number: "98%", label: "Satisfaction", icon: <FaGraduationCap className="w-6 h-6" /> }
  ];

  // Original Stats (for non-homepage2 pages)
  const originalStats = [
    { number: "50K+", label: "Active Students", icon: <FaGraduationCap className="w-6 h-6" /> },
    { number: "95%", label: "Success Rate", icon: <FaChalkboardTeacher className="w-6 h-6" /> },
    { number: "500+", label: "Courses", icon: <FaTools className="w-6 h-6" /> },
    { number: "150+", label: "Countries", icon: <FaMapMarkerAlt className="w-6 h-6" /> }
  ];

  return (
    <>
      <footer className="bg-gradient-to-b from-gray-50 to-gray-100 text-gray-700 py-16 border-t border-gray-200">
        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className={`fixed right-8 bottom-8 w-14 h-14 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 z-50 ${
            showBackToTop 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-10 pointer-events-none"
          }`}
          aria-label="Back to top"
        >
          <FaChevronUp className="w-6 h-6" />
        </button>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12">
            
            {/* Company Info */}
            <div className="lg:col-span-1 text-center md:text-left">
              <div className="flex justify-center md:justify-start items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl shadow-md">
                  {isHomePage2Group ? (
                    <FaLaptopCode className="w-8 h-8 text-white" />
                  ) : (
                    <FaGraduationCap className="w-8 h-8 text-white" />
                  )}
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
                  {isHomePage2Group ? "Stackly IT" : "Stackly"}
                </h1>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                {isHomePage2Group 
                  ? "Your trusted partner for cutting-edge IT solutions. We deliver innovative technology services that transform businesses and drive digital growth."
                  : "Your trusted partner for world-class online education. We deliver cutting-edge learning experiences, industry-relevant curriculum, and personalized career pathways."
                }
              </p>

              {/* Social Icons */}
              <div className="flex justify-center md:justify-start gap-3">
                {[
                  { 
                    icon: <FaFacebookF className="w-5 h-5" />, 
                    label: "Facebook",
                    color: "hover:bg-blue-600 hover:text-white"
                  },
                  { 
                    icon: <FaLinkedinIn className="w-5 h-5" />, 
                    label: "LinkedIn",
                    color: "hover:bg-blue-700 hover:text-white"
                  },
                  { 
                    icon: <FaGithub className="w-5 h-5" />, 
                    label: "GitHub",
                    color: "hover:bg-gray-800 hover:text-white"
                  },
                  { 
                    icon: <FaInstagram className="w-5 h-5" />, 
                    label: "Instagram",
                    color: "hover:bg-pink-600 hover:text-white"
                  }
                ].map((social, index) => (
                  <Link
                    key={index}
                    to="/404"
                    className={`w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-gray-600 hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-md ${social.color}`}
                    aria-label={social.label}
                    title={social.label}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Services Section - Show different content based on page group */}
            {isHomePage2Group ? (
              <div className="lg:col-span-1 text-center md:text-left">
                <div className="flex items-center gap-2 mb-6 justify-center md:justify-start">
                  <FaTools className="w-6 h-6 text-purple-600" />
                  <h5 className="text-gray-800 text-lg font-semibold">IT Services</h5>
                </div>
                <ul className="space-y-3">
                  {homepage2Services.map((service, index) => (
                    <li key={index}>
                      <Link 
                        to={service.url} 
                        className="group flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-all duration-300 text-sm font-medium py-2.5 px-4 rounded-lg hover:bg-white hover:shadow-sm"
                      >
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {service.icon}
                        </span>
                        <span>{service.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="lg:col-span-1 text-center md:text-left">
                <div className="flex items-center gap-2 mb-6 justify-center md:justify-start">
                  <FaChalkboardTeacher className="w-6 h-6 text-purple-600" />
                  <h5 className="text-gray-800 text-lg font-semibold">Learning Programs</h5>
                </div>
                <ul className="space-y-3">
                  {originalLearningPrograms.map((program, index) => (
                    <li key={index}>
                      <Link 
                        to={program.url} 
                        className="group flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-all duration-300 text-sm font-medium py-2.5 px-4 rounded-lg hover:bg-white hover:shadow-sm"
                      >
                        <FaExternalLinkAlt className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span>{program.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Quick Links - Show different links based on page group */}
            <div className="lg:col-span-1 text-center md:text-left">
              <div className="flex items-center gap-2 mb-6 justify-center md:justify-start">
                <FaSitemap className="w-6 h-6 text-purple-600" />
                <h5 className="text-gray-800 text-lg font-semibold">Quick Links</h5>
              </div>
              <ul className="space-y-3">
                {(isHomePage2Group ? homepage2QuickLinks : originalQuickLinks).map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.url} 
                      className="group flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-all duration-300 text-sm font-medium py-2.5 px-4 rounded-lg hover:bg-white hover:shadow-sm"
                    >
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {link.icon}
                      </span>
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1 text-center md:text-left">
              <div className="flex items-center gap-2 mb-6 justify-center md:justify-start">
                <FaEnvelope className="w-6 h-6 text-purple-600" />
                <h5 className="text-gray-800 text-lg font-semibold">Get In Touch</h5>
              </div>
              
              <div className="space-y-5">
                <div className="flex flex-col items-center md:items-start">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <FaMapMarkerAlt className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm text-gray-800 font-medium">
                        {isHomePage2Group ? "IT Solutions Hub" : "Education Hub"}
                      </p>
                      <p className="text-sm text-gray-600">MMR Complex, Salem</p>
                      <p className="text-sm text-gray-600">Tamil Nadu, India - 636008</p>
                    </div>
                  </div>
                  
                  <Link
                    to="/404"
                    className="group inline-flex items-center gap-2 text-sm text-purple-600 hover:text-purple-700 font-medium mt-2"
                  >
                    <span>View on Google Maps</span>
                    <FaExternalLinkAlt className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
                
                <div className="flex flex-col gap-3">
                  <Link 
                    to="/404" 
                    className="group flex items-center gap-3 text-gray-600 hover:text-purple-600 transition-colors duration-300 justify-center md:justify-start"
                  >
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-300">
                      <MdPhone className="w-5 h-5 text-purple-600" />
                    </div>
                    <span className="font-medium">+91 12345 67890</span>
                  </Link>
                  
                  <Link 
                    to="/404" 
                    className="group flex items-center gap-3 text-gray-600 hover:text-purple-600 transition-colors duration-300 justify-center md:justify-start"
                  >
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-300">
                      <MdEmail className="w-5 h-5 text-purple-600" />
                    </div>
                    <span className="font-medium">
                      {isHomePage2Group ? "info@stacklyit.com" : "info@stacklyedu.com"}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-300 pt-12">
            {/* Stats Section - Different stats based on page group */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              {(isHomePage2Group ? homepage2Stats : originalStats).map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
                >
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg">
                      <div className="text-purple-600">{stat.icon}</div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-800 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Bottom Footer */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Copyright */}
              <div className="text-center md:text-left">
                <p className="text-gray-600">
                  &copy; {currentYear} <span className="font-semibold text-gray-800">
                    {isHomePage2Group ? "Stackly IT Solutions" : "Stackly Education"}
                  </span>. All rights reserved.
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  {isHomePage2Group 
                    ? "Transforming businesses with innovative technology solutions"
                    : "Transforming lives through quality online learning"
                  }
                </p>
              </div>

              {/* Legal Links */}
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                {[
                  { label: "Privacy Policy", url: "/404", icon: <FaShieldAlt className="w-4 h-4" /> },
                  { label: "Terms of Service", url: "/404", icon: <FaFileContract className="w-4 h-4" /> },
                  { label: isHomePage2Group ? "Service Level Agreement" : "Academic Policy", 
                    url: "/404", 
                    icon: isHomePage2Group ? <FaFileContract className="w-4 h-4" /> : <FaGraduationCap className="w-4 h-4" /> 
                  },
                  { label: "Sitemap", url: "/404", icon: <FaSitemap className="w-4 h-4" /> },
                  { label: "Careers", url: "/404", icon: <FaBriefcase className="w-4 h-4" /> }
                ].map((link, index) => (
                  <Link
                    key={index}
                    to={link.url}
                    className="group flex items-center gap-2 text-gray-600 hover:text-purple-600 hover:bg-white px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {link.icon}
                    </span>
                    <span>{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;