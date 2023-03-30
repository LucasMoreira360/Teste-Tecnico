import React from "react";
import { Container, Title, TextContainer } from "./styles";
import Image from "next/image";
import Group51 from "../../public/img/Group51.png";
import Group52 from "../../public/img/Group52.png";
import Group53 from "../../public/img/Group53.png";
import Group54 from "../../public/img/Group54.png";

export function SectionFive() {
  return (
    <Container>
      <Title>Perguntas Frequentes</Title>
      <TextContainer>
        <Image src={Group51} alt="image" />
        <Image src={Group52} alt="image" />
        <Image src={Group53} alt="image" />
        <Image src={Group54} alt="image" />
      </TextContainer>
    </Container>
  );
}
