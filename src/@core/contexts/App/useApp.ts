import { useContext } from "react";
import { AppContext, ContextProps } from "./app.provider";

const useApp = (): ContextProps => {
  const context = useContext(AppContext);

  return context;
};

export default useApp;
