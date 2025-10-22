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
  getTopSeries,
  getTvAiringToday,
  getTvOnTheAir,
  getTvPopular,
} from "../../services/getData";

export function Series() {
  const [onTheAir, setOnTheAir] = useState();
  const [tvOnTheAir, setTvOnTheAir] = useState();
  const [topSeries, setTopSeries] = useState();
  const [airingtoday, setTvAiringToday] = useState();
  const [tvPopular, setTvPopular] = useState();

  // mostra o modal quando clicado no botão
  const [showModal, setShowModal] = useState(false);

console.log(onTheAir)

  const navigate = useNavigate();

  useEffect(() => {
    async function getAllData() {
      console.time("time");
      Promise.all([
        getTvOnTheAir(),
        getTvOnTheAir(),
        getTopSeries(),
        getTvAiringToday(),
        getTvPopular(),
      ])
        .then(([onTheAir, tvOnTheAir, topSeries, airingToday, tvPopular]) => {
          setOnTheAir(randoMovies(onTheAir));
          setTvOnTheAir(tvOnTheAir);
          (setTopSeries(topSeries),
            setTvAiringToday(airingToday),
            setTvPopular(tvPopular));
        })
        .catch((error) => console.error(error));
      console.timeEnd("time");
    }

    getAllData();
  }, []);

  return (
    <>
      {onTheAir && (
        <Background $img={getImagens(onTheAir.backdrop_path)}>
          {showModal && (
            <Modal
              showModal={showModal}
              setShowModal={setShowModal}
              movieId={onTheAir.id}
            />
          )}
          <Container>
            <Info>
              <h1>{onTheAir.name}</h1>
              <p>{onTheAir.overview}</p>
              <ContainerButton>
                <Button
                  onClick={() => navigate(`/detalhe/${onTheAir.id}`)}
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
              <img
                src={getImagens(onTheAir.poster_path)}
                alt={onTheAir.title}
              />
            </Poster>
          </Container>
        </Background>
      )}
      <ContainerSlider>
        {tvPopular && <Slider title={"Series Populares"} info={tvPopular} />}
        {topSeries && <Slider title={"Melhores Series"} info={topSeries} />}
        {tvOnTheAir && <Slider title={"No Ar"} info={tvOnTheAir} />}
        {airingtoday && <Slider title={"Exibindo hoje"} info={airingtoday} />}
      </ContainerSlider>
    </>
  );
}

export default Series;
