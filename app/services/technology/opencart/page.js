"use client";

import Testimonials from "@/app/homecomponents/__Temp__";
import OpenCraftHero from "./OpenCraftHero";
import OpenCraftServices from "./OpenCraftServices";
import WhyOpenCraft from "./WhyOpenCraft";
import Sponsorship from "@/app/homecomponents/Sponsorship";
import MeetDicuss from "@/app/homecomponents/MeetDicuss";

export default function Page() {
  return (
    <section>
      <OpenCraftHero />
      <OpenCraftServices />
      <WhyOpenCraft />
      <Testimonials />
      <Sponsorship />
      <MeetDicuss />
    </section>
  );
}
