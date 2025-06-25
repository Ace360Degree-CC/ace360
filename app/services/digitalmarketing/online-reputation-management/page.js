"use Client";

import MeetDicuss from "@/app/homecomponents/MeetDicuss";
import Sponsorship from "@/app/homecomponents/Sponsorship";
import Testimonials from "@/app/homecomponents/__Temp__";
import ORMHero from "./ORMHero";
import OurORMServices from "./OurORMServices";
import WhyORMMatters from "./WhyORMMatters";
import WhyChooseORM from "./WhyChooseORM";

export default function Page() {
  return (
    <section>
      <ORMHero />
      <OurORMServices />
      <WhyORMMatters />
      <WhyChooseORM />
      <Testimonials />
      <Sponsorship />
      <MeetDicuss />
    </section>
  );
}
