import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/';
const API_KEY = '5aaf87e447efebf6d5c12466ddbc5de2';

export const GetMovieHome = async () => {
  const response = await axios.get(`${BASE_URL}/3/trending/movie/day?`, {
    params: {
      api_key: API_KEY,
      page: 1,
      language: 'en-US',
    },
  });
  return response.data;
};

export const GetFullInfoMovie = async id => {
  const response = await axios.get(`${BASE_URL}/3/movie/${id}`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  return response.data;
};

export const GetCast = async id => {
  const response = await axios.get(
    `${BASE_URL}/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data.cast;
};

export const GetReviews = async id => {
  const response = await axios.get(
    `${BASE_URL}/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );

  return response.data.results;
};

export const GetMoviesBySearch = async (query, page) => {
  const response = await axios.get(
    `${BASE_URL}/3/search/movie?api_key=${API_KEY}&query=${query}&page=${page}&language=en-US&include_adult=false`
  );
  return response.data;
};
