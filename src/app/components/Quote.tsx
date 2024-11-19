import React from 'react';
import { Quote } from 'lucide-react';

export function QuoteSection() {
  return (
    <section className="relative py-8 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-32 h-32 -translate-y-1/2 -translate-x-16 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
        <div className="absolute top-1/2 right-0 w-32 h-32 -translate-y-1/2 translate-x-16 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
      </div>

      <div className="relative container mx-auto px-6">
        <div
          className="max-w-4xl mx-auto text-center"
        >
          {/* Quote icon */}
          <div className="mb-8">
            <Quote className="w-6 h-6 mx-auto text-[#58B4FF] opacity-80" />
          </div>

          {/* Quote text */}
          <blockquote
            className="mb-8"
          >
            <p className="text-2xl italic md:text-2xl font-serif leading-relaxed text-gray-900">
            “I’ve spent over fifteen years curating a group of some of the most insightful engineering executives from a mixture of established enterprises and fast growth scaleups. We’re finally getting a persistent home where we can connect, support and learn from each other. Apply to join us as we aggregate the most capable leaders and the most useful resources for leading our engineering orgs in challenging times.”
            </p>
          </blockquote>

          {/* Author info */}
          <div
            className="flex flex-col items-center"
          >
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#020124] to-[#58B4FF] mb-6" />
            <cite className="not-italic">
              <span className="block text-lg font-semibold text-gray-900">Peter Bell</span>
              <span className="text-gray-600">Founder/CTO, Aggregate.dev</span>
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
}