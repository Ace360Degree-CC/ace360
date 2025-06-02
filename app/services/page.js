import Branding from "../ServiceComponents/Branding";
import DigitalMarketing from "../ServiceComponents/DigitalMarketing";
import HeroService from "../ServiceComponents/HeroService";
import RequestQuoteForm from "../ServiceComponents/RequestQuoteForm";
import Technology from "../ServiceComponents/Technology";
import WhyChooseAce from "../ServiceComponents/WhyChooseAce";

export default function Page() {
  return (
    <>
      <HeroService />
      <DigitalMarketing />
      <Branding />
      <Technology />
      <WhyChooseAce />
      <RequestQuoteForm />
    </>
  );
}
