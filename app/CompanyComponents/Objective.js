'use client';

export default function Objective() {
  return (
    <div className="flex flex-col md:flex-row w-full h-full">
      
      {/* Left side (empty or reserved for content) */}
      <div className="w-full md:w-1/2 bg-white"></div>

      {/* Right side with orange background */}
      <div className="w-full md:w-1/2 bg-[#F2A300] text-[#4E4D4D] flex flex-col justify-center items-center p-8 md:p-12">
        <h2 className="text-xl font-bold mb-6 text-center">Our Objective</h2>
        
        <ul className="space-y-4 text-sm md:text-base max-w-md text-center">
          <li>✔ To consistently develop ideas that drive business growth while adapting to evolving industry trends.</li>
          <li>✔ To set new standards in communication design, branding, and digital marketing.</li>
          <li>✔ To leverage technology and strategic insights to craft innovative, effective solutions for our clients.</li>
        </ul>
      </div>
    </div>
  );
}
