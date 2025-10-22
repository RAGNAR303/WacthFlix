import { Container } from "./styles";

function Genres({ genres, average }) {
  return (
    <Container>
      {average && (
        <strong>
          {Math.max(average).toFixed(1)}/ <p>10</p>
        </strong>
      )}
      {genres && genres.map((item) => <span key={item.id}>{item.name}</span>)}
    </Container>
  );
}

export default Genres;
