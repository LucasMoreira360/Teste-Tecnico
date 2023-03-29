import Image from "next/image";
import React from "react";
import Primeira from "../../public/img/primeira.png";
import Segunda from "../../public/img/segunda.png";
import Terceira from "../../public/img/terceira.png";
import Confirma from "../../public/confirmar.svg";
import { Container, Section } from "./styles";

export function Feature() {
  return (
    <Container>
      <Section>
        <Image className="principal" src={Primeira} alt="image" />
        <Image className="secundaria" src={Segunda} alt="image" />
        <Image className="terceira" src={Terceira} alt="image" />
        <div className="textContainer">
          <h1>Seja bem-vindo a era da energia inteligente</h1>
        </div>
        <div className="paragrafoContainer">
          <p>
            As redes inteligentes são um caminho sem volta, o desenvolvimento e
            disceminação de dispositivos de medição e monitoramento são as
            ferramentas para redução de custos, perdas e trazem mais
            previsibilidade para as utilities de energia.
          </p>
        </div>
        <div className="imageConfirma">
          <Image src={Confirma} alt="SVG" />
          <Image src={Confirma} alt="SVG" />
          <Image src={Confirma} alt="SVG" />
          <Image src={Confirma} alt="SVG" />
          <Image src={Confirma} alt="SVG" />
        </div>
        <div className="textdebosta">
          <text>Monitoramento inteligente de ativos</text>

          <br />
          <br />
          <text>Melhoria dos indicadores de continuidade</text>
          <br />
          <br />
          <text>Comunicação Modular</text>
          <br />
          <br />
          <text>Business Inteligence</text>
          <br />
          <br />
          <text>Redução de Perdas técnicas e Não técnicas</text>
          <br />
          <br />
        </div>
      </Section>
    </Container>
  );
}
