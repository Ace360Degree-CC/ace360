import Image from "next/image";

const services = [
  {
    title: "WEBSITE DESIGN & DEVELOPMENT",
    description:
      "Build modern, responsive, and high-performing websites that enhance user experience and business growth.",
    link: "services/technology/website-development",
    linkText: "Know More: WDD",
    image: "/images/services/technology/web-development.png",
  },
  {
    title: "MOBILE APP DEVELOPMENT",
    description:
      "Boost your rankings on search engines organically, with content and technical optimization.",
    link: "/services/technology/mobile-app-development",
    linkText: "Know More: Mobile App Development",
    image: "/images/services/technology/mobile-app-development.png",
  },
  {
    title: "CUSTOM SOFTWARE DEVELOPMENT",
    description:
      "Leverage social media to increase followers, boost engagement, and build a strong brand presence.",
    link: "/services/technology/custom-software-development",
    linkText: "Know More: CSD",
    image: "/images/services/technology/custom-software-development.png",
  },
  {
    title: "ECOMMERCE WEBSITE DEVELOPMENT",
    description:
      "Partner with the right influencers to authentically promote your products and services.",
    link: "/services/technology/e-commerce-web-development",
    linkText: "Know More: EWD",
    image: "/images/services/technology/e-commerce-website-development.png",
  },
  {
    title: "PORTAL DEVELOPMENT / MARKETPLACE",
    description:
      "Safeguard your company’s image, remove harmful content, and boost positive reviews and mentions.",
    link: "services/technology/portal-development",
    linkText: "Know More: Portal Development / Marketplace",
    image: "/images/services/technology/portal-development.png",
  },
  {
    title: "WORDPRESS WEBSITE",
    description:
      "Create compelling content for websites, blogs, articles, campaigns, and more.",
    link: "services/technology/wordpress",
    linkText: "Know More: WordPress Website",
    image: "/images/services/technology/wordpress.png",
  },
  {
    title: "SHOPIFY WEBSITE DEVELOPMENT",
    description:
      "Build high-converting Shopify stores with optimized design and seamless user experiences.",
    link: "services/technology/shopify",
    linkText: "Know More: SWD",
    image: "/images/services/technology/shopify.png",
  },
  {
    title: "OPENCART WEBSITE DEVELOPMENT",
    description:
      "Develop feature-rich, customizable eCommerce websites with OpenCart for scalable online businesses.",
    link: "services/technology/opencart",
    linkText: "Know More: OWD",
    image: "/images/services/technology/open-carft.png",
  },
  {
    title: "SQUARESPACE WEBSITE DEVELOPMENT",
    description:
      "Design stunning, user-friendly Squarespace websites that captivate and convert visitors.",
    link: "services/technology/squarespace",
    linkText: "Know More: SWD",
    image: "/images/services/technology/square-space.png",
  },
];

export default function Technology() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-[var(--theme-primary)] mb-2">
          Technology
        </h2>
        <p className="text-lg text-[var(--theme-text)]  font-medium mb-10">
          Transform Your Digital Presence with Cutting-Edge Solutions
        </p>
        <p className="text-gray-600 mb-10">
          At Ace360degree, we leverage technology to create high-performing,
          scalable, and user-friendly digital experiences. From custom websites
          and mobile apps to eCommerce solutions and business portals, we build
          innovative platforms designed for growth and efficiency. Our expertise
          in leading web development platforms ensures a seamless, future-ready
          digital presence.
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
                className="text-[var(--theme-primary)] hover:underline"
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
