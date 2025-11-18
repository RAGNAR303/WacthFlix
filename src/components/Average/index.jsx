import { fixedAverages } from "../../utils/getImagens";
import { Container } from "./styles";

function Average({ voto }) {
  return <Container>{fixedAverages(voto)}</Container>;
}

export default Average;
