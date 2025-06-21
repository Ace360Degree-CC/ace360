"use client";

import Image from "next/image";

const services = [
  {
    title: "Custom Squarespace Website Design",
    desc: "Unique & Engaging We craft tailor-made, aesthetically pleasing websites to match your brand identity.",
    img: "/images/services/technology/squarespace/custom-square-space.png",
  },
  {
    title: "Squarespace Ecommerce Development",
    desc: "Stand Out from Competitors We customize OpenCart themes to enhance branding, user experience & functionality.",
    img: "/images/services/technology/squarespace/e-commerce.png",
  },
  {
    title: "SEO Optimization",
    desc: "Rank Higher, Get More Traffic We optimize content, site structure & meta tags to boost search engine rankings.",
    img: "/images/services/technology/squarespace/seo.png",
  },
  {
    title: "Mobile Optimization",
    desc: "Seamless Experience on All Devices We ensure full responsiveness & fast loading times for mobile users.",
    img: "/images/services/technology/squarespace/mobile-optimization.png",
  },
  {
    title: "Content Migration & Website Redesign",
    desc: "Upgrade with Ease We help businesses seamlessly migrate to Squarespace or refresh existing websites.",
    img: "/images/services/technology/squarespace/content-migration.png",
  },
  {
    title: "Ongoing Support & Maintenance",
    desc: "Keep Your Site Running Smoothly We provide regular updates, security enhancements, and troubleshooting.",
    img: "/images/services/technology/squarespace/ongoing-support.png",
  },
];

export default function SquarespaceServices() {
  return (
    <div className="w-full bg-white">
      <section className="py-16 px-4 max-w-7xl mx-auto text-center">
        <h4 className="text-sm text-gray-500 uppercase tracking-wide font-poppins">
          Squarespace Website
        </h4>
        <h2 className="text-3xl font-bold text-gray-900 mb-10 font-poppins">
          Our Squarespace Website Development Services
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
