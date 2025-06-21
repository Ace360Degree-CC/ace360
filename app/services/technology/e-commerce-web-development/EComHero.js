import Image from "next/image";

export default function EComHero() {
  return (
    <section
      className="bg-white py-16 px-4 md:px-20"
      style={{
        color: "var(--theme-text)",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Text Content */}
        <div className="md:w-1/2">
          <h4
            className="relative text-sm font-semibold inline-block after:content-[''] after:block after:h-[1px] after:bg-[#F2A300] after:absolute after:bottom-[-0px] after:left-0 after:w-[140%]"
            style={{ color: "var(--theme-grey)" }}
          >
            Ecommerce Web Development
          </h4>

          <h2
            className="text-lg md:text-2xl mt-2"
            style={{ color: "var(--theme-heading)" }}
          >
            Enhance Your Brand with High-Impact Marketing Collaterals
          </h2>

          <p className="text-4xl font-abril mt-4" style={{ color: "#F2A300" }}>
            Your marketing materials play a crucial role in communicating your
            brand story, engaging customers, and driving conversions.
          </p>

          <p className="mt-4" style={{ color: "var(--theme-text)" }}>
            At Ace360degree, we create visually compelling, strategically
            crafted marketing collaterals that leave a lasting impression and
            strengthen brand consistency across all platforms.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="btn-connect">Let’s Connect</button>

            <button className="btn-see-work-2 group">
              <span className="icon group-hover:translate-x-[105%] transition-transform duration-300">
                ›
              </span>
              <span className="text relative transition-all duration-300">
                See Our Work
                <span className="icon absolute left-0 opacity-0 group-hover:opacity-100 group-hover:left-full transition-all duration-300">
                  ›
                </span>
              </span>
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/images/services/technology/e-commerce/cart.png"
            alt="Logo Design"
            width={500}
            height={400}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
