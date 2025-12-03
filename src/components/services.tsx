import {
  Building2,
  Wrench,
  Palette,
  Shield,
  Home,
  Briefcase,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Building2,
    title: "Building Facades",
    description:
      "Expert facade installation including glass curtain walls and modern cladding systems.",
  },
  {
    icon: Briefcase,
    title: "Commercial Construction",
    description:
      "Complete engineering solutions for office buildings, retail spaces, and commercial complexes.",
  },
  {
    icon: Home,
    title: "Residential Projects",
    description:
      "Quality construction and renovation for single-family homes and multi-unit developments.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Repair",
    description:
      "Comprehensive maintenance services ensuring longevity and performance.",
  },
  {
    icon: Palette,
    title: "Custom Design",
    description:
      "Tailored architectural solutions bringing your vision to life.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description:
      "Rigorous quality control meeting industry standards and safety regulations.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Quality construction solutions for commercial and residential projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}