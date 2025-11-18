import { FooterContainer, LogoContainer } from "./style";
import Logo from "../../assets/playlogo.png";

function Footer() {
  return (
    <FooterContainer>
      <section>
        <LogoContainer>
          <img src={Logo} alt="logo-png" />
          <h1>WacthFlix</h1>
        </LogoContainer>
        <div>
          <h2>Sobre API</h2>
          <a target="blank" href="https://www.themoviedb.org/">
            Site
          </a>
          <a
            target="blank"
            href="https://developer.themoviedb.org/docs/getting-started"
          >
            Documentação
          </a>
          <a
            target="blank"
            href="https://developer.themoviedb.org/reference/getting-started"
          >
            API
          </a>
        </div>
      </section>
    </FooterContainer>
  );
}

export default Footer;
