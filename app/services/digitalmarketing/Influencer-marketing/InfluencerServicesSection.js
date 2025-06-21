"use client";

import Image from "next/image";

const services = [
  {
    title: "Influencer Discovery & Selection",
    desc: " Find the Right Voices We identify the best influencers based on your brand goals, audience demographics, and engagement metrics.",
    img: "/images/services/digital-marketing/influencer-marketing/discovery&Selection.png",
  },
  {
    title: "Campaign Strategy & Planning",
    desc: "Maximize Impact From concept to execution, we create custom influencer campaigns that align with your brand messaging and objectives.",
    img: "/images/services/digital-marketing/influencer-marketing/campaign-strategy.png",
  },
  {
    title: "Sponsored Content & Collaborations",
    desc: "Boost Engagement We craft sponsored posts, product placements, and brand collaborations that feel natural and drive audience interaction.",
    img: "/images/services/digital-marketing/influencer-marketing/sponserd-content&collaborator.png",
  },
  {
    title: "Product Reviews & Unboxings",
    desc: "Build Social Proof Influencers showcase your products through honest reviews, tutorials, and unboxing videos to increase consumer confidence.",
    img: "/images/services/digital-marketing/influencer-marketing/product-review-unboxing.png",
  },
  {
    title: "Social Media Takeovers ",
    desc: "Create Buzz Allow influencers to take over your brand’s social media for a day, increasing engagement and authenticity.",
    img: "/images/services/digital-marketing/influencer-marketing/sm-take-over.png",
  },
  {
    title: "Performance Tracking & Analytics",
    desc: "Measure Success We provide detailed reports on influencer reach, engagement, and ROI to optimize future campaigns.",
    img: "/images/services/digital-marketing/influencer-marketing/performance-tracking.png",
  },
];
export default function InfluencerServicesSection() {
  return (
    <div className="w-full bg-white">
      <section className="py-16 px-4 max-w-7xl mx-auto text-center">
        <h4 className="text-sm text-gray-500 uppercase tracking-wide font-poppins">
          Influencer Marketing
        </h4>
        <h2 className="text-3xl font-bold text-gray-900 mb-10 font-poppins">
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
