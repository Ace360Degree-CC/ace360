'use client';

export default function Webreath() {
  return (
    <div className="flex flex-col md:flex-row w-full h-full bg-gradient-to-r from-[#414345] to-[#232526] p-8 md:p-16 text-[#939393]">
      
      {/* Left Side - 50% */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center mb-8 md:mb-0">
        <h2 className="text-[#FFA500] text-4xl mb-4 glowing-text">We Breath</h2>
        <h2 className="text-[#FFA500] text-4xl glowing-text">Creativity</h2>
      </div>

      {/* Right Side - 50% */}
      <div className="w-full md:w-1/2 space-y-6">
        <div>
          <h2 className="text-[#FFA500] text-xl mb-2 glowing-text">
            Transform Your Brand with Strategic Digital Solutions
          </h2>
          <p>
            In today’s fast-paced digital world, businesses need more than just a presence—they need impact.
            At Ace360degree, we specialize in branding, digital marketing and technology that helps sales,
            improves visibility, generates leads and builds a strong brand identity.
          </p>
        </div>

        <div>
          <h3 className="text-[#FFA500] text-lg mb-2 glowing-text">About Ace360degree</h3>
          <p>
            At Ace360degree, we empower SMEs to achieve success through strategic branding, creative design,
            and impactful communication. Our team of experts help clients make a statement across all channels
            and bring long-term success.
          </p>
        </div>

        <div>
          <h3 className="text-[#FFA500] text-lg mb-2 glowing-text">What We Offer</h3>
          <p>
            We develop ideas that are practical, innovative, and result-driven. Our approach integrates strategy,
            design, communication, and technology—ensuring success that aligns with business goals and delivers
            tangible outcomes.
          </p>
        </div>
      </div>
    </div>

  );
}
