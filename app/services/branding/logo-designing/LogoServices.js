"use client";

import Image from "next/image";

const services = [
  {
    title: "Custom Logo Design",
    desc: "Unique & Memorable We design distinctive and versatile logos that align with your brand personality and market positioning.",
    img: "/images/services/branding/logo-design/designing.png",
  },
  {
    title: "Logo Redesign",
    desc: "Modernize & Elevate Your Brand Refresh your outdated logo with a modern, refined design while maintaining brand continuity.",
    img: "/images/services/branding/logo-design/logo-redesigning.png",
  },
  {
    title: "Brand Identity Logo Pack",
    desc: "Cohesive Branding Solutions Get logo variations, typography, and color palettes to ensure a consistent brand image across platforms.",
    img: "/images/services/branding/logo-design/logo-pack.png",
  },
  {
    title: "Business & Product Logos",
    desc: "Tailored for Your Industry Whether you're launching a startup, eCommerce store, or corporate brand, we create logos that fit your niche.",
    img: "/images/services/branding/logo-design/product-logo.png",
  },
  {
    title: "Typography & Symbol-Based Logos",
    desc: "Style with Substance We craft iconic typography, monogram, and symbol-based logos that deliver a strong visual impact.",
    img: "/images/services/branding/logo-design/typo-graphy.png",
  },
  {
    title: "Animated Logos",
    desc: "Bring Your Brand to Life Make your brand stand out with dynamic, animated logos perfect for digital experiences and videos.",
    img: "/images/services/branding/logo-design/animated-logo.png",
  },
];

export default function LogoServices() {
  return (
    <div className="w-full bg-white">
      <section className="py-16 px-4 max-w-7xl mx-auto text-center">
        <h4 className="text-xl text-gray-500 uppercase tracking-wide font-poppin border-b-[2px] inline pb-1 border-[var(--theme-primary)]">
          Logo Designing
        </h4>
        <h2 className="text-3xl font-bold text-gray-900 mb-10 font-poppins py-3">
          Our Logo Design Services
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
