"use client";

import Image from "next/image";

const services = [
  {
    title: "Social Media Strategy & Planning",
    desc: " Set the Right Foundation We create customized social media strategies based on your business goals, audience insights, and competitive analysis.",
    img: "/images/services/digital-marketing/smm/social-media-strategy-planning.png",
  },
  {
    title: "Profile Optimization",
    desc: "Make Your Brand Stand Out We optimize your social media profiles with compelling bios, high-quality visuals, and keyword-rich descriptions for maximum reach.",
    img: "/images/services/digital-marketing/smm/profile-optimization.png",
  },
  {
    title: "Content Creation & Management",
    desc: "Engage Your Audience From captivating posts and videos to interactive stories and reels, we create content that resonates with your audience and boosts engagement.",
    img: "/images/services/digital-marketing/smm/content-creation.png",
  },
  {
    title: "Community Engagement",
    desc: "Build a Loyal Following We help brands connect with their audience through active engagement, prompt responses, and strategic conversations.",
    img: "/images/services/digital-marketing/smm/community-engagement.png",
  },
  {
    title: "Social Media Advertising ",
    desc: "Maximize Your Reach We design and manage high-converting ad campaigns on Facebook, Instagram, LinkedIn, and more to drive targeted leads and sales.",
    img: "/images/services/digital-marketing/smm/social-media-advertising.png",
  },
  {
    title: "Performance Tracking & Analytics",
    desc: "Measure Your Success We provide detailed insights and reports on campaign performance, engagement rates, and audience growth to continuously optimize strategies.",
    img: "/images/services/digital-marketing/smm/performance-analatics.png",
  },
];

export default function OurSMMServices() {
  return (
    <div className="w-full bg-white">
      <section className="py-16 px-4 max-w-7xl mx-auto text-center">
        <h4 className="text-sm text-gray-500 uppercase tracking-wide font-poppins">
          Social Media Marketing
        </h4>
        <h2 className="text-3xl font-bold text-gray-900 mb-10 font-poppins">
          Our Social Media Optimization Services
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
