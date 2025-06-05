'use client';

import Image from 'next/image';

export default function Offer() {
    const offers = [
        {
            title: "Tailored SAAS Platforms",
            description: "We create custom SAAS solutions to match your unique business needs, optimizing workflows and simplifying tasks.",
            image: "/images/product/tailored.png",
        },
        {
            title: "Cloud-Powered",
            description: "Our SAAS platforms leverage the cloud, offering secure access from anywhere, anytime, while ensuring data integrity.",
            image: "/images/product/cloud.png",
        },
        {
            title: "Seamless Integration",
            description: "From third-party integrations to API connectivity, we ensure your SAAS platform harmonizes with your existing tools.",
            image: "/images/product/seamless.png",
        },
        {
            title: "User-Centric Design",
            description: "We prioritize user experience, creating intuitive interfaces that enhance adoption and boost productivity.",
            image: "/images/product/user.png",
        },
        {
            title: "Scalability",
            description: "Our SAAS platforms are designed to grow alongside your business, accommodating increasing users and expanding needs.",
            image: "/images/product/saas.png",
        },
        {
            title: "Security First",
            description: "We implement robust security measures, safeguarding your data and ensuring a safe environment for your operations.",
            image: "/images/product/security.png",
        },
    ];

    return (
        <section className="bg-white py-20 px-4">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-2xl font-bold text-[#212529] mb-12">What We Offer</h2>

                {/* First Row: 4 Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
                    {offers.slice(0, 4).map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#D9D9D9] p-6 rounded-lg shadow-sm flex flex-col items-center text-center hover:shadow-md transition"
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={64}
                                height={64}
                                className="mb-4"
                            />
                            <h3 className="font-semibold text-lg text-[#212529] mb-2">{item.title}</h3>
                            <p className="text-sm text-[#212529]">{item.description}</p>
                        </div>
                    ))}
                </div>

                {/* Second Row: 2 Cards Centered */}
                <div className="flex flex-col lg:flex-row justify-center gap-8">
                    {offers.slice(4, 6).map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#D9D9D9] p-6 rounded-lg shadow-sm flex flex-col items-center text-center hover:shadow-md transition w-full md:w-[320px]"
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={64}
                                height={64}
                                className="mb-4"
                            />
                            <h3 className="font-semibold text-lg text-[#212529] mb-2">{item.title}</h3>
                            <p className="text-sm text-[#212529]">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
