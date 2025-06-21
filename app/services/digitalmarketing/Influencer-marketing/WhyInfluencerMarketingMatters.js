import Image from "next/image";
const marketingImage =
  "/images/services/digital-marketing/Influencer-marketing/why-influence-marketting-matters.png";

export default function WhyInfluencerMarketingMatters() {
  return (
    <section className="px-6 py-12 md:px-16 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
        Why Influencer Marketing Matters?
      </h2>

      <ul className="text-black">
        <li>
          92% of consumers trust influencer recommendations over traditional ads
          – Are you leveraging this power?
        </li>
        <li>
          Influencer-driven campaigns deliver 11x higher ROI than other digital
          marketing tactics – Are you maximizing your reach?
        </li>
        <li>
          Brands see up to a 30% increase in conversions through influence
          partnerships – Is your brand tapping into this potential?
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
        With a strategic influencer marketing approach, you can:
      </h3>

      <div className="space-y-4 max-w-xl  mx-auto">
        <div className="bg-[#F2A300]  text-black font-medium py-3 px-6 rounded-md text-left">
          Build trust and credibility with authentic endorsements.
        </div>
        <div className="bg-[#F2A300] text-black font-medium py-3 px-6 rounded-md text-left">
          Expand brand awareness and reach highly targeted audiences.
        </div>
        <div className="bg-[#F2A300] text-black font-medium py-3 px-6 rounded-md text-left">
          Drive higher engagement and conversions with personalized influencer
          content.
        </div>
      </div>
    </section>
  );
}
