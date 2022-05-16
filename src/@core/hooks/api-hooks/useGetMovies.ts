import { useEffect, useState } from "react";
import { IMovie } from "@core/types";
import useApp from "@core/contexts/App/useApp";
import movieApi from "@core/api/movieApi";

interface Props {
  isLoading: boolean;
  isError: boolean;
  data: IMovie[];
  hasNextPage: boolean;
}

const PAGE_SIZE = 20;

const useGetMovies = (): Props => {
  const { selectedFilter, page, createdMovies } = useApp() || {};

  const [state, setState] = useState<Props>({
    isLoading: true,
    isError: false,
    data: [],
    hasNextPage: false,
  });

  useEffect(() => {
    // after changing filter, all the states reset
    setState({
      isLoading: true,
      isError: false,
      data: [],
      hasNextPage: false,
    });

    // fetch movies with page = 1
    getData();
  }, [selectedFilter]);

  useEffect(() => {
    if (page > 1) getData();
  }, [page]);

  const getData = () => {
    movieApi
      .getMoviesByFilter({ filter: selectedFilter, page })
      .then((res) => {
        setState((prev) => ({
          isLoading: false,
          isError: false,
          data: [...prev.data, ...res.results],
          hasNextPage: res.results.length < PAGE_SIZE ? false : true,
        }));
      })
      .catch(() => {
        setState((prev) => ({
          ...prev,
          isLoading: false,
          isError: true,
        }));
      });
  };

  // add created movies to the filtered list
  const data = [...(createdMovies?.[selectedFilter] || []), ...state.data];
  return { ...state, data };
};

export default useGetMovies;
