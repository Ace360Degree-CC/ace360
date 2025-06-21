'use client'

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Why brand naming is important?',
    answer: 'Brand naming creates a unique identity, builds recognition, and sets your product or service apart in a competitive market.'
  },
  {
    question: 'How do you come up with a brand name?',
    answer: 'We research your brand’s goals, audience, and market, then brainstorm creative, meaningful, and memorable names.'
  },
  {
    question: 'How long it will take to get the brand naming?',
    answer: 'It typically takes 5–10 business days depending on the scope and complexity of the project.'
  },
  {
    question: 'Does your company also rename the brand?',
    answer: 'Yes, we also offer rebranding services including renaming, repositioning, and visual identity refresh.'
  },
  {
    question: 'What are the Charges and Mode of Payment?',
    answer: 'Charges vary based on services selected. Payment can be made via bank transfer, UPI, or other preferred methods.'
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#212529] text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-bold mb-6">FAQs</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded overflow-hidden border-l-[3px] border-white"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center bg-[#F2A300] text-[#212529] px-4 py-3 font-medium"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="bg-white text-[#212121] px-4 pb-4 text-sm p-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
