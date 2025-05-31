"use client";

export default function HeroService() {
  return (
    <section
      className="bg-cover bg-center py-20 "
      style={{ backgroundImage: "url(/images/services/bg.png)" }}
    >
      <div className="max-w-4xl mx-auto text-left ] px-3">
        <p className="uppercase text-sm tracking-wide mb-2 font-medium text-[var(--theme-text)]">
          Comprehensive Digital Excellence
        </p>
        <h2 className="text-3xl md:text-4xl text-[var(--theme-heading)] font-bold mb-4">
          Elevate Your Brand with Ace360degree
        </h2>
        <p className="text-md md:text-lg leading-relaxed font-normal text-[var(--theme-text)]">
          At Ace360degree, we transform ideas into powerful digital experiences.
          Through a seamless blend of innovative technology, strategic branding,
          and data-driven marketing, we help businesses amplify their online
          presence, build a strong identity, and drive growth. Our services are
          designed to deliver impact, efficiency, and long-term success —
          because your brand deserves nothing less.
        </p>
      </div>
    </section>
  );
}
