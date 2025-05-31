import HomeHeroSection from "./home components/hero";
import Sponsorship from "./home components/Sponsorship";
import Testimonials from "./home components/testimonials";

export default function Page() {
  return (
    <div className="bg-[#FCF5EB]">
      {/* Section 1 */}
      <HomeHeroSection/>
 

      {/* Section 2 */}
      <div className="bg-[#ffffff] py-12 px-6 flex justify-center">
        <div className="max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-[#212529] mb-4">
            Drive Results with{" "}
            <span className="text-[#F2A300]">Data-Driven</span> Digital Marketing Services
          </h2>
          <p className="text-[#212529] text-lg">
            At Ace360degree, we help businesses grow with expert digital strategies.
            Elevate your online presence, engage your audience, and achieve measurable success.
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div className="bg-white py-0 px-0">
        {/* Full-width heading */}
        <div className="w-full bg-[#FCF5EB] py-4">
          <h2 className="text-3xl font-bold text-[#F2A300] text-center">
            Digital Marketing
          </h2>
        </div>

        {/* Cards */}
        <div className="max-w-6xl mx-auto py-12 px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                img: "/images/icons/seo.png",
                title: "Search Engine Optimization",
                desc1: "Improve rankings, boost traffic, and grow your online presence.",
                desc2: "Learn More about ",
                highlight: "Search Engine Optimization",
              },
              {
                img: "/images/icons/smm.png",
                title: "Social Media Marketing",
                desc1: "Engage audiences, increase followers, and drive brand awareness.",
                desc2: "Learn More about ",
                highlight: "Social Media Marketing",
              },
              {
                img: "/images/icons/pm.png",
                title: "Performance Marketing",
                desc1: "Optimize campaigns, maximize ROI, and generate high-quality leads.",
                desc2: "Learn More about ",
                highlight: "Performance Marketing",
              },
              {
                img: "/images/icons/im.png",
                title: "Influencer Marketing",
                desc1: "Connect with influencers to enhance credibility and reach.",
                desc2: "Learn More about ",
                highlight: "Youtube Optimization",
              },
              {
                img: "/images/icons/orm.png",
                title: "Online Reputation Management (ORM)",
                desc1: "Protect your brand image and maintain customer trust.",
                desc2: "Learn More about ",
                highlight: "Online Reputation Management (ORM)",
              },
              {
                img: "/images/icons/cw.png",
                title: "Content Writing",
                desc1: "Create compelling, SEO-friendly content that drives engagement",
                desc2: "Learn More about ",
                highlight: "Content Writing",
              },
            ].map((card, index) => (
              <div key={index} className="w-full bg-white p-6">
                <div className="flex items-start gap-4 mb-4">
                  <img src={card.img} alt={card.title} className="h-10 w-10 object-contain" />
                  <h3 className="text-xl font-semibold text-[#212529]">{card.title}</h3>
                </div>
                <p className="text-[#444444] mb-2">{card.desc1}</p>
                {card.desc2 && card.highlight && (
                  <p className="text-[#444444]">
                    {card.desc2}
                    <span className="text-[#F2A300] font-bold underline">{card.highlight}</span>
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="bg-white py-0 px-0">
        {/* Full-width heading */}
        <div className="w-full bg-[#FCF5EB] py-4">
          <h2 className="text-3xl font-bold text-[#F2A300] text-center">
            Branding
          </h2>
        </div>

        {/* Cards */}
        <div className="max-w-6xl mx-auto py-12 px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                img: "/images/icons/Brand Naming.png",
                title: "Brand Naming",
                desc1: "Create a unique, memorable identity for your business.",
                desc2: "Learn More about ",
                highlight: "Brand Naming",
              },
              {
                img: "/images/icons/Brand Strategy.png",
                title: "Brand Strategy",
                desc1: "Build a strong brand foundation with strategic planning.",
                desc2: "Learn More about ",
                highlight: "Brand Strategy",
              },
              {
                img: "/images/icons/Logo Designing.png",
                title: "Logo Designing",
                desc1: "Design impactful logos that represent your brand identity.",
                desc2: "Learn More about ",
                highlight: "Logo Designing",
              },
              {
                img: "/images/icons/Marketing Collaterals.png",
                title: "Marketing Collaterals",
                desc1: "Develop engaging brochures, flyers, and business materials.",
                desc2: "Learn More about ",
                highlight: "Marketing Collaterals",
              },
              {
                img: "/images/icons/Graphic Designing.png",
                title: "Graphic Designing",
                desc1: "Craft visually compelling designs for brand communication.",
                desc2: "Learn More about ",
                highlight: "Graphic Designing",
              },
              {
                img: "/images/icons/Package Designing.png",
                title: "Package Designing",
                desc1: "Create attractive packaging that enhances product appeal.",
                desc2: "Learn More about ",
                highlight: "Package Designing",
              },


              {
                img: "/images/icons/Video Editing.png",
                title: "Video Editing",
                desc1: "Produce high-quality, engaging videos for your brand.",
                desc2: "Learn More about ",
                highlight: "Video Editing",
              },
              {
                img: "/images/icons/3D Modeling & Animation.png",
                title: "3D Modeling & Animation",
                desc1: "Bring ideas to life with stunning 3D visuals.",
                desc2: "Learn More about ",
                highlight: "3D Modeling & Animation",
              },
              {
                img: "/images/icons/Motion Graphics.png",
                title: "Motion Graphics",
                desc1: "Add dynamic animations to captivate your audience.",
                desc2: "Learn More about ",
                highlight: "Motion Graphics",
              },
            ].map((card, index) => (
              <div key={index} className="w-full bg-white p-6">
                <div className="flex items-start gap-4 mb-4">
                  <img src={card.img} alt={card.title} className="h-10 w-10 object-contain" />
                  <h3 className="text-xl font-semibold text-[#212529]">{card.title}</h3>
                </div>
                <p className="text-[#444444] mb-2">{card.desc1}</p>
                {card.desc2 && card.highlight && (
                  <p className="text-[#444444]">
                    {card.desc2}
                    <span className="text-[#F2A300] font-bold underline">{card.highlight}</span>
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 5 */}
      <div className="bg-white py-0 px-0">
        {/* Full-width heading */}
        <div className="w-full bg-[#FCF5EB] py-4">
          <h2 className="text-3xl font-bold text-[#F2A300] text-center">
            Technology
          </h2>
        </div>

        {/* Cards */}
        <div className="max-w-6xl mx-auto py-12 px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                img: "/images/icons/Website Design & Devlopment.png",
                title: "Website Design & Devlopment",
                desc1: "Build responsive, high-performing websites for your business.",
                desc2: "Learn More about ",
                highlight: "Website Design & Devlopment",
              },
              {
                img: "/images/icons/Mobile Apps Development.png",
                title: "Mobile Apps Development",
                desc1: "Create user-friendly mobile apps for iOS and Android.",
                desc2: "Learn More about ",
                highlight: "Mobile Apps Development",
              },
              {
                img: "/images/icons/Custom Software Devlopment.png",
                title: "Custom Software Devlopment",
                desc1: "Develop tailored software solutions for business efficiency.",
                desc2: "Learn More about ",
                highlight: "Custom Software Devlopment",
              },
              {
                img: "/images/icons/Ecommerce Website Devlopment.png",
                title: "Ecommerce Website Devlopment",
                desc1: "Launch powerful online stores for seamless shopping experiences.",
                desc2: "Learn More about ",
                highlight: "Ecommerce Website Devlopment",
              },
              {
                img: "/images/icons/Portal Devlopment  Market Place.png",
                title: "Portal Devlopment / Market Place",
                desc1: "Build scalable portals for businesses and online marketplaces.",
                desc2: "Learn More about ",
                highlight: "Portal Devlopment / Market Place",
              },
              {
                img: "/images/icons/Wordpress Website.png",
                title: "Wordpress Website",
                desc1: "Design flexible, SEO-friendly websites with WordPress.",
                desc2: "Learn More about ",
                highlight: "Wordpress Website",
              },


              {
                img: "/images/icons/Shopify Website Devlopment.png",
                title: "Shopify Website Devlopment",
                desc1: "Create high-converting Shopify stores for your brand.",
                desc2: "Learn More about ",
                highlight: "Shopify Website Devlopment",
              },
              {
                img: "/images/icons/Opencart Website Devlopment.png",
                title: "Opencart Website Devlopment",
                desc1: "Build feature-rich ecommerce websites with OpenCart.",
                desc2: "Learn More about ",
                highlight: "Opencart Website Devlopment",
              },
              {
                img: "/images/icons/Squarespace Website Devlopment.png",
                title: "SquareSpace",
                desc1: "Stunning, user-friendly Squarespace websites built for impact.",
                desc2: "Learn More about ",
                highlight: "SquareSpace",
              },
            ].map((card, index) => (
              <div key={index} className="w-full bg-white p-6">
                <div className="flex items-start gap-4 mb-4">
                  <img src={card.img} alt={card.title} className="h-10 w-10 object-contain" />
                  <h3 className="text-xl font-semibold text-[#212529]">{card.title}</h3>
                </div>
                <p className="text-[#444444] mb-2">{card.desc1}</p>
                {card.desc2 && card.highlight && (
                  <p className="text-[#444444]">
                    {card.desc2}
                    <span className="text-[#F2A300] font-bold underline">{card.highlight}</span>
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* section 6 */}

      <div className="bg-[#343A40] py-12 px-4">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-[#F2A300] mb-4">
            Future-Proof Your Business with Powerful SaaS Solutions
          </h2>
          <p className="text-[#ffffff] text-lg">
            At Ace360degree, we streamline operations, enhance efficiency, and drive growth with
            cutting-edge SaaS products. Our solutions empower businesses with automation, collaboration,
            and performance optimization.
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
                <h3 className="text-[#F2A300] font-bold text-xl">{card.title}</h3>
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
              <h3 className="text-4xl font-bold text-white mb-1">{item.number}</h3>
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
      
      <Testimonials/>

     <Sponsorship/>

      {/* Section 11: Let's Meet and Discuss */}
      <div className="bg-[#F2A300] py-12 px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-8 flex flex-col md:flex-row items-center justify-between">
          {/* Left Side Text */}
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-4xl font-bold text-[#343A40] mb-4">
              Lets meet and<br />discuss your growth
            </h2>
            <p className="text-[#525252] mb-4 text-sm">
              We're Thane's best digital marketing company in Mumbai and PAN India — with a focus on innovative and effective solutions.
            </p>
            <p className="text-[#525252] mb-6 text-sm">
              We help businesses achieve their goals by putting together the right content, strategy, and technology to make their brand come to life.
            </p>
            <button className="bg-[#F2A300] font-bold text-[#202020] px-6 py-2 rounded-full hover:bg-[#e49c00] transition">
              Feel Free to connect!
            </button>
          </div>

          {/* Right Side Image */}
          <div className="md:w-1/2 flex justify-center">
            <img src="/images/home/meeting-illustration1.png" alt="Meeting Illustration" className="max-w-full h-auto" />
          </div>
        </div>
      </div>


    </div>
  );
}
