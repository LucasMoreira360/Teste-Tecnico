import Image from "next/image";
import Logo from "../../public/img/logo.png";
import { Button, Container, Menu } from "./styles";

export function Header() {
  const styleFont = {
    color: "#00B6DE",
  };

  return (
    <Container>
      <Image src={Logo} alt="Logo" />
      <Menu>
        <div className="styleMenu">
          <li style={styleFont}>Omni trafo</li>
          <li>Sinalizador de faltas</li>
          <li>Acoplador DP</li>
        </div>
      </Menu>
      <Button>Comprar agora</Button>
    </Container>
  );
}
