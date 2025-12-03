import { Link } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Building2,
  CheckCircle2,
} from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import tampinesImage from "figma:asset/8f01deb045056c89cb54cbd27a4071558a70d768.png";
import tampinesImage2 from "figma:asset/24d62e11559b97f36008788fc4c898d26f4f3414.png";
import tampinesImage3 from "figma:asset/d2611c1bf58e940893489f01e50f3600ef9c33f6.png";
import tampinesImage4 from "figma:asset/e81ccf8db7ac31dedb19df02e27e70fb759bdb8d.png";

export function TampinesOnePage() {
  const images = [
    tampinesImage,
    tampinesImage2,
    tampinesImage3,
    tampinesImage4,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % images.length,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <div className="relative h-[600px] overflow-hidden">
        {/* Image Slider */}
        <div className="relative w-full h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentIndex
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            >
              <ImageWithFallback
                src={image}
                alt={`Tampines One Project ${index + 1}`}
                className="w-full h-full object-cover object-bottom"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Back Button */}
        <div className="absolute top-12 left-0 right-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-white hover:text-blue-300 transition-colors bg-black/60 backdrop-blur-md px-6 py-3 rounded-lg shadow-lg"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Projects
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-blue-300 mb-2">
                Shopping Mall
              </p>
              <h1 className="text-5xl mb-6 text-white">
                Tampines One Renovation
              </h1>
              <div className="flex flex-wrap gap-6 text-white mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>Tampines Central, Singapore</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>2023</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5" />
                  <span>Tampines Development</span>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-white w-8"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-4xl mb-6 text-gray-900">
            Project Overview
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Complete facade renovation for a major retail center
            in Tampines. This comprehensive transformation
            revitalized one of Singapore's most popular shopping
            destinations while maintaining full operational
            capacity throughout the entire renovation period.
          </p>
        </motion.div>

        {/* Scope of Work */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-4xl mb-6 text-gray-900">
            Scope of Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Complete facade replacement",
              "Modern LED lighting integration",
              "Entrance canopy upgrade",
              "Signage and branding installation",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg"
              >
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-4xl mb-6 text-gray-900">
            Results & Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Zero disruption to mall operations",
              "40% increase in foot traffic post-renovation",
              "Enhanced brand visibility with modern aesthetic",
              "Improved natural lighting reducing energy costs by 25%",
            ].map((result, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-blue-50 p-6 rounded-lg"
              >
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-lg">
                  {result}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white"
        >
          <h3 className="text-3xl mb-4">
            Interested in Similar Projects?
          </h3>
          <p className="text-xl mb-8 text-blue-100">
            Contact us to discuss how we can bring your vision
            to life
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </div>
  );
}