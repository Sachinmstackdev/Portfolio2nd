"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      client: "Two Sapiens",
      services: "E-commerce Store, Ad Campaigns, Outreach, Funnel Building",
      description: "Creating the e-commerce store, running ads campaigns, outreaching, building the funnels from scratch",
      logo: "https://res.cloudinary.com/twosapiens/image/upload/v1740983000/Black_Liquid_Minimalist_Daily_Quotes_LinkedIn_Banner_jc5c4a.png" // Add your logo URL here
    },
    {
      id: 2,
      client: "Mithi Craving",
      services: "Full Website Development, Order Management",
      description: "Building the full website which takes orders",
      logo: "https://res.cloudinary.com/twosapiens/image/upload/v1754964450/469590153_943912297673989_222213_zfzalg.png" // Add your logo URL here
    },
    {
      id: 3,
      client: "Express India",
      services: "Website Development, Bulk Order System, SEO Setup",
      description: "Building the full website for getting bulk orders and setup the SEO",
      logo: "https://res.cloudinary.com/twosapiens/image/upload/v1752717392/a-vector-logo-design-for-express-india-f_0Cbj16ZZSQymUwZfbI5nIQ_ykQlxmLCRqu-1EL1brPCxQ_jn2kuu.jpg" // Add your logo URL here
    },
    {
      id: 4,
      client: "VK Hostels",
      services: "Website Development, Meta & Google Ads",
      description: "Create website for getting bookings and running Meta and Google ads",
      logo: "https://res.cloudinary.com/twosapiens/image/upload/v1744477383/VK-pg-hostel-logo-banner_emq6ax.png" // Add your logo URL here
    },
    {
      id: 5,
      client: "Lonar Group",
      services: "Property Listing Website, Traffic Generation",
      description: "Creating the website for listing the properties and generating traffic for the Lonar group",
      logo: "https://res.cloudinary.com/twosapiens/image/upload/v1757613678/lonar-white_d51qvm.png" // Add your logo URL here
    },
    {
      id: 6,
      client: "Kamla Health Clinic",
      services: "Facebook Ads, Local SEO, GMB Optimization",
      description: "Running Facebook ads for them and giving traffic to their local visits and increase the GMB SEO",
      logo: "" // Add your logo URL here
    },
    {
      id: 7,
      client: "Ambro Bites",
      services: "Website Development, Corporate Solutions",
      description: "Building the website for them, they provide snacks and beverages to corporates",
      logo: "https://res.cloudinary.com/twosapiens/image/upload/v1743014921/logo-removebg-preview_mcstk8.png" // Add your logo URL here
    },
    {
      id: 8,
      client: "Microscope",
      services: "Frontend Website Development",
      description: "Creating the frontend website for them",
      logo: "https://res.cloudinary.com/twosapiens/image/upload/v1757613677/image_6_f2ruya.png" // Add your logo URL here
    }
  ];

  const generateRating = () => {
    const decimals = [5, 6, 7, 8, 9];
    const decimal = decimals[Math.floor(Math.random() * decimals.length)];
    return parseFloat(`4.${decimal}`);
  };

  const testimonialsWithRatings = useMemo(
    () => testimonials.map((t) => ({ ...t, rating: generateRating() })),
    []
  );

  const getWidthClass = (percent: number) => {
    switch (percent) {
      case 0:
        return "w-0";
      case 50:
        return "w-1/2";
      case 60:
        return "w-[60%]";
      case 70:
        return "w-[70%]";
      case 80:
        return "w-4/5";
      case 90:
        return "w-[90%]";
      case 100:
        return "w-full";
      default:
        return `w-[${percent}%]` as const;
    }
  };

  const renderStar = (fillPercent: number) => (
    <div className="relative w-4 h-4">
      <svg className="w-4 h-4 text-gray-300" viewBox="0 0 20 20">
        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
      </svg>
      <div className={`absolute top-0 left-0 h-4 overflow-hidden ${getWidthClass(fillPercent)}`}>
        <svg className="w-4 h-4 text-yellow-400" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      </div>
    </div>
  );

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const decimal = rating - fullStars;
    return [...Array(5)].map((_, i) => {
      const fill = i < fullStars ? 100 : i === fullStars ? Math.round(decimal * 100) : 0;
      return (
        <div key={i} className="mr-0.5">
          {renderStar(fill)}
        </div>
      );
    });
  };

  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);

  const slideOnce = () => {
    const container = mobileScrollRef.current;
    if (!container) return;
    const firstCard = container.querySelector<HTMLDivElement>("[data-card=true]");
    if (!firstCard) return;
    const gapPx = 16; // gap-4
    const delta = firstCard.getBoundingClientRect().width + gapPx;
    const nearEnd = container.scrollLeft + container.clientWidth + 4 >= container.scrollWidth;
    if (nearEnd) {
      container.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      container.scrollBy({ left: delta, behavior: "smooth" });
    }
  };

  const startAuto = () => {
    if (intervalRef.current != null) return;
    intervalRef.current = window.setInterval(slideOnce, 2500);
  };

  const stopAuto = () => {
    if (intervalRef.current != null) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAuto();
    return () => stopAuto();
  }, []);

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Success stories from businesses we've helped grow and transform
          </p>
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden">
          <div
            ref={mobileScrollRef}
            onMouseEnter={stopAuto}
            onMouseLeave={startAuto}
            onTouchStart={stopAuto}
            onTouchEnd={startAuto}
            className="flex overflow-x-auto gap-4 pb-4 scroll-smooth snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {testimonialsWithRatings.map((testimonial) => (
              <div
                key={testimonial.id}
                data-card
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 min-w-[280px] flex-shrink-0 snap-start transition-transform duration-300"
              >
                <div className="flex items-start space-x-3 mb-4">
                  {testimonial.logo ? (
                    <div className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center bg-white">
                      <Image
                        src={testimonial.logo}
                        alt={`${testimonial.client} logo`}
                        width={48}
                        height={48}
                        className="object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `<div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                              <span class="text-white font-bold text-lg">${testimonial.client.charAt(0)}</span>
                            </div>`;
                          }
                        }}
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {testimonial.client.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-lg">
                      {testimonial.client}
                    </h3>
                    <p className="text-sm text-blue-600 font-medium">
                      {testimonial.services}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed text-sm">
                  {testimonial.description}
                </p>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center">
                    <div className="flex">
                      {renderStars(testimonial.rating)}
                    </div>
                    <span className="ml-2 text-sm text-gray-500">{testimonial.rating.toFixed(1)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {testimonialsWithRatings.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
            >
              <div className="flex items-start space-x-3 mb-4">
                {testimonial.logo ? (
                  <div className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center bg-white">
                    <Image
                      src={testimonial.logo}
                      alt={`${testimonial.client} logo`}
                      width={48}
                      height={48}
                      className="object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <span class="text-white font-bold text-lg">${testimonial.client.charAt(0)}</span>
                          </div>`;
                        }
                      }}
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.client.charAt(0)}
                    </span>
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {testimonial.client}
                  </h3>
                  <p className="text-sm text-blue-600 font-medium">
                    {testimonial.services}
                  </p>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                {testimonial.description}
              </p>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center">
                  <div className="flex">
                    {renderStars(testimonial.rating)}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">{testimonial.rating.toFixed(1)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors cursor-pointer">
            <span className="font-medium">View More Success Stories</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
} 