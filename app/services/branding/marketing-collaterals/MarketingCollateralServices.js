"use client";

import Image from "next/image";

const services = [
  {
    title: "Brochures & Flyers",
    desc: "Inform & Inspire We design stunning brochures and flyers that convey your brand message clearly and persuasively.",
    img: "/images/services/branding/marketing-collateral/brouchers.png",
  },
  {
    title: "Business Cards",
    desc: "Make a Powerful First Impression Custom business card designs that reflect professionalism and brand identity.",
    img: "/images/services/branding/marketing-collateral/business-core.png",
  },
  {
    title: "Presentation Decks",
    desc: "Captivate & Convert Engage audiences with visually appealing, high-impact presentations for business meetings, sales pitches, and events.",
    img: "/images/services/branding/marketing-collateral/presentational-decks.png",
  },
  {
    title: "Corporate Stationery",
    desc: "Build Brand Consistency Complete branding solutions including letterheads, envelopes, and notepads for a cohesive corporate identity.",
    img: "/images/services/branding/marketing-collateral/co-operate-stationary.png",
  },
  {
    title: "Promotional Merchandise",
    desc: "Extend Your Brand Reach Design customized promotional materials, including t-shirts, mugs, and giveaways that boost brand awareness.",
    img: "/images/services/branding/marketing-collateral/promotional-merchandise.png",
  },
  {
    title: "Animated Logos",
    desc: "Bring Your Brand to Life Make your brand stand out with dynamic, animated logos perfect for digital experiences and videos.",
    img: "/images/services/branding/marketing-collateral/animated-logo.png",
  },
];

export default function MarketingCollateralServices() {
  return (
    <div className="w-full bg-white">
      <section className="py-16 px-4 max-w-7xl mx-auto text-center">
        <h4 className="text-xl text-gray-500 uppercase tracking-wide font-poppin border-b-[2px] inline pb-1 border-[var(--theme-primary)]">
          Markeing  Collaterals
        </h4>
        <h2 className="text-3xl font-bold text-gray-900 mb-10 font-poppins py-3">
          Our Marketing Collateral Services
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
