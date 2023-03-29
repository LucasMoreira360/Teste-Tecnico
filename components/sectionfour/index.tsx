import React from "react";
import Button from "../button";
import { PageContainer, Title } from "./styles";

export function SectionFour() {
  const button = {
    position:"relative",
    width: "222px",
    height: "50px",
    left: "-340px",
    top: "210px",
    backgroundColor:"#1C2C44"
    
  };

  return (
    <PageContainer>
      <Title>
        Quer saber mais sobre como podemos te ajudar a melhorar a performance de
        seus ativos?
      </Title>
      <Button title="Falar com consumidor" style={button} />
    </PageContainer>
  );
}
