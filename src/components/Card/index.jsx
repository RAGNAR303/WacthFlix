import { useNavigate } from "react-router-dom";
import { getImagens } from "../../utils/getImagens";
import { Container } from "./styles";
import Average from "../Average";

function Card({ item }) {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(`/detalhe/${item.id}`)}>
      <div>
        <img
          src={getImagens(item.poster_path || item.profile_path)}
          alt={item.title || item.name}
        />
        {item.vote_average && <Average voto={item.vote_average} />}
      </div>

      <p>{item.title || item.name}</p>
    </Container>
  );
}

export default Card;
