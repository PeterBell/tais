"use client";

import { Users, Group, Speech, PencilRuler, Heart } from "lucide-react";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from "react";

function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const features = [
    {
      icon: Users,
      title: "A Curated Community",
      description:
        "By interviewing potential community members, we ensure that they will add to the culture and the conversations. By engaging actively in the discussions, we take the time to ensure that interactions are respectful, supportive and insightful.",
    },
    {
      icon: Group,
      title: "Your Closest Peers",
      description:
        "Whether you’re scaling a Series A startup or replatforming a thousand-person engineering org, we have curated sub-communities by both scale and interest so you can spend less time sharing context and more identifying potential solutions.",
    },
    {
      icon: PencilRuler,
      title: "A Focus on Solutions",
      description:
        "We’re all busy leading our orgs. Aggregate.dev communities are designed to help you to quickly get feedback on your toughest challenges and to help you to efficiently share your wisdom and experiences to support the community.",
    },
    {
      icon: Speech,
      title: "More Than Just a Forum",
      description:
        "With in-person meetups, regular pulses and surveys, playbooks, and resources for solving common problems, Aggregate.dev tries to be a one-stop shop for aggregating good practices for leading effective engineering organizations.",
    },
    {
      icon: Heart,
      title: "Always Free",
      description:
        "We want to create a space for everyone to connect with and learn from their peers - not just the subset willing to pay.",
    },
    {
      icon: Heart,
      title: "Lorem Impsum",
      description:
        "Lorem Impsum text",
    },
  ];

  return (
<section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
  <div className="container mx-auto px-4 md:px-6">
    {/* Section Title */}
    <div className="flex justify-start mb-10">
      <div className="inline-flex items-center rounded-lg bg-blue-50 px-3 py-1 text-sm font-medium text-blue-900">
        <div className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-900" />
        WHY
      </div>
    </div>

    {/* First Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto px-4 mb-6">
      {features.slice(0, 2).map((feature, index) => (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          key={index}
          className="bg-white border border-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
          style={{ minHeight: '220px' }}
        >
          <div className="flex items-center justify-center bg-[#58b4ff] border-[1.2px] border-white w-10 h-10 rounded-md mb-4">
            {React.createElement(feature.icon, { className: "text-white text-lg" })}
          </div>
          <h3 className="text-lg font-semibold text-[#020124] mb-2">
            {feature.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {feature.description}
          </p>
        </motion.div>
      ))}
    </div>

    {/* Second Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl mx-auto px-4">
      {features.slice(2).map((feature, index) => (
        <div
          key={index}
          className="bg-white border border-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
          style={{ minHeight: '220px' }}
        >
          <div className="flex items-center justify-center bg-[#58b4ff] border-[1.2px] border-white w-10 h-10 rounded-md mb-4">
            {React.createElement(feature.icon, { className: "text-white text-lg" })}
          </div>
          <h3 className="text-lg font-semibold text-[#020124] mb-2">
            {feature.title}
          </h3>
          <p className="text-gray-600 text-lg md:text-sm leading-relaxed">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}

export default Features;
