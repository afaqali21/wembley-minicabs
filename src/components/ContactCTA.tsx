"use client";

import React from "react";
import {
  Phone,
  MessageSquare,
  Car,
  Mail,
  Globe,
  Clock,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { trackCallClick, trackWhatsAppClick, trackBookingClick } from "./Analytics";

export default function ContactCTA() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-[#0f172a] via-slate-900 to-[#182234] rounded-3xl p-8 sm:p-12 md:p-16 text-white shadow-2xl border border-slate-800 relative overflow-hidden">
          {/* Subtle glow accents */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#7bc010]/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7bc010]/20 border border-[#7bc010]/30 text-[#7bc010] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              Direct Booking & Dispatch • 24/7 Service
            </div>

            {/* Main Section Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Book Your <span className="text-[#7bc010]">Wembley Taxi</span> Today!
            </h2>

            {/* Supporting Text */}
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Whether you need a local taxi, an airport transfer or a spacious vehicle for your family,
              book with Minicabs UK Ltd for a comfortable and reliable journey.
            </p>

            {/* Main 3 High-Conversion Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              {/* BOOK ONLINE */}
              <a
                href="https://www.minicabs.co.uk/new-booking"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackBookingClick("Contact CTA Section")}
                className="px-8 py-4 rounded-xl bg-[#7bc010] hover:bg-[#6ea80e] text-white font-bold text-base md:text-lg shadow-lg shadow-[#7bc010]/30 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-3 cursor-pointer"
              >
                <Car className="w-5 h-5" />
                <span>BOOK ONLINE</span>
              </a>

              {/* CALL NOW */}
              <a
                href="tel:02082044444"
                onClick={() => trackCallClick("Contact CTA Section")}
                className="px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-base md:text-lg shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-3 cursor-pointer"
              >
                <Phone className="w-5 h-5 text-[#7bc010]" />
                <span>CALL NOW: 0208 204 4444</span>
              </a>

              {/* BOOK VIA WHATSAPP */}
              <a
                href="https://wa.me/442082044444?text=Hello%2C%20I%20would%20like%20to%20book%20a%20taxi%20in%20Wembley"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("Contact CTA Section")}
                className="px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base md:text-lg shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-3 cursor-pointer"
              >
                <MessageSquare className="w-5 h-5" />
                <span>BOOK VIA WHATSAPP</span>
              </a>
            </div>

            {/* Contact Details Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-10 text-left">
              {/* Phone Card */}
              <a
                href="tel:02082044444"
                onClick={() => trackCallClick("Contact Detail Box")}
                className="bg-slate-800/80 hover:bg-slate-800 rounded-2xl p-5 border border-slate-700/80 hover:border-[#7bc010] transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#7bc010]/20 flex items-center justify-center text-[#7bc010] mb-3 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-xs text-slate-400 uppercase font-semibold block">
                  Telephone (24/7)
                </span>
                <span className="text-base font-bold text-white group-hover:text-[#7bc010] transition-colors">
                  0208 204 4444
                </span>
              </a>

              {/* WhatsApp Card */}
              <a
                href="https://wa.me/442082044444?text=Hello%2C%20I%20would%20like%20to%20book%20a%20taxi%20in%20Wembley"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("Contact Detail Box")}
                className="bg-slate-800/80 hover:bg-slate-800 rounded-2xl p-5 border border-slate-700/80 hover:border-emerald-500 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <span className="text-xs text-slate-400 uppercase font-semibold block">
                  WhatsApp Support
                </span>
                <span className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                  0208 204 4444
                </span>
              </a>

              {/* Email Card */}
              <a
                href="mailto:bookings@minicabs.co.uk"
                className="bg-slate-800/80 hover:bg-slate-800 rounded-2xl p-5 border border-slate-700/80 hover:border-[#7bc010] transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#7bc010]/20 flex items-center justify-center text-[#7bc010] mb-3 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-xs text-slate-400 uppercase font-semibold block">
                  Email Bookings
                </span>
                <span className="text-base font-bold text-white truncate block group-hover:text-[#7bc010] transition-colors">
                  bookings@minicabs.co.uk
                </span>
              </a>

              {/* Website Card */}
              <a
                href="https://www.minicabs.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800/80 hover:bg-slate-800 rounded-2xl p-5 border border-slate-700/80 hover:border-[#7bc010] transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#7bc010]/20 flex items-center justify-center text-[#7bc010] mb-3 group-hover:scale-105 transition-transform">
                  <Globe className="w-5 h-5" />
                </div>
                <span className="text-xs text-slate-400 uppercase font-semibold block">
                  Official Website
                </span>
                <span className="text-base font-bold text-white group-hover:text-[#7bc010] transition-colors">
                  www.minicabs.co.uk
                </span>
              </a>
            </div>

            {/* Trust highlights footer */}
            <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-center gap-y-2 gap-x-8 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#7bc010]" />
                TfL Licensed London Private Hire Operator
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#7bc010]" />
                Serving Customers Since 1996
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#7bc010]" />
                Guaranteed Fixed Fares – No Surge Charges
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
