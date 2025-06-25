"use client";

import MeetDicuss from "@/app/homecomponents/MeetDicuss";
import ContentWritingHero from "./ContentWritingHero";
import Sponsorship from "@/app/homecomponents/Sponsorship";
import Testimonials from "@/app/homecomponents/__Temp__";
import OurContentWritingServices from "./OurContentWritingServices";
import WhyContentWritingMatters from "./WhyContentWritingMatters";

export default function Page() {
  return (
    <section>
      <ContentWritingHero />
      <OurContentWritingServices />
      <WhyContentWritingMatters />
      <Testimonials />
      <Sponsorship />
      <MeetDicuss />
    </section>
  );
}
