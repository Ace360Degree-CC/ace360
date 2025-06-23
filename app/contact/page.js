"use client";

import ContactFormWithMap from "./ContactFormWithmap";
import ContactHero from "./ContactHero";
import ContactInfo from "./ContactInfo";

export default function Page() {
  return (
    <section>
      <ContactHero />
      <ContactInfo />
      <ContactFormWithMap />
    </section>
  );
}
