import Image from "next/image";
import { notFound } from "next/navigation";

const portfolioItems = [
  {
    name: "MOS Utility Ltd",
    image: "/images/portfolio/mos.png",
    slug: "mos-utility",
    content: {
      intro: `Elevating MOS Utility Ltd.'s Digital Presence with Ace360degree
            Hook: Transforming Engagement & Growth Through Digital Innovation
            In the fast-evolving world of fintech and utility services, clear communication and a strong digital presence are essential.
            For MOS Utility Ltd., a leader in utility services, fintech solutions, and B2B digital services, the challenge was ensuring their vast network of agents, distributors, and customers understood and engaged with their ever-growing portfolio of services.
            How do you make complex services accessible, market new offerings effectively, and drive measurable digital growth? This is where Ace360degree stepped in.`,
      about: `MOS Utility Ltd. is a trusted name in B2B utility and financial services, providing seamless digital solutions across recharges, bill payments, travel bookings, banking services, and more.
            With a robust presence in the industry, MOS Utility empowers businesses and individual agents with technology-driven financial services to enhance convenience and profitability.
            With rapid expansion and an increasing number of services, the need for compelling content, digital marketing, and a well-optimized online presence became critical to maintaining engagement and business growth`,
      challenge: {
        intro: `As MOS Utility Ltd. scaled its operations, several challenges emerged:`,
        points: [
          {
            bold: "Service Awareness",
            text: "With multiple products and services, it was challenging to educate agents, distributors, and end-users about their offerings.",
          },
          {
            bold: "Consistent Branding & Messaging",
            text: "Needed a structured way to communicate new product launches and updates.",
          },
          {
            bold: "Website Optimization",
            text: "Ensuring a seamless digital experience and enhanced visibility through SEO.",
          },
          {
            bold: "Paid Advertising Performance",
            text: "Driving quality leads and conversions through Google Ads & Meta Ads.",
          },
          {
            bold: "Ongoing Content Needs",
            text: "Creating engaging content for explainer videos, event coverage, and social media campaigns.",
          },
        ],
        closing: `MOS needed a reliable digital partner to bridge the gap between product innovation and market adoption—and Ace360degree was ready to deliver.`,
      },
      solution: {
        tagline: "Ace360degree’s Strategic Approach",
        items: [
          {
            title: "[1] Service Explainer Videos",
            points: [
              "Our journey with MOS Utility Ltd. began with high-quality explainer videos, simplifying their services for agents, distributors, and master distributors.",
              "These videos made it easier for stakeholders to understand and adopt new services, improving customer engagement.",
            ],
          },
          {
            title: "[2] 14-Year Celebration Event Coverage",
            points: [
              "We covered MOS Utility’s 14-year anniversary, showcasing their achievements, milestones, and future vision through engaging digital content.",
            ],
          },
          {
            title: "[3] Website Development & SEO Optimization",
            points: [
              "Developed a user-friendly, modern website that reflects MOS Utility’s brand identity and service offerings.",
              "Implemented SEO strategies to enhance organic search visibility, improve traffic, and lead generation.",
            ],
          },
          {
            title: "[4] Paid Performance Marketing – Google & Meta Ads",
            points: [
              "Launched Google Ads & Meta Ads campaigns, driving quality leads and conversions.",
              "Optimized campaigns regularly to ensure maximum ROI and audience engagement.",
            ],
          },
          {
            title: "[5] Ongoing Product & Store Launch Campaigns",
            points: [
              "From new product videos to store launches, we’ve been a part of every milestone, ensuring a strong market presence.",
              "Created engaging promotional content that resonates with MOS’s audience and enhances brand recall.",
            ],
          },
        ],
      },
      roadmap: {
        intro: `What’s Next?

        The partnership between Ace360degree & MOS Utility Ltd. continues to evolve. Here’s how we plan to further enhance their digital presence and brand authority:`,
        points: [
          {
            bold: "Scaling SEO & Performance Marketing",
            text: "Expanding Google & Meta Ads strategies for higher visibility and engagement.",
          },
          {
            bold: "360° Digital Branding & Storytelling",
            text: "Strengthening brand communication through motion graphics, social media, and thought leadership content.",
          },
          {
            bold: "Advanced Analytics & Optimization",
            text: "Leveraging data insights to improve campaign performance and drive higher conversions.",
          },
          {
            bold: "Expansion into AI-Powered Solutions",
            text: "Exploring automation and AI-driven tools for customer engagement & lead generation.",
          },
        ],
      },
      conclusion: `From service explainer videos to full-scale digital marketing, Ace360degree has played a key role in MOS Utility Ltd.'s digital transformation. Our collaborative approach has helped MOS improve brand awareness, enhance digital engagement, and drive measurable business growth.
                    Need a partner to elevate your brand’s digital presence? Let’s connect and create success together!`,
    },
  },
];

export async function generateStaticParams() {
  return portfolioItems.map((item) => ({ slug: item.slug }));
}

export default function PortfolioItemPage({ params }) {
  const item = portfolioItems.find((p) => p.slug === params.slug);
  if (!item) notFound();

  const { name, image, content } = item;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-gray-700">{name}</h1>

      {/* 3-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1: Image + Intro */}
        <div>
          <Image
            src={image}
            alt={name}
            width={500}
            height={300}
            className="rounded-md shadow-md mb-6 w-full h-auto"
          />
          <p className="text-gray-700 text-lg">{content.intro}</p>
        </div>

        {/* Column 2: About + Solution */}
        <div className="space-y-6">
          <Section title={`About ${name}`} text={content.about} />
          <Section title="The Solution">
            {content.solution.tagline && (
              <p className="italic text-gray-700 mb-4">
                {content.solution.tagline}
              </p>
            )}
            <div className="space-y-5 text-gray-700">
              {content.solution.items.map((item, index) => (
                <div key={index}>
                  <p className="font-semibold">{item.title}</p>
                  <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
                    {item.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>
        </div>

        {/* Column 3: Challenge + Roadmap + Conclusion */}
        <div className="space-y-6">
          <Section title="The Challenge">
            <p className="text-gray-700 mb-4">{content.challenge.intro}</p>
            <div className="text-gray-700 space-y-3">
              {content.challenge.points.map((item, idx) => (
                <p key={idx}>
                  <strong>{item.bold}</strong> – {item.text}
                </p>
              ))}
            </div>
            <p className="text-gray-700 mt-4">{content.challenge.closing}</p>
          </Section>

          <Section title="The Roadmap">
            <p className="text-gray-700 mb-4 whitespace-pre-line">
              {content.roadmap.intro}
            </p>
            <div className="text-gray-700 space-y-3">
              {content.roadmap.points.map((item, idx) => (
                <p key={idx}>
                  <strong>{item.bold}</strong> – {item.text}
                </p>
              ))}
            </div>
          </Section>

          <Section title="Conclusion" text={content.conclusion} />
        </div>
      </div>
    </div>
  );
}

function Section({ title, text, children }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-[var(--theme-primary)] mb-2">
        {title}
      </h2>
      {text && <p className="text-gray-700">{text}</p>}
      {children}
    </div>
  );
}
