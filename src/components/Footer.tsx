"use client";

import React, { useState } from "react";
import {
  Car,
  Phone,
  MessageSquare,
  Mail,
  Globe,
  MapPin,
  ShieldCheck,
  Check,
  CreditCard,
} from "lucide-react";
import { LegalModal } from "./LegalModals";
import { trackCallClick, trackWhatsAppClick } from "./Analytics";

export default function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-[#0b1120] text-slate-300 pt-16 pb-24 sm:pb-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
            {/* Col 1: Logo & Company Description (2 cols on large screen) */}
            <div className="lg:col-span-2 space-y-4">
              <a href="#hero" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-white border border-slate-700">
                  <Car className="w-5 h-5 text-[#7bc010]" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xl font-black tracking-tight text-white">
                      WEMBLEY
                    </span>
                    <span className="text-xl font-black tracking-tight text-[#7bc010]">
                      MINICABS
                    </span>
                  </div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                    by Minicabs UK Ltd • Est. 1996
                  </p>
                </div>
              </a>

              <p className="text-sm text-slate-400 leading-relaxed pr-4">
                Wembley Minicabs is proudly operated by Minicabs UK Ltd, an established London
                private-hire company serving passengers across London since 1996. We deliver fixed
                fares, TfL-licensed drivers, zero surge pricing, and dependable 24/7 service.
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#7bc010]" />
                  TfL Licensed Operator
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#7bc010]" />
                  DBS Checked Drivers
                </span>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
                Quick Navigation
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li>
                  <a href="#hero" className="hover:text-[#7bc010] transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#7bc010] transition-colors">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#airports" className="hover:text-[#7bc010] transition-colors">
                    Airport Transfers
                  </a>
                </li>
                <li>
                  <a href="#vehicles" className="hover:text-[#7bc010] transition-colors">
                    Our Vehicles
                  </a>
                </li>
                <li>
                  <a href="#why-choose-us" className="hover:text-[#7bc010] transition-colors">
                    Why Choose Us
                  </a>
                </li>
                <li>
                  <a href="#areas" className="hover:text-[#7bc010] transition-colors">
                    Areas We Cover
                  </a>
                </li>
                <li>
                  <a href="#faqs" className="hover:text-[#7bc010] transition-colors">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Taxi Services & Airports */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
                London Airports
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li>
                  <a href="#airports" className="hover:text-[#7bc010] transition-colors">
                    Heathrow Airport Taxi (LHR)
                  </a>
                </li>
                <li>
                  <a href="#airports" className="hover:text-[#7bc010] transition-colors">
                    Gatwick Airport Taxi (LGW)
                  </a>
                </li>
                <li>
                  <a href="#airports" className="hover:text-[#7bc010] transition-colors">
                    Luton Airport Taxi (LTN)
                  </a>
                </li>
                <li>
                  <a href="#airports" className="hover:text-[#7bc010] transition-colors">
                    Stansted Airport Taxi (STN)
                  </a>
                </li>
                <li>
                  <a href="#airports" className="hover:text-[#7bc010] transition-colors">
                    London City Airport (LCY)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.minicabs.co.uk/new-booking"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#7bc010] transition-colors font-bold text-[#7bc010]"
                  >
                    Wembley Stadium Taxis &rarr;
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Contact & Dispatch */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
                Contact & Booking
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm">
                <li>
                  <a
                    href="tel:02082044444"
                    onClick={() => trackCallClick("Footer Link")}
                    className="flex items-center gap-2 hover:text-[#7bc010] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#7bc010] shrink-0" />
                    <span>0208 204 4444</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/442082044444?text=Hello%2C%20I%20would%20like%20to%20book%20a%20taxi%20in%20Wembley"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick("Footer Link")}
                    className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>WhatsApp Booking</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:bookings@minicabs.co.uk"
                    className="flex items-center gap-2 hover:text-[#7bc010] transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#7bc010] shrink-0" />
                    <span className="truncate">bookings@minicabs.co.uk</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.minicabs.co.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-[#7bc010] transition-colors"
                  >
                    <Globe className="w-4 h-4 text-[#7bc010] shrink-0" />
                    <span>www.minicabs.co.uk</span>
                  </a>
                </li>
                <li className="flex items-start gap-2 text-slate-400">
                  <MapPin className="w-4 h-4 text-[#7bc010] shrink-0 mt-0.5" />
                  <span>Wembley & Brent, Greater London</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Payment Methods & Disclaimers */}
          <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-800/80">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-slate-400">
              <span className="font-semibold text-slate-300">Accepted Payment Methods:</span>
              <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 font-bold border border-slate-700">
                Cash
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 font-bold border border-slate-700">
                Visa
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 font-bold border border-slate-700">
                Mastercard
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 font-bold border border-slate-700">
                Apple Pay
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 font-bold border border-slate-700">
                Google Pay
              </span>
            </div>

            <div className="text-xs text-slate-400 text-center md:text-right">
              <span>Operating 24 Hours a Day • 7 Days a Week • 365 Days a Year</span>
            </div>
          </div>

          {/* Bottom Copyright & Legal Links */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>
              &copy; {currentYear} Wembley Minicabs. Operated by Minicabs UK Ltd. All Rights
              Reserved.
            </p>
            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={() => setPrivacyOpen(true)}
                className="hover:text-slate-300 transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() => setTermsOpen(true)}
                className="hover:text-slate-300 transition-colors cursor-pointer"
              >
                Terms & Conditions
              </button>
              <a
                href="https://www.minicabs.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-300 transition-colors"
              >
                Minicabs UK Ltd Official Site
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      <LegalModal
        isOpen={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
        title="Privacy Policy – Wembley Minicabs & Minicabs UK Ltd"
      >
        <p>
          Minicabs UK Ltd (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to
          protecting and respecting your privacy in compliance with the UK General Data Protection
          Regulation (UK GDPR) and the Data Protection Act 2018.
        </p>
        <h4 className="font-bold text-slate-900 pt-2">1. Information We Collect</h4>
        <p>
          When you book a journey via our website, telephone line (0208 204 4444), or WhatsApp, we
          collect passenger contact details (name, phone number, email address), journey pickup and
          destination addresses, pickup times, flight numbers (for airport transfers), and payment
          confirmation status.
        </p>
        <h4 className="font-bold text-slate-900 pt-2">2. How We Use Your Information</h4>
        <p>
          Your information is used solely to dispatch your licensed driver, confirm booking details,
          provide live tracking updates, process transaction receipts, and fulfil statutory
          record-keeping required by Transport for London (TfL).
        </p>
        <h4 className="font-bold text-slate-900 pt-2">3. Payment Security</h4>
        <p>
          Card and digital wallet payments are handled via secure, PCI-DSS compliant payment gateways.
          We never store full card numbers or security CVV codes on our local servers.
        </p>
        <h4 className="font-bold text-slate-900 pt-2">4. Contact Us</h4>
        <p>
          For privacy inquiries or data subject access requests, please email us at{" "}
          <a href="mailto:bookings@minicabs.co.uk" className="text-[#7bc010] font-bold">
            bookings@minicabs.co.uk
          </a>.
        </p>
      </LegalModal>

      {/* Terms & Conditions Modal */}
      <LegalModal
        isOpen={termsOpen}
        onClose={() => setTermsOpen(false)}
        title="Terms & Conditions – Wembley Minicabs"
      >
        <p>
          These Terms and Conditions apply to all private-hire minicab bookings made with Wembley
          Minicabs operated by Minicabs UK Ltd (licensed TfL Private Hire Operator).
        </p>
        <h4 className="font-bold text-slate-900 pt-2">1. Booking and Fixed Fares</h4>
        <p>
          All fares are fixed and confirmed at the time of reservation. Our quoted fares include the
          journey between the agreed pickup and drop-off points. Additional unscheduled diversions,
          extra stops, or extended waiting beyond complimentary thresholds may incur standard fixed
          tariffs.
        </p>
        <h4 className="font-bold text-slate-900 pt-2">2. Airport Pickups & Waiting Time</h4>
        <p>
          For airport pickups, we track inbound flights according to provided flight numbers. We
          provide complimentary waiting time (up to 45 minutes from flight touchdown) to allow for
          baggage retrieval and border clearance. Meet & Greet is available as an optional £12
          add-on.
        </p>
        <h4 className="font-bold text-slate-900 pt-2">3. Cancellations & Amendments</h4>
        <p>
          Journeys may be amended or cancelled by contacting our 24/7 dispatch office on 0208 204
          4444 or via WhatsApp. Notice periods apply for full refunds on pre-paid airport bookings.
        </p>
        <h4 className="font-bold text-slate-900 pt-2">4. Passenger Conduct & Luggage</h4>
        <p>
          Passengers must ensure they choose an appropriate vehicle class (Saloon, Estate, Executive,
          7-Seater, 8-Seater) capable of carrying their party and all luggage safely without
          compromising passenger cabin safety.
        </p>
      </LegalModal>
    </>
  );
}

