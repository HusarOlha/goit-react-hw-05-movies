import axios from 'axios';

const API_KEY = '5aaf87e447efebf6d5c12466ddbc5de2';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const GetTrendingMovies = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data;
};
export const GetMoviesBySearch = async (query, page) => {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}'&page=${page}&include_adult=false`
  );
  return response.data;
};

export const GetFullInfoMovie = async id => {
  const response = await axios.get(
    `movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const GetCast = async id => {
  const response = await axios.get(
    `movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data.cast;
};

export const GetReviews = async id => {
  const response = await axios.get(
    `movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return response.data.results;
};

// export const GetFullInfoMovie = async id => {
//   const response = await axios.get(`${BASE_URL}/3/movie/${id}`, {
//     params: {
//       api_key: API_KEY,
//       language: 'en-US',
//     },
//   });
//   return response.data;
// };

// export const GetCast = async id => {
//   const response = await axios.get(
//     `${BASE_URL}/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
//   );
//   return response.data.cast;
// };

// export const GetReviews = async id => {
//   const response = await axios.get(
//     `${BASE_URL}/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
//   );

//   return response.data.results;
// };

// export const GetMoviesBySearch = async (query, page) => {
//   const response = await axios.get(
//     `${BASE_URL}/3/search/movie?api_key=${API_KEY}&query=${query}&page=${page}&language=en-US&include_adult=false`
//   );
//   return response.data;
// };
