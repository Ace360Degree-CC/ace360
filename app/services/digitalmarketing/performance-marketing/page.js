"use client";

import MeetDicuss from "@/app/homecomponents/MeetDicuss";
import OurPerformanceMarketingService from "./OurPerformanceMarketingService";
import PerformanceMarketingHero from "./PerformanceMarketingHero";
import WhyChoosePerformanceMarketing from "./WhyChoosePerformanceMarketing";
import Testimonials from "@/app/homecomponents/testimonials";
import Sponsorship from "@/app/homecomponents/Sponsorship";

export default function () {
  return (
    <section className="">
      <PerformanceMarketingHero />
      <OurPerformanceMarketingService />
      <WhyChoosePerformanceMarketing />
      <Testimonials />
      <Sponsorship />
      <MeetDicuss />
    </section>
  );
}
