import Image from "next/image";

const features = [
  {
    title: "Proven Track Record",
    description: "Successful case studies & industry expertise.",
    image:
      "/images/services/digital-marketing/performance-marketing/ai-add.png",
  },
  {
    title: "Data-Driven Approach",
    description: "No guesswork, just measurable results.",
    image:
      "/images/services/digital-marketing/performance-marketing/data-driven.png",
  },
  {
    title: "Customized SEO Strategies",
    description: "Tailored for your business goals & audience.",
    image:
      "/images/services/digital-marketing/performance-marketing/custom-stratagies.png",
  },
  {
    title: "Ongoing Optimization & Support",
    description: "Continuous improvements & transparent reporting.",
    image:
      "/images/services/digital-marketing/performance-marketing/full-transperancy.png",
  },
];

export default function WhyChooseSMM() {
  return (
    <div className="bg-white text-[var(--theme-text)] py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-10">
          Why Choose Ace360degree for Social Media Management?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-tl-2xl rounded-br-2xl shadow-2xl "
              style={{ backgroundColor: "var(--theme-skin)" }}
            >
              <div className="w-full h-50 relative mb-4">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
