"use client";

import React from "react";
import {
  BadgePercent,
  Car,
  CreditCard,
  Plane,
  Clock,
  UserCheck,
  ShieldCheck,
  Check,
} from "lucide-react";
import { trackBookingClick } from "./Analytics";

export default function WhyChooseUs() {
  const features = [
    {
      icon: BadgePercent,
      title: "Fixed Fares – No Surcharge",
      description:
        "Know your fare before travelling. We offer fixed fares with no hidden charges or unexpected surcharges.",
      highlights: ["No surge pricing in rain or rush hours", "Guaranteed quote before you board", "Clear upfront pricing"],
    },
    {
      icon: Car,
      title: "Large Vehicle Options",
      description:
        "Choose from saloon, estate, executive, 7-seater and 8-seater vehicles for individuals, families and groups.",
      highlights: ["Saloon & estate for airport luggage", "Executive Mercedes/BMW styling", "Spacious 7 & 8-seater MPVs"],
    },
    {
      icon: CreditCard,
      title: "Easy Payment Methods",
      description: "Pay conveniently using cash, cards, or digital wallets at no extra processing fee.",
      isPayment: true,
      highlights: ["Cash", "Debit / Credit Card", "Google Pay", "Apple Pay"],
    },
    {
      icon: Plane,
      title: "Airport Transfer Specialists",
      description:
        "Reliable airport transfers from Wembley to Heathrow, Gatwick, Luton, Stansted and London City Airport.",
      highlights: ["Terminals 2, 3, 4 & 5 Heathrow", "Flight delay tracking included", "Optional Meet & Greet (£12)"],
    },
    {
      icon: Clock,
      title: "Available 24/7",
      description:
        "Book your taxi whenever you need it, including early-morning pickups and late-night journeys.",
      highlights: ["24/7 phone dispatch line", "Pre-book days in advance", "Wembley Stadium match day pickups"],
    },
    {
      icon: UserCheck,
      title: "Professional Licensed Drivers",
      description:
        "Travel with professional, TfL-licensed and DBS-cleared drivers who know London routes inside out.",
      highlights: ["TfL Private-Hire licensed", "Enhanced DBS criminal record checks", "Polite, punctual and courteous"],
    },
  ];

  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-[#7bc010]" />
            The Wembley Minicabs Difference
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Why Choose <span className="text-[#7bc010]">Wembley Minicabs?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Since 1996, Minicabs UK Ltd has delivered reliable, punctual, and stress-free minicab
            services across Wembley and Greater London. Here is why thousands of local residents and
            travellers trust us.
          </p>
        </div>

        {/* Six Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-slate-50 hover:bg-white rounded-2xl p-7 border border-slate-200 hover:border-[#7bc010] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-[#0f172a] text-white flex items-center justify-center group-hover:bg-[#7bc010] group-hover:scale-105 transition-all duration-300 shadow-md">
                      <Icon className="w-7 h-7 text-[#7bc010] group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-xs font-black text-slate-300 group-hover:text-[#7bc010] transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-[#7bc010] transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {feature.description}
                  </p>

                  {/* Payment pills if payment card */}
                  {feature.isPayment ? (
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {feature.highlights.map((pay) => (
                        <div
                          key={pay}
                          className="px-3 py-2 bg-white rounded-lg border border-slate-200 text-xs font-bold text-slate-800 text-center flex items-center justify-center gap-1.5 shadow-xs"
                        >
                          <Check className="w-3.5 h-3.5 text-[#7bc010]" />
                          <span>{pay}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="space-y-2 mb-4">
                      {feature.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                          <Check className="w-3.5 h-3.5 text-[#7bc010] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">Minicabs UK Ltd</span>
                  <a
                    href="https://www.minicabs.co.uk/new-booking"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackBookingClick(`Why Choose Us - ${feature.title}`)}
                    className="font-bold text-[#7bc010] hover:text-[#66a20b] transition-colors flex items-center gap-1"
                  >
                    Book Now &rarr;
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

