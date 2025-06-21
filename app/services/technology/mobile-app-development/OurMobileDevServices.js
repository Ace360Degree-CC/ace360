"use client";

import Image from "next/image";

const services = [
  {
    title: "Native App Development",
    desc: "Optimized for iOS & Android We build high-performance native apps using Swift (iOS) & Kotlin (Android) for superior user experience.",
    img: "/images/services/technology/mobile/native-app.png",
  },
  {
    title: "Hybrid & Cross-Platform Apps",
    desc: "Reach More Users Develop cost-effective, multi-platform apps using Flutter, React Native, and Xamarin.",
    img: "/images/services/technology/mobile/hybrid-cross-platform-app.png",
  },
  {
    title: "UI/UX App Design",
    desc: "Enhance User Experience Intuitive, user-friendly designs that increase engagement and retention.",
    img: "/images/services/technology/mobile/ui-ux.png",
  },
  {
    title: "Ecommerce & Business Apps",
    desc: "Drive Sales & Productivity From shopping apps to enterprise solutions, we develop custom mobile applications for every industry.",
    img: "/images/services/technology/mobile/e-commerce-app.png",
  },
  {
    title: "App Maintenance & Support",
    desc: "Keep Your App Running Smoothly We provide ongoing updates, security patches, and performance optimization.",
    img: "/images/services/technology/mobile/app-maintenance.png",
  },
  {
    title: "Custom-Built Solutions",
    desc: "Keep Your Site Running Smoothly Ongoing updates, security patches, and performance optimization for peak functionality.",
    img: "/images/services/technology/mobile/custom-build-sol.png",
  },
];

export default function OurMobileDevServices() {
  return (
    <div className="w-full bg-white">
      <section className="py-16 px-4 max-w-7xl mx-auto text-center">
        <h4 className="text-sm text-gray-500 uppercase tracking-wide font-poppins">
          Mobile App Development
        </h4>
        <h2 className="text-3xl font-bold text-gray-900 mb-10 font-poppins">
          Our Mobile App Development Services
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
