"use client";

import Image from "next/image";

const services = [
  {
    title: "3D Product Modeling",
    desc: "Showcase with Realism We create high-resolution 3D models to bring your products to life.",
    img: "/images/services/branding/three-dimensionol/product.png",
  },
  {
    title: "Architectural Visualization",
    desc: "Bring Spaces to Life Realistic 3D walkthroughs and renders for real estate and interior design.",
    img: "/images/services/branding/three-dimensionol/architectural.png",
  },
  {
    title: "Motion Graphics & Animation",
    desc: "Add a Dynamic Touch Engaging 3D animations, visual effects, and brand storytelling for impactful visuals.",
    img: "/images/services/branding/three-dimensionol/motion-graphic.png",
  },
  {
    title: "Character Animation",
    desc: "Elevate Storytelling Create custom 3D characters and animated sequences for branding, gaming, or education.",
    img: "/images/services/branding/three-dimensionol/character-animation.png",
  },
  {
    title: "Industrial & Mechanical 3D Rendering",
    desc: "Precision & Clarity Transform engineering concepts into detailed 3D representations.",
    img: "/images/services/branding/three-dimensionol/industrial-mechanical.png",
  },
  {
    title: "Animated Logos",
    desc: "Bring Your Brand to Life Make your brand stand out with dynamic, animated logos perfect for digital experiences and videos.",
    img: "/images/services/branding/three-dimensionol/animated-logo.png",
  },
];

export default function ThreeDimensionService() {
  return (
    <div className="w-full bg-white">
      <section className="py-16 px-4 max-w-7xl mx-auto text-center">
        <h4 className="text-xl text-gray-500 uppercase tracking-wide font-poppin border-b-[2px] inline pb-1 border-[var(--theme-primary)]">
          3d Modelling & Animation
        </h4>
        <h2 className="text-3xl font-bold text-gray-900 mb-10 font-poppins py-3">
          Our 3D Modeling & Animation Services
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
