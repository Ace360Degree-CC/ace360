"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Irfaan Shaikh",
      title: "Director",
      company: "Amigo Academy Pvt. Ltd.",
      feedback:
        "Ace360degree is a great company to work with. The team is very helpful, always prompt in responding to messages and highly efficient. We are very happy to work with Ace360degree and its team.",
    },
    {
      name: "Neha Mehta",
      title: "Founder & CEO",
      company: "GlowSkincare Co.",
      feedback:
        "Partnering with Ace360degree has transformed our online presence. Their creative team delivered exactly what we envisioned — fast, professional, and with great attention to detail.",
    },
    {
      name: "Rahul Verma",
      title: "Marketing Head",
      company: "TechNova Solutions",
      feedback:
        "We had tight deadlines and high expectations, but Ace360degree delivered every time. Their commitment and creativity made them feel like an extension of our in-house team.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section>
      <div className="bg-white py-16 px-6" id="testimonials">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Text Section */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#545454] mb-4">
              What Our Clients
              <br /> Says About Us
            </h2>
            <p className="text-[#525252] text-sm md:text-base mb-4">
              Our clients love us because we&apos;re a team of professionals who
              understand the best way to get work done is by working together.
              We stay in touch with our clients, always giving them the most
              up-to-date information and offering advice on what works best for
              their business.
            </p>
            <p className="text-[#525252] text-sm md:text-base">
              We&apos;ll even go so far as to provide them with resources if
              they need it, or help them find the right people for their needs.
              We&apos;re here to make sure your business keeps running smoothly,
              and we want you to feel like you can ask us anything!
            </p>
          </div>

          {/* Right Testimonial Carousel */}
          <Slider {...settings}>
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="border-3 border-[#F2A300] rounded-md p-6 shadow-2xl"
              >
                <p className="text-sm text-[#525252] mb-4">{t.feedback}</p>
                <div className="flex items-center justify-end mt-4 gap-4">
                  <div className="text-right">
                    <p className="font-semibold text-[#343A40]">- {t.name}</p>
                    <p className="text-[#545454] font-bold text-sm">
                      {t.title}
                    </p>
                    <p className="text-[#F2A300] font-bold">{t.company}</p>
                  </div>
                  <div className="w-10 h-10 border-2 border-[#F2A300] rounded-full"></div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="bg-[#F2A300] py-5 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h2 className="text-3xl text-[#525252]">Success Stories</h2>
          <button className="bg-[#343A40] text-white font-semibold px-6 py-2 rounded-[50px] hover:bg-[#1e1e1e] transition">
            Get On Board
          </button>
        </div>
      </div>

      <style jsx global>{`
        .slick-dots li button:before {
          color: #f2a300 !important;
          opacity: 0.5;
          font-size: 12px;
        }
        .slick-dots li.slick-active button:before {
          color: #f2a300 !important;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
