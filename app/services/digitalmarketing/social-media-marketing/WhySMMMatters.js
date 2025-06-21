import Image from "next/image";
const SMMImage =
  "/images/services/digital-marketing/smm/why-social-media-marketing-matters.png";

export default function WhySMMMatters() {
  return (
    <section className="px-6 py-12 md:px-16 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
        Why Social Media Marketing Matters?
      </h2>

      <ul className="text-black">
        <li>
          4.9 billion people use social media worldwide – Is your brand reaching
          them?
        </li>
        <li>
          70% of consumers trust brands with an active social presence – Are you
          engaging with your audience?
        </li>
        <li>
          Social media generates 2x higher conversion rates – Are you maximizing
          your potential?
        </li>
      </ul>

      <div className="flex justify-center mb-10 py-10">
        <Image
          src={SMMImage}
          alt="Performance Marketing Illustration"
          width={400}
          height={300}
          className="rounded-md"
        />
      </div>

      <h3 className="text-xl md:text-2xl font-semibold mb-6 text-black">
        With a strong social media strategy, you can:
      </h3>

      <div className="space-y-4 max-w-xl mx-auto">
        <div className="bg-[#F2A300] text-black font-medium py-3 px-6 rounded-md text-left">
          Increase brand visibility and reach your target audience.
        </div>
        <div className="bg-[#F2A300] text-black font-medium py-3 px-6 rounded-md text-left">
          Boost engagement and drive traffic to your website.
        </div>
        <div className="bg-[#F2A300] text-black font-medium py-3 px-6 rounded-md text-left">
          Convert followers into loyal customers with powerful storytelling.
        </div>
      </div>
    </section>
  );
}
