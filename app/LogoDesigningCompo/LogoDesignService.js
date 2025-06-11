'use client';

import Image from 'next/image';

const services = [
  {
    title: 'Custom Logo Design',
    desc: 'We design unique and custom logos that reflect your brand’s personality and set it apart from competitors.',
    img: '/images/logo/CustomLogo.png',
  },
  {
    title: 'Logo Redesign',
    desc: 'Modernizing outdated logos and refining designs to better align with your evolving brand.',
    img: '/images/logo/LogoRedesign.png',
  },
  {
    title: 'Brand Identity Logo Pack',
    desc: 'Get consistent branding solutions including various logo sizes and formats for multiple platforms.',
    img: '/images/logo/BrandIdentity.png',
  },
  {
    title: 'Business & Product Logos',
    desc: 'Tailored to suit your industry, we design logos that fit your business type and product style.',
    img: '/images/logo/Business.png',
  },
  {
    title: 'Typography & Symbol-Based Logos',
    desc: 'We craft strong logotypes using unique typography, symbols, and character-based styles.',
    img: '/images/logo/typo.png',
  },
  {
    title: 'Animated Logos',
    desc: 'Make your brand stand out with dynamic logo animations for intros, apps, and digital content.',
    img: '/images/logo/Animated.png',
  },
];

export default function LogoDesignService() {
  return (
    <div className="w-full bg-white">
      <section className="py-16 px-4 max-w-7xl mx-auto text-center">
        <h4 className="text-sm text-gray-500 uppercase tracking-wide font-poppins">Logo Designing</h4>
        <h2 className="text-3xl font-bold text-gray-900 mb-10 font-poppins">Our Logo Design Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative w-full h-80 rounded-md overflow-hidden shadow-md border"
            >
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-0 w-full bg-[#F2A300]/85 text-white p-4 font-poppins h-36 flex flex-col justify-between">
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="text-sm">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
