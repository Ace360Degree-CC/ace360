"use client";

import Image from "next/image";

const services = [
  {
    title: "Enterprise Software Solutions",
    desc: "Automate & Scale Developing ERP, CRM, and workflow automation tools to streamline business operations.",
    img: "/images/services/technology/custom-sd/enterprise-sol.png",
  },
  {
    title: "SaaS Application Development",
    desc: "Cloud-Powered & Scalable Building secure, cloud-based Software-as-a-Service (SaaS) applications to serve global users.",
    img: "/images/services/technology/custom-sd/saas.png",
  },
  {
    title: "AI & Data-Driven Solutions",
    desc: "Smarter Decision-Making Integrating AI, machine learning, and big data analytics for intelligent automation.",
    img: "/images/services/technology/custom-sd/ai-data-driven.png",
  },
  {
    title: "Custom Web & Mobile Applications",
    desc: "Designed for Performance Building bespoke web and mobile apps tailored to your business needs.",
    img: "/images/services/technology/custom-sd/custom-web.png",
  },
  {
    title: "API & System Integrations",
    desc: "Seamless Connectivity Developing custom APIs and integrating third-party tools to enhance system functionality.",
    img: "/images/services/technology/custom-sd/api.png",
  },
  {
    title: "Software Maintenance & Upgrades",
    desc: "Keep Your Systems Running Smoothly Providing continuous monitoring, bug fixes, and security updates.",
    img: "/images/services/technology/custom-sd/software-maintance.png",
  },
];

export default function OurCustomServices() {
  return (
    <div className="w-full bg-white">
      <section className="py-16 px-4 max-w-7xl mx-auto text-center">
        <h4 className="text-sm text-gray-500 uppercase tracking-wide font-poppins">
          Custom Software development
        </h4>
        <h2 className="text-3xl font-bold text-gray-900 mb-10 font-poppins">
          Our Custom Software Development Services
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
