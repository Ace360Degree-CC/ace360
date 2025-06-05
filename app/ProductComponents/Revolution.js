'use client';

import Image from 'next/image';

export default function Revolution() {
    return (
        <div className="bg-white py-20 px-4 relative">
            <div className="relative max-w-6xl mx-auto px-6 md:px-16 bg-white overflow-hidden ">

                {/* Bottom Left Grey Quarter-Circle */}
                <div className="absolute -bottom-10 left-0 w-38 h-38 bg-[#808080] rounded-tr-[100%] z-0"></div>

                {/* 🔽 Bottom Right Positioned Image */}
                <div className="absolute bottom-0 right-0 w-[400px] z-0">
                    <Image
                        src="/images/product/product.png"
                        alt="SaaS Workflow"
                        width={800}
                        height={600}
                        className="w-full h-auto object-contain"
                    />
                </div>

                {/* Main Content */}
                <div className="flex flex-col md:flex-row items-center justify-between relative z-10 pt-12 pb-20">

                    {/* Left Text Section */}
                    <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left relative">

                        {/* Top Right Semi-Circle (inside left section) */}
                        <div className="absolute -top-40 right-12 w-58 h-38 bg-[#808080] rounded-b-full z-0"></div>

                        {/* Text Block */}
                        <div className="relative z-10 mt-8">
                            <h2 className="text-lg font-semibold text-[#212529] mb-2">
                                Revolutionize Your Workflow with
                            </h2>
                            <h1 className="text-2xl font-bold text-[#F2A300] mb-4">
                                ACE360Degree’s Smart SaaS Solutions
                            </h1>
                            <p className="text-[#212529] mb-6 w-full">
                                Empower your business with cutting-edge SaaS solutions designed to streamline operations and drive efficiency.
                                At ACE360Degree, we craft custom-built SaaS platforms that enhance efficiency, streamline processes, and drive
                                growth in the digital age.
                            </p>
                            <div className="flex justify-center md:justify-start">
                                <div className="w-full flex justify-center">
                                    <button className="bg-[#F2A300] text-white px-6 py-2 rounded-[50px] font-semibold hover:bg-[#e19700] transition">
                                        Let’s get Started
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
