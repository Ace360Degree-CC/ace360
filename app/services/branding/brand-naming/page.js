import Testimonials from "@/app/homecomponents/__Temp__";
import BrandNamingHero from "./BrandNamingHero";

import ReadyBrandNaming from "./ReadyBrandNaming";
import SuccessBrandNaming from "./SuccessBrandNaming";
import WhyBrandingName from "./WhyBrandingName";
import Sponsorship from "@/app/homecomponents/Sponsorship";
import MeetDicuss from "@/app/homecomponents/MeetDicuss";
import BrandNamingService from "./BrandNamingService";

export default function Page() {
  return (
    <section>
      <BrandNamingHero />
      <BrandNamingService />
      <WhyBrandingName />
      <SuccessBrandNaming />
      <ReadyBrandNaming />
      <Testimonials />
      <Sponsorship />
      <MeetDicuss />
    </section>
  );
}
