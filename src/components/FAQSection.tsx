"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Phone, MessageSquare } from "lucide-react";
import { trackCallClick, trackWhatsAppClick } from "./Analytics";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How can I book a taxi in Wembley?",
      answer:
        "You can book your Wembley minicab directly online through our website at www.minicabs.co.uk. Alternatively, call our 24/7 London control centre on 0208 204 4444 or send a message to our WhatsApp booking desk at 0208 204 4444.",
    },
    {
      question: "Do you provide Wembley to Heathrow Airport transfers?",
      answer:
        "Yes, we specialise in direct airport transfers between Wembley and Heathrow Airport. We serve all terminals (Terminals 2, 3, 4, and 5) with fixed fares, complimentary flight delay tracking, and optional Meet & Greet services inside arrivals.",
    },
    {
      question: "Do you offer fixed fares for Wembley taxi journeys?",
      answer:
        "Yes, all journeys booked with Wembley Minicabs / Minicabs UK Ltd feature guaranteed fixed fares. The price quoted at the time of booking is the exact price you pay, with no surprise meter increments or traffic surcharges.",
    },
    {
      question: "Are there any hidden charges or surcharges?",
      answer:
        "No, we operate with 100% price transparency. There are no surge prices during peak traffic or bad weather, no debit/credit card processing fees, and no surprise extra charges.",
    },
    {
      question: "What vehicle options are available?",
      answer:
        "Our fleet includes modern Saloon Cars (up to 4 passengers), Estate Cars with extra luggage capacity for airport runs, Executive Luxury Saloons (Mercedes/BMW style) for corporate travellers, 7-Seater MPVs, and spacious 8-Seater passenger minibuses.",
    },
    {
      question: "Can I book a 7-seater or 8-seater taxi in Wembley?",
      answer:
        "Yes, we provide 7-seater and 8-seater passenger vehicles with generous legroom and ample luggage space. These are ideal for groups attending events at Wembley Stadium, large families heading to London airports, and corporate group outings.",
    },
    {
      question: "Can I pay by card, Google Pay or Apple Pay?",
      answer:
        "Yes, we accept all convenient payment methods including Cash, Debit Cards, Credit Cards, Apple Pay, and Google Pay. You can pay securely online when booking or inside the vehicle.",
    },
    {
      question: "Are Wembley taxis available 24 hours a day?",
      answer:
        "Yes, Minicabs UK Ltd operates 24 hours a day, 7 days a week, 365 days a year. Our telephone booking team and licensed drivers are ready at any time, including late-night journeys and early-morning airport departures.",
    },
    {
      question: "Do you provide airport meet and greet services?",
      answer:
        "Yes, an optional Meet & Greet service is available for just £12. Your driver will enter the terminal arrivals hall holding a personalised name board, assist with your luggage, and escort you directly to the waiting vehicle.",
    },
    {
      question: "Can I book an airport taxi in advance?",
      answer:
        "Yes, we strongly encourage advance bookings. You can pre-book your journey days, weeks, or months ahead to guarantee vehicle availability and enjoy on-time pickup.",
    },
    {
      question: "Do you offer taxis from Wembley Stadium?",
      answer:
        "Yes, we provide pre-booked pickups and drop-offs for Wembley Stadium matches, football cup finals, NFL games, concerts, and OVO Arena events. We arrange designated meeting points to avoid heavy event congestion.",
    },
    {
      question: "Can I book a taxi for a long-distance journey?",
      answer:
        "Yes, we offer fixed-fare long-distance private hire transfers from Wembley to cities nationwide including Oxford, Cambridge, Birmingham, Bristol, Southampton, Portsmouth, and cruise terminals across the UK.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-16 md:py-24 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/80 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-4 h-4 text-[#7bc010]" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Got Questions About <span className="text-[#7bc010]">Wembley Minicabs?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Find answers to commonly asked questions about booking a taxi in Wembley, airport
            transfers, fixed fares, and our vehicle fleet.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-200 shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-[#7bc010] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg">{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#7bc010] text-white" : "text-slate-600"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support CTA box if more questions */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold text-slate-900 text-base">Still have a question?</h4>
            <p className="text-xs text-slate-500">
              Our 24/7 London control team is always on hand to assist you.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:02082044444"
              onClick={() => trackCallClick("FAQ Help Box")}
              className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-bold flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#7bc010]" />
              <span>0208 204 4444</span>
            </a>
            <a
              href="https://wa.me/442082044444?text=Hello%2C%20I%20have%20an%20enquiry%20regarding%20Wembley%20Minicabs"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("FAQ Help Box")}
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

