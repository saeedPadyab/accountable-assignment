const APP_CONFIG = {
  defaultLang: "en",
  apiBaseUrl: process.env.REACT_APP_BASE_URL || "https://api.themoviedb.org/3",
  fileBaseUrl: "https://www.themoviedb.org/t/p/w440_and_h660_face/",
  apiKey:
    process.env.REACT_APP_COUNTRIES_API_KEY ||
    "c1e797f2b3776b0838d2844ac69ab224",
  favoritesListKey: "userFavoritesList",
};

export default APP_CONFIG;
