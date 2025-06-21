import Image from "next/image";
import { IoMdCheckboxOutline } from "react-icons/io";
import { MdOutlineCheck } from "react-icons/md";
const portalDevelopmentIMg =
  "/images/services/technology/portal-development/portal-development-matters.png";

export default function WhyPortalDevMatters() {
  return (
    <section className="px-6 py-12 md:px-16 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
        Why Portal & Marketplace Development Matters?
      </h2>

      <ul className="text-black  space-y-2 text-left">
        <li className="flex items-start justify-center text-left">
          <IoMdCheckboxOutline color="green" size={24} className="shrink-0" />
          <span className="ml-1">
            Online marketplaces drive over 60% of global e-commerce sales – Is
            your business leveraging this trend?
          </span>
        </li>
        <li className="flex items-start justify-center text-left">
          <IoMdCheckboxOutline color="green" size={24} className="shrink-0" />
          <span className="ml-1">
            B2B portals improve operational efficiency by 40% – Are you
            streamlining your business processes?
          </span>
        </li>
        <li className="flex items-start justify-center text-left">
          <IoMdCheckboxOutline color="green" size={24} className="shrink-0" />
          <span className="ml-1">
            Custom-built platforms increase user engagement by 50% – Is your
            portal optimized for user experience?
          </span>
        </li>
      </ul>

      <div className="flex justify-center mb-10 py-10">
        <Image
          src={portalDevelopmentIMg}
          alt="Performance Marketing Illustration"
          width={400}
          height={300}
          className="rounded-md"
        />
      </div>

      <h3 className="text-xl md:text-2xl font-semibold mb-6 text-black">
        A well-designed portal or marketplace can:
      </h3>

      <div className="space-y-4 max-w-xl mx-auto ">
        <div className="bg-[#F2A300] text-black font-medium py-3 px-6 rounded-md text-left flex">
          <MdOutlineCheck size={24} className="shrink-0" />
          <span className="ml-1">
            Enhance business operations with seamless integrations
          </span>
        </div>
        <div className="bg-[#F2A300] text-black font-medium py-3 px-6 rounded-md text-left flex">
          <MdOutlineCheck size={24} className="shrink-0" />
          <span className="ml-1">
            Increase vendor & customer engagement with user-friendly interfaces.
          </span>
        </div>
        <div className="bg-[#F2A300] text-black font-medium py-3 px-6 rounded-md text-left flex">
          <MdOutlineCheck size={24} className="shrink-0" />
          <span className="ml-1">
            Drive revenue growth through automation & optimized workflows
          </span>
        </div>
      </div>
    </section>
  );
}
0;
