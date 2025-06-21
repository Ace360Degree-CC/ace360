"use client";

import Image from "next/image";

const services = [
  {
    title: "Reputation Monitoring",
    desc: "Stay Ahead of Public Perception Track brand mentions, online reviews, and social media sentiment in real time.",
    img: "/images/services/digital-marketing/orm/reputational-monitoring.png",
  },
  {
    title: "Review Management",
    desc: " Build & Maintain a Positive Image Encourage positive customer reviews and manage negative feedback effectively.",
    img: "/images/services/digital-marketing/orm/review-management.png",
  },
  {
    title: "Crisis Management",
    desc: "Swift Damage Control Mitigate PR crises with expert response strategies and content suppression techniques.",
    img: "/images/services/digital-marketing/orm/crisis-management.png",
  },
  {
    title: "Search Engine Reputation",
    desc: "Control What People See Optimize search engine results by pushing down negative content & highlighting positives.",
    img: "/images/services/digital-marketing/orm/search-engine-reputation.png",
  },
  {
    title: "Social Media Takeovers ",
    desc: "Create Buzz Allow influencers to take over your brand’s social media for a day, increasing engagement and authenticity.",
    img: "/images/services/digital-marketing/orm/social-media-takeover.png",
  },
  {
    title: "Social Media Reputation",
    desc: "Strengthen Your Brand’s Voice Manage conversations, remove harmful content, and promote positive engagement.",
    img: "/images/services/digital-marketing/orm/social-media-reputation.png",
  },
];

export default function OurORMServices() {
  return (
    <div className="w-full bg-white">
      <section className="py-16 px-4 max-w-7xl mx-auto text-center">
        <h4 className="text-sm text-gray-500 uppercase tracking-wide font-poppins">
          Online Reputation Management
        </h4>
        <h2 className="text-3xl font-bold text-gray-900 mb-10 font-poppins">
          Our Online Reputation Management Services
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
