import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import useAxios from "../hooks/useAxios";

const ContextProvider = ({ children }) => {
  const { data, sendRequest, setData, error, loading, METHODS } = useAxios({});

  return (
    <Context.Provider value={{ data, sendRequest, METHODS }}>
      {children}
    </Context.Provider>
  );
};

export const Context = createContext();
export default ContextProvider;
