export default function HomeBrand() {
    return (
        <section>
            {/* Section 4 */}
            <div className="bg-white py-0 px-0">
                {/* Full-width heading */}
                <div className="w-full bg-[#FCF5EB] py-4">
                    <h2 className="text-3xl font-bold text-[#F2A300] text-center">
                        Branding
                    </h2>
                </div>

                {/* Cards */}
                <div className="max-w-6xl mx-auto py-12 px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {[
                            {
                                img: "/images/icons/Brand Naming.png",
                                title: "Brand Naming",
                                desc1: "Create a unique, memorable identity for your business.",
                                desc2: "Learn More about ",
                                highlight: "Brand Naming",
                                highlightUrl: "/brand-naming",
                            },
                            {
                                img: "/images/icons/Brand Strategy.png",
                                title: "Brand Strategy",
                                desc1: "Build a strong brand foundation with strategic planning.",
                                desc2: "Learn More about ",
                                highlight: "Brand Strategy",
                                highlightUrl: "/brand-strategy",
                            },
                            {
                                img: "/images/icons/Logo Designing.png",
                                title: "Logo Designing",
                                desc1: "Design impactful logos that represent your brand identity.",
                                desc2: "Learn More about ",
                                highlight: "Logo Designing",
                                highlightUrl: "/logo-designing",
                            },
                            {
                                img: "/images/icons/Marketing Collaterals.png",
                                title: "Marketing Collaterals",
                                desc1: "Develop engaging brochures, flyers, and business materials.",
                                desc2: "Learn More about ",
                                highlight: "Marketing Collaterals",
                                highlightUrl: "/marketing-collaterals",
                            },
                            {
                                img: "/images/icons/Graphic Designing.png",
                                title: "Graphic Designing",
                                desc1: "Craft visually compelling designs for brand communication.",
                                desc2: "Learn More about ",
                                highlight: "Graphic Designing",
                                highlightUrl: "/graphic-designing",
                            },
                            {
                                img: "/images/icons/Package Designing.png",
                                title: "Package Designing",
                                desc1: "Create attractive packaging that enhances product appeal.",
                                desc2: "Learn More about ",
                                highlight: "Package Designing",
                                highlightUrl: "/package-designing",
                            },
                            {
                                img: "/images/icons/Video Editing.png",
                                title: "Video Editing",
                                desc1: "Produce high-quality, engaging videos for your brand.",
                                desc2: "Learn More about ",
                                highlight: "Video Editing",
                                highlightUrl: "/video-editing",
                            },
                            {
                                img: "/images/icons/3D Modeling & Animation.png",
                                title: "3D Modeling & Animation",
                                desc1: "Bring ideas to life with stunning 3D visuals.",
                                desc2: "Learn More about ",
                                highlight: "3D Modeling & Animation",
                                highlightUrl: "/3d-modeling-animation",
                            },
                            {
                                img: "/images/icons/Motion Graphics.png",
                                title: "Motion Graphics",
                                desc1: "Add dynamic animations to captivate your audience.",
                                desc2: "Learn More about ",
                                highlight: "Motion Graphics",
                                highlightUrl: "/motion-graphics",
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
