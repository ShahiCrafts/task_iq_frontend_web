import React from "react";
import {
  CheckCircle,
  Calendar,
  Users,
  BarChart3,
  Zap,
  Shield,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <CheckCircle className="w-8 h-8 text-orange-500" />,
    title: "Smart Task Tracking",
    description:
      "Organize, prioritize, and monitor your work effortlessly with intelligent sorting and progress updates.",
  },
  {
    icon: <Calendar className="w-8 h-8 text-orange-500" />,
    title: "Integrated Calendar",
    description:
      "Plan ahead with a built-in calendar that keeps deadlines and meetings in perfect sync.",
  },
  {
    icon: <Users className="w-8 h-8 text-orange-500" />,
    title: "Team Collaboration",
    description:
      "Share tasks, assign roles, and track teamwork in real-time for ultimate productivity.",
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
    title: "Detailed Analytics",
    description:
      "Visualize progress with beautiful reports and charts to keep performance on track.",
  },
  {
    icon: <Zap className="w-8 h-8 text-orange-500" />,
    title: "Automated Reminders",
    description:
      "Never miss a deadline with AI-powered notifications and reminders for critical tasks.",
  },
  {
    icon: <Shield className="w-8 h-8 text-orange-500" />,
    title: "Data Security",
    description:
      "Your projects are safe with enterprise-grade encryption and privacy controls.",
  },
];

// Motion settings for fade-up animation
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Features() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Powerful Features
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Everything you need to manage tasks, collaborate with your team, and
          meet deadlines — all in one place.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-8 bg-gray-50 rounded-2xl hover:shadow-xl transition duration-300 text-left"
              custom={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="mb-5">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
