import Image from "next/image";
import { IoMdCheckboxOutline } from "react-icons/io";
import { MdOutlineCheck } from "react-icons/md";
const GraphicDesignImg =
  "/images/services/branding/graphic-designing/why-graphic-design-matter.png";

export default function WhyGraphicDesign() {
  return (
    <section className="px-6 py-12 md:px-16 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
        Why Graphic Design Matters?
      </h2>

      <ul className="text-black  space-y-2 text-left">
        <li className="flex items-start justify-center text-left">
          <IoMdCheckboxOutline color="green" size={24} className="shrink-0" />
          <span className="ml-1">
            Visual content is processed 60,000x faster than text – Is your brand
            leveraging powerful visuals?
          </span>
        </li>
        <li className="flex items-start justify-center text-left">
          <IoMdCheckboxOutline color="green" size={24} className="shrink-0" />
          <span className="ml-1">
            Consistent branding across platforms increases revenue by 23% – Is
            your brand identity cohesive?
          </span>
        </li>
        <li className="flex items-start justify-center text-left">
          <IoMdCheckboxOutline color="green" size={24} className="shrink-0" />
          <span className="ml-1">
            Eye-catching graphics improve audience engagement by 94% – Is your
          </span>
        </li>
      </ul>

      <div className="flex justify-center mb-10 py-10">
        <Image
          src={GraphicDesignImg}
          alt="Performance Marketing Illustration"
          width={500}
          height={500}
          className="rounded-md"
        />
      </div>

      <h3 className="text-xl md:text-2xl font-semibold mb-6 text-black">
        With professional graphic design, you can:
      </h3>

      <div className="space-y-4 max-w-xl mx-auto ">
        <div className="bg-[#F2A300] text-black font-medium py-3 px-6 rounded-md text-left flex">
          <MdOutlineCheck size={24} className="shrink-0" />
          <span className="ml-1">Enhance brand recognition & credibility.</span>
        </div>
        <div className="bg-[#F2A300] text-black font-medium py-3 px-6 rounded-md text-left flex">
          <MdOutlineCheck size={24} className="shrink-0" />
          <span className="ml-1">
            Communicate ideas visually for maximum impact.
          </span>
        </div>
        <div className="bg-[#F2A300] text-black font-medium py-3 px-6 rounded-md text-left flex">
          <MdOutlineCheck size={24} className="shrink-0" />
          <span className="ml-1">
            Increase engagement across social media, websites, and marketing
            materials.
          </span>
        </div>
      </div>
    </section>
  );
}
0;
