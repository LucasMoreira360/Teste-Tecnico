import React from "react";
import { Welcome } from "@/components/welcome";
import { Header } from "../components/header";
import { Feature } from "@/components/feature";
import { Section } from "@/components/section";

export default function Home() {
  return (
    <div>
      <Header />
      <Welcome />
      <Feature />
      <Section />
    </div>
  );
}
