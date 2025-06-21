import Image from "next/image";
import { IoMdCheckboxOutline } from "react-icons/io";
import { MdOutlineCheck } from "react-icons/md";
const ThreeDimensionalIMg =
  "/images/services/branding/three-dimensionol/working-person.png";

export default function WhyThreeD() {
  return (
    <section className="px-6 py-12 md:px-16 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
        Why 3D Modeling & Animation Matters?
      </h2>

      <ul className="text-black  space-y-2 text-left">
        <li className="flex items-start justify-center text-left">
          <IoMdCheckboxOutline color="green" size={24} className="shrink-0" />
          <span className="ml-1">
            3D visuals increase product engagement by 40% compared to static
            images—Are you leveraging this?
          </span>
        </li>
        <li className="flex items-start justify-center text-left">
          <IoMdCheckboxOutline color="green" size={24} className="shrink-0" />
          <span className="ml-1">
            Animated content gets 2x more conversions than traditional ads—Is
            your brand using immersive storytelling?
          </span>
        </li>
        <li className="flex items-start justify-center text-left">
          <IoMdCheckboxOutline color="green" size={24} className="shrink-0" />
          <span className="ml-1">
            Industries like real estate, retail, and tech see 60% better
            customer interaction with 3D content—Are you missing out?
          </span>
        </li>
      </ul>

      <div className="flex justify-center mb-10 py-10">
        <Image
          src={ThreeDimensionalIMg}
          alt="Performance Marketing Illustration"
          width={500}
          height={500}
          className="rounded-md"
        />
      </div>

      <h3 className="text-xl md:text-2xl font-semibold mb-6 text-black">
        With high-quality 3D modeling & animation, you can:
      </h3>

      <div className="space-y-4 max-w-xl mx-auto ">
        <div className="bg-[#F2A300] text-black font-medium py-3 px-6 rounded-md text-left flex">
          <MdOutlineCheck size={24} className="shrink-0" />
          <span className="ml-1">
            {" "}
            Showcase products in lifelike detail for better customer
            understanding.
          </span>
        </div>
        <div className="bg-[#F2A300] text-black font-medium py-3 px-6 rounded-md text-left flex">
          <MdOutlineCheck size={24} className="shrink-0" />
          <span className="ml-1">
            Create immersive experiences for architecture, retail, and
            marketing.
          </span>
        </div>
        <div className="bg-[#F2A300] text-black font-medium py-3 px-6 rounded-md text-left flex">
          <MdOutlineCheck size={24} className="shrink-0" />
          <span className="ml-1">
            Boost engagement with visually striking animations.
          </span>
        </div>
      </div>
    </section>
  );
}
0;
