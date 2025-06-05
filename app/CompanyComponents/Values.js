'use client';

export default function Values() {
    return (
        <div>
            <div className="flex flex-col md:flex-row w-full bg-white text-[#212529] py-12 px-6 md:px-20 text-center">

                {/* Vision */}
                <div className="w-full md:w-1/2 mb-10 md:mb-0">
                    <h3 className="text-lg font-bold mb-2">OUR VISION</h3>
                    <p className="w-9/10 mx-auto">
                        To be a globally recognized digital partner, empowering businesses with innovative branding and marketing solutions.
                    </p>

                </div>

                {/* Mission */}
                <div className="w-full md:w-1/2">
                    <h3 className="text-lg font-bold mb-2">OUR MISSION</h3>
                    <p className="w-9/10 mx-auto">
                        To help brands reach their full potential through data-driven branding, marketing, and technology solutions.
                    </p>
                </div>

            </div>


            <div className="bg-white text-[#212529] py-12 px-4 md:px-16">
                <h3 className="text-center font-semibold text-sm mb-8">OUR VALUES</h3>

                <div className="flex flex-col md:flex-row justify-center items-stretch divide-y md:divide-y-0 md:divide-x divide-[#D3D3D3] text-center">

                    {/* Assertive */}
                    <div className="flex-1 px-4 py-6">
                        <h4 className="text-[#F2A300] text-xl mb-2">Assertive</h4>
                        <p className="w-1/2 mx-auto text-center">Driving business growth with confidence.</p>
                    </div>

                    {/* Innovation */}
                    <div className="flex-1 px-4 py-6">
                        <h4 className="text-[#F2A300] text-xl mb-2">Innovation</h4>
                        <p className="w-1/2 mx-auto text-center">Constantly evolving with market trends.</p>
                    </div>

                    {/* Ownership */}
                    <div className="flex-1 px-4 py-6">
                        <h4 className="text-[#F2A300] text-xl mb-2">Ownership</h4>
                        <p className="w-1/2 mx-auto text-center">Taking responsibility for success.</p>
                    </div>

                    {/* Integrity */}
                    <div className="flex-1 px-4 py-6">
                        <h4 className="text-[#F2A300] text-xl mb-2">Integrity</h4>
                        <p className="w-1/2 mx-auto text-center">Constantly evolving with market trends.</p>
                    </div>

                    {/* Transparent */}
                    <div className="flex-1 px-4 py-6">
                        <h4 className="text-[#F2A300] text-xl mb-2">Transparent</h4>
                        <p className="w-1/2 mx-auto text-center">
                            Clear communication,<br />
                            real results.
                        </p>
                    </div>

                </div>
            </div>
        </div>


    );
}
