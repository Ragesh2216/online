import React from "react";
import logo from "../images/logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900 text-gray-300 py-12">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-8 border-b border-purple-700">
        
        {/* Company Info */}
        <div className="lg:col-span-1 text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">Stackly</h1>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed mb-4">
            Your trusted partner for world-class online education. We deliver cutting-edge learning experiences, industry-relevant curriculum, and personalized career pathways to help you achieve your educational goals.
          </p>

          <div className="flex justify-center md:justify-start space-x-4">
            {[
              { icon: <FacebookIcon className="hover:text-purple-400 transition-colors duration-200" />, url: "/404" },
              { icon: <LinkedInIcon className="hover:text-blue-400 transition-colors duration-200" />, url: "/404" },
              { icon: <GitHubIcon className="hover:text-gray-300 transition-colors duration-200" />, url: "/404" },
              { icon: <InstagramIcon className="hover:text-pink-400 transition-colors duration-200" />, url: "/404" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="w-10 h-10 bg-purple-800/50 rounded-lg flex items-center justify-center hover:bg-purple-700/50 transition-colors duration-200 backdrop-blur-sm"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Learning Programs */}
        <div className="lg:col-span-1 text-center md:text-left">
          <h5 className="text-white text-lg font-semibold mb-6">Learning Programs</h5>
          <ul className="space-y-3">
            {[
              { label: "Online Degree Programs", url: "/degrees" },
            
              { label: "Live Instructor Sessions", url: "/live-sessions" },
              { label: "Corporate Training", url: "/corporate" },
              { label: "Skill Development", url: "/skills" }
            ].map((program, index) => (
              <li key={index}>
                <a 
                  href={program.url} 
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm font-normal block py-1"
                >
                  {program.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Quick Links */}
        <div className="lg:col-span-1 text-center md:text-left">
          <h5 className="text-white text-lg font-semibold mb-6">Quick Links</h5>
          <ul className="space-y-3">
            {[
              { label: "Home", url: "/" },
              { label: "About Us", url: "/about" },
              { label: "Services", url: "/services" },
              { label: "Contact Us", url: "/contact" },
              { label: "Login", url: "/login" },
             
            ].map((link, index) => (
              <li key={index}>
                <a 
                  href={link.url} 
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm font-normal block py-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="lg:col-span-1 text-center md:text-left">
          <h5 className="text-white text-lg font-semibold mb-6">Get In Touch</h5>
          <div className="space-y-4">
            <div className="flex flex-col items-center md:items-start md:flex-row md:space-x-3">
              <LocationOnIcon className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0 mb-2 md:mb-0" />
              <div className="text-center md:text-left">
                <p className="text-sm text-gray-300 font-medium">Education Hub</p>
                <p className="text-sm text-gray-400">MMR Complex</p>
                <p className="text-sm text-gray-400">Salem, Tamil Nadu</p>
                <p className="text-sm text-gray-400">India - 636008</p>
              </div>
            </div>
            
            <div className="flex justify-center md:justify-start">
              <a
                href="https://www.google.com/maps/search/?api=1&query=MMR+COMPLEX,+Salem,+Tamil+Nadu+636008"
                target="_blank"
                rel="noreferrer"
                className="text-purple-400 hover:text-purple-300 underline text-sm"
              >
                View on Google Maps
              </a>
            </div>
            
            <div className="flex justify-center md:justify-start items-center space-x-3">
              <PhoneIcon className="w-5 h-5 text-purple-400 flex-shrink-0" />
              <a href="tel:+911234567890" className="text-sm text-gray-400 hover:text-purple-400 transition-colors duration-200">
                +91 12345 67890
              </a>
            </div>
            
            <div className="flex justify-center md:justify-start items-center space-x-3">
              <EmailIcon className="w-5 h-5 text-purple-400 flex-shrink-0" />
              <a href="mailto:info@stacklyedu.com" className="text-sm text-gray-400 hover:text-purple-400 transition-colors duration-200">
                info@stacklyedu.com
              </a>
            </div>
          </div>

          {/* Newsletter Signup */}
          
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} Stackly Education. All rights reserved.
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
            {[
              { label: "Privacy Policy", url: "/404" },
              { label: "Terms of Service", url: "/404" },
              { label: "Academic Policy", url: "/404" },
              { label: "Sitemap", url: "/404" },
              { label: "Careers", url: "/404" }
            ].map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 pt-6 border-t border-purple-800 text-center">
          <p className="text-xs text-gray-500">
            Stackly Education - Transforming lives through quality online learning. 
            Accredited Programs • Industry Expert Instructors • 95% Completion Rate • Global Learning Community
          </p>
        </div>

        {/* Student Success Stats */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { number: "50K+", label: "Students" },
            { number: "95%", label: "Success Rate" },
            { number: "500+", label: "Courses" },
            { number: "150+", label: "Countries" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-lg font-bold text-purple-400">{stat.number}</div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;