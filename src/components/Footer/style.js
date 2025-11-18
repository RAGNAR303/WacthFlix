import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;

  width: 100%;
  bottom: 0;
  left: 0;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin: 0 auto;
  background: #000b17da;
  border-top: 2px solid #242e3cc9;
  border-radius: 20px 20px 0 0;

  section {
    width: 80%;
    display: flex;
    margin: 0 auto;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

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
    section {
      justify-content: center;
      gap: 30px;
      flex-direction: column;
    }
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;

  img {
    width: 50px;
  }

  h1 {
    color: #ff3d00;
    font-size: 2rem;
    letter-spacing: 2px;
    text-shadow: 0 0 4px #b10000ff;
    text-transform: uppercase;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    width: 100%;

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
