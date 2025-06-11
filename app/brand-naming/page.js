import Blog from "../BrandComponents/Blog";
import BrandBenefits from "../BrandComponents/brandBenefits";
import BrandFAQ from "../BrandComponents/BrandFAQ";
import BrandHead from "../BrandComponents/brandHead";
import BrandNaming from "../BrandComponents/brandNaming";
import BrandNamingProcedure from "../BrandComponents/BrandNamingProcedure";
import ServiceForm from "../BrandComponents/ServiceForm";
import WhyUs from "../BrandComponents/WhyUs";


export default function page(){
    return(
        <>
        <BrandHead />
        <BrandNaming />
        <BrandBenefits />
        <WhyUs />
        <BrandNamingProcedure />
        <BrandFAQ />
        <Blog />
        <ServiceForm />


        </>
    );
}
