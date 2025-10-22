import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  strong {
    border: 2px solid #ff0000c9;
    border-radius: 5px;
    padding: 2px 6px;
    display: flex;
    p {
      color: #ffcc00c9;
    }
  }

  span {
    border: 2px solid #242e3cc9;
    border-radius: 5px;
    padding: 2px 6px;
  }
`;
