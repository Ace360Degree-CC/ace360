"use client";

import Image from "next/image";

const services = [
  {
    title: "Custom Packaging Design",
    desc: "Unique & Brand-Aligned We create custom packaging designs that reflect your brand identity and attract your target audience.",
    img: "/images/services/branding/package-designing/custom.png",
  },
  {
    title: "Label & Sticker Design",
    desc: "Elevate Product Branding Professionally designed labels & stickers that add a premium touch to your products.",
    img: "/images/services/branding/package-designing/label-sticker.png",
  },
  {
    title: "Box & Carton Design",
    desc: "Stand Out on Shelves We design innovative, durable, and aesthetically appealing packaging for retail and e-commerce.",
    img: "/images/services/branding/package-designing/box-carton.png",
  },
  {
    title: "Sustainable & Eco-Friendly Packaging",
    desc: "Go Green with Style Design environmentally friendly packaging solutions that meet modern consumer expectations.",
    img: "/images/services/branding/package-designing/sustainable.png",
  },
  {
    title: "Luxury & Premium Packaging",
    desc: "Create an Exclusive Experience Bespoke high-end packaging for luxury brands that demand sophistication and elegance.",
    img: "/images/services/branding/package-designing/luxury-premium.png",
  },
  {
    title: "Prototype & 3D Mockups",
    desc: "Visualize Before Production Get realistic 3D packaging mockups to test and refine before mass production.",
    img: "/images/services/branding/package-designing/prototype.png",
  },
];

export default function PackageService() {
  return (
    <div className="w-full bg-white">
      <section className="py-16 px-4 max-w-7xl mx-auto text-center">
        <h4 className="text-xl text-gray-500 uppercase tracking-wide font-poppin border-b-[2px] inline pb-1 border-[var(--theme-primary)]">
          Packaging  Designing
        </h4>
        <h2 className="text-3xl font-bold text-gray-900 mb-10 font-poppins py-3">
          Our Product Packaging Design Services
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
