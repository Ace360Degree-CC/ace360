"use client";

import SuccessStories from "@/app/components/SuccessStories";
import MarketingCollateralHero from "./MarketingCollateralHero";
import MarketingCollateralServices from "./MarketingCollateralServices";
import WhyMarketingCollateral from "./WhyMarketingCollateral";
import ReadymarketingCollateral from "./ReadymarketingCollateral";
import Testimonials from "@/app/homecomponents/Testimonials";
import Sponsorship from "@/app/homecomponents/Sponsorship";
import MeetDicuss from "@/app/homecomponents/MeetDicuss";

export default function Page() {
  return (
    <section>
      <MarketingCollateralHero />
      <MarketingCollateralServices />
      <WhyMarketingCollateral />
      <SuccessStories />
      <ReadymarketingCollateral />
      <Testimonials />
      <Sponsorship />
      <MeetDicuss />
    </section>
  );
}
