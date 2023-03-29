import React from "react";
import Image from "next/image";
import Transformador from "../../public/img/transformador.png";
import Confirma from "../../public/confirmar.svg";
import { Container, Section } from "./styles";

export function SectionThre() {
  return (
    <Container>
      <Section>
        <div className="textContainer">
          <h1>
            Desenvolvido para melhorar a performance dos ativos de distribuição
          </h1>
        </div>

        <div className="imageConfirma">
          <Image src={Confirma} alt="SVG" />
          <Image src={Confirma} alt="SVG" />
          <Image src={Confirma} alt="SVG" />
          <Image src={Confirma} alt="SVG" />
          <Image src={Confirma} alt="SVG" />
          <Image src={Confirma} alt="SVG" />
          <Image src={Confirma} alt="SVG" />
        </div>
        <div className="text">
          <text>Balanço energético</text>

          <br />
          <br />
          <text>Auto-diagnóstico dos transformadores</text>
          <br />
          <br />
          <text>Medidor ideal para consumidores comerciais, industriais</text>
          <br />
          <br />
          <text>À prova de fraude</text>
          <br />
          <br />
          <text>Melhoria dos Indicadores de Continuidade</text>
          <br />
          <br />
          <text>Maior vida útil do ativo</text>
          <br />
          <br />
          <text>Acompanhamento em tempo real das condições do equipamento</text>
          <br />
          <br />
          <Image className="principal" src={Transformador} alt="image" />
        </div>
      </Section>
    </Container>
  );
}
