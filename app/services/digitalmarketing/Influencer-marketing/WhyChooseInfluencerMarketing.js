import Image from "next/image";

const features = [
  {
    title: "Extensive Influencer Network",
    description: "Access top creators across multiple platforms.",
    image:
      "/images/services/digital-marketing/Influencer-marketing/extensive-influencer.png",
  },
  {
    title: "Data-Driven Campaigns",
    description: "We track performance to ensure maximum ROI..",
    image:
      "/images/services/digital-marketing/Influencer-marketing/data-driven-campaign.png",
  },
  {
    title: "Authentic Brand Storytelling",
    description: "Influencer content that resonates with audiences.",
    image: "/images/services/digital-marketing/Influencer-marketing/brand.png",
  },
  {
    title: "Full Campaign Management",
    description: "From influencer selection to performance reporting.",
    image:
      "/images/services/digital-marketing/Influencer-marketing/full-campaign-mangement.png",
  },
];

export default function WhyChooseInfluencerMarketing() {
  return (
    <div className="bg-white text-[var(--theme-text)] py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-10">
          Why Choose Ace360degree for Influencer Marketing?
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
