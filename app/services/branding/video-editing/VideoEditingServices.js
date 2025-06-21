"use client";

import Image from "next/image";

const services = [
  {
    title: "Corporate & Branding Videos",
    desc: "Build a Stronger Brand Identity Polished, professional videos that showcase your brand, values, and vision.",
    img: "/images/services/branding/video-editing/co-operate-tech.png",
  },
  {
    title: "Social Media Video Editing",
    desc: "Grab Attention & Go Viral Short, high-impact videos optimized for Instagram, Facebook, LinkedIn.",
    img: "/images/services/branding/video-editing/sm-video-editing.png",
  },
  {
    title: " Product Demo & Explainer Videos",
    desc: "Educate & Convert Engaging product presentations, tutorials, and explainer videos that increase conversions.",
    img: "/images/services/branding/video-editing/product-demo-videos.png",
  },
  {
    title: "Motion Graphics & Visual Effects",
    desc: "Make Your Videos Stand Out Custom text animations, transitions, and special effects for dynamic storytelling",
    img: "/images/services/branding/video-editing/motion-graphics-video.png",
  },
  {
    title: "Event & Testimonial Videos",
    desc: "Showcase Real Experiences Professionally edited event highlights, customer testimonials, and behind-the-scenes content.",
    img: "/images/services/branding/video-editing/event-testimonial-video.png",
  },
  {
    title: "YouTube & Ad Video Editing",
    desc: "Optimize for Maximum Impact YouTube intros, ad creatives, and marketing videos designed for better retention & engagement.",
    img: "/images/services/branding/video-editing/yt-videos.png",
  },
];

export default function VideoEditingServices() {
  return (
    <div className="w-full bg-white">
      <section className="py-16 px-4 max-w-7xl mx-auto text-center">
        <h4 className="text-xl text-gray-500 uppercase tracking-wide font-poppin border-b-[2px] inline pb-1 border-[var(--theme-primary)]">
          Video Editing
        </h4>
        <h2 className="text-3xl font-bold text-gray-900 mb-10 font-poppins py-3">
          Our Video Editing Services
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
