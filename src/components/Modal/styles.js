import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 999;
  top: 0;
  left: 0;
  position: absolute;
  background: #00000062;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  background: #000000ff;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  iframe {
    border: none;
    width: 600px;
    height: 300px;
  }

  button {
    background: #ae0505ff;
    padding: 5px 10px;
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    color: #fff;
    font-weight: 900;
  }

  div{
     color: #fff;
     font-size: 2rem;
  }
`;
