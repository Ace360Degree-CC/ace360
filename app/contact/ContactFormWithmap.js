export default function ContactFormWithMap() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Let’s <span className="text-[var(--theme-primary)]">Talk</span>
        </h2>
        <p className="text-sm text-gray-600 mt-2">
          Got an idea? Have questions about our services? Simply reach out via
          the form below and our team will get back to you ASAP.
        </p>
      </div>

      {/* Grid: Form and Map */}
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Contact Form */}
        <div className="border p-6 rounded-md shadow-sm">
          <h3 className="text-lg font-bold text-[var(--theme-primary)] mb-1">
            Have An Idea?
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            Let&apos;s Build It Together
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name*"
              className="w-full border border-gray-300 px-4 py-2 rounded text-sm bg-gray-200 text-black"
              required
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full border border-gray-300 px-4 py-2 rounded text-sm bg-gray-200 text-black"
              required
            />
            <textarea
              placeholder="Write a message"
              rows={4}
              className="w-full border border-gray-300 px-4 py-2 rounded text-sm bg-gray-200 text-black"
            ></textarea>
            <select className="w-full border border-gray-300 px-4 py-2 rounded text-sm bg-gray-200 text-black">
              <option>How did you hear about us?</option>
              <option>Google</option>
              <option>LinkedIn</option>
              <option>Referral</option>
            </select>
            <select className="w-full border border-gray-300 px-4 py-2 rounded text-sm bg-gray-200 text-black">
              <option>I am interested in...</option>
              <option>Website Development</option>
              <option>SEO</option>
              <option>Branding</option>
              <option>Digital Strategy</option>
            </select>
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold text-sm px-6 py-2 rounded bg-gray-200 text-black"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Google Map Embed */}
        <div className="w-full h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.448869406302!2d72.84238317455278!3d19.13142568207902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b70cbdf0c2af%3A0xd4769d3850320935!2sAce360degree%20-%20Digital%20Solutions!5e0!3m2!1sen!2sin!4v1718342268263!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="rounded-md border-0"
          ></iframe>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="text-center mt-12">
        <h3 className="text-md font-semibold text-gray-800 mb-2">
          Connect on Social Media
        </h3>
        <p className="text-sm text-gray-600 mb-2">
          Stay inspired and keep up with the latest industry insights, success
          stories, and digital trends by following us on:
        </p>
        <div className="space-x-4 text-sm font-medium">
          <a href="#" className="text-[var(--theme-primary)] hover:underline">
            Facebook
          </a>
          <a href="#" className="text-[var(--theme-primary)] hover:underline">
            Instagram
          </a>
          <a href="#" className="text-[var(--theme-primary)] hover:underline">
            LinkedIn
          </a>
          <a href="#" className="text-[var(--theme-primary)] hover:underline">
            Twitter
          </a>
        </div>
      </div>
    </section>
  );
}
