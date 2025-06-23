import Image from "next/image";
import InfuencerMarketingHero from "./InfuencerMarketingHero";
import InfluencerServicesSection from "./InfluencerServicesSection";
import WhyChooseInfluencerMarketing from "./WhyChooseInfluencerMarketing";
import Testimonials from "@/app/homecomponents/testimonials";
import Sponsorship from "@/app/homecomponents/Sponsorship";
import MeetDicuss from "@/app/homecomponents/MeetDicuss";
import WhyInfluencerMarketingMatters from "./WhyInfluencerMarketingMatters";
export default function Page() {
  return (
    <section>
      <InfuencerMarketingHero />
      <InfluencerServicesSection />
      <WhyInfluencerMarketingMatters />
      <WhyChooseInfluencerMarketing />

      <Testimonials />
      <Sponsorship />
      <MeetDicuss />
    </section>
  );
}
