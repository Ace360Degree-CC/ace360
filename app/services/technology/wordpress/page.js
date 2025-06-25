"use client";

import Testimonials from "@/app/homecomponents/Testimonials";
import WhyWPMatters from "./WhyWPMatters";
import WPHome from "./WPHome";
import WPServices from "./WPServices";
import Sponsorship from "@/app/homecomponents/Sponsorship";
import MeetDicuss from "@/app/homecomponents/MeetDicuss";

export default function Page() {
  return (
    <section>
      <WPHome />
      <WPServices />
      <WhyWPMatters />
      <Testimonials />
      <Sponsorship />
      <MeetDicuss />
    </section>
  );
}
