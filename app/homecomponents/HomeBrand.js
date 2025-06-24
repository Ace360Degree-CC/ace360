import Link from "next/link";

export default function HomeBrand() {
  const cards = [
    {
      img: "/images/icons/Brand Naming.png",
      title: "Brand Naming",
      desc1: "Create a unique, memorable identity for your business.",
      desc2: "Learn More about ",
      highlight: "Brand Naming",
      href: "/services/branding/brand-naming",
    },
    {
      img: "/images/icons/Brand Strategy.png",
      title: "Brand Strategy",
      desc1: "Build a strong brand foundation with strategic planning.",
      desc2: "Learn More about ",
      highlight: "Brand Strategy",
      href: "/services/branding/brand-strategy",
    },
    {
      img: "/images/icons/Logo Designing.png",
      title: "Logo Designing",
      desc1: "Design impactful logos that represent your brand identity.",
      desc2: "Learn More about ",
      highlight: "Logo Designing",
      href: "/services/branding/logo-designing",
    },
    {
      img: "/images/icons/Marketing Collaterals.png",
      title: "Marketing Collaterals",
      desc1: "Develop engaging brochures, flyers, and business materials.",
      desc2: "Learn More about ",
      highlight: "Marketing Collaterals",
      href: "/services/branding/marketing-collaterals",
    },
    {
      img: "/images/icons/Graphic Designing.png",
      title: "Graphic Designing",
      desc1: "Craft visually compelling designs for brand communication.",
      desc2: "Learn More about ",
      highlight: "Graphic Designing",
      href: "/services/branding/graphics-designing",
    },
    {
      img: "/images/icons/Package Designing.png",
      title: "Package Designing",
      desc1: "Create attractive packaging that enhances product appeal.",
      desc2: "Learn More about ",
      highlight: "Package Designing",
      href: "/services/branding/package-designing",
    },
    {
      img: "/images/icons/Video Editing.png",
      title: "Video Editing",
      desc1: "Produce high-quality, engaging videos for your brand.",
      desc2: "Learn More about ",
      highlight: "Video Editing",
      href: "/services/branding/video-editing",
    },
    {
      img: "/images/icons/3D Modeling & Animation.png",
      title: "3D Modeling & Animation",
      desc1: "Bring ideas to life with stunning 3D visuals.",
      desc2: "Learn More about ",
      highlight: "3D Modeling & Animation",
      href: "/services/branding/3d-modelling-and-animation",
    },
    {
      img: "/images/icons/Motion Graphics.png",
      title: "Motion Graphics",
      desc1: "Add dynamic animations to captivate your audience.",
      desc2: "Learn More about ",
      highlight: "Motion Graphics",
      href: "/services/branding/motion-graphics",
    },
  ];

  return (
    <section>
      <div className="bg-white py-0 px-0">
        <div className="w-full bg-[#FCF5EB] py-4">
          <h2 className="text-3xl font-bold text-[#F2A300] text-center">
            Branding
          </h2>
        </div>

        <div className="max-w-6xl mx-auto py-12 px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <Link
                key={index}
                href={card.href}
                className="block w-full bg-white p-6 hover:shadow-lg rounded-lg transition"
              >
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="h-10 w-10 object-contain"
                  />
                  <h3 className="text-xl font-semibold text-[#212529]">
                    {card.title}
                  </h3>
                </div>
                <p className="text-[#444444] mb-2">{card.desc1}</p>
                <p className="text-[#444444]">
                  {card.desc2}
                  <span className="text-[#F2A300] font-bold underline">
                    {card.highlight}
                  </span>
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
