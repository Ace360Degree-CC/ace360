"use client";

import Image from "next/image";

const services = [
  {
    title: "Custom Website Development",
    desc: "Create a Unique Identity Built for Your Business We design and develop fully customized, scalable websites tailored to your goals.",
    img: "/images/services/technology/web-development/custom-website-development.png",
  },
  {
    title: "Responsive Web Design",
    desc: "Optimized for Every Device Ensure seamless experiences on desktop, mobile, and tablets with responsive design.",
    img: "/images/services/technology/web-development/responsive-web-design.png",
  },
  {
    title: "SEO-Friendly Websites",
    desc: "Rank Higher, Get More Traffic We build websites with technical SEO best practices to boost search rankings.",
    img: "/images/services/technology/web-development/seo-friendly.png",
  },
  {
    title: "CMS-Based Websites ",
    desc: "Easy to Manage & Update Get websites built on WordPress, Shopify, Squarespace, OpenCart, and more for easy content management.",
    img: "/images/services/technology/web-development/cms-based.png",
  },
  {
    title: "High-Performance Ecommerce Websites ",
    desc: "Sell More Online We develop feature-rich, conversion-optimized online stores with secure payment integration.",
    img: "/images/services/technology/web-development/high-performance.png",
  },
  {
    title: "Website Maintenance & Support",
    desc: "Keep Your Site Running Smoothly Ongoing updates, security patches, and performance optimization for peak functionality.",
    img: "/images/services/technology/web-development/website-maintenance.png",
  },
];

export default function OurWebDevServices() {
  return (
    <div className="w-full bg-white">
      <section className="py-16 px-4 max-w-7xl mx-auto text-center">
        <h4 className="text-sm text-gray-500 uppercase tracking-wide font-poppins">
          Website Design & Development
        </h4>
        <h2 className="text-3xl font-bold text-gray-900 mb-10 font-poppins">
          Our Website Development Services
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
