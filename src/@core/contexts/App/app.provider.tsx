import React, { createContext, useState, useCallback, useMemo } from "react";
import { IMovie, MovieEnumFilters } from "@core/types";
import useLocalStorage from "@core/hooks/useLocalStorage";
import APP_CONFIG from "@core/constants/app-config";

interface IAppProvider {
  children: React.ReactNode;
}

export interface ContextProps {
  favoritesList?: IMovie[];
  selectedFilter: MovieEnumFilters;
  page: number;
  loadMore?: () => void;
  changeFilterTab?: (tab: MovieEnumFilters) => void;
  handleFavoriteClicked?: (movie: IMovie) => void;
  createdMovies?: {
    top: IMovie[];
    upcoming: IMovie[];
    nowPlaying: IMovie[];
  };
}

export const AppContext = createContext<ContextProps>({
  selectedFilter: MovieEnumFilters.top,
  page: 1,
});

const AppProvider: React.FC<IAppProvider> = ({ children }) => {
  const [value, setValue] = useLocalStorage(APP_CONFIG.favoritesListKey, []);

  const [state, setState] = useState({
    createdMovies: {
      top: [],
      upcoming: [],
      nowPlaying: [],
    },
    favoritesList: value,
    selectedFilter: MovieEnumFilters.top,
    page: 1,
  });

  const changeFilterTab = useCallback((tab: MovieEnumFilters) => {
    setState((prev) => ({ ...prev, selectedFilter: tab, page: 1 }));
  }, []);
  const loadMore = useCallback(() => {
    setState((prev) => ({ ...prev, page: prev.page + 1 }));
  }, []);
  const addMovie = useCallback((movie: IMovie, filter: MovieEnumFilters) => {
    setState((prev) => ({
      ...prev,
      createdMovies: {
        ...prev.createdMovies,
        [filter]: [...prev.createdMovies[filter], movie],
      },
    }));
  }, []);
  const handleFavoriteClicked = useCallback(
    (movie: IMovie) => {
      const isFavoriteBefore = value.find((x: any) => x.id === movie.id);
      let newArray: IMovie[];
      if (isFavoriteBefore) {
        newArray = value.filter((x: any) => x.id !== movie.id);
      } else {
        newArray = [...value, movie];
      }
      setValue(newArray);
      setState((prev) => ({ ...prev, favoritesList: newArray }));
    },
    [value, state.favoritesList]
  );

  const contextValue = useMemo(
    () => ({
      ...state,
      loadMore,
      changeFilterTab,
      handleFavoriteClicked,
      addMovie,
    }),
    [state]
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
