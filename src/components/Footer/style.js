import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  bottom: 0;
  left: 0;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin: 0 auto;

  div {
    display: flex;
    flex-direction: column;
  }

  a {
    color: #dededeff;
    font-weight: 500;
    padding: 5px;
  }

  a:hover {
    color: #fc0000ff;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
    gap: 30px;
  }
`;

export const LogoContainer = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  flex-direction: row;

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
      font-size: 1.5rem;
      margin-top: 5px;
    }
    img {
      width: 40px;
      padding-top: 10px;
    }
  }
`;
