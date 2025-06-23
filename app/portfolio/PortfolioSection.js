import Image from "next/image";
import Link from "next/link";

const portfolioItems = [
  {
    name: "MOS Utility Ltd",
    image: "/images/portfolio/mos.png",
    slug: "mos-utility",
  },
  {
    name: "Furniture Kraft Pvt Ltd",
    image: "/images/portfolio/furniture-kroft.png",
    slug: "furniture-kraft-pvt-ltd",
  },
  {
    name: "Rexello Castors Pvt Ltd",
    image: "/images/portfolio/rexello.png",
    slug: "rexello-castors-pvt-ltd",
  },
  {
    name: "Amigo Academy Pvt Ltd",
    image: "/images/portfolio/amigo.png",
    slug: "amigo-academy-pvt-ltd",
  },
  {
    name: "Arcil India Ltd",
    image: "/images/portfolio/archit.png",
    slug: "arcil-india-ltd",
  },
  {
    name: "KSA Architects",
    image: "/images/portfolio/ksa.png",
    slug: "ksa-architects",
  },
  {
    name: "Bayer India Pvt Ltd",
    image: "/images/portfolio/bayer.png",
    slug: "bayer-india-pvt-ltd",
  },
  {
    name: "Häfele India Pvt Ltd",
    image: "/images/portfolio/hafele.png",
    slug: "hafele-india-pvt-ltd",
  },
];

export default function PortfolioSection() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-4xl text-[var(--theme-primary)] font-bold mb-2">
          A Showcase of Our Expertise
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold  text-[var(--theme-text)] mb-4">
          Unveiling Success Across Digital Marketing, Branding, and Technology
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          At Ace360degree, we craft data-driven strategies, compelling design,
          and high-impact digital solutions. From SEO, social media marketing,
          and performance ads to website development, creative content, and
          branding, our work drives real results.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {portfolioItems.map((item, index) => (
          <Link key={index} href={`/portfolio/${item.slug || "#"}`}>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <Image
                src={item.image}
                alt={item.name}
                width={400}
                height={300}
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute text-center bottom-3 left-0 right-0 bg-black bg-opacity-25 p-3 text-white text-sm font-semibold">
                {item.name}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
