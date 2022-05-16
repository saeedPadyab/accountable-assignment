import request from "../utils/request";
import END_POINTS from "../constants/endpoints";
import APP_CONFIG from "../constants/app-config";
import { IMovie, MovieEnumFilters, Response } from "../types";

interface IGetMoviesByFilter {
  filter: MovieEnumFilters;
  page: number;
}

const getMoviesByFilter = async ({ filter, page }: IGetMoviesByFilter) => {
  const url =
    filter === MovieEnumFilters.top
      ? END_POINTS.topMovies
      : filter === MovieEnumFilters.upcoming
      ? END_POINTS.upcomingMovies
      : filter === MovieEnumFilters.nowPlaying
      ? END_POINTS.nowPlayingMovies
      : END_POINTS.nowPlayingMovies;

  const { data } = await request.get<Response<IMovie>>(url, {
    params: {
      api_key: APP_CONFIG.apiKey,
      language: APP_CONFIG.defaultLang,
      page,
    },
  });

  return data;
};

const exports = { getMoviesByFilter };
export default exports;
