'use client'

export default function BrandBenefits() {
  return (
    <section className="bg-[#E9ECEF] py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-[#212529] mb-4">
            Benefits of Brand Naming.
          </h2>
          <ul className="text-[#212529] space-y-4">
            <li>Make the distinction yourself from the competition.</li>
            <li>
              The most significant component of the business is brand branding since it demonstrates the worth of the
              service you offer.
            </li>
            <li>
              Many of your prospective clients may be unfamiliar with your company, product, or service, and a great brand
              name may do a wonderful first impression and open doors.
            </li>
            <li>
              The technique is challenging, but if you find a decent name that you like, don’t let it go and make sure to
              utilize it.
            </li>
          </ul>

          <h3 className="text-lg md:text-xl font-bold text-[#212529] mt-10 mb-4">
            Thing to keep in mind before the brand name
          </h3>
          <p className="text-[#212529] mb-4">
            Always research the sector in which the brand is competing and thoroughly evaluate the buying cycles as well as
            other industry factors.
          </p>
          <ul className="text-[#212529] list-disc pl-6 space-y-2">
            <li>It should market-exclusive.</li>
            <li>It should simple and memorable.</li>
            <li>It should appropriate for the product or industry category.</li>
            <li>It should not be tough to recall or difficult to find.</li>
            <li>It should linked to and can connect to audience with it.</li>
            <li>Audience amenable to it with brand identity.</li>
          </ul>
        </div>

        {/* Image Section */}
        <div>
          <img
            src="/images/brandNaming/naming.png"
            alt="Brand Naming Illustration"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}
