import Image from "next/image";
import { IoMdCheckboxOutline } from "react-icons/io";
import { MdOutlineCheck } from "react-icons/md";
const shopifyImg =
  "/images/services/technology/shopify/why-shopify-matters.png";

export default function WhyShopifyMatters() {
  return (
    <section className="px-6 py-12 md:px-16 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
        Why Shopify Website Development Matters?
      </h2>

      <ul className="text-black  space-y-2 text-left">
        <li className="flex items-start justify-center text-left">
          <IoMdCheckboxOutline color="green" size={24} className="shrink-0" />
          <span className="ml-1">
            Over 4.5 million websites are powered by Shopify – Is your business
            leveraging this global platform?
          </span>
        </li>
        <li className="flex items-start justify-center text-left">
          <IoMdCheckboxOutline color="green" size={24} className="shrink-0" />
          <span className="ml-1">
            Shopify stores see an average 30% increase in revenue after
            optimization – Is your store performing at its best?
          </span>
        </li>
        <li className="flex items-start justify-center text-left">
          <IoMdCheckboxOutline color="green" size={24} className="shrink-0" />
          <span className="ml-1">
            Mobile-optimized ecommerce stores drive 70% of total online sales –
            Is your Shopify store mobile-ready?
          </span>
        </li>
      </ul>

      <div className="flex justify-center mb-10 py-10">
        <Image
          src={shopifyImg}
          alt="Performance Marketing Illustration"
          width={400}
          height={300}
          className="rounded-md"
        />
      </div>

      <h3 className="text-xl md:text-2xl font-semibold mb-6 text-black">
        A well-optimized Shopify store can:
      </h3>

      <div className="space-y-4 max-w-xl mx-auto ">
        <div className="bg-[#F2A300] text-black font-medium py-3 px-6 rounded-md text-left flex">
          <MdOutlineCheck size={24} className="shrink-0" />
          <span className="ml-1">
            Increase sales with a seamless checkout experience
          </span>
        </div>
        <div className="bg-[#F2A300] text-black font-medium py-3 px-6 rounded-md text-left flex">
          <MdOutlineCheck size={24} className="shrink-0" />
          <span className="ml-1">
            Boost brand visibility with built-in SEO features.
          </span>
        </div>
        <div className="bg-[#F2A300] text-black font-medium py-3 px-6 rounded-md text-left flex">
          <MdOutlineCheck size={24} className="shrink-0" />
          <span className="ml-1">
            Enhance customer experience with a fast, mobile-responsive design.
          </span>
        </div>
      </div>
    </section>
  );
}
0;
