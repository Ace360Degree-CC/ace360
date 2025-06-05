'use client';

import Image from 'next/image';

export default function ProductShowcase() {
    return (
        <div className="bg-white py-20 px-4">
            <div className="max-w-6xl mx-auto px-6 md:px-16 flex flex-col gap-24">

                {/* Task Master */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="w-full md:w-1/2">
                        <Image
                            src="/images/product/task.png"
                            alt="Task Master Preview"
                            width={600}
                            height={400}
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-2xl font-bold text-[#212529] mb-4">Task Master</h2>
                        <p className="text-[#4A4A4A] mb-6">
                            Elevate Team Collaboration<br />
                            Stay on top of tasks, deadlines, and team communication in one powerful platform.
                            TASK MASTER enables real-time file sharing, task tracking, and seamless collaboration,
                            keeping your team connected and focused, no matter where they are.
                        </p>
                        <div className="flex flex-col md:flex-row ileadimagetems-center md:items-start justify-center md:justify-start gap-4">
                            <button className="bg-[#F2A300] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#e19700] transition">
                                Get a Demo
                            </button>
                            <button className="bg-[#4A4A4A] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#3a3a3a] transition">
                                Request a Quote
                            </button>
                        </div>
                    </div>
                </div>

                {/* Lead Management System */}
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-2xl font-bold text-[#212529] mb-4">Lead Management System</h2>
                        <p className="text-[#4A4A4A] mb-6">
                            Convert More Leads, Faster.<br />
                            Capture, track, and nurture leads efficiently with our AI-powered CRM. Automate follow-ups,
                            prioritize prospects, and accelerate your sales pipeline with a smarter approach to lead tracking.
                        </p>
                        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-4">
                            <button className="bg-[#F2A300] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#e19700] transition">
                                Get a Demo
                            </button>
                            <button className="bg-[#4A4A4A] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#3a3a3a] transition">
                                Request a Quote
                            </button>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <Image
                            src="/images/product/lead.png"
                            alt="Lead Management Preview"
                            width={600}
                            height={400}
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                </div>

                {/* Visitor Management */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="w-full md:w-1/2">
                        <Image
                            src="/images/product/visitors.png"
                            alt="Visitor Management Preview"
                            width={600}
                            height={400}
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-2xl font-bold text-[#212529] mb-4">Visitor Management</h2>
                        <p className="text-[#4A4A4A] mb-6">
                            Efficient & Secure Entrance Control.<br />
                            Streamline guest check-ins with our digital visitor registration system. Improve first impressions
                            while maintaining security and compliance across your premises.
                        </p>
                        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-4">
                            <button className="bg-[#F2A300] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#e19700] transition">
                                Get a Demo
                            </button>
                            <button className="bg-[#4A4A4A] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#3a3a3a] transition">
                                Request a Quote
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
