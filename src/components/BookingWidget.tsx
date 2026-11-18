"use client";

import React, { useState } from "react";
import {
  MapPin,
  Calendar,
  Clock,
  Users,
  Car,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { trackBookingClick } from "./Analytics";

export default function BookingWidget() {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [passengers, setPassengers] = useState("1");
  const [vehicleType, setVehicleType] = useState("Saloon");

  const popularPickups = [
    "Wembley Stadium",
    "Wembley Park Station",
    "Wembley Central",
    "London Designer Outlet",
    "OVO Arena Wembley",
  ];

  const popularDropoffs = [
    "Heathrow Airport (LHR)",
    "Gatwick Airport (LGW)",
    "Luton Airport (LTN)",
    "Stansted Airport (STN)",
    "Central London / West End",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackBookingClick("Hero Booking Widget");

    // Seamlessly forward user to official booking engine with query parameters
    const params = new URLSearchParams();
    if (pickup) params.set("pickup", pickup);
    if (dropoff) params.set("dropoff", dropoff);
    if (pickupDate) params.set("date", pickupDate);
    if (pickupTime) params.set("time", pickupTime);
    if (passengers) params.set("passengers", passengers);
    if (vehicleType) params.set("vehicle", vehicleType);

    const targetUrl = `https://www.minicabs.co.uk/new-booking?${params.toString()}`;
    window.open(targetUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 md:p-8 relative overflow-hidden">
      {/* Top Banner */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#7bc010] animate-ping" />
          <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-slate-800">
            Instant Quote & Live Fare Calculator
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
          <ShieldCheck className="w-3.5 h-3.5 text-[#7bc010]" />
          Fixed Price Guarantee
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Pickup & Dropoff Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Pickup Field */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide">
              Pickup Location
            </label>
            <div className="relative">
              <MapPin className="w-5 h-5 text-[#7bc010] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                required
                placeholder="e.g. Wembley Stadium or Postcode"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#7bc010] focus:bg-white transition-all"
              />
            </div>
            {/* Quick Suggestions */}
            <div className="flex flex-wrap gap-1.5 mt-2">
              <span className="text-[11px] text-slate-400 self-center">Popular:</span>
              {popularPickups.slice(0, 3).map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() => setPickup(item)}
                  className="text-[11px] bg-slate-100 hover:bg-slate-200 text-slate-600 px-2 py-0.5 rounded-md transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Dropoff Field */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide">
              Drop-off Destination
            </label>
            <div className="relative">
              <MapPin className="w-5 h-5 text-rose-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                required
                placeholder="e.g. Heathrow Airport or Central London"
                value={dropoff}
                onChange={(e) => setDropoff(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#7bc010] focus:bg-white transition-all"
              />
            </div>
            {/* Quick Suggestions */}
            <div className="flex flex-wrap gap-1.5 mt-2">
              <span className="text-[11px] text-slate-400 self-center">Airports:</span>
              {popularDropoffs.slice(0, 3).map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() => setDropoff(item)}
                  className="text-[11px] bg-slate-100 hover:bg-slate-200 text-slate-600 px-2 py-0.5 rounded-md transition-colors"
                >
                  {item.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Date, Time, Passengers, Vehicle Type */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
          {/* Pickup Date */}
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              Pickup Date
            </label>
            <div className="relative">
              <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="w-full pl-9 pr-2 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs md:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#7bc010] focus:bg-white"
              />
            </div>
          </div>

          {/* Pickup Time */}
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              Pickup Time
            </label>
            <div className="relative">
              <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="time"
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                className="w-full pl-9 pr-2 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs md:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#7bc010] focus:bg-white"
              />
            </div>
          </div>

          {/* Passengers */}
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              Passengers
            </label>
            <div className="relative">
              <Users className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <select
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs md:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#7bc010] focus:bg-white appearance-none cursor-pointer"
              >
                <option value="1">1 Passenger</option>
                <option value="2">2 Passengers</option>
                <option value="3">3 Passengers</option>
                <option value="4">4 Passengers</option>
                <option value="5">5 Passengers</option>
                <option value="6">6 Passengers</option>
                <option value="7">7 Passengers</option>
                <option value="8">8 Passengers</option>
              </select>
            </div>
          </div>

          {/* Vehicle Type */}
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              Vehicle Type
            </label>
            <div className="relative">
              <Car className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <select
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs md:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#7bc010] focus:bg-white appearance-none cursor-pointer"
              >
                <option value="Saloon">Saloon Car</option>
                <option value="Estate">Estate Car</option>
                <option value="Executive">Executive Car</option>
                <option value="7-Seater">7-Seater MPV</option>
                <option value="8-Seater">8-Seater Van</option>
              </select>
            </div>
          </div>
        </div>

        {/* Submit Button & Assurance */}
        <div className="pt-3">
          <button
            type="submit"
            className="w-full py-4 px-6 rounded-xl bg-[#7bc010] hover:bg-[#6ea80e] text-white font-bold text-base md:text-lg flex items-center justify-center gap-3 shadow-lg shadow-[#7bc010]/30 hover:shadow-xl transition-all duration-200 cursor-pointer group"
          >
            <span>GET A QUOTE / BOOK NOW</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

        {/* Transparency note */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-5 pt-3 text-xs text-slate-500 text-center">
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#7bc010]" />
            Direct secure booking via Minicabs.co.uk
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#7bc010]" />
            No hidden surge fees
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#7bc010]" />
            24/7 UK customer support
          </span>
        </div>
      </form>
    </div>
  );
}

