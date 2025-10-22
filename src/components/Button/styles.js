import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: 800;
  transition: all 400ms ease-in-out;
  font-size: 15px;

  &:hover {
    transform: scale(1.05);
  }
  svg {
    font-size: 25px;
  }

  @media screen and (max-width: 768px) {
    & {
      padding: 5px 10px;
      font-size: 15px;
      text-align: center;
    }
    svg {
      font-size: 20px;
    }
  }

  ${({ $variant }) => {
    switch ($variant) {
      case "white":
        return css`
          background: transparent;
          color: #fff;
          border: 3px solid #ffffff;

          &:hover {
            background: #fff;
            color: #ff0505ff;
          }
        `;
      case "red":
        return css`
          background: #ae0505ff;
          color: #fff;
          border: 3px solid transparent;

          &:hover {
            background: #ff0505ff;
            color: #fff;
            -webkit-box-shadow: 0px 0px 30px 7px rgba(140, 0, 0, 0.66);
            box-shadow: 0px 0px 30px 7px rgba(140, 0, 0, 0.66);
          }
        `;
    }
  }}
`;
