"use client";

import Testimonials from "@/app/homecomponents/Testimonials";
import EComHero from "./EComHero";
import OurEComServices from "./OurEComServices";
import WhyEComMatters from "./WhyEComMatters";
import Sponsorship from "@/app/homecomponents/Sponsorship";
import MeetDicuss from "@/app/homecomponents/MeetDicuss";

export default function Page() {
  return (
    <section>
      <EComHero />
      <OurEComServices />
      <WhyEComMatters />
      <Testimonials />
      <Sponsorship />
      <MeetDicuss />
    </section>
  );
}
