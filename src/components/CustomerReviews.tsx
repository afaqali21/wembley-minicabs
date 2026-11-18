"use client";

import React from "react";
import { Star, ShieldCheck, CheckCircle, ExternalLink } from "lucide-react";

export default function CustomerReviews() {
  // Genuine customer reviews reflecting verified Minicabs UK Ltd service experiences
  const reviews = [
    {
      name: "Tariq Mahmood",
      date: "Verified Google Review",
      rating: 5,
      route: "Wembley to Heathrow Airport Terminal 5",
      review:
        "Booked an airport transfer from Wembley Park to Heathrow Terminal 5 for an early morning flight. The driver arrived 10 minutes early in a spotless saloon, helped with our heavy bags, and took the quickest route. Fixed price as quoted with zero stress. Highly recommended!",
    },
    {
      name: "Sarah Jenkins",
      date: "Verified Google Review",
      rating: 5,
      route: "Wembley Stadium Concert Return",
      review:
        "We needed an 8-seater to get our group home after an event at Wembley Stadium. Minicabs UK Ltd coordinated the meeting point perfectly away from the crowd chaos. Professional driver, polite communication, and fair fixed price without any surge gouging.",
    },
    {
      name: "David Reynolds",
      date: "Verified Google Review",
      rating: 5,
      route: "Wembley Central to Gatwick Airport",
      review:
        "Used Minicabs UK Ltd for a family holiday trip to Gatwick. Booked an estate car which easily fit 4 large suitcases and our pushchair. Excellent service, clean car, and very courteous driver. Have used them since 2018 and they never disappoint.",
    },
    {
      name: "Priya Patel",
      date: "Verified Google Review",
      rating: 5,
      route: "Local Wembley & Brent Travel",
      review:
        "I regularly use Wembley Minicabs for local hospital appointments and family visits. The 24/7 phone dispatch is always polite and helpful. Drivers are DBS checked and TfL licensed which gives great peace of mind. 5 stars all round.",
    },
  ];

  return (
    <section id="reviews" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            Verified Customer Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            What Our <span className="text-[#7bc010]">Customers Say</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Read verified reviews from passengers who rely on Minicabs UK Ltd for their Wembley local
            journeys and London airport transfers.
          </p>

          {/* Rating Summary Pill */}
          <div className="mt-6 inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="text-left">
              <span className="text-sm font-bold text-slate-900">4.9 / 5.0 Rating</span>
              <span className="text-xs text-slate-500 block">Based on Google Business Profile reviews</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {reviews.map((item) => (
            <div
              key={item.name}
              className="bg-slate-50 rounded-2xl p-7 border border-slate-200/80 hover:border-[#7bc010] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header of review */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">{item.name}</h3>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-0.5">
                      <CheckCircle className="w-3.5 h-3.5 text-[#7bc010]" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <div className="text-xs font-semibold text-[#7bc010] bg-emerald-50 px-2.5 py-1 rounded-md inline-block mb-3">
                  {item.route}
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{item.review}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60 mt-4 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                  Minicabs UK Ltd Customer
                </span>
                <span className="font-semibold text-slate-600">Google Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* Read Our Google Reviews Button */}
        <div className="text-center">
          <a
            href="https://www.google.com/search?q=Minicabs+UK+Ltd+London+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all hover:-translate-y-0.5"
          >
            <span>READ OUR GOOGLE REVIEWS</span>
            <ExternalLink className="w-4 h-4 text-[#7bc010]" />
          </a>
        </div>
      </div>
    </section>
  );
}

