import { useNavigate } from "react-router-dom";
import { getImagens } from "../../utils/getImagens";
import { Container } from "./styles";

function Card({ item }) {

  const navigate = useNavigate();

  

  return (
    <Container onClick={() => navigate(`/detalhe/${item.id}`)}>
      <img
        src={getImagens(item.poster_path || item.profile_path)}
        alt={item.title || item.name}
      />
      <p>{item.title || item.name}</p>
    </Container>
  );
}

export default Card;


//TODO falta criar tela de series e de movies