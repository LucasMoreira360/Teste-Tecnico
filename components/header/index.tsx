import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/img/logo.png";

export function Header() {
  return (
    <div className="Container">
      <div className="logotipo">
        <Image src={Logo} alt="" />
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link href="/">Omni trafo</Link>
          </li>
          <li>Sinalizador de faltas</li>
          <li>Acoplador DP</li>
        </ul>
      </div>
      <div className="action">
        <button>Comprar agora</button>
      </div>
    </div>
  );
}
