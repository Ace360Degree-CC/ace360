import Image from "next/image";

const features = [
  {
    title: "Real-Time Monitoring",
    description: "Track, analyze, and improve your online reputation.",
    image: "/images/services/digital-marketing/orm/real-time-monitoring.png",
  },
  {
    title: "Strategic Review Management",
    description: "Encourage positive feedback & minimize risks.",
    image:
      "/images/services/digital-marketing/orm/Strategic-Review-Management.png",
  },
  {
    title: "Crisis Handling Expertise",
    description: "Mitigate negative PR with proven tactics",
    image: "/images/services/digital-marketing/orm/crisis-handeling.png",
  },
  {
    title: "Long-Term Brand Protection",
    description: "Strengthen brand credibility for sustained success.",
    image:
      "/images/services/digital-marketing/orm/long-term-brand-protection.png",
  },
];

export default function WhyChooseORM() {
  return (
    <div className="bg-white text-[var(--theme-text)] py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-10">
          Why Choose Ace360degree for ORM?
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
