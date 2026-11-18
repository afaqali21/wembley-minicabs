"use client";

import React, { useState } from "react";
import { MapPin, Navigation, ArrowRight, ShieldCheck, CheckCircle } from "lucide-react";
import { trackBookingClick } from "./Analytics";

export default function CoverageAreas() {
  const [selectedArea, setSelectedArea] = useState<string>("Wembley Park");

  const areas = [
    {
      name: "Wembley",
      postcode: "HA9 / HA0",
      landmarks: "Wembley Stadium, London Designer Outlet, Brent Civic Centre",
      description: "Fast local minicabs for shopping, residential trips, and event travel across central Wembley.",
    },
    {
      name: "Wembley Park",
      postcode: "HA9",
      landmarks: "OVO Arena Wembley, Boxpark, Wembley Park Station (Jubilee / Met)",
      description: "Dedicated pre-booked pickups and drop-offs for stadium concerts, football matches, and arena events.",
    },
    {
      name: "Wembley Central",
      postcode: "HA0",
      landmarks: "High Road, Wembley Central Station (Bakerloo / Overground), Central Square",
      description: "Quick reliable pickups along the High Road and surrounding residential streets 24 hours a day.",
    },
    {
      name: "North Wembley",
      postcode: "HA9 / HA0",
      landmarks: "North Wembley Station, East Lane, Vale Farm Sports Centre",
      description: "Convenient residential minicab service for school runs, station transfers, and airport journeys.",
    },
    {
      name: "Sudbury",
      postcode: "HA0",
      landmarks: "Sudbury Town Station (Piccadilly Line), Sudbury & Harrow Road, Barham Park",
      description: "Prompt airport transfers and local rides connecting Sudbury to Central London and Heathrow.",
    },
    {
      name: "Alperton",
      postcode: "HA0",
      landmarks: "Alperton Station (Piccadilly Line), Grand Union Canal, Ealing Road",
      description: "Direct minicabs along Ealing Road and the canal corridor with fixed fares and zero surcharges.",
    },
    {
      name: "Preston",
      postcode: "HA9",
      landmarks: "Preston Road Station (Metropolitan Line), Preston Park, Uxendon Hill",
      description: "Comfortable saloon and estate cars for commuters and families travelling across North West London.",
    },
    {
      name: "Tokyngton",
      postcode: "HA9",
      landmarks: "Tokyngton Recreation Ground, Monks Park, St Michael's",
      description: "Quiet residential minicab bookings with punctual dispatch and friendly local drivers.",
    },
    {
      name: "Kingsbury",
      postcode: "NW9",
      landmarks: "Kingsbury Station (Jubilee Line), Roe Green Park, Kingsbury Road",
      description: "Swift connections from Kingsbury to Wembley Stadium, local tube hubs, and London airports.",
    },
    {
      name: "Neasden",
      postcode: "NW10",
      landmarks: "Neasden Temple (BAPS Shri Swaminarayan Mandir), Neasden Lane, Brent Reservoir",
      description: "Punctual private hire for temple visits, local shopping, and North Circular connections.",
    },
    {
      name: "Harlesden",
      postcode: "NW10",
      landmarks: "Harlesden Plaza, High Street, Harlesden Station (Bakerloo / Overground)",
      description: "24/7 minicab service connecting Harlesden residents to Wembley, Park Royal, and Central London.",
    },
    {
      name: "Stonebridge",
      postcode: "NW10",
      landmarks: "Stonebridge Park Station, Hillside, North Circular Road (A406)",
      description: "Fast motorway links via the A406 for airport transfers to Heathrow, Luton, and Stansted.",
    },
  ];

  const currentAreaInfo = areas.find((a) => a.name === selectedArea) || areas[0];

  return (
    <section id="areas" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Navigation className="w-4 h-4 text-[#7bc010]" />
            Local Coverage
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Taxi Services Across <span className="text-[#7bc010]">Wembley</span> and Surrounding Areas
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Customers across Wembley and neighbouring North West London postcodes can book local
            journeys, airport transfers and long-distance travel 24 hours a day with Minicabs UK Ltd.
          </p>
        </div>

        {/* Areas Interactive Grid & Details Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Areas Buttons List */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {areas.map((area) => {
              const isSelected = area.name === selectedArea;
              return (
                <button
                  key={area.name}
                  onClick={() => setSelectedArea(area.name)}
                  className={`p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "bg-[#0f172a] text-white border-[#0f172a] shadow-md scale-102"
                      : "bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-sm">{area.name}</span>
                    <MapPin
                      className={`w-3.5 h-3.5 ${
                        isSelected ? "text-[#7bc010]" : "text-slate-400"
                      }`}
                    />
                  </div>
                  <span
                    className={`text-[10px] font-semibold ${
                      isSelected ? "text-slate-300" : "text-slate-500"
                    }`}
                  >
                    {area.postcode}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Area Details Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-[#1e293b] text-white rounded-2xl p-7 border border-slate-800 shadow-xl space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs uppercase font-bold text-[#7bc010] tracking-wider block">
                  Selected Area
                </span>
                <h3 className="text-2xl font-black text-white">{currentAreaInfo.name}</h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-mono font-bold">
                {currentAreaInfo.postcode}
              </span>
            </div>

            <div>
              <h4 className="text-xs uppercase font-bold text-slate-400 mb-1">
                Popular Local Landmarks:
              </h4>
              <p className="text-sm text-slate-200 font-medium">
                {currentAreaInfo.landmarks}
              </p>
            </div>

            <div>
              <h4 className="text-xs uppercase font-bold text-slate-400 mb-1">
                Minicab Services Available:
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {currentAreaInfo.description}
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-800 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#7bc010]" />
                <span>Door-to-door local and hospital runs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#7bc010]" />
                <span>Direct transfers to Heathrow, Gatwick, Luton & Stansted</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#7bc010]" />
                <span>Fixed fares guaranteed with no surge in peak hours</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`https://www.minicabs.co.uk/new-booking?pickup=${encodeURIComponent(
                  currentAreaInfo.name
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackBookingClick(`Coverage Area - ${currentAreaInfo.name}`)}
                className="w-full py-3.5 px-4 rounded-xl bg-[#7bc010] hover:bg-[#6ea80e] text-white font-bold text-sm text-center flex items-center justify-center gap-2 transition-colors shadow-md"
              >
                <span>Book Taxi in {currentAreaInfo.name}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

