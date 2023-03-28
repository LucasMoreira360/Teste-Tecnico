import React from "react";
import Image from "next/image";
import FirstImage from "../../public/img/firstimage.png";
import WhatsIcon from "../../public/img/iconwhats.png";
import Button from "../button";
import { Article, Aside, PageContainer, Section } from "./styles";

export function Welcome() {
  const button = {
    display: "flex",
    alignItems: "flex-start",
    padding: 15,
    width: "277px",
    height: "50px",
    left: "calc(50% - 138.5px)",
    top: "632px",
    borderRadius: "5px",
    color: "#fff",
    backgroundColor: "#00B6DE",
    fontFamily: "Inter",
    fontSize: "16px",
    textDecoration: "none",
    paddingLeft: "43px",

    "@media (max-width: 1200px)": {
      width: "100%",
      maxWidth: "350px",
      left: 0,
      right: 0,
      margin: "0 auto",
    },
  };

  return (
    <PageContainer>
      <Section>
        <h1 className="firstText">
          Tenha Informações em tempo real das condições dos ativos e com o
          monitoramento inteligente
        </h1>

        <p className="secondText">
          Tenha acesso a informações em tempo real, administração remota de
          dados importantes da rede elétrica como: tensão, corrente, potência
          passante, energia, temperatura, sobrecarga entre outros, mapeando seu
          funcionamento, prevendo a vida útil dos ativos e aferindo perdas
          técnicas e não
        </p>

        <Button title="Quero mais informações" style={button} />
      </Section>

      <Aside>
        <Image className="img" src={FirstImage} alt="image" />
      </Aside>
      <Article>
        <div className="WhatsappContainer">
          <Image className="WhatsappIcon" src={WhatsIcon} alt="icon" />
        </div>
      </Article>
    </PageContainer>
  );
}
