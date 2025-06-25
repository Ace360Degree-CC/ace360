"use client";

import SuccessStories from "@/app/components/SuccessStories";
import GraphicDesignHero from "./GraphicDesignHero";
import GraphicDesignService from "./GraphicDesignService";
import WhyGraphicDesign from "./WhyGraphicDesign";
import Sponsorship from "@/app/homecomponents/Sponsorship";
import Testimonials from "@/app/homecomponents/Testimonials";
import MeetDicuss from "@/app/homecomponents/MeetDicuss";
import ReadyGraphicDesign from "./ReadyGraphicDesign";

export default function Page() {
  return (
    <section>
      <GraphicDesignHero />
      <GraphicDesignService />
      <WhyGraphicDesign />
      <SuccessStories />
      <ReadyGraphicDesign />
      <Testimonials />
      <Sponsorship />
      <MeetDicuss />
    </section>
  );
}
