"use client";

export default function MeetDicuss() {
  return (
    <div className="bg-[#F2A300] py-12 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-8 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side Text */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-4xl font-bold text-[#343A40] mb-4">
            Lets meet and
            <br />
            discuss your growth
          </h2>
          <p className="text-[#525252] mb-4 text-sm">
            We&apos;re Thane&apos;s best digital marketing company in Mumbai and
            PAN India — with a focus on innovative and effective solutions.
          </p>
          <p className="text-[#525252] mb-6 text-sm">
            We help businesses achieve their goals by putting together the right
            content, strategy, and technology to make their brand come to life.
          </p>
          <button className="bg-[#F2A300] font-bold text-[#202020] px-6 py-2 rounded-full hover:bg-[#e49c00] transition">
            Feel Free to connect!
          </button>
        </div>

        {/* Right Side Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/images/home/meeting-illustration1.png"
            alt="Meeting Illustration"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
