export function getImagens(path) {
  return `https://image.tmdb.org/t/p/original/${path}`;
}

export function getVideos(video) {
  return `https://www.youtube.com/embed/${video}`;
}

export function randoMovies(movie) {
  const index = Math.floor(Math.random() * movie.length);

  return movie[index];
}

export function fixedAverages(average) {
  return Number(average).toFixed(1);
}
