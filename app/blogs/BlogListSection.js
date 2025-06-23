import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    title: "Navigating the Digital Frontier",
    desc: "Insights from Ace360degree's blog for a smarter approach to branding, and technology.",
    linkText: "Navigating the Digital Frontier",
    image: "/images/blogs/navigation-the-digital-frontier.png",
    slug: "navigating-the-digital-frontier",
  },
  {
    title: "Unlocking the Power of SEO",
    desc: "A Guide to Boosting Your Online Visibility.",
    linkText: "Unlocking the Power of SEO",
    image: "/images/blogs/unlocking-the-power-of-seo.png",
    slug: "unlocking-the-power-of-seo",
  },
  {
    title: "Demystifying SEO",
    desc: "Top 5 Tips for Search Rankings.",
    linkText: "Demystifying SEO",
    image: "/images/blogs/demstifying-seo.png",
    slug: "demystifying-seo",
  },
  {
    title: "Mastering the Art of Search",
    desc: "Simple strategies to skyrocket rankings.",
    linkText: "Mastering the Art of Search",
    image: "/images/blogs/mastering-art-of-search.png",
    slug: "mastering-the-art-of-search",
  },
  {
    title: "SEO Essentials",
    desc: "A Closer Dive into Optimizing Your Site Structure.",
    linkText: "SEO Essentials",
    image: "/images/blogs/seo-essential.png",
    slug: "seo-essentials",
  },
  {
    title: "Navigating the SEO Landscape",
    desc: "Trends, Tools, and Tactics.",
    linkText: "Navigating the SEO Landscape",
    image: "/images/blogs/navigation-the-seo-lanscape.png",
    slug: "navigating-the-seo-landscape",
  },
];

export default function BlogListSection() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto  ">
      <h2 className="text-2xl font-semibold text-center mb-1 text-[var(--theme-text)]">
        List of Blogs
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 shadow-2xl hover:shadow-md transition-shadow duration-200"
          >
            <div className="w-full h-40 relative mb-4">
              <Image
                src={blog.image}
                alt={blog.title}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {blog.title}
            </h3>
            <p className="text-sm text-gray-600 mb-3">{blog.desc}</p>
            <p className="text-sm">
              Read more about{" "}
              <Link
                href={`/blogs/${blog.slug}`}
                className="text-[var(--theme-primary)] hover:underline font-medium"
              >
                {blog.linkText}
              </Link>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
