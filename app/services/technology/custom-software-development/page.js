"use client";

import Testimonials from "@/app/homecomponents/testimonials";
import CustomHero from "./CustomHero";
import Sponsorship from "@/app/homecomponents/Sponsorship";
import MeetDicuss from "@/app/homecomponents/MeetDicuss";
import OurCustomServices from "./OurCustomServices";
import WhyCustomDevMatters from "./WhyCustomDevMatters";

export default function Page() {
  return (
    <section>
      <CustomHero />
      <OurCustomServices />
      <WhyCustomDevMatters />
      <Testimonials />
      <Sponsorship />
      <MeetDicuss />
    </section>
  );
}
