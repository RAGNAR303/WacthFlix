import styled from "styled-components";

export const Container = styled.div`
  gap: 10px;
  z-index: 999;
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  padding: 5px 4%;
  align-items: center;
  width: 100%;
  transition: all 300ms ease-in-out;
  background: ${(props) => (props.$changeBackground ? "#000000" : "")};

  button {
    display: none;
  }

  @media screen and (max-width: 768px) {
    & {
      backdrop-filter: ${(props) => (props.open ? "blur(10px)" : "")};
      background: ${(props) => (props.open ? "#000b17da" : "")};
    }

    button {
      display: flex;
      background: none;
      border: none;
      color: #ff3d00;
      font-size: 40px;
    }
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 70px;
  }

  h1 {
    color: #ff3d00;
    font-size: 3rem;
    letter-spacing: 2px;
    text-shadow: 0 0 4px #b10000ff;
    text-transform: uppercase;
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    img {
      width: 50px;
    }
  }
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;

  @media screen and (max-width: 768px) {
    & {
      display: none;
    }
  }
`;

export const Li = styled.li`
  list-style: none;
  font-size: 2rem;
  font-weight: 900;
  padding: 3px 20px;
  transition: all 1000ms ease-in-out;
  border: ${(props) => (props.$isActive ? "2px solid #d5d5d5ff " : "")};
  border-radius: 5px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #d5d5d572;
    color: #ff3d00;
    padding: 3px 20px;
    border-radius: 5px;
  }

  a {
    color: ${(props) => (props.$isActive ? "#ff3d00" : "#d5d5d5ff")};
  }
  a:hover {
    color: #ff3d00;
  }
`;

export const ContainerMobile = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000b17da;
  backdrop-filter: blur(10px);
  width: 100%;
  margin-top: 60px;
  padding: 20px 0;
`;

export const MenuBobile = styled.ul`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
