import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: all 300ms ease-in-out;
  height: 100%;
  position: relative;
  overflow: visible;

  div {
    position: relative;
  }

  img {
    width: 200px;
    height: 300px;
    border-radius: 5px;
    transition: all 300ms ease-in-out;
    object-fit: cover;
  }

  img:hover {
    transform: scale(1.05);
  }

  p {
    text-align: center;
  }

  &:hover {
    background: #000b17ff;
    border-radius: 10px;
  }

  @media screen and (max-width: 768px) {
    img {
      width: 130px;
      height: 200px;
    }
    p {
      font-weight: 600;
    }
  }
`;
