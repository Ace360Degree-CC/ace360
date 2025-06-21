import Image from "next/image";
import { IoMdCheckboxOutline } from "react-icons/io";
import { MdOutlineCheck } from "react-icons/md";
const opencartImg =
  "/images/services/branding/marketing-collateral/marketing-collateral.png";

export default function WhyMarketingCollateral() {
  return (
    <section className="px-6 py-12 md:px-16 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
        Why Marketing Collaterals Matter?
      </h2>

      <ul className="text-black  space-y-2 text-left">
        <li className="flex items-start justify-center text-left">
          <IoMdCheckboxOutline color="green" size={24} className="shrink-0" />
          <span className="ml-1">
            Branded marketing materials improve recall by 80% – Is your brand
            leaving a strong impression?
          </span>
        </li>
        <li className="flex items-start justify-center text-left">
          <IoMdCheckboxOutline color="green" size={24} className="shrink-0" />
          <span className="ml-1">
            Consistent visual branding can increase revenue by up to 23% – Are
            your collaterals aligned with your brand identity?
          </span>
        </li>
        <li className="flex items-start justify-center text-left">
          <IoMdCheckboxOutline color="green" size={24} className="shrink-0" />
          <span className="ml-1">
            High-quality marketing assets increase engagement & conversions –
            Are your materials optimized for impact?
          </span>
        </li>
      </ul>

      <div className="flex justify-center mb-10 py-10">
        <Image
          src={opencartImg}
          alt="Performance Marketing Illustration"
          width={500}
          height={500}
          className="rounded-md"
        />
      </div>

      <h3 className="text-xl md:text-2xl font-semibold mb-6 text-black">
        With well-designed marketing collaterals, you can:
      </h3>

      <div className="space-y-4 max-w-xl mx-auto ">
        <div className="bg-[#F2A300] text-black font-medium py-3 px-6 rounded-md text-left flex">
          <MdOutlineCheck size={24} className="shrink-0" />
          <span className="ml-1">
            Strengthen brand identity with professional, cohesive visuals.
          </span>
        </div>
        <div className="bg-[#F2A300] text-black font-medium py-3 px-6 rounded-md text-left flex">
          <MdOutlineCheck size={24} className="shrink-0" />
          <span className="ml-1">
            Improve engagement & retention through compelling designs.
          </span>
        </div>
        <div className="bg-[#F2A300] text-black font-medium py-3 px-6 rounded-md text-left flex">
          <MdOutlineCheck size={24} className="shrink-0" />
          <span className="ml-1">
            Increase customer trust & credibility with high-quality materials.
          </span>
        </div>
      </div>
    </section>
  );
}
0;
