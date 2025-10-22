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
    linear-gradient(180deg, #0000007b 0%, #000b17af 70%, #000b17e2 100%),
    url(${(props) => props.$img}) center / cover;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 80%;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    & {
      flex-direction: column;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  gap: 20px;
  padding: 20px;
  h1 {
    font-size: 3.5rem;
  }

  p {
    font-size: 1rem;
  }

  @media screen and (max-width: 768px) {
    & {
      width: 100%;
      padding: 10px;
      text-align: center;
    }

    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;
export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Poster = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
  img {
    width: 200px;
    border-radius: 5px;
    animation: ${scale} 0.5s linear;
    box-shadow:
      rgb(38, 57, 77) 0px 20px 30px -10px,
      rgba(71, 71, 131, 0.25) 0px 2px 5px -1px,
      rgba(20, 28, 37, 0.3) 0px 1px 3px -1px;
  }

  @media screen and (max-width: 768px) {
    & {
      display: none;
    }
  }
`;

export const ContainerSlider = styled.div`
  border-radius: 30px;
  margin-top: -30px;
  padding: 30px 10px;
  background-color: #000b17e2;
  backdrop-filter: blur(10px);
  border: 2px solid #242e3cc9;
`;
