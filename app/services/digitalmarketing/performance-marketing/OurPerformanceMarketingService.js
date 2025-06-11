"use client";

import Image from "next/image";

const services = [
  {
    title: "Google Ads",
    desc: " Dominate Search & Display Networks We create high-converting Google Search, Display, and Shopping Ads to put your business at the top of search results",
    img: "/images/services/digital-marketing/performance-marketing/google-adds.png",
  },
  {
    title: "Meta (Facebook & Instagram) Ads",
    desc: "Engage & Convert Our AI-optimized ad strategies ensure maximum reach, engagement, and lead generation across Facebook & Instagram.",
    img: "/images/services/digital-marketing/performance-marketing/meta.png",
  },
  {
    title: "LinkedIn Ads",
    desc: "B2B Targeting for Maximum ROI We leverage LinkedIn’s professional network to reach decision-makers, drive B2B leads, and boost brand authority.",
    img: "/images/services/digital-marketing/performance-marketing/linked-in-adds.png",
  },
  {
    title: "Retargeting & Remarketing",
    desc: "Convert Lost Visitors We track users who visit your site and retarget them with personalized ads to boost conversion rates.",
    img: "/images/services/digital-marketing/performance-marketing/retargeting-remarketing.png",
  },
  {
    title: "Conversion Rate Optimization ",
    desc: "Turn Clicks into Customers Our landing page and funnel optimization techniques ensure higher conversion rates and improved ad performance.",
    img: "/images/services/digital-marketing/performance-marketing/conversation-rate-optimization.png",
  },
  {
    title: "Performance Analytics & Reporting",
    desc: "Data-Driven Decisions We provide in-depth reports and real-time insights to continuously optimize your campaigns for better ROI.",
    img: "/images/services/digital-marketing/performance-marketing/performance-rate.png",
  },
];

export default function OurPerformanceMarketingService() {
  return (
    <div className="w-full bg-white">
      <section className="py-16 px-4 max-w-7xl mx-auto text-center">
        <h4 className="text-sm text-gray-500 uppercase tracking-wide font-poppins">
          Logo Designing
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
