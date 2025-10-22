import { ButtonContainer } from "./styles";

function Button({ children, icon, $variant, ...rest }) {
  return (
    <ButtonContainer $variant={$variant} {...rest}>
      {icon}
      <a>{children}</a>
    </ButtonContainer>
  );
}

export default Button;
