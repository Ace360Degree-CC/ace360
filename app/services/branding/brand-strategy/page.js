"use client";

import SuccessStories from "@/app/components/SuccessStories";
import BrandStrategyHero from "./BrandStrategyHero";
import BrandStrategyService from "./BrandStrategyService";
import WhyBrandStrategy from "./WhyBrandStrategy";
import ReadyBrandStrategy from "./ReadyBrandStrategy";
import Testimonials from "@/app/homecomponents/testimonials";
import Sponsorship from "@/app/homecomponents/Sponsorship";
import MeetDicuss from "@/app/homecomponents/MeetDicuss";

export default function Page() {
  return (
    <section>
      <BrandStrategyHero />
      <BrandStrategyService />
      <WhyBrandStrategy />
      <SuccessStories />
      <ReadyBrandStrategy />
      <Testimonials />
      <Sponsorship />
      <MeetDicuss />
    </section>
  );
}
