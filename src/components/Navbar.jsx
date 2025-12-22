import React, { useEffect, useRef, useState } from "react";
import logo from "../images/logo.webp";
import { Link, useLocation } from "react-router-dom";
import { 
  FaHome, 
  FaTachometerAlt, 
  FaCreditCard, 
  FaInfoCircle, 
  FaConciergeBell, 
  FaEnvelope, 
  FaSignInAlt, 
  FaDollarSign,
  FaChevronDown,
  FaBars,
  FaTimes,
  FaChevronUp,  // Added comma here
  FaGraduationCap
} from "react-icons/fa";

const Navbar = () => {
  const navRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setIsHomeDropdownOpen(false);
  };

  const toggleHomeDropdown = () => setIsHomeDropdownOpen(!isHomeDropdownOpen);
  const closeHomeDropdown = () => setIsHomeDropdownOpen(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if we're on the homepage2 route
  const isHomePage2 = location.pathname === "/homepage2";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
        setIsHomeDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Icon mapping
  const iconMap = {
    home: <FaHome className="text-gray-600 group-hover:text-purple-600" />,
    dashboard: <FaTachometerAlt className="text-gray-600 group-hover:text-purple-600" />,
    subscription: <FaCreditCard className="text-gray-600 group-hover:text-purple-600" />,
    about: <FaInfoCircle className="text-gray-600 group-hover:text-purple-600" />,
    services: <FaConciergeBell className="text-gray-600 group-hover:text-purple-600" />,
    contact: <FaEnvelope className="text-gray-600 group-hover:text-purple-600" />,
    login: <FaSignInAlt className="text-gray-600 group-hover:text-purple-600" />,
    pricing: <FaDollarSign className="text-gray-600 group-hover:text-purple-600" />,
    course: <FaGraduationCap className="text-gray-600 group-hover:text-purple-600" />,
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${
        isScrolled 
          ? "bg-white shadow-lg border-b border-gray-100" 
          : "bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200"
      }`}
    >
      <nav
        ref={navRef}
        className="flex justify-between items-center px-4 sm:px-6 py-4 max-w-7xl mx-auto relative"
      >
        {/* Logo */}
        <div className="z-50">
          <Link 
            to="/" 
            onClick={closeMenu}
            className="hover:opacity-80 transition-all duration-300 hover:scale-105 block"
          >
            <img 
              src={logo} 
              width={140} 
              alt="Site Logo" 
              className={`transition-all duration-300 ${
                isScrolled ? "h-10" : "h-11"
              }`}
            />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="lg:hidden z-50">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none hover:bg-gray-100 rounded-xl p-3 transition-all duration-300 hover:scale-105 active:scale-95"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`
            ${isOpen ? "flex" : "hidden"} 
            lg:flex
            flex-col lg:flex-row
            gap-0 lg:gap-3
            items-center
            text-base font-medium
            absolute lg:static
            top-full left-0 w-full lg:w-auto
            bg-white lg:bg-transparent
            border border-gray-100 lg:border-none
            shadow-2xl lg:shadow-none
            rounded-2xl lg:rounded-none
            py-2 lg:py-0
            z-40
            transition-all duration-300 ease-in-out
            mt-1 lg:mt-0
          `}
        >
          {/* Home Dropdown */}
          <li className="relative w-full lg:w-auto border-b border-gray-100 lg:border-none">
            <div className="flex items-center justify-between lg:justify-start px-6 py-3 lg:py-0 w-full group">
              <Link 
                to="/"
                onClick={() => {
                  closeHomeDropdown();
                  closeMenu();
                }}
                className="flex items-center gap-2 group-hover:text-purple-600 transition-colors duration-300 text-gray-800"
              > 
                {iconMap.home}
                <span className="font-semibold">
                  {isHomePage2 ? "Home2" : "Home"}
                </span>
              </Link>
              
              {/* Dropdown toggle button */}
              <button
                onClick={toggleHomeDropdown}
                className="p-2 hover:bg-gray-100 lg:hover:bg-gray-200 rounded-lg transition-all duration-300 lg:ml-2"
                aria-label="Toggle home dropdown"
              >
                <FaChevronDown 
                  className={`h-4 w-4 text-gray-500 transition-transform duration-300 ${
                    isHomeDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {/* Dropdown Menu */}
            <div
              className={`
                ${isHomeDropdownOpen ? "block animate-fadeIn" : "hidden"}
                lg:absolute
                top-full left-0 lg:left-0
                w-full lg:w-56
                bg-white
                border border-gray-100
                rounded-xl lg:rounded-xl
                shadow-xl
                py-3
                z-50
                mt-0 lg:mt-2
                backdrop-blur-sm bg-white/95
              `}
            >
              <Link
                to={isHomePage2 ? "/" : "/homepage2"}
                onClick={() => {
                  closeHomeDropdown();
                  closeMenu();
                }}
                className="flex items-center gap-3 py-3 px-6 hover:bg-gray-50 hover:text-purple-600 transition-all duration-300 group"
              >
                {iconMap.home}
                <span className="font-medium">
                  {isHomePage2 ? "Switch to Home" : "Switch to Home2"}
                </span>
              </Link>
            </div>
          </li>

          {/* Only show other navigation items if NOT on homepage2 */}
          {!isHomePage2 ? (
            <>
              <NavItem 
                to="/dashboards" 
                icon={iconMap.dashboard}
                text="Dashboard"
                onClick={closeMenu}
              />
              
              <NavItem 
                to="/blog" 
                icon={iconMap.subscription}
                text="Blog"
                onClick={closeMenu}
              />
              
              <NavItem 
                to="/about" 
                icon={iconMap.about}
                text="About us"
                onClick={closeMenu}
              />
              
              <NavItem 
                to="/services" 
                icon={iconMap.services}
                text="Services"
                onClick={closeMenu}
              />
              
              <NavItem 
                to="/contact" 
                icon={iconMap.contact}
                text="Contact"
                onClick={closeMenu}
              />
              
              <li className="w-full lg:w-auto px-4 py-2 lg:py-0">
                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 transition-all duration-300 py-3.5 px-8 rounded-xl font-semibold shadow-md hover:shadow-xl hover:scale-105 active:scale-95 w-full lg:w-auto group"
                >
                  {iconMap.login}
                  <span>Login</span>
                </Link>
              </li>
            </>
          ) : (
            // Show only the Pricing link when on homepage2
            <>
              <NavItem 
                to="/latest" 
                icon={iconMap.pricing}
                text="Pricing"
                onClick={closeMenu}
              />
              <NavItem 
                to="/course" 
                icon={iconMap.course}
                text="Course"
                onClick={closeMenu}
              />
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

// Reusable NavItem component
const NavItem = ({ to, icon, text, onClick }) => (
  <li className="w-full lg:w-auto border-b border-gray-100 lg:border-none">
    <Link
      to={to}
      onClick={onClick}
      className="flex items-center gap-2 text-center py-3.5 px-6 rounded-lg hover:bg-gray-50 hover:text-purple-600 transition-all duration-300 group w-full lg:px-5"
    >
      <span className="group-hover:scale-110 transition-transform duration-300">
        {icon}
      </span>
      <span className="font-medium">{text}</span>
    </Link>
  </li>
);

export default Navbar;