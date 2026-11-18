import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import AirportTransfers from "@/components/AirportTransfers";
import VehicleOptions from "@/components/VehicleOptions";
import CoverageAreas from "@/components/CoverageAreas";
import AboutSection from "@/components/AboutSection";
import CustomerReviews from "@/components/CustomerReviews";
import FAQSection from "@/components/FAQSection";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import Analytics from "@/components/Analytics";

export default function Home() {
  return (
    <>
      {/* Schema.org Structured Data (TaxiService, FAQPage, BreadcrumbList) */}
      <StructuredData />

      {/* Analytics (GA4 / GTM placeholders) */}
      <Analytics />

      {/* Sticky Header & Navigation */}
      <Header />

      {/* Main Page Sections */}
      <main className="relative flex-1">
        {/* Section 3: Hero Section */}
        <Hero />

        {/* Section 4: Why Choose Wembley Minicabs */}
        <WhyChooseUs />

        {/* Section 5: Our Taxi Services in Wembley */}
        <Services />

        {/* Section 6: Wembley Airport Transfers */}
        <AirportTransfers />

        {/* Section 7: Our Vehicle Options */}
        <VehicleOptions />

        {/* Section 8: Areas We Cover Around Wembley */}
        <CoverageAreas />

        {/* Section 9: About Minicabs UK Ltd */}
        <AboutSection />

        {/* Section 10: Customer Reviews */}
        <CustomerReviews />

        {/* Section 11: Frequently Asked Questions (FAQs) */}
        <FAQSection />

        {/* Section 12: Contact & Final CTA */}
        <ContactCTA />
      </main>

      {/* Section 13: Footer */}
      <Footer />
    </>
  );
}
