import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../../photo/richen-company.png";

export function Footer() {
  const navigate = useNavigate();

  const handleNavClick = (page: string) => {
    if (page === "about") {
      navigate("/");
      setTimeout(() => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      navigate(`/${page}`);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
      }, 0);
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-4 sm:gap-8 mb-4">
              <div className="bg-white p-2 rounded-xl flex-shrink-0">
                <img
                  src={logo}
                  alt="Richen Construction Logo"
                  className="h-12 sm:h-16 w-auto"
                />
              </div>
              <div className="flex flex-col flex-shrink min-w-0">
                <span
                  className="text-lg sm:text-2xl text-white tracking-tight"
                  style={{
                    fontFamily:
                      "system-ui, -apple-system, sans-serif",
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Richen Construction
                </span>
                <span
                  className="text-xs sm:text-sm text-blue-300"
                  style={{
                    fontFamily:
                      "system-ui, -apple-system, sans-serif",
                    letterSpacing: "0.05em",
                  }}
                >
                  Built with Precision.
                </span>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Quality construction solutions for commercial and
              residential projects.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                className="bg-gray-800/50 text-blue-300 p-2 rounded-lg hover:bg-gray-700/50 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800/50 text-blue-300 p-2 rounded-lg hover:bg-gray-700/50 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800/50 text-blue-300 p-2 rounded-lg hover:bg-gray-700/50 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800/50 text-blue-300 p-2 rounded-lg hover:bg-gray-700/50 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="md:ml-12">
            <h3 className="text-lg mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button
                  onClick={() => handleNavClick("about")}
                  className="hover:text-blue-300 transition-colors cursor-pointer text-left"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("projects")}
                  className="hover:text-blue-300 transition-colors cursor-pointer text-left"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("services")}
                  className="hover:text-blue-300 transition-colors cursor-pointer text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("contact")}
                  className="hover:text-blue-300 transition-colors cursor-pointer text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg mb-4 text-white">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="h-4 w-4 text-blue-400" />
                <a
                  href="tel:+6593210383"
                  className="hover:text-blue-300 transition-colors"
                >
                  (+65) 9321 0383
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="h-4 w-4 text-blue-400" />
                <a
                  href="mailto:wenwu1968@gmail.com"
                  className="hover:text-blue-300 transition-colors"
                >
                  wenwu1968@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="h-4 w-4 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p>10 Jalan Besar, #07-05 Sim Lim Tower</p>
                  <p>Singapore 208787</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Richen
            Construction. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <button
              onClick={() => handleNavClick("terms")}
              className="hover:text-blue-300 transition-colors"
            >
              Terms of Service
            </button>
            <span>|</span>
            <button
              onClick={() => handleNavClick("privacy")}
              className="hover:text-blue-300 transition-colors"
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}