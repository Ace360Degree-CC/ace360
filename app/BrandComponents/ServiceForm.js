    'use client'

    export default function ServiceForm() {
        return (
            <section className="bg-[#555555] py-12 px-4">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-center text-white text-xl font-semibold mb-8">
                        Require this Service?
                    </h2>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full px-4 py-2 rounded outline-none border border-[#6C757D] placeholder-[#6C757D] bg-white"
                        />
                        <input
                            type="text"
                            placeholder="Phone No."
                            className="w-full px-4 py-2 rounded outline-none border border-[#6C757D] placeholder-[#6C757D] bg-white"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-2 rounded outline-none border border-[#6C757D] placeholder-[#6C757D] bg-white"
                        />
                        <textarea
                            placeholder="Message"
                            rows="4"
                            className="w-full px-4 py-2 rounded outline-none border border-[#6C757D] placeholder-[#6C757D] bg-white"
                        />
                        {/* Placeholder for reCAPTCHA */}
                        <div className="pt-2">
                            <div className="w-[200px] h-[40px] bg-white rounded-md flex items-center justify-center">
                                <span className="text-[#6C757D] text-sm">[reCAPTCHA here]</span>
                            </div>
                        </div>
                        <div className="pt-4 flex justify-center">
                            <button
                                type="submit"
                                className="bg-[#F2A300] px-15 text-white px-6 py-2 rounded-[50px] hover:opacity-90 transition-opacity">
                                Submit
                            </button>
                        </div>

                    </form>
                </div>
            </section>
        );
    }
