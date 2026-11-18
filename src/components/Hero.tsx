"use client";

import React from "react";
import {
  Phone,
  MessageSquare,
  ShieldCheck,
  Clock,
  Car,
  Plane,
  BadgePercent,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import BookingWidget from "./BookingWidget";
import VehicleGraphic from "./VehicleGraphic";
import { trackCallClick, trackWhatsAppClick, trackBookingClick } from "./Analytics";

export default function Hero() {
  const sellingPoints = [
    {
      icon: BadgePercent,
      title: "Fixed Fares",
      desc: "No Hidden Charges",
    },
    {
      icon: ShieldCheck,
      title: "No Surcharge",
      desc: "Guaranteed Quoted Fare",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      desc: "Day & Night Service",
    },
    {
      icon: Car,
      title: "Large Vehicle Options",
      desc: "Saloon to 8-Seater",
    },
    {
      icon: Plane,
      title: "Airport Transfer Specialists",
      desc: "All London Terminals",
    },
  ];

  return (
    <section id="hero" className="relative bg-gradient-to-b from-white via-slate-50 to-white pt-6 md:pt-12 pb-16 overflow-hidden">
      {/* Background modern geometric accents */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-[#7bc010]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-slate-200/50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, Supporting Text, Selling Points, CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#7bc010]" />
              <Sparkles className="w-3.5 h-3.5 text-[#7bc010]" />
              <span>Minicabs UK Ltd • London Private-Hire Since 1996</span>
            </div>

            {/* ONLY ONE H1 Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Wembley Minicabs – <span className="text-[#7bc010]">Reliable Taxi Service</span> in Wembley, London
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Looking for a reliable taxi in Wembley? Book your journey with Minicabs UK Ltd for
              comfortable local journeys, airport transfers and long-distance travel. Enjoy fixed
              fares, no hidden charges, professional drivers and a choice of vehicles to suit your
              needs.
            </p>

            {/* CTAs Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Primary CTA */}
              <a
                href="https://www.minicabs.co.uk/new-booking"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackBookingClick("Hero Main Button")}
                className="px-6 py-3.5 rounded-xl bg-[#7bc010] hover:bg-[#6ea80e] text-white font-bold text-sm md:text-base shadow-lg shadow-[#7bc010]/30 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-2"
              >
                <Car className="w-5 h-5" />
                <span>BOOK YOUR TAXI</span>
              </a>

              {/* Secondary CTA */}
              <a
                href="tel:02082044444"
                onClick={() => trackCallClick("Hero Secondary Button")}
                className="px-6 py-3.5 rounded-xl bg-[#0f172a] hover:bg-slate-800 text-white font-bold text-sm md:text-base shadow-md hover:-translate-y-0.5 transition-all flex items-center gap-2"
              >
                <Phone className="w-5 h-5 text-[#7bc010]" />
                <span>CALL 0208 204 4444</span>
              </a>

              {/* WhatsApp Booking Button */}
              <a
                href="https://wa.me/442082044444?text=Hello%2C%20I%20would%20like%20to%20book%20a%20taxi%20in%20Wembley"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("Hero Button")}
                className="px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm md:text-base shadow-md hover:-translate-y-0.5 transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                <span>WhatsApp Booking</span>
              </a>
            </div>

            {/* 5 Key Selling Points with Icons */}
            <div className="pt-4 border-t border-slate-200">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Why Passengers Trust Wembley Minicabs:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {sellingPoints.map((point) => {
                  const Icon = point.icon;
                  return (
                    <div
                      key={point.title}
                      className="p-3 bg-white rounded-xl border border-slate-200/80 shadow-xs hover:border-[#7bc010] transition-colors flex flex-col justify-between"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#7bc010]/10 flex items-center justify-center text-[#7bc010] mb-2">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 leading-tight">
                          {point.title}
                        </h4>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          {point.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Trust checkmarks */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-xs text-slate-600 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#7bc010]" />
                TfL Licensed Private Hire
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#7bc010]" />
                DBS Cleared Drivers
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#7bc010]" />
                Zero Booking Fee
              </span>
            </div>
          </div>

          {/* Right Column: Prominent Booking Widget & Premium Car Presentation */}
          <div className="lg:col-span-5 space-y-4">
            <BookingWidget />

            {/* Quick Hero Graphic */}
            <div className="hidden sm:block bg-gradient-to-r from-slate-900 to-[#1e293b] rounded-2xl p-4 text-white shadow-lg border border-slate-800">
              <div className="flex items-center justify-between text-xs text-slate-300 mb-1">
                <span className="font-semibold text-white">Modern Clean Fleet</span>
                <span className="text-[#7bc010] font-bold">Saloon • Executive • MPV • 8-Seater</span>
              </div>
              <VehicleGraphic type="executive" className="w-full h-32 md:h-36 drop-shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

