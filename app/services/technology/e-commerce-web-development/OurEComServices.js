"use client";

import Image from "next/image";

const services = [
  {
    title: "Custom Ecommerce Website",
    desc: "Tailored for Your Brand We develop bespoke online stores with custom features for a seamless shopping experience.",
    img: "/images/services/technology/e-commerce/custom-e-commerce.png",
  },
  {
    title: "Shopify & WooCommerce Development",
    desc: "Scalable & Secure We build high-converting Shopify & WooCommerce stores with easy management and payment integrations.",
    img: "/images/services/technology/e-commerce/shopipy-woo-commerce.png",
  },
  {
    title: "Mobile-Optimized Ecommerce",
    desc: "Expand Your Reach Develop feature-rich B2B, B2C, and multi-vendor marketplaces with advanced functionalities.",
    img: "/images/services/technology/e-commerce/mobile-optimization.png",
  },
  {
    title: "Marketplace & Multi-Vendor Platforms",
    desc: "Safe & Seamless Transactions We integrate secure payment solutions like Stripe, Razorpay, PayPal & more.",
    img: "/images/services/technology/e-commerce/market-palce.png",
  },
  {
    title: "Payment Gateway & Security Integration",
    desc: "Rank Higher & Sell More Optimize product pages, speed, and UX for better search rankings and conversions.",
    img: "/images/services/technology/e-commerce/payment-gate-way.png",
  },
  {
    title: "Ecommerce SEO & Performance Optimization",
    desc: "Keep Your Systems Running Smoothly Providing continuous monitoring, bug fixes, and security updates.",
    img: "/images/services/technology/e-commerce/e-commerce-seo.png",
  },
];

export default function OurEComServices() {
  return (
    <div className="w-full bg-white">
      <section className="py-16 px-4 max-w-7xl mx-auto text-center">
        <h4 className="text-sm text-gray-500 uppercase tracking-wide font-poppins">
          Ecommerce Web Development
        </h4>
        <h2 className="text-3xl font-bold text-gray-900 mb-10 font-poppins">
          Our Ecommerce Website Development Services
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
