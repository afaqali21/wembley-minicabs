"use client";

import React from "react";
import {
  MapPin,
  Plane,
  Building2,
  Users2,
  Sparkles,
  Package,
  Compass,
  ArrowRight,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { trackBookingClick } from "./Analytics";

export default function Services() {
  const serviceList = [
    {
      id: "local-wembley",
      title: "Local Wembley Taxi Service",
      subtitle: "Fast pickups across HA9, HA0 & surrounding areas",
      description:
        "Fast, dependable local minicab rides around Wembley, Wembley Central, Wembley Park, London Designer Outlet, and North Wembley. Ideal for shopping trips, GP appointments, and daily commutes.",
      icon: MapPin,
      badge: "Local Service",
      route: "Local Wembley & Brent",
    },
    {
      id: "airport-transfers",
      title: "Wembley Airport Transfers",
      subtitle: "Fixed fare airport minicabs 24/7",
      description:
        "Specialist airport transfers connecting Wembley to all 5 major London airports. Guaranteed fixed fares, live flight tracking, and 24/7 service with zero surge fees.",
      icon: Plane,
      badge: "Most Popular",
      route: "All London Airports",
    },
    {
      id: "heathrow-transfer",
      title: "Wembley to Heathrow Airport",
      subtitle: "Terminals 2, 3, 4 & 5 direct minicabs",
      description:
        "Direct airport minicabs from Wembley to Heathrow Airport (LHR). Enjoy punctual pickups, luggage assistance, and optional inside meet & greet for all flight arrivals.",
      icon: Plane,
      badge: "Direct Route",
      route: "Approx 14 miles • 30-45 mins",
    },
    {
      id: "gatwick-transfer",
      title: "Wembley to Gatwick Airport",
      subtitle: "Comfortable long-distance South London transfers",
      description:
        "Stress-free journeys between Wembley and Gatwick Airport (LGW) North & South terminals. Spacious vehicles with ample room for all family luggage.",
      icon: Plane,
      badge: "Fixed Price",
      route: "North & South Terminals",
    },
    {
      id: "luton-transfer",
      title: "Wembley to Luton Airport",
      subtitle: "Fast M1 motorway airport connection",
      description:
        "Convenient airport taxi transfers from Wembley to London Luton Airport (LTN) via the M1. Perfect for holidaymakers and early-morning European flights.",
      icon: Plane,
      badge: "Quick Transfer",
      route: "Direct via M1 North • 35 mins",
    },
    {
      id: "stansted-transfer",
      title: "Wembley to Stansted Airport",
      subtitle: "Reliable airport transfers for Ryanair & Jet2",
      description:
        "Pre-booked transfers from Wembley to London Stansted Airport (STN). We monitor M25 and M11 traffic conditions to ensure you arrive well ahead of departure.",
      icon: Plane,
      badge: "24/7 Available",
      route: "M25 & M11 Corridor",
    },
    {
      id: "london-city-transfer",
      title: "Wembley to London City Airport",
      subtitle: "Docklands & East London business transfers",
      description:
        "Punctual taxi transfers from Wembley to London City Airport (LCY). Ideal for corporate business travellers and European commuter flights.",
      icon: Plane,
      badge: "Business Travel",
      route: "Docklands Direct",
    },
    {
      id: "long-distance",
      title: "Long-Distance Taxi Service",
      subtitle: "Nationwide transfers across the UK",
      description:
        "Reliable private transfers from Wembley to Oxford, Cambridge, Birmingham, Southampton, Portsmouth, and cities nationwide at competitive fixed fares.",
      icon: Compass,
      badge: "UK-Wide",
      route: "Nationwide Cities & Ports",
    },
    {
      id: "executive-service",
      title: "Executive Taxi Service",
      subtitle: "Premium chauffeur-driven vehicles",
      description:
        "Travel in ultimate luxury and refinement. Modern executive saloon cars suited for corporate executives, VIP guests, client hospitality, and wedding transfers.",
      icon: Sparkles,
      badge: "VIP & Business",
      route: "Executive Saloons",
    },
    {
      id: "group-transfers",
      title: "7 & 8 Seater Group Transfers",
      subtitle: "Spacious MPVs and passenger minibuses",
      description:
        "Spacious 7-seater and 8-seater vehicles for Wembley Stadium event attendees, large families, corporate delegations, and group airport travel.",
      icon: Users2,
      badge: "Up to 8 Passengers",
      route: "Wembley Stadium & Large Groups",
    },
    {
      id: "corporate-travel",
      title: "Corporate Travel",
      subtitle: "Priority corporate account facilities",
      description:
        "Dedicated corporate transport solutions for Wembley businesses, business parks, and hotels. Priority dispatch, monthly invoicing, and itemised reporting.",
      icon: Building2,
      badge: "Business Accounts",
      route: "Priority Invoicing",
    },
    {
      id: "courier-service",
      title: "Same-Day Courier Service",
      subtitle: "Secure parcel & document delivery",
      description:
        "Urgent same-day parcel, passport, medical supplies, and document delivery across London and the Home Counties with real-time driver tracking.",
      icon: Package,
      badge: "Urgent Same-Day",
      route: "Direct Door-to-Door",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/80 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Clock className="w-4 h-4 text-[#7bc010]" />
            Complete Transport Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Our Taxi Services in <span className="text-[#7bc010]">Wembley</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            From quick local journeys to Heathrow airport transfers and 8-seater Wembley Stadium group
            transport, Minicabs UK Ltd covers every private-hire travel requirement.
          </p>
        </div>

        {/* 12 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceList.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#7bc010] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top row */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 group-hover:bg-[#7bc010] flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6 text-[#7bc010] group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 group-hover:bg-emerald-50 group-hover:text-emerald-800 transition-colors">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-[#7bc010] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs font-semibold text-slate-500 mb-3">
                    {service.subtitle}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                {/* Footer of card */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-2">
                  <span className="text-xs text-slate-500 font-medium truncate max-w-[60%]">
                    {service.route}
                  </span>
                  <a
                    href="https://www.minicabs.co.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackBookingClick(`Service - ${service.title}`)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7bc010] hover:text-[#66a20b] group-hover:translate-x-1 transition-all"
                  >
                    <span>Book Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global CTA Banner below services */}
        <div className="mt-12 bg-gradient-to-r from-[#0f172a] to-[#1e293b] rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#7bc010] uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              100% Fixed Fares Guaranteed
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">
              Need a tailored quote or booking for your Wembley trip?
            </h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Call our friendly 24/7 London control room or book online in under 60 seconds with
              Minicabs UK Ltd.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="tel:02082044444"
              className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 transition-colors"
            >
              Call 0208 204 4444
            </a>
            <a
              href="https://www.minicabs.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackBookingClick("Services Banner")}
              className="px-6 py-3 rounded-xl bg-[#7bc010] hover:bg-[#6ea80e] text-white font-bold text-sm shadow-md transition-colors"
            >
              Book Taxi Online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

