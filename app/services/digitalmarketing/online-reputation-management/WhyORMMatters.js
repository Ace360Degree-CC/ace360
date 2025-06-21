import Image from "next/image";
const ORMImage = "/images/services/digital-marketing/orm/orm-matters.png";

export default function WhyORMMatters() {
  return (
    <section className="px-6 py-12 md:px-16 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
        Why Online Reputation Management Matters?
      </h2>

      <ul className="text-black">
        <li>
          90% of consumers read online reviews before making a purchase – Is
          your brand making the right impression?
        </li>
        <li>
          A single negative review can drive away 22% of potential customers –
          Are you managing your online reputation effectively?
        </li>
        <li>
          Proactive reputation management improves trust & credibility – Is your
          business positioned as an industry leader?
        </li>
      </ul>

      <div className="flex justify-center mb-10">
        <Image
          src={ORMImage}
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
          ✔ Improve brand trust by monitoring & responding to online feedback.
        </div>
        <div className="bg-[#F2A300] text-black font-medium py-3 px-6 rounded-md text-left">
          ✔ Suppress negative content and promote positive brand stories.
        </div>
        <div className="bg-[#F2A300] text-black font-medium py-3 px-6 rounded-md text-left">
          ✔ Strengthen credibility across search engines, review sites & social
          media.
        </div>
      </div>
    </section>
  );
}
