import styled from "styled-components";

export const Container = styled.div`
  overflow-x: hidden;
  height: 450px;

  h2 {
    font-size: 2.5rem;
    margin: 20px 0;
    text-align: center;
    letter-spacing: 5px;
  }

  .swiper-wrapper {
    display: flex;
  }

  @media screen and (max-width: 768px) {
    h2 {
      font-size: 2rem;
    }
  }
`;
