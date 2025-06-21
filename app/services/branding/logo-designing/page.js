import Testimonials from "@/app/homecomponents/testimonials";
import LogoHero from "./LogoHero";
import LogoServices from "./LogoServices";
import ReadyLogoDesign from "./ReadyLogoDesign";
import SuccessLogo from "./SuccessLogo";
import WhyLogoDesign from "./WhyLogoDesign";
import Sponsorship from "@/app/homecomponents/Sponsorship";
import MeetDicuss from "@/app/homecomponents/MeetDicuss";

export default function Page() {
  return (
    <section>
      <LogoHero />
      <LogoServices />
      <WhyLogoDesign />
      <SuccessLogo />
      <ReadyLogoDesign />
      <Testimonials />
      <Sponsorship />
      <MeetDicuss />
    </section>
  );
}
