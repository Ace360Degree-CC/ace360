import Image from "next/image";

const services = [
  {
    title: "PERFORMANCE MARKETING",
    description:
      "Optimize ads seamlessly across channels to generate high-quality leads, drive conversions, and maximize your ROI.",
    link: "#",
    linkText: "Know More: PERFORMANCE MARKETING",
    image: "/images/services/digital-marketing/performace-maketing.png",
  },
  {
    title: "SEARCH ENGINE OPTIMIZATION & MARKETING",
    description:
      "Boost your rankings on search engines organically, with content and technical optimization.",
    link: "#",
    linkText: "Know More: SEO",
    image: "/images/services/digital-marketing/seo.png",
  },
  {
    title: "SOCIAL MEDIA MARKETING",
    description:
      "Leverage social media to increase followers, boost engagement, and build a strong brand presence.",
    link: "#",
    linkText: "Know More: SMM",
    image: "/images/services/digital-marketing/smm.png",
  },
  {
    title: "INFLUENCER MARKETING",
    description:
      "Partner with the right influencers to authentically promote your products and services.",
    link: "#",
    linkText: "Know More: Influencer Marketing",
    image: "/images/services/digital-marketing/infulencer-marketing.png",
  },
  {
    title: "ONLINE REPUTATION MANAGEMENT",
    description:
      "Safeguard your company’s image, remove harmful content, and boost positive reviews and mentions.",
    link: "#",
    linkText: "Know More: ORM",
    image: "/images/services/digital-marketing/online-reputation.png",
  },
  {
    title: "CONTENT WRITING",
    description:
      "Create compelling content for websites, blogs, articles, campaigns, and more.",
    link: "#",
    linkText: "Know More: Content Writing",
    image: "/images/services/digital-marketing/content-writing.png",
  },
];

export default function DigitalMarketing() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-[var(--theme-primary)] mb-2">
          Digital Marketing
        </h2>
        <p className="text-lg text-[var(--theme-text)]  font-medium mb-10">
          Accelerate Your Brand’s Online Growth
        </p>
        <p className="text-gray-600 mb-10">
          Our digital marketing solutions are both performance-driven and
          designed to improve your digital presence and drive conversions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 shadow hover:shadow-lg transition"
            >
              <div className="w-full h-32 relative mb-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a
                href={service.link}
                className="text-[var(--theme-primary)]  hover:underline"
              >
                {service.linkText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
