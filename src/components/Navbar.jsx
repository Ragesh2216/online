import React, { useEffect, useRef, useState } from "react";
import logo from "../images/logo.webp";
import { Link, useLocation } from "react-router-dom";
import { 
  FaHome, 
  FaTachometerAlt, 
  FaInfoCircle, 
  FaConciergeBell, 
  FaEnvelope, 
  FaSignInAlt, 
  FaDollarSign,
  FaChevronDown,
  FaBars,
  FaTimes,
  FaGraduationCap
} from "react-icons/fa";

const Navbar = () => {
  const navRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const [isHome2DropdownOpen, setIsHome2DropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setIsHomeDropdownOpen(false);
    setIsHome2DropdownOpen(false);
  };

  const toggleHomeDropdown = () => setIsHomeDropdownOpen(!isHomeDropdownOpen);
  const toggleHome2Dropdown = () => setIsHome2DropdownOpen(!isHome2DropdownOpen);
  
  const closeHomeDropdown = () => setIsHomeDropdownOpen(false);
  const closeHome2Dropdown = () => setIsHome2DropdownOpen(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if we're on homepage2 OR pricing OR course routes
  const isHomePage2 = ['/homepage2', '/latest', '/course'].includes(location.pathname);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
        setIsHomeDropdownOpen(false);
        setIsHome2DropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Icon mapping
  const iconMap = {
    home: <FaHome className="text-gray-600 group-hover:text-purple-600 transition-colors duration-300" />,
    dashboard: <FaTachometerAlt className="text-gray-600 group-hover:text-purple-600 transition-colors duration-300" />,
    about: <FaInfoCircle className="text-gray-600 group-hover:text-purple-600 transition-colors duration-300" />,
    services: <FaConciergeBell className="text-gray-600 group-hover:text-purple-600 transition-colors duration-300" />,
    contact: <FaEnvelope className="text-gray-600 group-hover:text-purple-600 transition-colors duration-300" />,
    login: <FaSignInAlt className="text-white group-hover:text-white transition-colors duration-300" />,
    pricing: <FaDollarSign className="text-gray-600 group-hover:text-purple-600 transition-colors duration-300" />,
    course: <FaGraduationCap className="text-gray-600 group-hover:text-purple-600 transition-colors duration-300" />
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200" 
          : "bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-300"
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
            className="hover:opacity-80 transition-all duration-300 hover:scale-105 block group"
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
            gap-0 lg:gap-2
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
          {/* Home Link - Different behavior for homepage2/pricing/course */}
          {isHomePage2 ? (
            // On homepage2, pricing, or course: Home2 with dropdown to Home1
            <li className="relative w-full lg:w-auto group border-b border-gray-100 lg:border-none">
              <div className="flex items-center justify-between px-4 py-3 lg:py-0 w-full hover:bg-gray-50 lg:hover:bg-transparent">
                <Link 
                  to="/homepage2"
                  onClick={(e) => {
                    if (!isHome2DropdownOpen) {
                      closeHome2Dropdown();
                      closeMenu();
                    } else {
                      e.preventDefault(); // Prevent navigation when dropdown is open
                    }
                  }}
                  className="flex items-center gap-3 group-hover:text-purple-600 transition-all duration-300 text-gray-800 py-2 lg:py-2 px-2 lg:px-3 rounded-lg hover:bg-gray-50 lg:hover:bg-gray-100 flex-1"
                > 
                  <div className="group-hover:scale-110 transition-transform duration-300 w-5">
                    {iconMap.home}
                  </div>
                  <span className="font-semibold">Home2</span>
                </Link>
                
                {/* Dropdown toggle button for Home2 */}
                <button
                  onClick={toggleHome2Dropdown}
                  className="p-2 hover:bg-gray-100 lg:hover:bg-gray-200 rounded-lg transition-all duration-300 flex-shrink-0"
                  aria-label="Toggle home2 dropdown"
                  aria-expanded={isHome2DropdownOpen}
                >
                  <FaChevronDown 
                    className={`h-4 w-4 text-gray-500 transition-transform duration-300 ${
                      isHome2DropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Dropdown Menu for Home2 */}
              <div
                className={`
                  ${isHome2DropdownOpen ? "block animate-fadeIn" : "hidden"}
                  lg:absolute
                  top-full left-0 lg:left-0
                  w-full lg:w-56
                  bg-white/95 backdrop-blur-sm
                  border border-gray-200
                  rounded-xl lg:rounded-xl
                  shadow-xl
                  py-3
                  z-50
                  mt-0 lg:mt-2
                `}
              >
                <Link
                  to="/"
                  onClick={() => {
                    closeHome2Dropdown();
                    closeMenu();
                  }}
                  className="flex items-center gap-4 py-3 px-6 hover:bg-gray-50 hover:text-purple-600 transition-all duration-300 group"
                >
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {iconMap.home}
                  </div>
                  <span className="font-medium">Switch to Home1</span>
                </Link>
              </div>
            </li>
          ) : (
            // On other pages: Home1 with dropdown to Home2
            <li className="relative w-full lg:w-auto group border-b border-gray-100 lg:border-none">
              <div className="flex items-center justify-between px-4 py-3 lg:py-0 w-full hover:bg-gray-50 lg:hover:bg-transparent">
                <Link 
                  to="/"
                  onClick={(e) => {
                    if (!isHomeDropdownOpen) {
                      closeHomeDropdown();
                      closeMenu();
                    } else {
                      e.preventDefault(); // Prevent navigation when dropdown is open
                    }
                  }}
                  className="flex items-center gap-3 group-hover:text-purple-600 transition-all duration-300 text-gray-800 py-2 lg:py-2 px-2 lg:px-3 rounded-lg hover:bg-gray-50 lg:hover:bg-gray-100 flex-1"
                > 
                  <div className="group-hover:scale-110 transition-transform duration-300 w-5">
                    {iconMap.home}
                  </div>
                  <span className="font-semibold">Home</span>
                </Link>
                
                {/* Dropdown toggle button for Home1 */}
                <button
                  onClick={toggleHomeDropdown}
                  className="p-2 hover:bg-gray-100 lg:hover:bg-gray-200 rounded-lg transition-all duration-300 flex-shrink-0"
                  aria-label="Toggle home dropdown"
                  aria-expanded={isHomeDropdownOpen}
                >
                  <FaChevronDown 
                    className={`h-4 w-4 text-gray-500 transition-transform duration-300 ${
                      isHomeDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Dropdown Menu for Home1 */}
              <div
                className={`
                  ${isHomeDropdownOpen ? "block animate-fadeIn" : "hidden"}
                  lg:absolute
                  top-full left-0 lg:left-0
                  w-full lg:w-56
                  bg-white/95 backdrop-blur-sm
                  border border-gray-200
                  rounded-xl lg:rounded-xl
                  shadow-xl
                  py-3
                  z-50
                  mt-0 lg:mt-2
                `}
              >
                <Link
                  to="/homepage2"
                  onClick={() => {
                    closeHomeDropdown();
                    closeMenu();
                  }}
                  className="flex items-center gap-4 py-3 px-6 hover:bg-gray-50 hover:text-purple-600 transition-all duration-300 group"
                >
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {iconMap.home}
                  </div>
                  <span className="font-medium">Switch to Home2</span>
                </Link>
              </div>
            </li>
          )}

          {/* Show different navigation items based on page */}
          {!isHomePage2 ? (
            // On Home1 pages: Show full navigation
            <>
              <NavItem 
                to="/dashboards" 
                icon={iconMap.dashboard}
                text="Dashboard"
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
              
              {/* Login as NavItem */}
              <NavItem 
                to="/login" 
                icon={iconMap.login}
                text="Login"
                onClick={closeMenu}
                isHighlighted={true}
              />
            </>
          ) : (
            // On Home2 pages: Show Pricing, Course, and Login
            <>
              {/* Show Pricing link if we're NOT on /latest */}
              {location.pathname !== "/latest" && (
                <NavItem 
                  to="/latest" 
                  icon={iconMap.pricing}
                  text="Pricing"
                  onClick={closeMenu}
                />
              )}
              
              {/* Show Course link if we're NOT on /course */}
              {location.pathname !== "/course" && (
                <NavItem 
                  to="/course" 
                  icon={iconMap.course}
                  text="Course"
                  onClick={closeMenu}
                />
              )}
              
              
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

// Updated NavItem component to support highlighted state
const NavItem = ({ to, icon, text, onClick, isHighlighted = false }) => (
  <li className="w-full lg:w-auto border-b border-gray-100 lg:border-none">
    <Link
      to={to}
      onClick={onClick}
      className={`group flex items-center gap-3 text-center py-3.5 px-6 lg:py-3 lg:px-5 rounded-lg transition-all duration-300 w-full lg:w-auto ${
        isHighlighted 
          ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 hover:scale-105 hover:shadow-xl" 
          : "hover:bg-gray-50 hover:text-purple-600"
      }`}
    >
      <div className={`${isHighlighted ? 'text-white' : ''} group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <span className="font-medium">{text}</span>
    </Link>
  </li>
);

export default Navbar;