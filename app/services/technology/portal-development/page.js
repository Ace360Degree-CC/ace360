"use client";

import Testimonials from "@/app/homecomponents/testimonials";
import OurPortalDevService from "./OurPortalDevService";
import PortalDevHero from "./PortalDevHero";
import WhyPortalDevMatters from "./WhyPortalDevMatters";
import Sponsorship from "@/app/homecomponents/Sponsorship";
import MeetDicuss from "@/app/homecomponents/MeetDicuss";

export default function Page() {
  return (
    <section>
      <PortalDevHero />
      <OurPortalDevService />
      <WhyPortalDevMatters />
      <Testimonials />
      <Sponsorship />
      <MeetDicuss />
    </section>
  );
}
