import { useEffect, useState } from "react";
import {
  Background,
  Container,
  ContainerButton,
  Info,
  Poster,
  ContainerSlider,
} from "./styles";
import Button from "../../components/Button";
import { FilmSlateIcon, PlayCircleIcon } from "@phosphor-icons/react";
import Slider from "../../components/Slider";
import { getImagens, randoMovies } from "../../utils/getImagens";
import Modal from "../../components/Modal";
import { useNavigate } from "react-router-dom";
import {
  getMovieNowPlaying,
  getMovies,
  getMoviesUpcomings,
  getTopMovies,
} from "../../services/getData";

export function Movies() {
  const [movie, setMovie] = useState();
  const [popular, setPolular] = useState();
  const [topMovies, setTopMovies] = useState();
  const [moviesUpcoming, seMoviesUpcoming] = useState();
  const [nowPlaying, setNowPlaying] = useState();
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    async function getAllData() {
      console.time("time");
      Promise.all([
        getMovies(),
        getTopMovies(),
        getMoviesUpcomings(),
        getMovies(),
        getMovieNowPlaying(),
      ])
        .then(([movie, topMovies, moviesUpcoming, popular, nowPlaying]) => {
          setMovie(randoMovies(movie));
          setTopMovies(topMovies);
          seMoviesUpcoming(moviesUpcoming);
          setPolular(popular);
          setNowPlaying(nowPlaying);
        })
        .catch((error) => console.error(error));

      console.timeEnd("time");
    }

    getAllData();
  }, []);

  return (
    <>
      {movie && (
        <Background $img={getImagens(movie.backdrop_path)}>
          {showModal && (
            <Modal
              showModal={showModal}
              setShowModal={setShowModal}
              movieId={movie.id}
           
            />
          )}
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <ContainerButton>
                <Button
                  onClick={() => navigate(`/detalhe/${movie.id}`)}
                  $variant="red"
                  icon={<PlayCircleIcon weight="fill" />}
                >
                  Assitir Agora
                </Button>
                <Button
                  onClick={() => setShowModal(true)}
                  $variant="white"
                  icon={<FilmSlateIcon weight="fill" />}
                >
                  Assitir Trailler
                </Button>
              </ContainerButton>
            </Info>
            <Poster>
              <img src={getImagens(movie.poster_path)} alt={movie.title} />
            </Poster>
          </Container>
        </Background>
      )}
      <ContainerSlider>
        {topMovies && <Slider title={"Top Filmes"} info={topMovies} />}
        {moviesUpcoming && (
          <Slider title={"Em Lançamento"} info={moviesUpcoming} />
        )}
        {popular && <Slider title={"Filmes Populares"} info={popular} />}
        {nowPlaying && <Slider title={"Filmes Populares"} info={nowPlaying} />}
      </ContainerSlider>
    </>
  );
}

export default Movies;
