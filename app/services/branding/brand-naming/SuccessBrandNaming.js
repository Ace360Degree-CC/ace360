const SuccessBrandNaming = () => {
  return (
    <section className="py-16 px-4 bg-white text-center ">
      <h4 className="text-xl py-2 inline uppercase text-[var(--theme-text)]  border-b-[2px] border-[var(--theme-primary)] pb-1">
        Why Choose Us
      </h4>
      <h2 className="text-3xl md:text-4xl  mt-2 mb-6 text-[var(--theme-text)]">
        Success Stories & Client Results
      </h2>
      <p className="max-w-2xl mx-auto text-gray-700 mb-12">
        Unlock Your Digital Potential: Choose Ace360Degree for SEO Excellence.
        Our commitment to your success goes beyond rankings – we craft
        comprehensive SEO strategies that align with your business goals. With a
        focus on technical precision, content relevance, and sustainable growth,
        we ensure your website not only attracts traffic but engages and
        converts, making us your trusted partner in navigating the dynamic world
        of SEO.
      </p>

      <div className="flex justify-center">
        <div className="grid md:grid-cols-3 gap-8 ">
          {/* Card 1 */}
          <div className="bg-[#FBE4B5] w-60  p-6 rounded-tl-2xl rounded-br-2xl shadow-md">
            <div className="mb-4">
              <img
                src="/images/services/branding/brand-naming/proven.png"
                alt="Proven Results"
                className="mx-auto w-24 h-24"
              />
            </div>
            <h3 className="text-xl text-[var(--theme-text)] font-semibold mb-2">
              Proven Results
            </h3>
            <p className="text-gray-800">
              Created a Unique Brand Name with 95% Positive Consumer Response
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#FBE4B5] p-6 w-60 rounded-tl-2xl rounded-br-2xl shadow-md">
            <div className="mb-4">
              <img
                src="/images/services/branding/brand-naming/data-driven.png"
                alt="Data Driven"
                className="mx-auto w-24 h-24"
              />
            </div>
            <h3 className="text-xl text-[var(--theme-text)] font-semibold mb-2">
              Data-Driven Approach
            </h3>
            <p className="text-gray-800">
              Successfully Trademarked & Launched in Global Markets
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#FBE4B5] p-6  w-60 rounded-tl-2xl rounded-br-2xl shadow-md">
            <div className="mb-4">
              <img
                src="/images/services/branding/brand-naming/tailor-solution.png"
                alt="Tailored Solutions"
                className="mx-auto w-24 h-24"
              />
            </div>
            <h3 className="text-xl text-[var(--theme-text)] font-semibold mb-2">
              Tailored Solutions
            </h3>
            <p className="text-gray-800">
              Increased Brand Awareness by 50% with Strategic Rebranding
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessBrandNaming;
