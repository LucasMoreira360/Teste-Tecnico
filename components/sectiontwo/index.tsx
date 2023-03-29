import Image from "next/image";
import React from "react";
import Group26 from "../../public/img/Group26.png";
import Group27 from "../../public/img/Group27.png";
import Group28 from "../../public/img/Group28.png";
import Group30 from "../../public/img/Group30.png";
import Group31 from "../../public/img/Group31.png";
import Group32 from "../../public/img/Group32.png";
import Group33 from "../../public/img/Group33.png";
import Group34 from "../../public/img/Group33.png";
import Image2 from "../../public/img/Image2.png";
import {
  Article,
  LogoGroup,
  LogoRectangle2,
  PageContainer,
  Paragraph,
  Subtitle,
  Title,
} from "./styles";

export function SectionTwo() {
  return (
    <PageContainer>
      <Article>
        <Title>OMNI TRAFO</Title>
        <Subtitle>
          Monitoramento inteligente de transformadores de distribuição
        </Subtitle>
        <Paragraph>
          O Omni trafo é uma solução consolidada para monitoramento de ativos.
          Através deste equipamento, informações importantes da rede são
          enviadas em tempo real , permitindo, assim, a administração remota de
          dados como:
        </Paragraph>

        <LogoGroup>
          <Image src={Group26} alt="image" />
          <Image src={Group27} alt="image" />
          <Image src={Group28} alt="image" />
          <Image src={Group30} alt="image" />
        </LogoGroup>

        <LogoRectangle2>
          <Image src={Group31} alt="image" />
          <Image src={Group32} alt="image" />
          <Image src={Group33} alt="image" />
          <Image src={Group34} alt="image" />
        </LogoRectangle2>

        <Image className="imageProduto" src={Image2} alt="image" />
      </Article>
    </PageContainer>
  );
}
