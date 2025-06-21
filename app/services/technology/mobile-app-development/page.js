"use client";

import MeetDicuss from "@/app/homecomponents/MeetDicuss";
import MobileDevHero from "./MobileDevHero";
import Testimonials from "@/app/homecomponents/testimonials";
import Sponsorship from "@/app/homecomponents/Sponsorship";
import OurMobileDevServices from "./OurMobileDevServices";
import WhyMobileDevMatters from "./WhyMobileDevMatters";

export default function Page() {
  return (
    <section>
      <MobileDevHero />
      <OurMobileDevServices />
      <WhyMobileDevMatters />
      <Testimonials />
      <Sponsorship />
      <MeetDicuss />
    </section>
  );
}
