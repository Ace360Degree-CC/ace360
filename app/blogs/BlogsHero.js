import Image from "next/image";

export default function BlogsHero() {
  return (
    <section className="py-16  bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center px-4 md:px-0">
        {/* Left Column - Text */}
        <div>
          <h2 className="text-xl font-semibold text-[var(--theme-primary)] mb-2">
            Ace360degree Blog
            <span className="text-gray-800 font-semibold">
              {" "}
              – Insights, Trends & Strategies for Digital Success
            </span>
          </h2>
          <p className="text-gray-700 mb-4">
            In the fast-evolving digital world, staying ahead is not an
            option—it's a necessity. At Ace360degree, we decode digital
            marketing, branding, and technology to help you grow, engage, and
            outperform the competition.
          </p>
        </div>

        {/* Right Column - Image */}
        <div className="flex justify-center">
          <Image
            src="/images/blogs/money-stack.png" // Make sure this image is in /public/blog/
            alt="Money stack"
            width={400}
            height={300}
            className="rounded-md object-contain"
          />
        </div>
      </div>

      {/* Yellow Bottom Strip */}
      <div className="mt-10 bg-[var(--theme-primary)] text-black text-center py-4 flex justify-center  md:text-base font-medium ">
        <div className="max-w-2/4 text-lg ">
          Discover expert insights, actionable strategies, and the latest trends
          that drive real results. Whether you're looking to boost SEO rankings,
          elevate your brand, or leverage cutting-edge tech, you’ll find
          everything you need right here.
        </div>
      </div>
    </section>
  );
}
