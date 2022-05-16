import { Routes, Route } from "react-router-dom";

import Home from "./screens/Home";
import Favorites from "./screens/Favorites";
import NotFound from "./screens/NotFound";

const RoutesList = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesList;
