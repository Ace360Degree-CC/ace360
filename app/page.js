import Data from "./homecomponents/Data";
import HomeHeroSection from "./homecomponents/hero";
import Sponsorship from "./homecomponents/Sponsorship";
import Testimonials from "./homecomponents/__Temp__";
import DigitalMarketing from "./homecomponents/DigitalMarketing";
import Branding from "./ServiceComponents/Branding";
import MeetDicuss from "./homecomponents/MeetDicuss";
import HomeBrand from "./homecomponents/HomeBrand";
import HomeTechnology from "./homecomponents/HomeTechnology";

export default function Page() {
  return (
    <div className="bg-[#FCF5EB]">
      {/* Section 1 */}
      <HomeHeroSection />
      <Data />
      <DigitalMarketing />
      <HomeBrand />
      <HomeTechnology />

      {/* section 6 */}

      <div className="bg-[#343A40] py-12 px-4">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-[#F2A300] mb-4">
            Future-Proof Your Business with Powerful SaaS Solutions
          </h2>
          <p className="text-[#ffffff] text-lg">
            At Ace360degree, we streamline operations, enhance efficiency, and
            drive growth with cutting-edge SaaS products. Our solutions empower
            businesses with automation, collaboration, and performance
            optimization.
          </p>
        </div>

        {/* Cards Section */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              img: "/images/home/task master.png",
              title: "Smart Automation",
              desc: "Automate workflows and save time with intelligent systems tailored to your business.",
            },
            {
              img: "/images/home/lead management.png",
              title: "Team Collaboration",
              desc: "Enhance team productivity and communication with centralized collaboration tools.",
            },
            {
              img: "/images/home/visitor management.png",
              title: "Data Analytics",
              desc: "Turn insights into action with advanced analytics and reporting tools built for scale.",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-[15px] overflow-hidden flex flex-col items-center text-center"
            >
              <div className="w-full bg-[#FBE4B5] px-4 py-3">
                <h3 className="text-[#F2A300] font-bold text-xl">
                  {card.title}
                </h3>
              </div>
              <img src={card.img} alt={card.title} className="h-32 w-32 my-6" />
              <p className="text-[#444444] px-6 mb-6">{card.desc}</p>
              <button className="mb-6 bg-[#F2A300] text-white px-5 py-2 rounded-md hover:bg-[#e49c00] transition">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* section 7 */}
      <div className="bg-[#F2A300] py-12 px-4">
        {/* Section Heading */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-white">ACHIEVEMENTS</h2>
        </div>

        {/* 2x2 Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-2 grid-rows-2">
          {[
            {
              top: "Above",
              number: "6",
              label: "Years of Experience",
            },
            {
              top: "More than",
              number: "300",
              label: "Projects Completed",
            },
            {
              top: "More than",
              number: "45",
              label: "Clients",
            },
            {
              top: "Tones of",
              number: "Coffee",
              label: "Guzzle.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center py-10 px-4 text-center border-white
          ${index < 2 ? "border-b" : ""}
          ${index % 2 === 0 ? "border-r" : ""}`}
            >
              <p className="text-[#525252] text-sm mb-1">{item.top}</p>
              <h3 className="text-4xl font-bold text-white mb-1">
                {item.number}
              </h3>
              <p className="text-[#754C00] font-semibold">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* section 8 */}
      <div className="bg-[#343A40] py-12 px-4">
        {/* Section Heading */}
        <div className="text-center max-w-6xl mx-auto mb-10">
          <h2 className="text-3xl font-bold text-white mb-2">How We Do it?</h2>
          <p className="text-white text-lg">Simple, Quick and Successful</p>
        </div>

        {/* Steps Row */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              title: "Dream.",
              desc: "It all starts with a dream—a dream to build unique and extraordinary experiences for your customers.",
            },
            {
              title: "Design.",
              desc: "Following the initial meet up, we will outline your project, create milestones, and agree on priorities.",
            },
            {
              title: "Develop.",
              desc: "Once the outline is finished, visual concepts of the custom project will be created.",
            },
            {
              title: "Deliver.",
              desc: "Here is where we present your custom project. Upon approval, your custom project will be launched and promoted.",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="border border-[#565656] rounded-[15px] px-4 py-6 text-center flex flex-col"
            >
              <h1 className="text-[#F2A300] text-4xl font-bold mb-2 font-caveat">
                {step.title}
              </h1>
              <p className="text-white text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 9: Testimonials */}

      <Testimonials />
      <Sponsorship />
      <MeetDicuss />
    </div>
  );
}
