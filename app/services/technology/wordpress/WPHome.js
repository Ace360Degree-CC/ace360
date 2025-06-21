import Image from "next/image";

export default function WPHome() {
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
            Wordpress
          </h4>

          <h2
            className="text-lg md:text-2xl mt-2"
            style={{ color: "var(--theme-heading)" }}
          >
            Build, Optimize & Scale
          </h2>

          <p className="text-4xl font-abril mt-4" style={{ color: "#F2A300" }}>
            Power your online presence with a custom-built,
          </p>

          <p className="mt-4" style={{ color: "var(--theme-text)" }}>
            SEO-optimized WordPress website designed for performance,
            flexibility, and ease of management. At Ace360degree, we create
            fast, secure, and scalable WordPress websites that drive engagement
            and business growth.
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
            src="/images/services/technology/wordpress/wordpress.png"
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
