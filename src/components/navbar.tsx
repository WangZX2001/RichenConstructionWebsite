import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../../photo/richen-company.png";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if we're on a page that should have a blue navbar
  const isBlueNavPage = ["/projects", "/services", "/contact"].includes(location.pathname) || 
    location.pathname.startsWith("/projects/");
  
  // Check if we're on terms or privacy pages (smaller hero sections)
  const isLegalPage = ["/terms", "/privacy"].includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      // Use different scroll threshold for pages with smaller hero sections
      // This includes legal pages and blue nav pages (projects, services, contact)
      const scrollThreshold = (isLegalPage || isBlueNavPage) ? window.innerHeight * 0.2 : window.innerHeight * 0.8;
      
      if (window.scrollY > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, [isLegalPage, isBlueNavPage]);

  const scrollToSection = (id: string) => {
    if (id === "hero") {
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
      }
    }
  };

  const menuItems = [
    { name: "about", path: "/about" },
    { name: "projects", path: "/projects" },
    { name: "services", path: "/services" },
    { name: "contact", path: "/contact" },
  ];

  // Handle navigation with scroll to section for About
  const handleNavClick = (item: { name: string; path: string }) => {
    if (item.name === "about") {
      navigate("/");
      setTimeout(() => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      navigate(item.path);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
      }, 0);
    }
    setIsMenuOpen(false);
  };

  // Determine navbar background color
  const getNavbarBg = () => {
    if (isBlueNavPage) {
      return isScrolled ? "bg-white shadow-md" : "bg-slate-900"; // Blue-to-white for blue nav pages
    }
    // For home/about pages, use white background when menu is open on mobile
    if (isMenuOpen) {
      return "bg-white shadow-md";
    }
    return isScrolled ? "bg-white shadow-md" : "bg-transparent"; // Transparent-to-white for home/about
  };

  // Determine text colors based on background
  const getTextColor = () => {
    if (isBlueNavPage) {
      return isScrolled ? "text-blue-900" : "text-white"; // White on blue, dark on white
    }
    // For home/about, use dark text when menu is open on mobile
    if (isMenuOpen) {
      return "text-blue-900";
    }
    return isScrolled ? "text-blue-900" : "text-white"; // Dynamic for home/about
  };

  const getTaglineColor = () => {
    if (isBlueNavPage) {
      return isScrolled ? "text-gray-700" : "text-gray-200"; // Light on blue, dark on white
    }
    // For home/about, use dark text when menu is open on mobile
    if (isMenuOpen) {
      return "text-gray-700";
    }
    return isScrolled ? "text-gray-700" : "text-gray-200"; // Dynamic for home/about
  };

  const getLinkColor = () => {
    if (isBlueNavPage) {
      return isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-gray-200";
    }
    if (isMenuOpen) {
      return "text-gray-700 hover:text-blue-600";
    }
    return isScrolled
      ? "text-gray-700 hover:text-blue-600"
      : "text-white hover:text-gray-200";
  };

  const getMenuButtonColor = () => {
    if (isBlueNavPage) {
      return isScrolled ? "text-gray-700" : "text-white";
    }
    // For home/about, use dark icon when menu is open on mobile
    if (isMenuOpen) {
      return "text-gray-700";
    }
    return isScrolled ? "text-gray-700" : "text-white";
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getNavbarBg()}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-26">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="flex items-center gap-8 cursor-pointer"
          >
            <Link
              to="/"
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              className="flex-shrink-0"
            >
              <div className="bg-white p-2 rounded-xl">
                <img
                  src={logo}
                  alt="Richen Construction Logo"
                  className="h-12 sm:h-16 w-auto"
                />
              </div>
            </Link>
            <Link
              to="/"
              className="flex flex-col flex-shrink min-w-0"
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
            >
              <div
                className={`text-lg sm:text-2xl tracking-tight transition-colors duration-300 ${getTextColor()}`}
                style={{
                  fontFamily:
                    "system-ui, -apple-system, sans-serif",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                }}
              >
                Richen Construction
              </div>
              <div
                className={`text-xs sm:text-sm transition-colors duration-300 ${getTaglineColor()}`}
                style={{
                  fontFamily:
                    "system-ui, -apple-system, sans-serif",
                  letterSpacing: "0.05em",
                }}
              >
                Built with Precision.
              </div>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.4 + index * 0.15,
                  ease: "easeOut",
                }}
              >
                <Link
                  to={item.path}
                  className={`transition-colors text-lg ${getLinkColor()}`}
                  onClick={() => handleNavClick(item)}
                >
                  {item.name.charAt(0).toUpperCase() +
                    item.name.slice(1)}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
              ease: "easeOut",
            }}
            className={`md:hidden p-2 ${getMenuButtonColor()}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden py-4 border-t"
          >
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-700 hover:text-blue-600 transition-colors text-left"
                  onClick={() => handleNavClick(item)}
                >
                  {item.name.charAt(0).toUpperCase() +
                    item.name.slice(1)}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}