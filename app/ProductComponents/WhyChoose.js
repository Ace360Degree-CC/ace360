'use client'

export default function WhyChoose() {
  const features = [
    {
      title: 'SaaS Experts',
      description: 'Tailor-made solutions built for efficiency and scalability.',
      icon: '/images/product/sasas.png',
    },
    {
      title: 'User-First Approach',
      description: 'Intuitive, high-performance platforms designed for real-world use.',
      icon: '/images/product/technical.png',
    },
    {
      title: 'End-to-End Support',
      description: 'From development to deployment, we ensure seamless integration and ongoing optimization.',
      icon: '/images/product/business.png',
    },
    {
      title: 'Proven Success',
      description: 'Trusted by businesses to drive productivity and growth.',
      icon: '/images/product/colabpartner.png',
    },
  ]

  return (
    <section className="bg-[linear-gradient(to_right,#363636,#141414)] py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Why Choose Us</h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4">
              <img src={feature.icon} alt={feature.title} className="w-12 h-12" />
              <h3 className="text-lg font-semibold text-[#F2A300]">{feature.title}</h3>
              <p className="text-white text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
