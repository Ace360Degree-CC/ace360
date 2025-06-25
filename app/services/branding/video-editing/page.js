"use client";

import VideoEditingHero from "./VideoEditingHero";
import VideoEditingServices from "./VideoEditingServices";
import WhyVideoEditing from "./WhyVideoEditing";
import Testimonials from "@/app/homecomponents/Testimonials";
import Sponsorship from "@/app/homecomponents/Sponsorship";
import MeetDicuss from "@/app/homecomponents/MeetDicuss";

import SuccessVideos from "./SuccessVideos";
import ReadyVideoEditing from "./ReadyVideoEditing";

export default function Page() {
  return (
    <section>
      <VideoEditingHero />
      <VideoEditingServices />
      <WhyVideoEditing />
      <SuccessVideos />
      <ReadyVideoEditing />
      <Testimonials />
      <Sponsorship />
      <MeetDicuss />
    </section>
  );
}
