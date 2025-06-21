"use client";

import Image from "next/image";

const services = [
  {
    title: "Business & Product Naming",
    desc: "Create a Unique Identity We craft distinctive brand and product names that capture your essence and market positioning.",
    img: "/images/services/branding/brand-naming/product.png",
  },
  {
    title: "Competitive Analysis",
    desc: "Position Your Brand for Success We conduct market research & competitor analysis to ensure your name is unique and strategic.",
    img: "/images/services/branding/brand-naming/competitive.png",
  },
  {
    title: " Trademark Availability & Domain Research",
    desc: "Secure Your Identity We ensure your brand name is legally available and can be registered as a trademark & domain.",
    img: "/images/services/branding/brand-naming/trade-mark.png",
  },
  {
    title: "Name Testing & Validation",
    desc: "Ensure Market Relevance We test names with focus groups and surveys to gauge consumer response and adaptability.",
    img: "/images/services/branding/brand-naming/testing.png",
  },
  {
    title: "Tagline & Slogan Development",
    desc: "Strengthen Your Brand Message We create catchy taglines & slogans that complement your brand identity and positioning.",
    img: "/images/services/branding/brand-naming/tagline.png",
  },
  {
    title: "Rebranding & Renaming",
    desc: "Refresh Your Brand for New Growth Need a change? We help brands reposition with modern, relevant names for better market fit.",
    img: "/images/services/branding/brand-naming/rebranding.png",
  },
];

export default function BrandNamingServive() {
  return (
    <div className="w-full bg-white">
      <section className="py-16 px-4 max-w-7xl mx-auto text-center">
        <h4 className="text-xl text-gray-500 uppercase tracking-wide font-poppin border-b-[2px] inline pb-1 border-[var(--theme-primary)]">
          Brand Naming
        </h4>
        <h2 className="text-3xl font-bold text-gray-900 mb-10 font-poppins py-3">
          Our Brand Naming Services
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
