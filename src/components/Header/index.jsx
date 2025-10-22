import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/playLogo.png";
import {
  Container,
  Li,
  LogoContainer,
  Menu,
  ContainerMobile,
  MenuBobile,
} from "./styles";
import { useState } from "react";
import { ListIcon, XIcon } from "@phosphor-icons/react";

function Header() {
  const [changeBackground, setChangeBackground] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  window.onscroll = () => {
    if (!changeBackground && window.pageYOffset > 150) {
      setChangeBackground(true);
    }
    if (changeBackground && window.pageYOffset <= 150) {
      setChangeBackground(false);
    }
  };

  function menuOpen() {
    if (!open) {
      setOpen(true);
    }
    if (open) {
      setOpen(false);
    }
  }

  return (
    <>
      <Container $changeBackground={changeBackground} open={open}>
        <LogoContainer>
          <img src={Logo} alt="logo-png" />
          <h1>WacthFlix</h1>
        </LogoContainer>
        <Menu>
          <Li $isActive={pathname === "/"}>
            <Link to={"/"}>Home</Link>
          </Li>
          <Li $isActive={pathname.includes("filmes")}>
            <Link to={"/filmes"}>Filmes</Link>
          </Li>
          <Li $isActive={pathname.includes("series")}>
            <Link to={"/series"}>Séries</Link>
          </Li>
        </Menu>
        <button onClick={() => menuOpen()}>
          {open ? <XIcon weight="bold" /> : <ListIcon weight="bold" />}
        </button>
      </Container>
      {open && (
        <ContainerMobile>
          <MenuBobile>
            <Li $isActive={pathname === "/"}>
              <Link to={"/"}>Home</Link>
            </Li>
            <Li $isActive={pathname.includes("filmes")}>
              <Link to={"/filmes"}>Filmes</Link>
            </Li>
            <Li $isActive={pathname.includes("series")}>
              <Link to={"/series"}>Séries</Link>
            </Li>
          </MenuBobile>
        </ContainerMobile>
      )}
    </>
  );
}

export default Header;
