"use client";

import React from "react";
import {
  Plane,
  Clock,
  ShieldCheck,
  CheckCircle,
  Luggage,
  Users,
  Compass,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { trackBookingClick } from "./Analytics";

export default function AirportTransfers() {
  const airports = [
    {
      name: "Heathrow Airport (LHR)",
      terminals: "Terminals 2, 3, 4 & 5",
      distance: "Approx 14 miles",
      duration: "30 – 45 mins",
      route: "Via A406 / M4 / A4",
      highlight: "Closest London Airport",
      description:
        "Direct transfers to all Heathrow terminals. Free flight monitoring and timely dispatch so your driver is ready when you step off the plane.",
    },
    {
      name: "Gatwick Airport (LGW)",
      terminals: "North & South Terminals",
      distance: "Approx 55 miles",
      duration: "70 – 90 mins",
      route: "Via M25 & M23",
      highlight: "Fixed Long-Distance Rate",
      description:
        "Smooth highway journey across South London with spacious luggage vehicles. Pre-book in advance for guaranteed on-time airport connection.",
    },
    {
      name: "Luton Airport (LTN)",
      terminals: "Main Terminal & EasyJet / Wizz Air",
      distance: "Approx 28 miles",
      duration: "35 – 45 mins",
      route: "Direct via M1 North",
      highlight: "Fast Motorway Link",
      description:
        "Convenient M1 motorway route directly north from Wembley. Ideal for early-morning European departures and family holidays.",
    },
    {
      name: "Stansted Airport (STN)",
      terminals: "Passenger Terminal & Jet2 / Ryanair",
      distance: "Approx 46 miles",
      duration: "60 – 75 mins",
      route: "Via North Circular & M11",
      highlight: "Full Flight Tracking",
      description:
        "Direct transfers to Essex's premier low-cost airline hub. Avoid train strikes, expensive airport parking, and crowded rail connections.",
    },
    {
      name: "London City Airport (LCY)",
      terminals: "Single Terminal / Docklands",
      distance: "Approx 22 miles",
      duration: "50 – 65 mins",
      route: "Via A40 / Central London or A406",
      highlight: "Corporate & Financial",
      description:
        "Tailored for Canary Wharf, business executives, and quick continental flights. Professional executive saloons available.",
    },
  ];

  const airportFeatures = [
    {
      title: "Advance Airport Bookings",
      desc: "Pre-book days, weeks, or months in advance to secure your preferred vehicle and peace of mind.",
    },
    {
      title: "Optional £12 Meet & Greet Service",
      desc: "Your driver awaits inside the arrivals hall with a printed nameboard, assists with luggage, and guides you to the car.",
    },
    {
      title: "Spacious Luggage-Friendly Vehicles",
      desc: "Choose from estate cars, MPVs, and 8-seaters specifically designed to hold multiple large suitcases easily.",
    },
    {
      title: "Saloon, Estate, Exec, 7 & 8-Seaters",
      desc: "Vehicles to suit single passengers, business executives, travelling families, and large travel groups.",
    },
    {
      title: "Flight Delay Monitoring",
      desc: "We track your inbound flight in real-time. If your flight is delayed or lands early, your pickup time adjusts automatically.",
    },
    {
      title: "Convenient Door-to-Door Pickups",
      desc: "Direct pickup from any home, hotel, or office in Wembley straight to your airline's departure terminal drop-off zone.",
    },
  ];

  return (
    <section id="airports" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -ml-32 w-80 h-80 rounded-full bg-[#7bc010]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Plane className="w-4 h-4 text-[#7bc010]" />
            Specialist Airport Transport
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Wembley Airport Transfers – <span className="text-[#7bc010]">Travel to All London Airports</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Need a reliable airport taxi from Wembley? Minicabs UK Ltd specialises in airport transfers,
            offering comfortable vehicles, fixed fares and convenient pre-booked journeys.
          </p>
        </div>

        {/* 5 London Airports Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {airports.map((airport) => (
            <div
              key={airport.name}
              className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#7bc010] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0f172a] text-white flex items-center justify-center group-hover:bg-[#7bc010] transition-colors">
                    <Plane className="w-5 h-5 text-[#7bc010] group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100/70 px-2.5 py-1 rounded-full">
                    {airport.highlight}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#7bc010] transition-colors">
                  {airport.name}
                </h3>
                <p className="text-xs text-slate-500 font-semibold mb-4">
                  {airport.terminals}
                </p>

                {/* Key specs badge row */}
                <div className="grid grid-cols-2 gap-2 mb-4 bg-white p-3 rounded-xl border border-slate-200/80 text-xs">
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <Compass className="w-3.5 h-3.5 text-[#7bc010]" />
                    <span>{airport.distance}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <Clock className="w-3.5 h-3.5 text-[#7bc010]" />
                    <span>{airport.duration}</span>
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {airport.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">Fixed Fare Route</span>
                <a
                  href="https://www.minicabs.co.uk/new-booking"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackBookingClick(`Airport Card - ${airport.name}`)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7bc010] hover:text-[#66a20b] group-hover:translate-x-1 transition-all"
                >
                  <span>Book Transfer</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}

          {/* 6th Card: Meet & Greet Special Highlight */}
          <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-2xl p-6 text-white border border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7bc010]/20 text-[#7bc010] text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Optional £12 VIP Add-on
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Airport Meet & Greet Service
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Arriving into London? Take the stress out of busy terminals. For just £12, your
                chauffeur will wait inside the arrivals hall with a printed nameboard, assist with
                luggage, and guide you directly to your waiting vehicle.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#7bc010]" />
                  <span>Personalised name board inside arrivals</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#7bc010]" />
                  <span>Luggage trolley assistance to the car</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#7bc010]" />
                  <span>45 minutes complimentary waiting time after flight touchdown</span>
                </li>
              </ul>
            </div>
            <a
              href="https://www.minicabs.co.uk/new-booking"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackBookingClick("Meet & Greet Add-on")}
              className="w-full py-3 px-4 rounded-xl bg-[#7bc010] hover:bg-[#6ea80e] text-white font-bold text-center text-xs md:text-sm shadow-md transition-colors block"
            >
              Add Meet & Greet With Your Booking
            </a>
          </div>
        </div>

        {/* Airport Service Standards (6 Features List) */}
        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
          <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
            Standard With Every Wembley Minicabs Airport Journey
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {airportFeatures.map((feat) => (
              <div key={feat.title} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#7bc010]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-[#7bc010]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{feat.title}</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Airport CTA Button */}
          <div className="text-center mt-8 pt-6 border-t border-slate-200">
            <a
              href="https://www.minicabs.co.uk/new-booking"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackBookingClick("Airport Transfer Section CTA")}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#7bc010] hover:bg-[#6ea80e] text-white font-bold text-base shadow-lg shadow-[#7bc010]/30 hover:shadow-xl transition-all"
            >
              <Plane className="w-5 h-5" />
              <span>BOOK YOUR AIRPORT TRANSFER</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

