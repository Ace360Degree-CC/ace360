"use client";

import SuccessStories from "@/app/components/SuccessStories";
import VideoEditingHero from "./VideoEditingHero";
import VideoEditingServices from "./VideoEditingServices";
import WhyVideoEditing from "./WhyVideoEditing";
import Testimonials from "@/app/homecomponents/testimonials";
import Sponsorship from "@/app/homecomponents/Sponsorship";
import MeetDicuss from "@/app/homecomponents/MeetDicuss";
import ReadyVidepEditing from "./ReadyVidepEditing";
import SuccessVideos from "./SuccessVideos";

export default function Page() {
  return (
    <section>
      <VideoEditingHero />
      <VideoEditingServices />
      <WhyVideoEditing />
      <SuccessVideos />
      <ReadyVidepEditing />
      <Testimonials />
      <Sponsorship />
      <MeetDicuss />
    </section>
  );
}
