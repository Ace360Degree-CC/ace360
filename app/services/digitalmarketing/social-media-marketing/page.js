"use client";

import MeetDicuss from "@/app/homecomponents/MeetDicuss";
import OurSMMServices from "./OurSMMServices";
import SMMHero from "./SMMHero";
import WhySMMMatters from "./WhySMMMatters";
import Sponsorship from "@/app/homecomponents/Sponsorship";
import Testimonials from "@/app/homecomponents/testimonials";
import WhyChooseSMM from "./WhyChooseSMM";

export default function Page() {
  return (
    <>
      <SMMHero />
      <OurSMMServices />
      <WhySMMMatters />
      <WhyChooseSMM />
      <Testimonials />
      <Sponsorship />
      <MeetDicuss />
    </>
  );
}
