export default function SuccessStories() {
  return (
    <section className="py-16 px-4 bg-white text-center ">
      <h4 className="text-xl py-2 inline uppercase text-[var(--theme-text)]  border-b-[2px] border-[var(--theme-primary)] pb-1">
        Why Choose Us
      </h4>
      <h2 className="text-3xl md:text-4xl  mt-2 mb-6 text-[var(--theme-text)]">
        Success Stories & Client Results
      </h2>
      <p className="max-w-2xl mx-auto text-gray-700 mb-12">
        Unlock Your Digital Potential. Choose ROI-Boosting Solutions for 10X
        Elevation. Our commitment to your success goes beyond strategy – we work
        comprehensively to drive strategic efforts every step of the way. With
        tailored business planning, consistent reviews, and sustainable growth,
        we ensure your website not only thrives but also outperforms on
        conversions, making us your trusted partner in navigating the dynamic
        world of SEO.
      </p>
      <div className="flex justify-center">
        <div className="grid md:grid-cols-3 gap-8 ">
          {/* Card 1 */}
          <div className="bg-[#FBE4B5] w-60  p-6 rounded-tl-2xl rounded-br-2xl shadow-md">
            <div className="mb-4">
              <img
                src="/images/success-stories/bulb.png"
                alt="Proven Results"
                className="mx-auto w-24 h-24"
              />
            </div>
            <h3 className="text-xl text-[var(--theme-text)] font-semibold mb-2">
              Proven Results
            </h3>
            <p className="text-gray-800">
              Designed a Brochure that increased Customer Inquiries by 80%
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-[#FBE4B5] p-6 w-60 rounded-tl-2xl rounded-br-2xl shadow-md">
            <div className="mb-4">
              <img
                src="/images/success-stories/chat.png"
                alt="Data Driven"
                className="mx-auto w-24 h-24"
              />
            </div>
            <h3 className="text-xl text-[var(--theme-text)] font-semibold mb-2">
              Data-Driven Approach
            </h3>
            <p className="text-gray-800">
              Created High-Impact Presentation Deck for a Successful Investor
              Pitch
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-[#FBE4B5] p-6  w-60 rounded-tl-2xl rounded-br-2xl shadow-md">
            <div className="mb-4">
              <img
                src="/images/success-stories/tailor-solution.png"
                alt="Tailored Solutions"
                className="mx-auto w-24 h-24"
              />
            </div>
            <h3 className="text-xl text-[var(--theme-text)] font-semibold mb-2">
              Tailored Solutions
            </h3>
            <p className="text-gray-800">
              Launched a Brand with Eye-Catching Stationery & Merchandise
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
