import Image from "next/image";

export default function PerformanceMarketingHero() {
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
            className="text-sm font-semibold"
            style={{ color: "var(--theme-grey)" }}
          >
            Performance Marketing
          </h4>

          <h2
            className="text-3xl md:text-4xl font-bold mt-2"
            style={{ color: "var(--theme-heading)" }}
          >
            Maximize Your ROI with Data-Driven Performance Marketing
          </h2>

          <p
            className="text-xl font-bold mt-4"
            style={{ color: "var(--theme-primary)" }}
          >
            Want to generate high quality leads and scale your business?
          </p>

          <p className="mt-4" style={{ color: "var(--theme-text)" }}>
            Our performance marketing strategies are proven to deliver superior
            ROI for maximum impact & scalability. We use meaningful insights to
            refine targeting and precision to optimize the measurable results
            across Google Ads, Meta Ads, LinkedIn Ads, and more.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button
              className="text-white font-semibold py-2 px-6 rounded"
              style={{
                backgroundColor: "var(--theme-primary)",
                color: "#fff",
              }}
            >
              Let’s Connect
            </button>
            <button
              className="font-semibold py-2 px-6 rounded"
              style={{
                backgroundColor: "#000",
                color: "#fff",
              }}
            >
              See Our Work
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/images/services/digital-marketing/performance-marketing/hero.png"
            alt="Performance Marketing Illustration"
            width={500}
            height={400}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
