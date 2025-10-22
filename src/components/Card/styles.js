import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: all 300ms ease-in-out;
  height: 100%;
  position: relative;
  overflow: visible;

  img {
    width: 200px;
    height: 300px;
    border-radius: 5px;
  }

  p {
    text-align: center;
  }

  &:hover {
    transform: scale(1.03);
    background: #000b17ff;
    height: 105%;
    padding: 5px;
    border-radius: 10px;
  }

  @media screen and (max-width: 768px) {
    img {
      width: 150px;
      height: 230px;
    }
  }
`;
