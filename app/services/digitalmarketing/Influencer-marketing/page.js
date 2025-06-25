import InfluencerServicesSection from "./InfluencerServicesSection";
import WhyChooseInfluencerMarketing from "./WhyChooseInfluencerMarketing";
import Testimonials from "@/app/homecomponents/__Temp__";
import Sponsorship from "@/app/homecomponents/Sponsorship";
import MeetDicuss from "@/app/homecomponents/MeetDicuss";
import WhyInfluencerMarketingMatters from "./WhyInfluencerMarketingMatters";
import InfluencerMarketingHero from "./InfluencerMarketingHero";
export default function Page() {
  return (
    <section>
      <InfluencerMarketingHero />
      <InfluencerServicesSection />
      <WhyInfluencerMarketingMatters />
      <WhyChooseInfluencerMarketing />
      <Testimonials />
      <Sponsorship />
      <MeetDicuss />
    </section>
  );
}
