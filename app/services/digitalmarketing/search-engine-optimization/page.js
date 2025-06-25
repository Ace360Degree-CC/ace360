"use client";

import MeetDicuss from "@/app/homecomponents/MeetDicuss";
import Sponsorship from "@/app/homecomponents/Sponsorship";
import Testimonials from "@/app/homecomponents/Testimonials";
import SEOHero from "./SEOHero";
import OurSeoServices from "./OurSeoServices";
import WhySEOMatters from "./WhySEOMatters";
import WhyChooseSEO from "./WhyChooseSEO";

export default function Page() {
  return (
    <section>
      <SEOHero />
      <OurSeoServices />
      <WhySEOMatters />
      <WhyChooseSEO />
      <Testimonials />
      <Sponsorship />
      <MeetDicuss />
    </section>
  );
}
