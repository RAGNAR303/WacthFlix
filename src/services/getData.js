import api from "./api";

// busca os filmes atualizados

export async function getMovies() {
  const {
    data: { results },
  } = await api.get("/movie/popular");
  return results;
}

// busca os filmes mais assitidos
export async function getTopMovies() {
  const {
    data: { results },
  } = await api.get("/movie/top_rated");

  return results;
}

// busca os  filmes que vão vir
export async function getMoviesUpcomings() {
  const {
    data: { results },
  } = await api.get("/movie/upcoming");

  return results;
}
// busca os  Filmes para ver agora

export async function getMovieNowPlaying() {
  const {
    data: { results },
  } = await api.get(`/movie/now_playing`);

  return results;
}

// busca os artistas populares
export async function getPersonPopulars() {
  const {
    data: { results },
  } = await api.get("/person/popular");

  return results;
}

// buscando os videos do filme ou series

export async function getMovieVideos(movieId) {
  if (movieId) {
    const {
      data: { results },
    } = await api.get(`/movie/${movieId}/videos`);

    return results;
  }
}

// buscando os detalhes do filme
export async function getMovieDetails(movieId) {
  const { data: details } = await api.get(`/movie/${movieId}`);

  return details;
}

// buscando atores que participaram do filmes
export async function getMovieCredits(movieId) {
  const {
    data: { cast },
  } = await api.get(`/movie/${movieId}/credits`);

  return cast;
}

export async function getMovieSimilar(movieId) {
  const {
    data: { results },
  } = await api.get(`/movie/${movieId}/similar`);

  return results;
}

// Series //

export async function getTopSeries() {
  const {
    data: { results },
  } = await api.get("/tv/top_rated");

  return results;
}

export async function getTvAiringToday() {
  const {
    data: { results },
  } = await api.get(`/tv/airing_today`);

  return results;
}

export async function getTvOnTheAir() {
  const {
    data: { results },
  } = await api.get(`/tv/on_the_air`);

  return results;
}
export async function getTvPopular() {
  const {
    data: { results },
  } = await api.get(`/tv/popular`);

  return results;
}

export async function getSeriesVideos(SeriesId) {
  const {
    data: { results },
  } = await api.get(`/tv/${SeriesId}/videos`);

  return results;
}

// https://api.themoviedb.org/3/movie/{movie_id}

// https://api.themoviedb.org/3/tv/{series_id}

// https://api.themoviedb.org/3/movie/{movie_id}/videos

// https://api.themoviedb.org/3/tv/{series_id}/videos
