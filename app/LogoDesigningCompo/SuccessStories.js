'use client';

import Image from 'next/image';

export default function SuccessStories() {
    const cards = [
        {
            img: '/images/logo/proven.png',
            title: 'Proven Results',
            desc: 'Designed a Unique Logo That Boosted Brand Recognition by 70%',
        },
        {
            img: '/images/logo/DataDrivin.png',
            title: 'Data-Driven Approach',
            desc: 'Successfully Rebranded with a Modern Logo & Increased Engagement',
        },
        {
            img: '/images/logo/tailored.png',
            title: 'Tailored Solutions',
            desc: 'Created an Animated Logo That Enhanced Digital Presence',
        },
    ];

    return (
        <>
            {/* Success Stories Section */}
            <section className="w-full bg-white py-16 px-4 font-poppins">
                <div className="max-w-5xl mx-auto text-center">
                    <p
                        className="relative text-sm font-semibold inline-block mb-2 after:content-[''] after:block after:h-[1px] after:bg-[#F2A300] after:absolute after:bottom-[-0px] after:left-0 after:w-[100%]"
                        style={{ color: 'var(--theme-grey)' }}
                    >
                        Why Choose Us
                    </p>

                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories & Client Results</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto mb-10 text-sm sm:text-base">
                        Unlock Your Digital Potential: Choose Ace360Degree for SEO Excellence. Our commitment to your success goes
                        beyond rankings – we craft comprehensive SEO strategies that align with your business goals. With a focus on
                        technical precision, content relevance, and sustainable growth, we ensure your website not only attracts
                        traffic but engages and converts, making us your trusted partner in navigating the dynamic world of SEO.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className="bg-[#FBE4B5] p-6 rounded-xl shadow-md text-center flex flex-col items-center"
                            >
                                <div className="mb-4 w-[60%]">
                                    <Image
                                        src={card.img}
                                        alt={card.title}
                                        width={300}
                                        height={200}
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <h3 className="text-lg font-semibold mb-2 text-[#212529]">{card.title}</h3>
                                <p className="text-sm text-gray-800">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Logo CTA Section */}
            <section className="w-full bg-white py-20 px-4 font-poppins">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                        Ready to Make Your Mark with a Stunning Logo?
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600 mb-8">
                        Let’s design a custom logo that represents your brand’s vision and identity.
                    </p>

                    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10 w-[80%] mx-auto">
                        <Image
                            src="/images/logo/ready.png"
                            alt="Ready to Make Your Mark"
                            width={500}
                            height={300}
                            className="mx-auto w-full h-auto object-contain"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
