"use client";

import MeetDicuss from "@/app/homecomponents/MeetDicuss";
import OurWebDevServices from "./OurWebDevServices";
import WebsiteDevelopmentHero from "./WebsiteDevelopmentHero";
import Sponsorship from "@/app/homecomponents/Sponsorship";
import Testimonials from "@/app/homecomponents/__Temp__";
import WhyWebDevMatters from "./WhyWebDevMatters";

export default function Page() {
  return (
    <section>
      <WebsiteDevelopmentHero />
      <OurWebDevServices />
      <WhyWebDevMatters />
      <Testimonials />
      <Sponsorship />
      <MeetDicuss />
    </section>
  );
}
