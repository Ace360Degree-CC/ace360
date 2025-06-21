"use client";

import Testimonials from "@/app/homecomponents/testimonials";
import SquarespaceHero from "./SquarespaceHero";
import SquarespaceServices from "./SquarespaceServices";
import WhySquareSpaceMatters from "./WhySquareSpaceMatters";
import Sponsorship from "@/app/homecomponents/Sponsorship";
import MeetDicuss from "@/app/homecomponents/MeetDicuss";

export default function Page() {
  return (
    <section>
      <SquarespaceHero />
      <SquarespaceServices />
      <WhySquareSpaceMatters />
      <Testimonials />
      <Sponsorship />
      <MeetDicuss />
    </section>
  );
}
