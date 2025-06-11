import MeetDicuss from "../homecomponents/MeetDicuss";
import Sponsorship from "../homecomponents/Sponsorship";
import Testimonials from "../homecomponents/testimonials";
import DesignMatters from "../LogoDesigningCompo/DesignMatters";
import LogoDesignService from "../LogoDesigningCompo/LogoDesignService";
import LogoHead from "../LogoDesigningCompo/LogoHead";
import SuccessStories from "../LogoDesigningCompo/SuccessStories";


export default function page(){
    return(
        <>
        <LogoHead />
        <LogoDesignService />
        <DesignMatters />
        < SuccessStories />
        <Testimonials />
        <Sponsorship />
        <MeetDicuss />



        </>

    );
}