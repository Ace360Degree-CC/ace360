import Image from "next/image";
import { notFound } from "next/navigation";

/* ───────────────────────────────────────────────────
   1️⃣  Blog DATA (put in /lib/blogData.js later if you like)
   ─────────────────────────────────────────────────── */
const blogs = [
  {
    slug: "navigating-the-digital-frontier",
    title: "Navigating the Digital Frontier",
    image: "/images/blogs/navigation-the-digital-frontier.png",
    content: [
      { type: "heading", text: "Welcome to the Digital Frontier" },

      {
        type: "paragraph",
        text: "The modern digital world moves fast—and staying ahead requires clarity, adaptability, and strategy.",
      },

      { type: "subtitle", text: "Key Insights" },

      {
        type: "list",
        items: [
          "Embrace a digital-first mindset",
          "Leverage data for decision-making",
          "Prioritize user-centric design & experience",
        ],
      },

      {
        type: "paragraph",
        text: "At Ace360degree, we partner with brands to help them not just navigate, but thrive across today’s digital terrain.",
      },

      { type: "subtitle", text: "Next Steps" },

      {
        type: "paragraph",
        text: "Make sure your brand story is aligned with your digital experience. This blog is only the beginning.",
      },
    ],
  },

  {
    slug: "unlocking-the-power-of-seo",
    title: "Unlocking the Power of SEO",
    image: "/images/blogs/unlocking-the-power-of-seo.png",
    content: [
      { type: "heading", text: "SEO Is More Than Keywords" },

      {
        type: "paragraph",
        text: "To truly unlock SEO power, you must understand your users and align with their intent.",
      },

      { type: "subtitle", text: "Tactics to Explore" },

      {
        type: "list",
        items: [
          "On-page content strategy",
          "Technical health & crawlability",
          "Backlink authority and E-E-A-T signals",
        ],
      },
    ],
  },
];

/* ───────────────────────────────────────────────────
   2️⃣  generateStaticParams (App Router SSG)
   ─────────────────────────────────────────────────── */
export async function generateStaticParams() {
  return blogs.map(({ slug }) => ({ slug }));
}

/* ───────────────────────────────────────────────────
   3️⃣  Page Component
   ─────────────────────────────────────────────────── */
export default function BlogInnerPage({ params }) {
  const blog = blogs.find((b) => b.slug === params.slug);
  if (!blog) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-gray-800">
      {/* Main Title (already bold) */}
      <h1 className="text-3xl font-bold mb-8 text-[var(--theme-text)]">
        {blog.title}
      </h1>

      {/* Cover Image */}
      <div className="relative w-full h-64 mb-10">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-contain rounded shadow-md"
        />
      </div>

      {/* Content Renderer */}
      <article className="space-y-6">
        {blog.content.map((block, idx) => {
          switch (block.type) {
            case "heading":
              return (
                <h2
                  key={idx}
                  className="text-2xl font-bold text-[var(--theme-primary)]"
                >
                  {block.text}
                </h2>
              );

            case "subtitle":
              return (
                <h3 key={idx} className="text-xl font-semibold">
                  {block.text}
                </h3>
              );

            case "paragraph":
              return <p key={idx}>{block.text}</p>;

            case "list":
              return (
                <ul key={idx} className="list-disc ml-5 space-y-1">
                  {block.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              );

            default:
              return null;
          }
        })}
      </article>
    </div>
  );
}
