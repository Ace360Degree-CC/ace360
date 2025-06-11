'use client';

import Image from 'next/image';

const benefits = [
  'Establish a strong visual identity that resonates with your audience.',
  'Build instant brand recognition & credibility.',
  'Create a timeless design that evolves with your business.',
];

export default function DesignMatters() {
  return (
    <section className="w-full bg-white py-16 px-4 font-poppins">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Logo Design Matters?</h2>

        {/* Checklist Section */}
        <div className="flex justify-center">
          <ul className="text-left text-sm sm:text-base text-gray-700 space-y-2 mb-8 ml-4">
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✅</span>
              <span>
                A well-designed logo increases brand recognition by 80%. – Does your logo stand out?
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✅</span>
              <span>
                Consumers take only 0.05 seconds to form an opinion—make your branding pop.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✅</span>
              <span>
                Consistent branding (including logos) can increase revenue by up to 23%.
              </span>
            </li>
          </ul>
        </div>

        {/* Image */}
        <div className="flex justify-center mb-12">
          <Image
            src="/images/logo/DesignMatters.png"
            alt="Why Logo Design Matters"
            width={450}
            height={300}
            className="w-auto h-auto"
          />
        </div>

        {/* Logo Benefits Boxes */}
        <div className="flex flex-col items-center gap-4">
          {benefits.map((text, index) => (
            <div
              key={index}
              className="bg-[#F2A300] text-black px-6 py-3 w-full max-w-xl text-center font-medium rounded-sm"
            >
              ✔ {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
