import Link from "next/link";

export default function DigitalMarketing() {
  const cards = [
    {
      img: "/images/icons/seo.png",
      title: "Search Engine Optimization",
      desc1: "Improve rankings, boost traffic, and grow your online presence.",
      desc2: "Learn More about ",
      highlight: "Search Engine Optimization",
      href: "/services/digitalmarketing/search-engine-optimization",
    },
    {
      img: "/images/icons/smm.png",
      title: "Social Media Marketing",
      desc1: "Engage audiences, increase followers, and drive brand awareness.",
      desc2: "Learn More about ",
      highlight: "Social Media Marketing",
      href: "/services/digitalmarketing/social-media-marketing",
    },
    {
      img: "/images/icons/pm.png",
      title: "Performance Marketing",
      desc1:
        "Optimize campaigns, maximize ROI, and generate high-quality leads.",
      desc2: "Learn More about ",
      highlight: "Performance Marketing",
      href: "/services/digitalmarketing/performance-marketing",
    },
    {
      img: "/images/icons/im.png",
      title: "Influencer Marketing",
      desc1: "Connect with influencers to enhance credibility and reach.",
      desc2: "Learn More about ",
      highlight: "Influencer Marketing",
      href: "/services/digitalmarketing/influencer-marketing",
    },
    {
      img: "/images/icons/orm.png",
      title: "Online Reputation Management (ORM)",
      desc1: "Protect your brand image and maintain customer trust.",
      desc2: "Learn More about ",
      highlight: "Online Reputation Management (ORM)",
      href: "/services/digitalmarketing/online-reputation-management",
    },
    {
      img: "/images/icons/cw.png",
      title: "Content Writing",
      desc1: "Create compelling, SEO-friendly content that drives engagement",
      desc2: "Learn More about ",
      highlight: "Content Writing",
      href: "/services/digitalmarketing/content-writing",
    },
  ];

  return (
    <section>
      <div className="bg-white py-0 px-0">
        <div className="w-full bg-[#FCF5EB] py-4">
          <h2 className="text-3xl font-bold text-[#F2A300] text-center">
            Digital Marketing
          </h2>
        </div>

        <div className="max-w-6xl mx-auto py-12 px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <Link
                href={card.href}
                key={index}
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
                {card.desc2 && card.highlight && (
                  <p className="text-[#444444]">
                    {card.desc2}
                    <span className="text-[#F2A300] font-bold underline">
                      {card.highlight}
                    </span>
                  </p>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
