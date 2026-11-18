export default function StructuredData() {
  const taxiServiceSchema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "@id": "https://www.wembley-minicabs.co.uk/#taxiservice",
    name: "Wembley Minicabs",
    legalName: "Minicabs UK Ltd",
    alternateName: "Minicabs UK Wembley",
    url: "https://www.wembley-minicabs.co.uk/",
    logo: "https://www.wembley-minicabs.co.uk/logo.png",
    description:
      "Reliable Wembley taxi and airport minicabs service operated by Minicabs UK Ltd since 1996. Fixed fares, TfL licensed drivers, 24/7 service to Heathrow, Gatwick, Luton, Stansted and London City Airport.",
    telephone: "+442082044444",
    email: "bookings@minicabs.co.uk",
    priceRange: "££",
    currenciesAccepted: "GBP",
    paymentAccepted: "Cash, Credit Card, Debit Card, Apple Pay, Google Pay",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Wembley",
      addressRegion: "Greater London",
      postalCode: "HA9",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.556,
      longitude: -0.2796,
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Wembley" },
      { "@type": "AdministrativeArea", name: "Wembley Park" },
      { "@type": "AdministrativeArea", name: "Wembley Central" },
      { "@type": "AdministrativeArea", name: "North Wembley" },
      { "@type": "AdministrativeArea", name: "Sudbury" },
      { "@type": "AdministrativeArea", name: "Alperton" },
      { "@type": "AdministrativeArea", name: "Preston" },
      { "@type": "AdministrativeArea", name: "Tokyngton" },
      { "@type": "AdministrativeArea", name: "Kingsbury" },
      { "@type": "AdministrativeArea", name: "Neasden" },
      { "@type": "AdministrativeArea", name: "Harlesden" },
      { "@type": "AdministrativeArea", name: "Stonebridge" },
      { "@type": "Place", name: "Heathrow Airport" },
      { "@type": "Place", name: "Gatwick Airport" },
      { "@type": "Place", name: "Luton Airport" },
      { "@type": "Place", name: "Stansted Airport" },
      { "@type": "Place", name: "London City Airport" },
    ],
    provider: {
      "@type": "Organization",
      name: "Minicabs UK Ltd",
      url: "https://www.minicabs.co.uk/",
      foundingDate: "1996",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "487",
      bestRating: "5",
      worstRating: "1",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How can I book a taxi in Wembley?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can book your Wembley minicab online via our website at https://www.minicabs.co.uk/, call our 24/7 booking line on 0208 204 4444, or message our dispatch team directly on WhatsApp at 0208 204 4444.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide Wembley to Heathrow Airport transfers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we specialise in transfers between Wembley and Heathrow Airport for all terminals (Terminals 2, 3, 4, and 5) with fixed fares, optional £12 meet & greet service, and live flight tracking.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer fixed fares for Wembley taxi journeys?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, all journeys booked with Wembley Minicabs / Minicabs UK Ltd come with a guaranteed fixed fare confirmed before you travel. You will never face surge pricing or hidden charges.",
        },
      },
      {
        "@type": "Question",
        name: "Are there any hidden charges or surcharges?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. We operate with 100% pricing transparency. There are no peak surcharges, no card payment fees, and no unexpected extras.",
        },
      },
      {
        "@type": "Question",
        name: "What vehicle options are available?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide modern Saloon Cars, Estate Cars with extra luggage capacity, Executive Cars for corporate or VIP travel, 7-Seater MPVs, and spacious 8-Seater minibuses for larger groups.",
        },
      },
      {
        "@type": "Question",
        name: "Can I book a 7-seater or 8-seater taxi in Wembley?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our fleet includes comfortable 7-seater and 8-seater passenger vehicles with generous luggage space, ideal for Wembley Stadium events, family airport runs, and group travel.",
        },
      },
      {
        "@type": "Question",
        name: "Can I pay by card, Google Pay or Apple Pay?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we accept all major payment methods including Cash, Debit Cards, Credit Cards, Apple Pay, and Google Pay with secure digital receipts.",
        },
      },
      {
        "@type": "Question",
        name: "Are Wembley taxis available 24 hours a day?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Minicabs UK Ltd operates 24 hours a day, 7 days a week, 365 days a year. Our drivers and telephone dispatch team are always available.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide airport meet and greet services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, an optional Meet & Greet service is available for just £12. Your driver will meet you inside the arrivals hall with a personalised name board, assist with your luggage, and escort you to the vehicle.",
        },
      },
      {
        "@type": "Question",
        name: "Can I book an airport taxi in advance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we strongly recommend booking your airport taxi in advance to secure your preferred vehicle and guarantee on-time arrival. You can pre-book days or weeks ahead.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer taxis from Wembley Stadium?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide pre-booked pickups and drop-offs for Wembley Stadium matches, concerts, and OVO Arena events with designated meeting spots to avoid heavy post-event congestion.",
        },
      },
      {
        "@type": "Question",
        name: "Can I book a taxi for a long-distance journey?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide long-distance minicab transfers from Wembley to all UK destinations, coastal towns, universities, and regional cities with competitive fixed fares.",
        },
      },
    ],
  };

  const breadcrumbsSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.wembley-minicabs.co.uk/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Wembley Taxi & Minicabs",
        item: "https://www.wembley-minicabs.co.uk/#services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Airport Transfers",
        item: "https://www.wembley-minicabs.co.uk/#airports",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(taxiServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
    </>
  );
}

