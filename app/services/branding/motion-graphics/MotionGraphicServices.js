"use client";

import Image from "next/image";

const services = [
  {
    title: "Logo Animations",
    desc: "Unique & Memorable We design distinctive and versatile logos that align with your brand personality and market positioning.",
    img: "/images/services/branding/motion-graphic/logo-animation.png",
  },
  {
    title: "Explainer Videos",
    desc: "Simplify & Educate Engaging animated videos that break down complex concepts into easy-to-understand visuals.",
    img: "/images/services/branding/motion-graphic/explainer-videos.png",
  },
  {
    title: "Social Media Animations",
    desc: "Boost Engagement Eye-catching GIFs, animated posts, and video snippets designed for social platforms.",
    img: "/images/services/branding/motion-graphic/social-media-animation.png",
  },
  {
    title: "Title Sequences & Lower Thirds",
    desc: "Add a Professional Edge Sleek animated text overlays and transitions to elevate your video content.",
    img: "/images/services/branding/motion-graphic/title-sequence.png",
  },
  {
    title: "Infographic Animation",
    desc: "Bring Data to Life Convert static data into engaging, animated infographics that make information digestible and impactful.",
    img: "/images/services/branding/motion-graphic/infographic-animation.png",
  },
  {
    title: "Promotional & Ad Motion Graphics",
    desc: "Convert More Customers Dynamic motion graphics for ads, promos, and brand storytelling to dmotion-graphic",
    img: "/images/services/branding/motion-graphic/promotional-ad-motion.png",
  },
];

export default function MotionGraphicServices() {
  return (
    <div className="w-full bg-white">
      <section className="py-16 px-4 max-w-7xl mx-auto text-center">
        <h4 className="text-xl text-gray-500 uppercase tracking-wide font-poppin border-b-[2px] inline pb-1 border-[var(--theme-primary)]">
          Motion Graphic
        </h4>
        <h2 className="text-3xl font-bold text-gray-900 mb-10 font-poppins py-3">
          Our Motion Graphics Services
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
