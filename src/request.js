
const Request = {
  fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDB_KEY}&with_networks=213/discover/tv?api_key=${process.env.REACT_APP_TMDB_KEY}&with_networks=213`,
  fetchtrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_TMDB_KEY}`,
  fetchDiscover: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`,
  fetchTV: `https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.REACT_APP_TMDB_KEY}`,
  fetchTvTopRated: `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`,
  fetchRecommndation: `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_TMDB_KEY}`,
};
export default Request;
