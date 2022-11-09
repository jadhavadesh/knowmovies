import { createContext, useContext, useEffect, useState } from "react";
import useFetch from "../component/useFetch";

const AppContext = createContext();

const AppProvider = ({ children }) => {
   
  
    const [query, setQuery] = useState("titanic")
   
    const { isLoading, isError, movie } = useFetch(`&s=${query}`);
 
  return (<AppContext.Provider value={{isLoading,isError,movie,query,setQuery}}>{children}</AppContext.Provider>);
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
