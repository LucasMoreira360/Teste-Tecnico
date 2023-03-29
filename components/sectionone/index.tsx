import Image from "next/image";
import React from "react";
import Group20 from "../../public/img/group20.png";
import Group21 from "../../public/img/group21.png";
import Group22 from "../../public/img/group22.png";
import {
  Article,
  PageContainer,
  Title,
  Subtitle,
  Paragraph,
} from "./styles";

export function Section() {
  return (
    <PageContainer>
      <Article>
        <div>
          <Title>OMNI TRAFO</Title>
          <Subtitle>
            É o dispositivo capaz de integrar os transformadores as redes
            inteligentes
          </Subtitle>
          <Paragraph>
            O Omni Trafo envia informações em tempo real, permitindo a
            administração remota de dados importantes da rede elétrica, como
            tensão, corrente, potência passante, energia, temperatura,
            sobrecarga entre outros, mapeando seu funcionamento, prevendo a vida
            útil dos ativos e aferindo perdas técnicas e não técnicas.
          </Paragraph>
        </div>
        <div className="LogoGroup">
          <div className="LogoRectangle">
            <Image src={Group20} alt="image" />
            <Image src={Group21} alt="image" />
          </div>
          <div className="LogoRectangle">
            <Image src={Group22} alt="image" />
            <Image src={Group22} alt="image" />
          </div>
        </div>
      </Article>
    </PageContainer>
  );
}
