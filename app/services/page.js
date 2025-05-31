import Branding from "../ServiceComponents/Branding";
import DigitalMarketing from "../ServiceComponents/DigitalMarketing";
import HeroService from "../ServiceComponents/HeroService";
import Technology from "../ServiceComponents/Technology";

export default function Page() {
  return (
    <>
      <HeroService />
      <DigitalMarketing />
      <Branding />
      <Technology />
    </>
  );
}
