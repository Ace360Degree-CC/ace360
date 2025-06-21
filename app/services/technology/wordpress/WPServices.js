"use client";

import Image from "next/image";

const services = [
  {
    title: "Custom WordPress Website",
    desc: "Tailored for Your Brand We build fully customized WordPress websites with unique designs and functionalities.",
    img: "/images/services/technology/wordpress/custom-wordpress.png",
  },
  {
    title: "SEO-Optimized WordPress Sites",
    desc: "Rank Higher, Get More Traffic We implement on-page SEO, fast loading speeds, and structured content for better rankings.",
    img: "/images/services/technology/wordpress/seo.png",
  },
  {
    title: "WooCommerce Development",
    desc: "Sell Online with WordPress We create high-converting WooCommerce stores for seamless online shopping experiences.",
    img: "/images/services/technology/wordpress/woo-commerce.png",
  },
  {
    title: "WordPress Maintenance & Security",
    desc: "Lead Generation & Listings Build real estate, job, and service marketplaces with advanced search & booking systems.",
    img: "/images/services/technology/wordpress/maintenance-security.png",
  },
  {
    title: "WordPress Theme Customization",
    desc: "Stand Out from the Crowd We modify existing WordPress themes to match your brand’s identity and functionality needs.",
    img: "/images/services/technology/wordpress/wordpress-theme-optimizzation.png",
  },
  {
    title: "Plugin Development & Integrations",
    desc: "Enhance Your Website’s Features We integrate custom plugins, third-party APIs, and automation tools for added functionality.",
    img: "/images/services/technology/wordpress/pluginDev.png",
  },
];

export default function WPServices() {
  return (
    <div className="w-full bg-white">
      <section className="py-16 px-4 max-w-7xl mx-auto text-center">
        <h4 className="text-sm text-gray-500 uppercase tracking-wide font-poppins">
          Portal Development / Market Place
        </h4>
        <h2 className="text-3xl font-bold text-gray-900 mb-10 font-poppins">
          Our Portal & Marketplace Development Services
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
