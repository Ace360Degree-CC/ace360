import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="bg-[#F3C532]  ">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
        {/* Left Text Box */}
        <div className="bg-[var(--theme-primary)] text-white p-6 rounded-r-lg w-full">
          <div className="md:pl-80">
            <h2 className=" md:text-4xl font-bold mb-2">
              Get in Touch with Us
            </h2>
            <p className=" md:text-xl leading-relaxed ">
              We’d love to hear from you! Whether you’re looking to elevate your
              brand, enhance your digital presence, or craft the next big thing,
              we're ready. Let’s start a conversation and turn your vision into
              reality.
            </p>
          </div>
        </div>

        {/* Right Image Only */}
        <div className="w-full flex justify-center  mb-0">
          <Image
            src="/images/contact/contact.png"
            alt="Contact illustration"
            width={600}
            height={600}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
