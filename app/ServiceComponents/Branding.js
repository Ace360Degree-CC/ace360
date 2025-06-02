import Image from "next/image";

const services = [
  {
    title: "Marketing Collaterals",
    description:
      "Design professional brochures, business cards, flyers, and other brand materials to engage your audience.",
    link: "#",
    linkText: "Know More: PERFORMANCE MARKETING",
    image: "/images/services/branding/marketing-collateral.png",
  },
  {
    title: "Brand Strategy",
    description:
      "Define your brand’s mission, values, and messaging with strategic planning to build a strong foundation.",
    link: "#",
    linkText: "Know More: Brand Strategy",
    image: "/images/services/branding/brand-strategy.png",
  },
  {
    title: "BRAND NAMING",
    description:
      "Develop a distinctive, memorable brand name that stands out in the market and aligns with your vision.",
    link: "#",
    linkText: "Know More: BRAND NAMING",
    image: "/images/services/branding/brand-naming.png",
  },
  {
    title: "LOGO DESIGNING",
    description:
      "Create a visually stunning and meaningful logo that represents your business and enhances brand recognition.",
    link: "#",
    linkText: "Know More: LOGO DESIGNING",
    image: "/images/services/branding/logo-designing.png",
  },
  {
    title: "Video Editing",
    description:
      "Elevate your brand with polished, high-quality video content that captures attention and boosts engagement.",
    link: "#",
    linkText: "Know More: Video Editing",
    image: "/images/services/branding/video-editing.png",
  },
  {
    title: "Motion Graphics",
    description:
      "Use dynamic animations and visual storytelling to make your brand stand out and captivate your audience.",
    link: "#",
    linkText: "Know More: Motion Graphics",
    image: "/images/services/branding/motion-graphic.png",
  },
  {
    title: "Package Designing",
    description:
      "Enhance product appeal with eye-catching, custom packaging that strengthens brand identity and attracts customers.",
    link: "#",
    linkText: "Know More: Package Designin",
    image: "/images/services/branding/package-design.png",
  },
  {
    title: "GRAPHICS DESIGNING",
    description:
      "Communicate your brand’s story effectively with compelling and creative visuals tailored to your business.",
    link: "#",
    linkText: "Know More: GRAPHICS DESIGNING",
    image: "/images/services/branding/graphic-design.png",
  },
  {
    title: "3D Modelling & Animation",
    description:
      "Bring concepts to life with immersive 3D visuals, adding depth and innovation to your brand storytelling.",
    link: "#",
    linkText: "Know More: 3D Modelling & Animation",
    image: "/images/services/branding/3d-modal-animation.png",
  },
];

export default function Branding() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-[var(--theme-primary)] mb-2">
          Branding
        </h2>
        <p className="text-lg text-[var(--theme-text)]  font-medium mb-10">
          Craft a Powerful & Memorable Brand Identity
        </p>
        <p className="text-gray-600 mb-10">
          Your brand is more than just a logo—it’s your identity, voice, and
          first impression. At Ace360degree, we create strategic, visually
          compelling branding solutions that resonate with your audience and
          leave a lasting impact. From brand naming and logo design to marketing
          collaterals and packaging, we craft cohesive branding experiences that
          drive recognition and customer loyalty.
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
