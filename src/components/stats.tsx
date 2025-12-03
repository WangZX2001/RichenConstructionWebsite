import { Award, Clock, Users } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState, useRef } from "react";

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

export function Stats() {
  const stats = [
    {
      icon: Clock,
      value: 15,
      suffix: "+",
      label: "Years Experience",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Users,
      value: 200,
      suffix: "+",
      label: "Projects Completed",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Award,
      value: 50,
      suffix: "+",
      label: "Industry Awards",
      color: "from-amber-500 to-amber-600",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [90, 0, 90],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Our Achievements
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Building excellence through years of dedication and innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group"
            >
              {/* Card */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
                {/* Gradient border effect on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`}
                />

                {/* Icon */}
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`bg-gradient-to-br ${stat.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto shadow-lg`}
                >
                  <stat.icon className="h-8 w-8 text-white" />
                </motion.div>

                {/* Number with count-up animation */}
                <div className="text-5xl md:text-6xl text-white mb-2 text-center">
                  <CountUpAnimation target={stat.value} />
                  <span className="inline-block ml-1">{stat.suffix}</span>
                </div>

                {/* Label */}
                <div className="text-lg text-gray-300 text-center">
                  {stat.label}
                </div>

                {/* Decorative line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                  className={`h-1 bg-gradient-to-r ${stat.color} rounded-full mt-6 mx-auto`}
                  style={{ maxWidth: "80%" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
