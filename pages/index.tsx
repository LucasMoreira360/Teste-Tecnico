import React from "react";
import { Welcome } from "@/components/welcome";
import { Header } from "../components/header";
import { Feature } from "@/components/feature";
import { Section } from "@/components/sectionone";
import { SectionTwo } from "@/components/sectiontwo";
import { SectionThre } from "@/components/sectionthree";
import { SectionFour } from "@/components/sectionfour";
import { SectionFive } from "@/components/sectionfive";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Welcome />
      <Feature />
      <Section />
      <SectionTwo />
      <SectionThre />
      <SectionFour />
      <SectionFive />
      <Footer />
    </div>
  );
}
