import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  CheckCircle2,
  Shield,
  Target,
  Lightbulb,
  Award,
  Clock,
  Users,
  Building2,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState, useRef } from "react";
import { SingaporeMap } from "./singapore-map";

function CountUpAnimation({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000; // 2 seconds
          const steps = 60;
          const increment = target / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return <div ref={ref}>{count}</div>;
}

export function About() {
  const stats = [
    {
      icon: Clock,
      value: 2017,
      suffix: "",
      label: "Year Established",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Users,
      value: 8,
      suffix: "",
      label: "Years of Experience",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Building2,
      value: 30,
      suffix: "+",
      label: "Projects Completed",
      color: "from-amber-500 to-amber-600",
    },
    {
      icon: Award,
      value: 20,
      suffix: "+",
      label: "Industry Awards",
      color: "from-green-500 to-green-600",
    },
  ];

  const values = [
    {
      icon: Shield,
      title: "Quality & Safety",
      description:
        "Highest standards in quality control and workplace safety.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Cutting-edge materials and techniques for better results.",
    },
    {
      icon: Target,
      title: "Precision",
      description:
        "Meticulous attention to detail on every project.",
    },
    {
      icon: CheckCircle2,
      title: "Reliability",
      description:
        "On-time delivery and transparent communication.",
    },
  ];

  const expertise = [
    "Commercial Building Construction",
    "Residential Development",
    "Building Facades & Curtain Walls",
    "Aluminum Composite Panels",
    "Glass Facade Engineering",
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-3xl mb-6 text-gray-900">
              About Us
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Established in 2017, Richen Construction
              specializes in comprehensive facade solutions,
              including design, fabrication, and installation
              for commercial and residential developments. With
              a strong commitment to quality and precision, we
              deliver facade systems that meet both aesthetic
              and performance expectations.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              From concept to completion, we focus on technical
              excellence, reliable execution, and safe site
              practices, making Richen a trusted partner for
              builders, architects, and developers seeking
              durable, modern, and compliant facade solutions.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1692166567037-4009225486ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjQ1NjMyODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Construction team at work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Achievements Section - Full Width */}
      <div className="mb-20 relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1553601581-8a1f1010efbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBnbGFzcyUyMGJ1aWxkaW5nJTIwZmFjYWRlfGVufDF8fHx8MTc2NDU4MTk4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Modern building facade"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-slate-900/95 to-gray-900/95"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 py-24 md:py-32 px-4">
          <motion.h3
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl text-center mb-20 text-white"
          >
            Our Achievements
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                className="text-center"
              >
                {/* White Circle with Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2 + 0.3,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                  whileHover={{
                    rotate: 360,
                    scale: 1.1,
                    transition: { duration: 0.6, ease: "easeInOut" },
                  }}
                  className="w-24 h-24 rounded-full border-4 border-white flex items-center justify-center mb-6 mx-auto bg-transparent relative"
                >
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 10px rgba(255,255,255,0.2)",
                        "0 0 20px rgba(255,255,255,0.3)",
                        "0 0 10px rgba(255,255,255,0.2)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 rounded-full"
                  />
                  <stat.icon
                    className="h-10 w-10 text-white relative z-10"
                    strokeWidth={2}
                  />
                </motion.div>

                {/* Number */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2 + 0.5,
                    type: "spring",
                    stiffness: 150,
                  }}
                  className="text-4xl md:text-5xl mb-1 text-white flex items-start justify-center"
                >
                  <CountUpAnimation target={stat.value} />
                  {stat.suffix && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.2 + 2.2,
                      }}
                      className="text-2xl md:text-3xl ml-1"
                    >
                      {stat.suffix}
                    </motion.span>
                  )}
                </motion.div>

                {/* Label */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2 + 0.7,
                  }}
                  className="text-lg text-white/90"
                >
                  {stat.label}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Singapore Map Section - Full Width */}
      <SingaporeMap />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Values Section */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl text-center mb-12 text-gray-900">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col"
              >
                <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4 flex-shrink-0">
                  <value.icon className="h-7 w-7 text-blue-600" />
                </div>
                <h4 className="text-xl mb-3 text-gray-900 flex-shrink-0">
                  {value.title}
                </h4>
                <p className="text-gray-600 flex-grow">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Areas of Expertise */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMGZhY2FkZXxlbnwxfHx8fDE3NjQ1NjMyODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Modern building facade"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl md:text-4xl mb-6 text-gray-900">
                Areas of Expertise
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Specialized construction services across
                commercial and residential sectors.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {expertise.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}