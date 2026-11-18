"use client";

import React, { useState, useEffect } from "react";
import { Phone, MessageSquare, Car, Menu, X, Shield, Clock } from "lucide-react";
import { trackCallClick, trackWhatsAppClick, trackBookingClick } from "./Analytics";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Our Services", href: "#services" },
    { label: "Airport Transfers", href: "#airports" },
    { label: "Our Vehicles", href: "#vehicles" },
    { label: "Why Choose Us", href: "#why-choose-us" },
    { label: "Areas We Cover", href: "#areas" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Top micro bar for trust signals */}
      <div className="bg-[#0f172a] text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-[11px] md:text-xs">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Shield className="w-3.5 h-3.5 text-[#7bc010]" />
              Minicabs UK Ltd – London Private-Hire Serving Since 1996
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-[#7bc010]" />
              24/7 365 Days Availability
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <a
              href="mailto:bookings@minicabs.co.uk"
              className="text-slate-400 hover:text-white transition-colors hidden sm:inline"
            >
              bookings@minicabs.co.uk
            </a>
            <span className="text-slate-500 hidden sm:inline">|</span>
            <a
              href="https://wa.me/442082044444?text=Hello%2C%20I%20would%20like%20to%20book%20a%20taxi%20in%20Wembley"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("Top Bar")}
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp: 0208 204 4444</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-100"
            : "bg-white py-4 border-b border-slate-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#0f172a] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform border border-slate-700">
              <Car className="w-5 h-5 text-[#7bc010]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl md:text-2xl font-black tracking-tight text-slate-900">
                  WEMBLEY
                </span>
                <span className="text-xl md:text-2xl font-black tracking-tight text-[#7bc010]">
                  MINICABS
                </span>
              </div>
              <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500">
                by Minicabs UK Ltd • Est. 1996
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-[#7bc010] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons (Desktop) */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Call Now */}
            <a
              href="tel:02082044444"
              onClick={() => trackCallClick("Header")}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-900 transition-all font-bold text-sm"
            >
              <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700">
                <Phone className="w-4 h-4 text-[#7bc010]" />
              </div>
              <div className="text-left">
                <span className="text-[10px] uppercase font-semibold text-slate-500 block leading-none">
                  Call Now 24/7
                </span>
                <span className="text-sm font-bold text-slate-900 leading-tight">
                  0208 204 4444
                </span>
              </div>
            </a>

            {/* Book Now Button */}
            <a
              href="https://www.minicabs.co.uk/new-booking"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackBookingClick("Header")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#7bc010] hover:bg-[#6ea80e] text-white font-bold text-sm shadow-md shadow-[#7bc010]/20 hover:shadow-lg transition-all"
            >
              <span>Book Now</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:02082044444"
              onClick={() => trackCallClick("Header Mobile Quick")}
              className="p-2 text-slate-700 bg-slate-100 rounded-lg sm:hidden"
              aria-label="Call Now"
            >
              <Phone className="w-5 h-5 text-[#7bc010]" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#7bc010] rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
                <a
                  href="tel:02082044444"
                  onClick={() => {
                    trackCallClick("Mobile Menu");
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-slate-100 text-slate-900 font-bold text-center flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#7bc010]" />
                  <span>Call 0208 204 4444</span>
                </a>
                <a
                  href="https://wa.me/442082044444?text=Hello%2C%20I%20would%20like%20to%20book%20a%20taxi%20in%20Wembley"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackWhatsAppClick("Mobile Menu");
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 text-white font-bold text-center flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href="https://www.minicabs.co.uk/new-booking"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackBookingClick("Mobile Menu");
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-[#7bc010] text-white font-bold text-center flex items-center justify-center gap-2"
                >
                  <Car className="w-4 h-4" />
                  <span>Book Your Taxi Online</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Fixed Bottom CTA Bar on Mobile as requested in prompt */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 py-2.5 px-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] sm:hidden">
        <div className="grid grid-cols-3 gap-2">
          {/* Call */}
          <a
            href="tel:02082044444"
            onClick={() => trackCallClick("Bottom Bar")}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 active:scale-95 transition-all text-center"
          >
            <Phone className="w-4 h-4 text-[#7bc010] mb-0.5" />
            <span className="text-[11px] font-bold">Call Now</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/442082044444?text=Hello%2C%20I%20would%20like%20to%20book%20a%20taxi%20in%20Wembley"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("Bottom Bar")}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white active:scale-95 transition-all text-center shadow-sm"
          >
            <MessageSquare className="w-4 h-4 mb-0.5" />
            <span className="text-[11px] font-bold">WhatsApp</span>
          </a>

          {/* Book Now */}
          <a
            href="https://www.minicabs.co.uk/new-booking"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackBookingClick("Bottom Bar")}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#7bc010] hover:bg-[#6ea80e] text-white active:scale-95 transition-all text-center shadow-sm"
          >
            <Car className="w-4 h-4 mb-0.5" />
            <span className="text-[11px] font-bold">Book Now</span>
          </a>
        </div>
      </div>
    </>
  );
}

