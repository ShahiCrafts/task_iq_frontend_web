import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: "$0/month",
    description: "Ideal for individuals and small teams starting with Task IQ.",
    features: [
      "1 team member",
      "Basic task & time tracking",
      "5 projects limit",
      "Email support",
    ],
    popular: false,
    buttonText: "Get Started",
  },
  {
    name: "Team Plus",
    price: "$49/month",
    description:
      "Perfect for growing teams who need advanced tracking and collaboration.",
    features: [
      "Up to 10 team members",
      "Unlimited projects",
      "Advanced reporting & analytics",
      "Priority email & chat support",
    ],
    popular: true,
    buttonText: "Start 7-Day Trial",
  },
  {
    name: "Enterprise",
    price: "$99/month",
    description:
      "For large organizations requiring enterprise-grade features and support.",
    features: [
      "Unlimited team members",
      "Unlimited projects & storage",
      "Custom workflows & integrations",
      "Dedicated account manager",
      "24/7 premium support",
    ],
    popular: false,
    buttonText: "Contact Sales",
  },
];

export default function Pricing() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-2">
          Choose the Plan That Fits Your Team
        </h2>
        <motion.p
          className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Whether you're an individual, a growing team, or a large organization,
          find the perfect plan to boost productivity and collaboration.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {pricingPlans.map((plan, index) => {
            const bgClass = plan.popular
              ? "bg-gradient-to-r from-orange-500 to-red-500 shadow-lg text-white"
              : "bg-white shadow-sm border border-gray-200";

            return (
              <motion.div
                key={plan.name}
                className={`relative flex flex-col p-4 sm:p-6 rounded-2xl transition-shadow duration-300 hover:shadow-lg ${bgClass}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {plan.popular && (
                  <span className="absolute top-0 right-0 -mt-2 -mr-2 text-xs font-semibold px-3 py-1 rounded-full bg-white text-orange-500 shadow-md">
                    Most Popular
                  </span>
                )}

                <div className="flex-1">
                  <h3
                    className={`text-lg sm:text-xl font-bold mb-1 ${
                      plan.popular ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm mb-2 ${
                      plan.popular ? "text-white/80" : "text-gray-600"
                    }`}
                  >
                    {plan.description}
                  </p>
                  <div
                    className={`text-xl sm:text-2xl font-bold mb-4 ${
                      plan.popular ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.price}
                  </div>
                  <ul className="mb-6 space-y-1 sm:space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className={`flex items-center space-x-2 text-sm sm:text-base ${
                          plan.popular ? "text-white/90" : "text-gray-700"
                        }`}
                      >
                        <CheckCircle
                          className={`${
                            plan.popular ? "text-white" : "text-orange-500"
                          } w-4 h-4 flex-shrink-0`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className={`mt-auto w-full py-2 sm:py-2.5 rounded-lg font-semibold shadow-sm transition-transform duration-200 hover:scale-105 flex items-center justify-center space-x-2
                  ${
                    plan.popular
                      ? "bg-white text-orange-500 hover:bg-white/90"
                      : "bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600"
                  }`}
                >
                  <span>{plan.buttonText}</span>
                  <ArrowRight
                    className={`w-4 h-4 ${
                      plan.popular ? "text-orange-500" : "text-white"
                    }`}
                  />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
