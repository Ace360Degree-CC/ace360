'use client'

export default function HomeTechnology() {
  return (
    <section>
      <div className="bg-white py-0 px-0">
        {/* Full-width heading */}
        <div className="w-full bg-[#FCF5EB] py-4">
          <h2 className="text-3xl font-bold text-[#F2A300] text-center">
            Technology
          </h2>
        </div>

        {/* Cards */}
        <div className="max-w-6xl mx-auto py-12 px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                img: "/images/icons/Website Design & Devlopment.png",
                title: "Website Design & Devlopment",
                desc1: "Build responsive, high-performing websites for your business.",
                desc2: "Learn More about ",
                highlight: "Website Design & Devlopment",
                highlightUrl: "/website-development",
              },
              {
                img: "/images/icons/Mobile Apps Development.png",
                title: "Mobile Apps Development",
                desc1: "Create user-friendly mobile apps for iOS and Android.",
                desc2: "Learn More about ",
                highlight: "Mobile Apps Development",
                highlightUrl: "/mobile-apps-development",
              },
              {
                img: "/images/icons/Custom Software Devlopment.png",
                title: "Custom Software Devlopment",
                desc1: "Develop tailored software solutions for business efficiency.",
                desc2: "Learn More about ",
                highlight: "Custom Software Devlopment",
                highlightUrl: "/custom-software-development",
              },
              {
                img: "/images/icons/Ecommerce Website Devlopment.png",
                title: "Ecommerce Website Devlopment",
                desc1: "Launch powerful online stores for seamless shopping experiences.",
                desc2: "Learn More about ",
                highlight: "Ecommerce Website Devlopment",
                highlightUrl: "/ecommerce-website",
              },
              {
                img: "/images/icons/Portal Devlopment  Market Place.png",
                title: "Portal Devlopment / Market Place",
                desc1: "Build scalable portals for businesses and online marketplaces.",
                desc2: "Learn More about ",
                highlight: "Portal Devlopment / Market Place",
                highlightUrl: "/portal-marketplace",
              },
              {
                img: "/images/icons/Wordpress Website.png",
                title: "Wordpress Website",
                desc1: "Design flexible, SEO-friendly websites with WordPress.",
                desc2: "Learn More about ",
                highlight: "Wordpress Website",
                highlightUrl: "/wordpress-website",
              },
              {
                img: "/images/icons/Shopify Website Devlopment.png",
                title: "Shopify Website Devlopment",
                desc1: "Create high-converting Shopify stores for your brand.",
                desc2: "Learn More about ",
                highlight: "Shopify Website Devlopment",
                highlightUrl: "/shopify-development",
              },
              {
                img: "/images/icons/Opencart Website Devlopment.png",
                title: "Opencart Website Devlopment",
                desc1: "Build feature-rich ecommerce websites with OpenCart.",
                desc2: "Learn More about ",
                highlight: "Opencart Website Devlopment",
                highlightUrl: "/opencart-development",
              },
              {
                img: "/images/icons/Squarespace Website Devlopment.png",
                title: "SquareSpace",
                desc1: "Stunning, user-friendly Squarespace websites built for impact.",
                desc2: "Learn More about ",
                highlight: "SquareSpace",
                highlightUrl: "/squarespace",
              },
            ].map((card, index) => (
              <div key={index} className="w-full bg-white p-6">
                <div className="flex items-start gap-4 mb-4">
                  <img src={card.img} alt={card.title} className="h-10 w-10 object-contain" />
                  <h3 className="text-xl font-semibold text-[#212529]">{card.title}</h3>
                </div>
                <p className="text-[#444444] mb-2">{card.desc1}</p>
                {card.desc2 && card.highlight && card.highlightUrl && (
                  <p className="text-[#444444]">
                    {card.desc2}
                    <a
                      href={card.highlightUrl}
                      className="text-[#F2A300] font-bold underline hover:opacity-80"
                    >
                      {card.highlight}
                    </a>
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
