"use client";

import React, { useState } from "react";
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
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import VehicleGraphic from "./VehicleGraphic";
import { trackCallClick, trackWhatsAppClick, trackBookingClick } from "./Analytics";

export default function Hero() {
  const [selectedVehicle, setSelectedVehicle] = useState<"saloon" | "executive" | "7seater">("executive");

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
    <section id="hero" className="relative bg-gradient-to-b from-white via-slate-50 to-white pt-8 md:pt-14 pb-16 overflow-hidden">
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
              {/* Primary CTA: Book on minicabs.co.uk */}
              <a
                href="https://www.minicabs.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackBookingClick("Hero Main Button")}
                className="px-7 py-4 rounded-xl bg-[#7bc010] hover:bg-[#6ea80e] text-white font-bold text-base shadow-lg shadow-[#7bc010]/30 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-2.5 cursor-pointer group"
              >
                <Car className="w-5 h-5" />
                <span>BOOK YOUR TAXI</span>
                <ExternalLink className="w-4 h-4 opacity-80 group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Secondary CTA: Call */}
              <a
                href="tel:02082044444"
                onClick={() => trackCallClick("Hero Secondary Button")}
                className="px-6 py-4 rounded-xl bg-[#0f172a] hover:bg-slate-800 text-white font-bold text-base shadow-md hover:-translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
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
                className="px-5 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-md hover:-translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
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

          {/* Right Column: Premium Vehicle Showcase Card (No Booking Engine / Form) */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-[#0f172a] via-slate-900 to-[#182234] rounded-3xl p-6 sm:p-8 text-white shadow-2xl border border-slate-800 relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-bold text-[#7bc010] block">
                    Our Fleet
                  </span>
                  <h3 className="text-lg font-bold text-white">Modern Executive Fleet</h3>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  Fixed Fares
                </span>
              </div>

              {/* Vehicle Toggle Pills */}
              <div className="flex gap-2 my-4">
                <button
                  type="button"
                  onClick={() => setSelectedVehicle("saloon")}
                  className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedVehicle === "saloon"
                      ? "bg-[#7bc010] text-white"
                      : "bg-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  Saloon
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedVehicle("executive")}
                  className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedVehicle === "executive"
                      ? "bg-[#7bc010] text-white"
                      : "bg-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  Executive
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedVehicle("7seater")}
                  className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedVehicle === "7seater"
                      ? "bg-[#7bc010] text-white"
                      : "bg-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  7-Seater
                </button>
              </div>

              {/* Dynamic Vehicle Graphic */}
              <div className="py-2 flex items-center justify-center">
                <VehicleGraphic type={selectedVehicle} className="w-full h-44 drop-shadow-2xl" />
              </div>

              {/* Quick Info Box */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800 text-xs">
                <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
                  <span className="text-slate-400 block text-[10px] uppercase font-semibold">
                    London Airports
                  </span>
                  <span className="font-bold text-white text-xs mt-0.5 block">
                    Heathrow, Gatwick, Luton
                  </span>
                </div>
                <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
                  <span className="text-slate-400 block text-[10px] uppercase font-semibold">
                    Pricing Policy
                  </span>
                  <span className="font-bold text-[#7bc010] text-xs mt-0.5 block">
                    100% Fixed • No Surge
                  </span>
                </div>
              </div>

              {/* Book on minicabs.co.uk CTA */}
              <div className="pt-5">
                <a
                  href="https://www.minicabs.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackBookingClick("Hero Fleet Card")}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#7bc010] hover:bg-[#6ea80e] text-white font-bold text-sm text-center flex items-center justify-center gap-2 shadow-lg shadow-[#7bc010]/20 transition-all cursor-pointer group"
                >
                  <span>Book Online at Minicabs.co.uk</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
