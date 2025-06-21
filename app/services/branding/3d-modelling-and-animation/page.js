"use client";

import Sponsorship from "@/app/homecomponents/Sponsorship";
import ThreeDHero from "./ThreeDHero";
import ThreeDimensionService from "./ThreeDimensionService";
import WhyThreeD from "./WhyThreeD";
import SuccessThreeDimensional from "./SuccessThreeDimensional";
import ReadyThreeD from "./ReadyThreeD";
import Testimonials from "@/app/homecomponents/testimonials";
import MeetDicuss from "@/app/homecomponents/MeetDicuss";

export default function Page() {
  return (
    <section>
      <ThreeDHero />
      <ThreeDimensionService />
      <WhyThreeD />
      <SuccessThreeDimensional />
      <ReadyThreeD />
      <Testimonials />
      <Sponsorship />
      <MeetDicuss />
    </section>
  );
}
