"use client";

import Image from "next/image";

const services = [
  {
    title: "On-Page SEO",
    desc: " Optimize Your Website for Higher Rankings Fine-tune your website’s keywords, meta tags, internal linking, and technical SEO to improve rankings and user experience.",
    img: "/images/services/digital-marketing/seo/on-page-seo.png",
  },
  {
    title: "Off-Page SEO",
    desc: "Build Authority & Backlinks That Drive Traffic Increase your website’s domain authority with high-quality backlinks, guest blogging, and content syndication.",
    img: "/images/services/digital-marketing/seo/off-page-seo.png",
  },
  {
    title: "Technical SEO",
    desc: "Improve Site Speed & Mobile Usability Enhance website speed, security, schema markup, and mobile-first indexing for better search rankings.",
    img: "/images/services/digital-marketing/seo/technical-seo.png",
  },
  {
    title: "Local SEO",
    desc: "Dominate Search Results in Your Area Boost local visibility with Google My Business optimization, geo-targeted strategies, and citation management.",
    img: "/images/services/digital-marketing/seo/local-seo.png",
  },
  {
    title: "E-commerce SEO ",
    desc: "Maximize Sales & Visibility for Online Stores Optimize product pages, structured data, and conversion rate strategies for online store success.",
    img: "/images/services/digital-marketing/seo/e-commerce.png",
  },
  {
    title: "SEO Content Strategy",
    desc: "Rank with High-Value Content Create SEO-friendly blogs, pillar content, and keyword-driven copy that engage and convert.",
    img: "/images/services/digital-marketing/seo/seo-content-strategy.png",
  },
];

export default function OurSeoServices() {
  return (
    <div className="w-full bg-white">
      <section className="py-16 px-4 max-w-7xl mx-auto text-center">
        <h4 className="text-sm text-gray-500 uppercase tracking-wide font-poppins">
          SEO
        </h4>
        <h2 className="text-3xl font-bold text-gray-900 mb-10 font-poppins">
          Our SEO Services
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
