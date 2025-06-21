import Image from "next/image";
const marketingImage =
  "/images/services/digital-marketing/performance-marketing/why-performance-marketing-matters.png";

export default function WhyPerformanceMarketingMatters() {
  return (
    <section className="px-6 py-12 md:px-16 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
        Why Performance Marketing Matters?
      </h2>

      <ul className="text-black">
        <li>
          75% of businesses see a 2x ROI from data-driven ad campaigns – Are you
          maximizing yours?
        </li>
        <li>
          Performance marketing generates 50% more conversions than traditional
          ads – Is your business leveraging it?
        </li>
        <li>
          AI-powered ad targeting improves lead quality by 3X – Are you reaching
          the right audience?
        </li>
      </ul>

      <div className="flex justify-center mb-10">
        <Image
          src={marketingImage}
          alt="Performance Marketing Illustration"
          width={400}
          height={300}
          className="rounded-md"
        />
      </div>

      <h3 className="text-xl md:text-2xl font-semibold mb-6 text-black">
        With a strategic performance marketing approach, you can:
      </h3>

      <div className="space-y-4 max-w-xl mx-auto">
        <div className="bg-[#F2A300] text-white font-medium py-3 px-6 rounded-md text-left">
          Lower acquisition costs while increasing conversions.
        </div>
        <div className="bg-[#F2A300] text-white font-medium py-3 px-6 rounded-md text-left">
          Optimize ad spend with real-time analytics and tracking.
        </div>
        <div className="bg-[#F2A300] text-white font-medium py-3 px-6 rounded-md text-left">
          Scale your business faster with high-performing campaigns.
        </div>
      </div>
    </section>
  );
}
