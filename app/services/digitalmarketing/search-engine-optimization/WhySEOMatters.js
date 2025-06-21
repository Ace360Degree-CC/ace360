import Image from "next/image";
const SeoImage = "/images/services/digital-marketing/seo/why-seo-matters.png";

export default function WhySEOMatters() {
  return (
    <section className="px-6 py-12 md:px-16 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
        Why SEO Matters?
      </h2>

      <ul className="text-black">
        <li>
          75% of users never scroll past the first page of Google – Is your
          business visible?
        </li>
        <li>
          SEO drives 1000%+ more traffic than organic social media – Are you
          maximizing your reach?
        </li>
        <li>
          Higher rankings = More leads & conversions – How much traffic are you
          missing out on?
        </li>
      </ul>

      <div className="flex justify-center mb-10 py-10">
        <Image
          src={SeoImage}
          alt="Performance Marketing Illustration"
          width={400}
          height={300}
          className="rounded-md"
        />
      </div>

      <h3 className="text-xl md:text-2xl font-semibold mb-6 text-black">
        With the right SEO strategy, you can:
      </h3>

      <div className="space-y-4 max-w-xl mx-auto">
        <div className="bg-[#F2A300] text-black font-medium py-3 px-6 rounded-md text-left">
          Increase website traffic through top search rankings.
        </div>
        <div className="bg-[#F2A300] text-black font-medium py-3 px-6 rounded-md text-left">
          Generate high-quality leads without expensive ad spend.
        </div>
        <div className="bg-[#F2A300] text-black font-medium py-3 px-6 rounded-md text-left">
          Build brand credibility & authority in your industry.
        </div>
      </div>
    </section>
  );
}
