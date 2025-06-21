"use client";

import Image from "next/image";

const services = [
  {
    title: "Custom B2B & B2C Portals",
    desc: "Tailored for Business Growth We develop scalable, secure portals for business networking, transactions, and communication.",
    img: "/images/services/technology/portal-development/b2b&b2c.png",
  },
  {
    title: "Multi-Vendor Marketplace",
    desc: "Connect Buyers & Sellers We create feature-rich online marketplaces with vendor dashboards, payment integration & more.",
    img: "/images/services/technology/portal-development/multi-vendor.png",
  },
  {
    title: "E-Learning & Membership Portals",
    desc: "Monetize Your Expertise Develop educational, course-based, or subscription-driven portals for learning and engagement.",
    img: "/images/services/technology/portal-development/e-learning.png",
  },
  {
    title: "Real Estate & Service Marketplaces",
    desc: "Lead Generation & Listings Build real estate, job, and service marketplaces with advanced search & booking systems.",
    img: "/images/services/technology/portal-development/real-estate.png",
  },
  {
    title: "Payment Gateway & API Integration",
    desc: "Seamless Transactions Secure third-party integrations, payment gateways, and automated invoicing for smooth operations.",
    img: "/images/services/technology/portal-development/payment-gate-way.png",
  },
  {
    title: "Ongoing Support & Optimization",
    desc: "Keep Your Portal Running Smoothly We provide post-launch support, performance tracking, and feature enhancements.",
    img: "/images/services/technology/portal-development/ongoing-support.png",
  },
];

export default function OurPortalDevService() {
  return (
    <div className="w-full bg-white">
      <section className="py-16 px-4 max-w-7xl mx-auto text-center">
        <h4 className="text-sm text-gray-500 uppercase tracking-wide font-poppins">
          Portal Development / Market Place
        </h4>
        <h2 className="text-3xl font-bold text-gray-900 mb-10 font-poppins">
          Our Portal & Marketplace Development Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative w-full h-80 rounded-md overflow-hidden shadow-md border"
            >
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-0 w-full bg-[#F2A300]/85 text-white p-4 font-poppins h-36 flex flex-col justify-between">
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="text-sm">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
