"use client";

import Image from "next/image";

const services = [
  {
    title: "Custom OpenCart Development",
    desc: "Tailored for Your Brand We build unique, conversion-optimized OpenCart websites with custom features & integrations.",
    img: "/images/services/technology/opencraft/custom-opencraft-development.png",
  },
  {
    title: "OpenCart Theme Customization",
    desc: "Stand Out from Competitors We customize OpenCart themes to enhance branding, user experience & functionality.",
    img: "/images/services/technology/opencraft/open-craft-theme.png",
  },
  {
    title: "Secure Payment Gateway Integration",
    desc: "Seamless Transactions We integrate PayPal, Stripe, Razorpay & other secure payment gateways for smooth checkouts.",
    img: "/images/services/technology/opencraft/secure-payment.png",
  },
  {
    title: "OpenCart Marketplace Development",
    desc: "Multi-Vendor Solutions We develop scalable OpenCart marketplaces with vendor dashboards & product management features.",
    img: "/images/services/technology/opencraft/market-place.png",
  },
  {
    title: "OpenCart SEO & Performance Optimization",
    desc: "Rank Higher & Sell More We optimize page speed, product pages & site structure for better search engine rankings.",
    img: "/images/services/technology/opencraft/seo.png",
  },
  {
    title: "Ongoing OpenCart Maintenance & Support",
    desc: "Keep Your Store Running Smoothly We provide ongoing support, security updates, and performance enhancements to maintain store efficiency.",
    img: "/images/services/technology/opencraft/ongoing-opencraft.png",
  },
];

export default function OpenCraftServices() {
  return (
    <div className="w-full bg-white">
      <section className="py-16 px-4 max-w-7xl mx-auto text-center">
        <h4 className="text-sm text-gray-500 uppercase tracking-wide font-poppins">
          OpenCart Website
        </h4>
        <h2 className="text-3xl font-bold text-gray-900 mb-10 font-poppins">
          Our OpenCart Website Development Services
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
