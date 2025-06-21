"use client";

import Image from "next/image";

const services = [
  {
    title: "Branding & Visual Identity",
    desc: "Strengthen Your Brand Presence We design logos, color palettes, typography, and brand guidelines to ensure a consistent brand image.",
    img: "/images/services/branding/graphic-designing/branding-visiual.png",
  },
  {
    title: "Social Media Graphics",
    desc: "Captivate & Engage Custom social media posts, banners, and ad creatives designed to stand out and drive engagement.",
    img: "/images/services/branding/graphic-designing/social-media-graphic.png",
  },
  {
    title: "Marketing & Print Collaterals",
    desc: "Make a Lasting Impression High-quality brochures, flyers, business cards, and catalogs tailored to your marketing needs.",
    img: "/images/services/branding/graphic-designing/marketing-printing.png",
  },
  {
    title: "Website & UI Graphics",
    desc: "Enhance User Experience Visually appealing website banners, landing page designs, and UI elements for seamless user experience.",
    img: "/images/services/branding/graphic-designing/website-ui-graphic.png",
  },
  {
    title: "Motion Graphics & Infographics",
    desc: "Visual Storytelling at Its Best Dynamic infographics, GIFs, and animated content to simplify complex ideas and enhance engagement.",
    img: "/images/services/branding/graphic-designing/motion-graphic.png",
  },
  {
    title: "Packaging & Product Graphics",
    desc: "Elevate Your Brand’s Shelf Presence Custom product packaging, labels, and promotional materials to boost market appeal.",
    img: "/images/services/branding/graphic-designing/packaging-product-graphgic.png",
  },
];

export default function GraphicDesignService() {
  return (
    <div className="w-full bg-white">
      <section className="py-16 px-4 max-w-7xl mx-auto text-center">
        <h4 className="text-xl text-gray-500 uppercase tracking-wide font-poppin border-b-[2px] inline pb-1 border-[var(--theme-primary)]">
          Graphic Designing
        </h4>
        <h2 className="text-3xl font-bold text-gray-900 mb-10 font-poppins py-3">
          Our Graphic Design Services
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
