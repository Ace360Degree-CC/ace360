import Image from "next/image";

const services = [
  {
    title: "Google Ads",
    description:
      "Reach your ideal audience on the world’s largest search engine. We build, optimize, and scale campaigns that drive results.",
    image:
      "/images/services/digital-marketing/performance-marketing/google.jpg",
  },
  {
    title: "Meta (Facebook & Instagram) Ads",
    description:
      "Our Meta campaigns are tailored to increase engagement and conversions with hyper-targeted audiences across Facebook and Instagram.",
    image: "/images/services/digital-marketing/performance-marketing/meta.jpg",
  },
  {
    title: "LinkedIn Ads",
    description:
      "We help B2B brands grow by reaching decision-makers on LinkedIn with content-rich, targeted campaigns.",
    image:
      "/images/services/digital-marketing/performance-marketing/linkedin.jpg",
  },
  {
    title: "Retargeting & Remarketing",
    description:
      "Maximize ROI by re-engaging users who’ve interacted with your brand using powerful retargeting across social & web.",
    image:
      "/images/services/digital-marketing/performance-marketing/retargeting.jpg",
  },
  {
    title: "Conversion Rate Optimization",
    description:
      "Our landing page & funnel optimizations help reduce friction and boost the percentage of traffic that converts into leads & sales.",
    image:
      "/images/services/digital-marketing/performance-marketing/conversion.jpg",
  },
  {
    title: "Performance Analytics & Reporting",
    description:
      "We provide clear insights & dashboards to monitor KPIs, ROI, and audience behavior in real time.",
    image:
      "/images/services/digital-marketing/performance-marketing/analytics.jpg",
  },
];

export default function PerformanceServicesSection() {
  return (
    <section
      className="bg-white py-16 px-4 md:px-20"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--theme-text)",
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h4
          className="text-sm font-semibold mb-2"
          style={{ color: "var(--theme-grey)" }}
        >
          Performance Marketing
        </h4>
        <h2
          className="text-3xl md:text-4xl font-bold mb-10"
          style={{ color: "var(--theme-heading)" }}
        >
          Our Performance Marketing Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded overflow-hidden"
            >
              <div className="h-48 relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="bg-[var(--theme-primary)] p-4 text-white">
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
