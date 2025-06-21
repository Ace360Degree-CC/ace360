"use client";

import Image from "next/image";

const services = [
  {
    title: "Custom Shopify Store Development",
    desc: "Tailored for Your Brand We build custom-designed, high-converting Shopify stores that align with your business goals.",
    img: "/images/services/technology/shopify/custom-shopify-development.png",
  },
  {
    title: "Shopify Theme Customization",
    desc: "Rank Higher, Get More Traffic We implement on-page SEO, fast loading speeds, and structured content for better rankings.",
    img: "/images/services/technology/shopify/theme-customization.png",
  },
  {
    title: "Shopify SEO & Performance Optimization",
    desc: "Rank Higher & Sell More We optimize product pages, site speed, and structure to improve search rankings and conversions.",
    img: "/images/services/technology/shopify/seo.png",
  },
  {
    title: "Shopify App Integration",
    desc: "Expand Your Store’s Functionality We integrate payment gateways, CRM, automation tools, and marketing apps for enhanced performance.",
    img: "/images/services/technology/shopify/app-inigration.png",
  },
  {
    title: "Shopify Dropshipping & Multi-Vendor Marketplace Setup",
    desc: "We create dropshipping stores and multi-vendor marketplaces for seamless business operations.",
    img: "/images/services/technology/shopify/dropshipping.png",
  },
  {
    title: "Shopify Maintenance & Support",
    desc: "Keep Your Store Running Smoothly We provide ongoing support, security updates, and performance enhancements to maintain store efficiency.",
    img: "/images/services/technology/shopify/maintainence-support.png",
  },
];

export default function ShopifyServices() {
  return (
    <div className="w-full bg-white">
      <section className="py-16 px-4 max-w-7xl mx-auto text-center">
        <h4 className="text-sm text-gray-500 uppercase tracking-wide font-poppins">
          Shopify Website
        </h4>
        <h2 className="text-3xl font-bold text-gray-900 mb-10 font-poppins">
          Our Shopify Website Development Services
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
