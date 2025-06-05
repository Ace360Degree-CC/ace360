
import Revolution from "../ProductComponents/Revolution";
import TaskMaster from "../ProductComponents/Products";
import Offer from "../ProductComponents/offer";
import WhyChoose from "../ProductComponents/WhyChoose";
import Testimonials from "../homecomponents/testimonials";
import Sponsorship from "../homecomponents/Sponsorship";
import MeetDicuss from "../homecomponents/MeetDicuss";

export default function page(){
    return(
        <>
        <Revolution />
        <TaskMaster />
        <Offer />
        <WhyChoose />
        <Testimonials />
        <Sponsorship />
        <MeetDicuss />

        </>
    );
}