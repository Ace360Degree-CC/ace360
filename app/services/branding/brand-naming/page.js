import Testimonials from "@/app/homecomponents/testimonials";
import BrandNamingHero from "./BrandNamingHero";
import BrandNamingServive from "./BrandNamingServive";
import ReadyBrandNaming from "./ReadyBrandNaming";
import SuccessBrandNaming from "./SuccessBrandNaming";
import WhyBrandingName from "./WhyBrandingName";
import Sponsorship from "@/app/homecomponents/Sponsorship";
import MeetDicuss from "@/app/homecomponents/MeetDicuss";

export default function Page() {
  return (
    <section>
      <BrandNamingHero />
      <BrandNamingServive />
      <WhyBrandingName />
      <SuccessBrandNaming />
      <ReadyBrandNaming />
      <Testimonials />
      <Sponsorship />
      <MeetDicuss />
    </section>
  );
}
