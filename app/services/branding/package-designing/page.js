"use client";

import Testimonials from "@/app/homecomponents/__Temp__";
import PackageService from "./PackageService";
import PackagingHero from "./PackagingHero";
import ReadyPackage from "./ReadyPackage";
import SuccessPackage from "./SuccessPackage";
import WhyPackageDesigning from "./WhyPackageDesigning";
import Sponsorship from "@/app/homecomponents/Sponsorship";
import MeetDicuss from "@/app/homecomponents/MeetDicuss";

export default function Page() {
  return (
    <section>
      <PackagingHero />
      <PackageService />
      <WhyPackageDesigning />
      <SuccessPackage />
      <ReadyPackage />
      <Testimonials />
      <Sponsorship />
      <MeetDicuss />
    </section>
  );
}
