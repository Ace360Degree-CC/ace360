"use client";

import Testimonials from "@/app/homecomponents/testimonials";
import ShopifyHero from "./ShopifyHero";
import ShopifyServices from "./ShopifyServices";
import WhyShopifyMatters from "./WhyShopifyMatters";
import Sponsorship from "@/app/homecomponents/Sponsorship";
import MeetDicuss from "@/app/homecomponents/MeetDicuss";

export default function Page() {
  return (
    <section>
      <ShopifyHero />
      <ShopifyServices />
      <WhyShopifyMatters />
      <Testimonials />
      <Sponsorship />
      <MeetDicuss />
    </section>
  );
}
