import styled, { keyframes } from "styled-components";

const scale = keyframes`
from {
    transform: scale(0);
    opacity: 0;
}
to {
    transform: scale(1);
    opacity: 1;
}
`;

export const Background = styled.div`
  background:
    linear-gradient(180deg, #0000007b 0%, #000b17af 70%, #000b17ff 100%),
    url(${(props) => props.$image}) center / cover;
  height: 50vh;
`;

export const Container = styled.div`
  border-radius: 30px;
  margin-top: -30px;
  padding: 30px 10px;
  background: linear-gradient(180deg, #000b17ff, #000b178c);
  backdrop-filter: blur(10px);
  border: 2px solid #242e3cc9;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Cover = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 300px;
    border-radius: 5px;
    animation: ${scale} 0.5s linear;
  }

  @media screen and (max-width: 768px) {
    img {
      width: 200px;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  gap: 10px;
  padding: 0 20px;

  section {
    overflow-y: scroll;
    height: 150px;
    text-align: justify;
    padding: 10px;
  }

  @media screen and (max-width: 768px) {
    & {
      width: 100%;
      text-align: center;
    }
  }
`;

export const ContainerMovies = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 50px auto;
  padding: 20px;

  h4 {
    text-align: center;
    margin-bottom: 10px;
  }

  iframe {
    border: none;
    border-radius: 5px;
    width: 400px;
    height: 250px;
    min-width: 100%;
    min-height: 100%;
    box-shadow:
      rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
`;
