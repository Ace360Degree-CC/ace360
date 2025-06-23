import Image from "next/image";

export default function ContactInfo() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Left Side Image */}
        <div className="w-full">
          <Image
            src="/images/contact/team.png" // Update this path as needed
            alt="Team using mobile devices"
            width={500}
            height={350}
            className="rounded-lg object-cover w-full"
          />
        </div>

        {/* Right Side Contact Details */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-800 underline decoration-[var(--theme-primary)]">
            Contact Information
          </h2>
          <p className="text-sm text-gray-700 mb-2">
            <strong>Address:</strong> B1 Upper, Workspace, Chincholi Bunder
            Road, New Link Rd, Malad West, Mumbai, Maharashtra 400064
          </p>
          <p className="text-sm text-gray-700 mb-2">
            <strong>Phone Number:</strong> +91-7045 202 500
          </p>
          <p className="text-sm text-gray-700 mb-2">
            <strong>Landline Number:</strong> +022-44 020 200
          </p>
          <p className="text-sm text-gray-700">
            <strong>Email:</strong> info@ace360.com
          </p>
        </div>
      </div>
    </section>
  );
}
