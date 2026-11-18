"use client";

import React from "react";
import {
  ShieldCheck,
  Award,
  Users,
  Clock,
  Car,
  CheckCircle2,
  Phone,
  ArrowRight,
} from "lucide-react";
import { trackBookingClick, trackCallClick } from "./Analytics";

export default function AboutSection() {
  const stats = [
    {
      label: "Serving London Since",
      value: "1996",
      desc: "Over 28 years of dependable private hire experience",
      icon: Award,
    },
    {
      label: "Licensed by",
      value: "TfL",
      desc: "Fully regulated Transport for London operator",
      icon: ShieldCheck,
    },
    {
      label: "Journeys Completed",
      value: "2.5M+",
      desc: "Happy local residents, tourists & business clients",
      icon: Users,
    },
    {
      label: "Operational Availability",
      value: "24/7",
      desc: "365 days a year with active telephone dispatch",
      icon: Clock,
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7bc010]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Brand Story & Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7bc010]/20 text-[#7bc010] text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              Minicabs UK Ltd • Established London Operator
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              Your Trusted Taxi Company <span className="text-[#7bc010]">Serving London Since 1996</span>
            </h2>

            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              <p>
                Minicabs UK Ltd has been providing reliable private-hire taxi services across London
                since 1996.
              </p>
              <p>
                We understand the importance of punctuality, comfort and affordability. Whether you
                need a local Wembley taxi, an airport transfer or a vehicle for a family journey, we aim
                to make every trip convenient and stress-free.
              </p>
              <p>
                With fixed fares, a variety of vehicle options, convenient payment methods and 24/7
                booking availability, we make travelling around London easier.
              </p>
            </div>

            {/* Checklist of brand pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#7bc010] shrink-0" />
                <span>Transport for London (TfL) Licensed</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#7bc010] shrink-0" />
                <span>Enhanced DBS Checked Drivers</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#7bc010] shrink-0" />
                <span>100% Fixed Fares – No Surge Charges</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#7bc010] shrink-0" />
                <span>Cash, Card, Apple Pay & Google Pay</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="https://www.minicabs.co.uk/new-booking"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackBookingClick("About Section Button")}
                className="px-6 py-3.5 rounded-xl bg-[#7bc010] hover:bg-[#6ea80e] text-white font-bold text-sm md:text-base shadow-lg shadow-[#7bc010]/30 transition-all flex items-center gap-2"
              >
                <Car className="w-5 h-5" />
                <span>Book With Minicabs UK</span>
              </a>
              <a
                href="tel:02082044444"
                onClick={() => trackCallClick("About Section Button")}
                className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm md:text-base border border-slate-700 transition-all flex items-center gap-2"
              >
                <Phone className="w-5 h-5 text-[#7bc010]" />
                <span>Call 0208 204 4444</span>
              </a>
            </div>
          </div>

          {/* Right Column: 4 Milestone Statistics Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/80 hover:border-[#7bc010] transition-colors flex flex-col justify-between"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#7bc010]/20 flex items-center justify-center text-[#7bc010] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-3xl font-black text-white block mb-1">
                      {stat.value}
                    </span>
                    <h3 className="text-sm font-bold text-slate-200 mb-1">
                      {stat.label}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {stat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
