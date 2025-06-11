'use client'

export default function Blog() {
  const blogs = [
    {
      title: '8 Principles of Design (and a way to use them)',
      linkText: '8 Principles of Designs',
      linkHref: '#',
      learnMore: 'Read More about:',
      image: '/images/brandNaming/8-principles.png',
    },
    {
      title: 'Advantages of Digital Marketing that may Help Your Business',
      linkText: 'Digital marketing Advantages',
      linkHref: '#',
      learnMore: 'Learn More about:',
      image: '/images/brandNaming/advantages.png',
    },
    {
      title: 'Advantages of getting your own Ecommerce Website',
      linkText: 'Advantages of E-Commerce Website',
      linkHref: '#',
      learnMore: 'Learn More about:',
      image: '/images/brandNaming/ecommerce.png',
    },
  ];

  return (
    <section className="bg-white py-12 px-4 text-[#212529]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-bold mb-8">Read Our Blogs</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <div className="w-full h-40 mb-4">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-semibold text-md mb-2">{blog.title}</h3>
              <p className="text-sm text-[#495057]">
                {blog.learnMore}{' '}
                <a
                  href={blog.linkHref}
                  className="text-[#F2A300] font-medium hover:underline"
                >
                  {blog.linkText}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
