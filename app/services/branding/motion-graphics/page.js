"use client";

import Testimonials from "@/app/homecomponents/testimonials";
import MotionGraphicServices from "./MotionGraphicServices";
import MotionGraphicsHero from "./MotionGraphicsHero";
import ReadyMotionGraphic from "./ReadyMotionGraphic";
import SuccessMotionGraphic from "./SuccessMotionGraphic";
import WhyMotionGraphic from "./WhyMotionGraphic";
import Sponsorship from "@/app/homecomponents/Sponsorship";
import MeetDicuss from "@/app/homecomponents/MeetDicuss";

export default function Page() {
  return (
    <section>
      <MotionGraphicsHero />
      <MotionGraphicServices />
      <WhyMotionGraphic />
      <SuccessMotionGraphic />
      <ReadyMotionGraphic />
      <Testimonials />
      <Sponsorship />
      <MeetDicuss />
    </section>
  );
}
