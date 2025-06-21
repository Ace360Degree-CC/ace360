"use client";

import Image from "next/image";

const services = [
  {
    title: "Brand Positioning",
    desc: "Define Your Competitive Edge We craft a unique market positioning strategy that highlights your strengths and differentiates you from competitors.",
    img: "/images/services/branding/brand-strategy/brand-positioning.png",
  },
  {
    title: "Brand Identity Development",
    desc: "Craft a Memorable Presence We design a cohesive brand identity, including voice, tone, and visual elements, to create lasting recognition.",
    img: "/images/services/branding/brand-strategy/brand-identity.png",
  },
  {
    title: "Target Audience Analysis",
    desc: "Understand & Connect with Customers Through deep market research, we identify your ideal audience and develop strategies to engage them effectively.",
    img: "/images/services/branding/brand-strategy/target-audience.png",
  },
  {
    title: "Messaging & Storytelling",
    desc: "Communicate Your Brand's Purpose We craft compelling brand stories and messaging that resonate emotionally and build a loyal following.",
    img: "/images/services/branding/brand-strategy/messaging-storytelling.png",
  },
  {
    title: "Competitive Analysis",
    desc: "Gain Market Insights We analyze competitors’ strengths and weaknesses to position your brand for maximum impact and visibility.",
    img: "/images/services/branding/brand-strategy/copetitive-analysis.png",
  },
  {
    title: "Rebranding Strategy",
    desc: "Refresh & Revitalize Your Brand If your brand needs a new direction, we develop strategies to modernize your identity and enhance relevance.",
    img: "/images/services/branding/brand-strategy/rebranding-strategy.png",
  },
];

export default function BrandStrategyService() {
  return (
    <div className="w-full bg-white">
      <section className="py-16 px-4 max-w-7xl mx-auto text-center">
        <h4 className="text-xl text-gray-500 uppercase tracking-wide font-poppin border-b-[2px] inline pb-1 border-[var(--theme-primary)]">
          Brand Strategy
        </h4>
        <h2 className="text-3xl font-bold text-gray-900 mb-10 font-poppins py-3">
          Our Brand Strategy Services
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
