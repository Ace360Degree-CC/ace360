export default function Testimonials(){
    return(
        <section>


            {/* Section 9: Testimonials */}
      
      <div className="bg-white py-16 px-6" id="testimonials">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Text Section */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#545454] mb-4">
              What Our Clients<br /> Says About Us
            </h2>
            <p className="text-[#525252] text-sm md:text-base mb-4">
              Our clients love us because we're a team of professionals who understand the best way to get work done is by working together. We stay in touch with our clients, always giving them the most up-to-date information and offering advice on what works best for their business.
            </p>
            <p className="text-[#525252] text-sm md:text-base">
              We'll even go so far as to provide them with resources if they need it, or help them find the right people for their needs. We're here to make sure your business keeps running smoothly, and we want you to feel like you can ask us anything!
            </p>
          </div>

          {/* Right Testimonial Card */}
          <div className="border border-[#F2A300] rounded-md p-6 relative shadow-md">
            {/* <div className="text-5xl text-[#343A40] leading-none mb-2">&#8220;</div> */}
            <p className="text-sm text-[#525252] mb-4">
              Ace360degree is a great company to work with. The team is very helpful, always prompt in responding to messages and highly efficient.<br />
              We are very happy to work with Ace360degree and its team.
            </p>
            <div className="flex items-center justify-end mt-4 gap-4">
              {/* Client Image */}

              <div className="text-right">
                <p className="font-semibold text-[#343A40]">- Irfaan Shaikh</p>
                <p className="text-[#545454] font-bold text-sm">Director</p>
                <p className="text-[#F2A300] font-bold ">Amigo Academy Pvt. Ltd.</p>
              </div>
              <div className="w-10 h-10 border-2 border-[#F2A300] rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center space-x-2">
            <span className="w-4 h-2 rounded-full bg-[#F2A300]"></span>
            {[...Array(10)].map((_, i) => (
              <span key={i} className="w-2 h-2 rounded-full bg-gray-300"></span>
            ))}
          </div>
        </div>
      </div>

      {/* Section 10: Success Stories */}
      <div className="bg-[#F2A300] py-5 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h2 className="text-3xl text-[#525252]">Success Stories</h2>
          <button className="bg-[#343A40] text-white font-semibold px-6 py-2 rounded-[50px] hover:bg-[#1e1e1e] transition">
            Get On Board
          </button>
        </div>
      </div>




        </section>
    );
}