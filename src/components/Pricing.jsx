import React from 'react';
import { Check } from "lucide-react";
import grid from '../assets/grid.png'

const plans = [
  {
    name: "Pricing",
    price: "29/mo",
    description: "Perfect for individuals and small teams",
    features: [
      "Keyword optimization",
      "Automated meta tags",
      "SEO monitoring",
      "Monthly reports",
    ],
    mostPopular: false,
  },
  {
    name: "Pro",
    price: "79/mo",
    description: "Best for growing businesses",
    features: [
      "Keyword optimization",
      "Automated meta tags",
      "SEO monitoring",
      "Monthly reports",
      "Content suggestions",
      "Link optimization",
    ],
    mostPopular: true,
  },
  {
    name: "Business",
    price: "149/mo",
    description: "For large organizations",
    features: [
      "Keyword optimization",
      "Automated meta tags",
      "SEO monitoring",
      "Monthly reports",
      "Content suggestions",
      "Link optimization",
      "Multi-user access",
      "API integration"
    ],
    mostPopular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative bg-black overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-purple-500/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-gray-400 text-xl sm:text-lg max-w-2xl mx-auto">
            Choose the right plan to meet your SEO <br /> needs and start optimizing today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6">
          {plans.map((plan, key) => (
            <div 
              key={key} 
              className={`relative backdrop-blur-md border rounded-2xl p-6 sm:p-8 transition-all duration-300 flex flex-col h-full bg-black/40 
                ${plan.mostPopular ? "border-purple-500 shadow-2xl shadow-purple-500/10 lg:scale-105" : "border-white/10 hover:border-white/20"}`}
            >
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-white">${plan.price}</span>
                </div>
              </div>

              <ul className="space-y-3 sm:space-y-4 mb-8">
                {plan.features.map((feature, featureKey) => (
                  <li key={featureKey} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 mt-auto hover:brightness-110 active:scale-95 text-sm sm:text-base text-white 
                ${plan.mostPopular 
                  ? "bg-gradient-to-br from-purple-600 to-black border border-white/20 shadow-[0_0_20px_rgba(168,85,247,0.3)]"   
                  : "bg-white/10 border border-white/10 hover:bg-white/20"}`}
              >
                Join Waitlist
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}