"use client";

import MeetDicuss from "@/app/homecomponents/MeetDicuss";
import OurPerformanceMarketingService from "./OurPerformanceMarketingService";
import PerformanceMarketingHero from "./PerformanceMarketingHero";
import WhyChoosePerformanceMarketing from "./WhyChoosePerformanceMarketing";
import Testimonials from "@/app/homecomponents/__Temp__";
import Sponsorship from "@/app/homecomponents/Sponsorship";
import WhyPerformanceMarketingMatters from "./WhyPerformanceMarketingMatters";

export default function Page() {
  return (
    <section className="">
      <PerformanceMarketingHero />
      <OurPerformanceMarketingService />
      <WhyPerformanceMarketingMatters />
      <WhyChoosePerformanceMarketing />
      <Testimonials />
      <Sponsorship />
      <MeetDicuss />
    </section>
  );
}
