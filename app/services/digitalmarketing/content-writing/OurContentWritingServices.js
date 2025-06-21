"use client";

import Image from "next/image";

const services = [
  {
    title: "SEO Blog Writing",
    desc: "Rank & Drive Organic Traffic Create high-quality, keyword-rich blogs that boost SEO rankings and establish authority.",
    img: "/images/services/digital-marketing/content-writing/blog.png",
  },
  {
    title: "Website Content",
    desc: "Make a Powerful First Impression Engage visitors with compelling homepage, service, and about us pages that convert.",
    img: "/images/services/digital-marketing/content-writing/website-content.png",
  },
  {
    title: "Social Media Content",
    desc: "Captivating Captions & Posts Craft engaging social media posts, reels scripts, and ad copy that spark conversations.",
    img: "/images/services/digital-marketing/content-writing/social-media-content.png",
  },
  {
    title: " Ad Copywriting",
    desc: "Maximize Conversions with Persuasive Ads Create high-converting ad copies for Google Ads, Facebook Ads, and more.",
    img: "/images/services/digital-marketing/content-writing/ad-copy-write.png",
  },
  {
    title: "Product Descriptions ",
    desc: "Create Buzz Allow influencers to take over your brand’s social media for a day, increasing engagement and authenticity.",
    img: "/images/services/digital-marketing/content-writing/product-description.png",
  },
  {
    title: "Email Marketing Content",
    desc: "Strengthen Your Brand’s Voice Manage conversations, remove harmful content, and promote positive engagement.",
    img: "/images/services/digital-marketing/content-writing/email-marketing-content.png",
  },
];

export default function OurContentWritingServices() {
  return (
    <div className="w-full bg-white">
      <section className="py-16 px-4 max-w-7xl mx-auto text-center">
        <h4 className="text-sm text-gray-500 uppercase tracking-wide font-poppins">
          Content Writing
        </h4>
        <h2 className="text-3xl font-bold text-gray-900 mb-10 font-poppins">
          Our Content Writing Services
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
