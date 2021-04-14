import axios from 'axios';
const api_key = 'api_key=450bf04edaaa49ba73752463a5e7270d&language=pt-BR';
const apiURL = 'https://api.themoviedb.org/3/';

export const searchTrendingMovies = () => {
  return axios.get(apiURL + `trending/movie/week?` + api_key);
};

export const searchSingleMovie = (movieID) => {
  return axios.get(apiURL + `movie/${movieID}?` + api_key);
};

export const searchProviders = (movieID) => {
  return axios.get(apiURL + `movie/${movieID}/watch/providers?` + api_key);
};

export const searchMoviesByGenre = (genreID) => {
  return axios.get(
    apiURL +
      `discover/movie?${api_key}&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_genres=${genreID}`,
  );
};

export const searchMultipleMovies = (searchValue) => {
  return axios.get(
    apiURL +
      `search/movie?` +
      api_key +
      `&query=${searchValue}&page=1&include_adult=false`,
  );
};
