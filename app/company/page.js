import Objective from "../CompanyComponents/Objective";
import Space from "../CompanyComponents/space";
import Values from "../CompanyComponents/Values";
import Webreath from "../CompanyComponents/WeBreath";
import MeetDicuss from "../homecomponents/MeetDicuss";
import Testimonials from "../homecomponents/Testimonials";

export default function page() {
  return (
    <>
      <Webreath />
      <Objective />
      <Values />
      <Testimonials />
      <Space />
      <MeetDicuss />
    </>
  );
}
