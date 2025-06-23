export default function WeAreHiring() {
  const jobs = [
    "HR Executive",
    "HR Intern",
    "Sales Cum Client Servicing Executive",
    "SEO Executive",
    "Social Media Executive",
    "Digital Marketing Executive",
    "Telecalling Executive",
    "Mobile App Developer",
    "Graphics Designer",
    "Backend Developer",
    "Frontend Developer",
    "Content writer",
    "Business Development Executive",
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 border-t border-yellow-500 pt-10">
        {/* Left Side - Welcome Text */}
        <div>
          <div className="bg-[var(--theme-primary)] text-white font-semibold px-6 py-2 inline-block text-lg rounded-sm mb-4">
            Welcome aboard!
          </div>
          <p className="text-gray-700 mb-4">
            We respect these bunch of geeks. So, if you want to be part of this
            journey.
          </p>
          <p className="text-gray-700">
            <strong>Ace 360°</strong> is not a single person-centric company,
            but it is a place where every person’s ideas are processed on a
            common platform.
          </p>
        </div>

        {/* Right Side - Job Listings */}
        <div className="md:pl-10 border-l border-yellow-500">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Join Us</h3>
          <p className="text-sm text-gray-600 mb-4">
            Are you looking forward to work with us? If you are willing to join
            us, send your resume at{" "}
            <a
              href="mailto:career@a360pl.com"
              className="text-[var(--theme-primary)] font-medium underline"
            >
              career@a360pl.com
            </a>{" "}
            and connect with us at{" "}
            <a
              href="tel:+918452833606"
              className="text-yellow-500 font-medium underline"
            >
              +91 84528 33606
            </a>
          </p>
          <ul className="list-none space-y-1 text-sm">
            {jobs.map((job, idx) => (
              <li key={idx} className="flex items-center gap-2 text-gray-800">
                <span className="text-orange-500">›</span>
                {job}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
