"use client";

import React, { useState } from "react";
import { Users, Briefcase, ShieldCheck, Check, ArrowRight, Zap, Wind } from "lucide-react";
import VehicleGraphic from "./VehicleGraphic";
import { trackBookingClick } from "./Analytics";

export default function VehicleOptions() {
  const [activeFilter, setActiveFilter] = useState<"all" | "standard" | "large" | "executive">("all");

  const vehicles = [
    {
      type: "saloon" as const,
      category: "standard",
      name: "Saloon Cars",
      tagline: "Ideal for everyday journeys and small groups",
      passengers: "Up to 4 Passengers",
      suitcases: "2 Medium Suitcases",
      handLuggage: "2 Hand Luggage",
      description:
        "Modern, fuel-efficient saloons offering comfortable climate-controlled seating for everyday Wembley trips, shopping excursions, and standard airport rides.",
      features: ["Air conditioning", "Comfortable fabric/leather seating", "Smooth & quiet ride", "Fixed low fare"],
    },
    {
      type: "estate" as const,
      category: "standard",
      name: "Estate Cars",
      tagline: "Extra luggage space for airport transfers",
      passengers: "Up to 4 Passengers",
      suitcases: "3 – 4 Large Suitcases",
      handLuggage: "3 Hand Luggage",
      description:
        "Extended boot capacity designed specifically for airport runs. Easily accommodates multiple bulky suitcases, pushchairs, or sports equipment.",
      features: ["Extended hatchback luggage boot", "Up to 4 large suitcases", "Climate control", "Ideal for Heathrow & Gatwick"],
    },
    {
      type: "executive" as const,
      category: "executive",
      name: "Executive Cars",
      tagline: "Comfortable and stylish travel for business and special occasions",
      passengers: "Up to 4 Passengers",
      suitcases: "3 Large Suitcases",
      handLuggage: "2 Hand Luggage",
      description:
        "Premium modern executive saloons (Mercedes/BMW styled) with pristine leather upholstery, tinted privacy glass, and seasoned corporate chauffeurs.",
      features: ["Luxury leather interior", "Onboard device charging & Wi-Fi", "Privacy rear glass", "Suited corporate chauffeur"],
    },
    {
      type: "7seater" as const,
      category: "large",
      name: "7-Seater Vehicles",
      tagline: "Perfect for families and small groups",
      passengers: "Up to 7 Passengers",
      suitcases: "4 Medium Suitcases",
      handLuggage: "4 Hand Luggage",
      description:
        "Spacious multi-purpose vehicles (MPVs) with flexible seating configurations, ideal for family holidays, Wembley Stadium outings, and concert travel.",
      features: ["Elevated seating & ample legroom", "Flexible fold-down seats", "Child seat attachments available", "Dual-zone climate control"],
    },
    {
      type: "8seater" as const,
      category: "large",
      name: "8-Seater Vehicles",
      tagline: "Ideal for larger groups and additional luggage requirements",
      passengers: "Up to 8 Passengers",
      suitcases: "7 – 8 Large Suitcases",
      handLuggage: "6 Hand Luggage",
      description:
        "The ultimate group passenger solution. Generous cabin space and enormous luggage capacity for tour groups, wedding parties, and large family airport transfers.",
      features: ["Spacious passenger van layout", "Max luggage capacity", "Dual sliding entry doors", "Cost-effective group travel"],
    },
  ];

  const filteredVehicles =
    activeFilter === "all"
      ? vehicles
      : vehicles.filter((v) => v.category === activeFilter);

  return (
    <section id="vehicles" className="py-16 md:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/80 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Zap className="w-4 h-4 text-[#7bc010]" />
            Modern & Spotless Fleet
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Our <span className="text-[#7bc010]">Vehicle Options</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Choose the perfect vehicle for your journey. All vehicles are modern, fully insured,
            TfL-inspected, and cleaned daily to ensure a pleasant travel experience.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all cursor-pointer ${
              activeFilter === "all"
                ? "bg-[#0f172a] text-white shadow-md"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            All Vehicles ({vehicles.length})
          </button>
          <button
            onClick={() => setActiveFilter("standard")}
            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all cursor-pointer ${
              activeFilter === "standard"
                ? "bg-[#0f172a] text-white shadow-md"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            Saloon & Estate
          </button>
          <button
            onClick={() => setActiveFilter("executive")}
            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all cursor-pointer ${
              activeFilter === "executive"
                ? "bg-[#0f172a] text-white shadow-md"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            Executive Luxury
          </button>
          <button
            onClick={() => setActiveFilter("large")}
            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all cursor-pointer ${
              activeFilter === "large"
                ? "bg-[#0f172a] text-white shadow-md"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            7 & 8-Seaters
          </button>
        </div>

        {/* Vehicle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.name}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-[#7bc010] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Vehicle Illustration Render Area */}
                <div className="bg-gradient-to-b from-slate-100 via-slate-50 to-white p-6 pt-8 flex items-center justify-center relative border-b border-slate-100">
                  <div className="w-full flex justify-center items-center">
                    <VehicleGraphic
                      type={vehicle.type}
                      className="w-full max-w-[280px] h-36 object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="absolute top-3 right-3 text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-900 text-[#7bc010] shadow-xs">
                    {vehicle.name}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-[#7bc010] transition-colors">
                    {vehicle.name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mb-4">
                    {vehicle.tagline}
                  </p>

                  {/* Capacity Specs Grid */}
                  <div className="grid grid-cols-3 gap-2 bg-slate-50 p-3 rounded-xl border border-slate-200/80 mb-4 text-center">
                    <div>
                      <Users className="w-4 h-4 text-[#7bc010] mx-auto mb-1" />
                      <span className="text-[11px] font-bold text-slate-800 block">
                        {vehicle.passengers.split(" ")[2]} Seats
                      </span>
                      <span className="text-[10px] text-slate-400">Capacity</span>
                    </div>
                    <div>
                      <Briefcase className="w-4 h-4 text-[#7bc010] mx-auto mb-1" />
                      <span className="text-[11px] font-bold text-slate-800 block">
                        {vehicle.suitcases.split(" ")[0]} Bags
                      </span>
                      <span className="text-[10px] text-slate-400">Luggage</span>
                    </div>
                    <div>
                      <Wind className="w-4 h-4 text-[#7bc010] mx-auto mb-1" />
                      <span className="text-[11px] font-bold text-slate-800 block">
                        A/C
                      </span>
                      <span className="text-[10px] text-slate-400">Climate</span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {vehicle.description}
                  </p>

                  {/* Feature checklist */}
                  <ul className="space-y-1.5 mb-2">
                    {vehicle.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-[#7bc010] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="p-6 pt-0">
                <a
                  href="https://www.minicabs.co.uk/new-booking"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackBookingClick(`Vehicle - ${vehicle.name}`)}
                  className="w-full py-3 px-4 rounded-xl bg-[#0f172a] group-hover:bg-[#7bc010] text-white font-bold text-sm text-center flex items-center justify-center gap-2 transition-colors duration-200"
                >
                  <span>Book {vehicle.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Fleet Assurance note */}
        <div className="mt-12 text-center text-xs text-slate-500 max-w-2xl mx-auto">
          <p>
            * All vehicle types are representative of vehicle class and luggage capacity. Every
            vehicle in our fleet is fully licensed by Transport for London (TfL), comprehensively
            insured, and operated by professional, DBS-cleared drivers.
          </p>
        </div>
      </div>
    </section>
  );
}
