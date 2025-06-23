export default function HomeHeroSection() {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-8">
        {/* LEFT */}
        <div>
          <p className="text-[#444444] mb-2 text-lg font-bold">
            We are Mumbai&apos;s
          </p>
          <h1 className="text-3xl font-bold text-[#F2A300] mb-2">
            LEADING DIGITAL MARKETING AGENCY
          </h1>
          <h6 className="text-xl font-semibold text-[#444444] mb-4">
            Delivering top-notch solutions across India.
          </h6>
          <p className="text-[#444444] mb-6">
            Ace360degree helps brands and SMEs grow with expert digital
            marketing, creative branding, and cutting-edge technology solutions.
            Strengthen your brand, boost visibility, and engage customers
            effectively.
          </p>
          <div className="flex space-x-4">
            <button className="bg-[#F2A300] text-white px-6 py-3 rounded-[50px] hover:bg-[#FFC107] transition duration-300">
              Connect with us!
            </button>

            <button className="bg-[#343A40] text-white px-6 py-3 rounded-[50px] hover:bg-[#070708] transition duration-300">
              Request a Quote
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center">
          <img
            src="/images/home/Rectangle.png"
            alt="Banner"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </div>
  );
}
