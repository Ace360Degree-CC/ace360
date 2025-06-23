"use client";

export default function BrandNaming() {
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#212529] mb-4">
            Brand Naming
          </h2>
          <p className="text-[#212529] mb-4">
            It is important to establish your brand name with a distinct
            identity in order to stand out from the crowd. In the business
            world, the first step in naming your brand, the brand name is a
            crucial consideration as well as an essential part of the branding
            strategy.
          </p>
          <p className="text-[#212529] mb-4">
            Furthermore, given the conditions, brand-naming might be
            challenging. Many people think of an out-of-context approach when
            choosing a brand name, which may lead to you missing out on a better
            name that is consistent with your branding goals. A great brand name
            has a direct link to brand’s products or services. More people are
            attracted to companies with names that match their services.
          </p>
          <p className="text-[#212529]">
            A naming agency can help you come up with a name for your business.
            Our company’s service includes brand naming, verbal typography or
            brand tone in Mumbai, India, and we help our clients to generate
            brand-naming ideas for any niche or competition, specific to your
            category and{" "}
            <a href="#" className="text-blue-600 hover:underline">
              branding strategy
            </a>
            .
          </p>
        </div>

        {/* Image Section */}
        <div>
          <img
            src="/images/brandNaming/brand.png"
            alt="Brand Naming Visual"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Second Section: What is Branding */}
      <div className="max-w-7xl mx-auto mt-12">
        <h3 className="text-xl md:text-2xl font-bold text-[#212529] mb-4">
          What is Branding?
        </h3>
        <p className="text-[#212529]">
          Branding is essential to distinguish your company. It&rsquo;s the way
          your customers recognize you and interact with you. A good brand name
          is more than a logo; it is represented in everything from your
          customer service approach, employee uniforms, business cards, and
          location to your marketing materials and advertising.
        </p>
      </div>
    </section>
  );
}
