import Image from "next/image";
const ContentWritingImage =
  "/images/services/digital-marketing/content-writing/lady-with-laptop.png";

export default function WhyContentWritingMatters() {
  return (
    <section className="px-6 py-12 md:px-16 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
        Why Content Writing Matters?
      </h2>

      <ul className="text-black">
        <li>
          SEO-optimized content increases website traffic by 200% – Are you
          ranking for the right keywords?
        </li>
        <li>
          Businesses that blog generate 67% more leads monthly – Is your brand
          leveraging content marketing?
        </li>
        <li>
          Compelling copy improves conversions by up to 80% – Are your words
          driving action?
        </li>
      </ul>

      <div className="flex justify-center mb-10">
        <Image
          src={ContentWritingImage}
          alt="Performance Marketing Illustration"
          width={600}
          height={600}
          className="rounded-md"
        />
      </div>

      <h3 className="text-xl md:text-2xl font-semibold mb-6 text-black">
        With strategic ORM, you can:
      </h3>

      <div className="space-y-4 max-w-xl  mx-auto">
        <div className="bg-[#F2A300]  text-black font-medium py-3 px-6 rounded-md text-left">
          ✔ Improve search rankings with keyword-rich, high-quality articles.
        </div>
        <div className="bg-[#F2A300] text-black font-medium py-3 px-6 rounded-md text-left">
          ✔ Build brand authority through thought leadership and informative
          content.
        </div>
        <div className="bg-[#F2A300] text-black font-medium py-3 px-6 rounded-md text-left">
          ✔ Engage and convert your audience with persuasive storytelling.
        </div>
      </div>
    </section>
  );
}
