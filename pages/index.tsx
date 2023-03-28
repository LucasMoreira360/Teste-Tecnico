import React from "react";
import { Welcome } from "@/components/welcome";
import { Header } from "../components/header";

export default function Home() {
  return (
    <div>
      <Header />
      <Welcome />
    </div>
  );
}
