import Image from "next/image";
import LogoMenor from "../../public/img/vectorlogomenor.png";
import RedeSociais from "../../public/img/socialicon.png";
import { Container, LogoWrapper, Column,SocialMediaWrapper,} from "./styles";


export const Footer = () => {
  return (
    <Container>
      <LogoWrapper>
        <Image src={LogoMenor} alt="Logo" />
      </LogoWrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
          marginTop: "10px",
          gap: "200px",
          marginLeft: "400px",
        }}
      >
        <Column>
          <h2>Endereço</h2>
          <p>
            R. Ismael Pinto de Noronha, 86 - Nossa Sra. de Fatima, Itajubá - MG,
            37502-508
          </p>
        </Column>
        <Column>
          <h2>Contato</h2>
          <p>(11)98278-313</p>
          <p>contato@hvex.com.br</p>
        </Column>
        <Column>
          <h2>Confira nossa redes </h2>
          <SocialMediaWrapper>
            <Image src={RedeSociais} alt="Redes Sociais" />
          </SocialMediaWrapper>
        </Column>
      </div>
    </Container>
  );
};
