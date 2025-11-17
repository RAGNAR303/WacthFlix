import styled from "styled-components";

export const Container = styled.div`
  height: 450px;
  overflow-x: hidden;
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
    & {
      overflow-x: hidden;
      height: 400px;
    }

    h2 {
      font-size: 1.5rem;
    }
  }
`;
