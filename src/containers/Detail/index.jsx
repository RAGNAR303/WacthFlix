import { useEffect, useState } from "react";
import { Background, Container, Cover, Info, ContainerMovies } from "./styles";
import {
  getMovieCredits,
  getMovieDetails,
  getMovieSimilar,
  getMovieVideos,
} from "../../services/getData";
import { useParams } from "react-router-dom";
import { getImagens, getVideos } from "../../utils/getImagens";
import Genres from "../../components/Genres";
import Credits from "../../components/Credits";
import Slider from "../../components/Slider";

function Detail() {
  const [movieDetails, setMovieDetails] = useState();
  const [movieCredits, seMovieCredits] = useState();
  const [movieSimilar, setMovieSimilar] = useState();
  const [movieVideos, setMovieVideos] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function getAllData() {
      console.time("time");
      Promise.all([
        getMovieVideos(id),
        getMovieDetails(id),
        getMovieCredits(id),
        getMovieSimilar(id),
      ])
        .then(([video, details, credits, similar]) => {
          setMovieVideos(video);
          setMovieDetails(details);
          seMovieCredits(credits);
          setMovieSimilar(similar);
        })
        .catch((error) => console.error(error));

      console.timeEnd("time");
    }

    getAllData();
  }, [id]);

  return (
    <div>
      {movieDetails && (
        <>
          <Background $image={getImagens(movieDetails.backdrop_path)} />
          <Container>
            <Cover>
              <img
                src={getImagens(movieDetails.poster_path)}
                alt={movieDetails.title}
              />
            </Cover>

            <Info>
              <div>
                <h1>{movieDetails.title}</h1>
                <p>({movieDetails.original_title})</p>
              </div>
              <Genres
                genres={movieDetails.genres}
                average={movieDetails.vote_average}
              />
              <section>
                <p>{movieDetails.overview}</p>
              </section>
              <>
                {movieCredits && <Credits credits={movieCredits}></Credits>}
              </>
            </Info>
          </Container>
          <ContainerMovies>
            {movieVideos &&
              movieVideos.map((video) => (
                <div key={video.id}>
                  <h4>{video.name}</h4>
                  <iframe
                    src={getVideos(video.key)}
                    title={video.name}
                  ></iframe>
                </div>
              ))}
          </ContainerMovies>

          {movieSimilar && (
            <Slider title={"Filmes Similares"} info={movieSimilar} />
          )}
        </>
      )}
    </div>
  );
}

export default Detail;
