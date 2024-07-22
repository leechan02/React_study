import { createContext, useContext } from "react";
import Youtube from "../api/youtube";
import Fake from "../api/fake";

export const YoutubeApiContext = createContext();

// const youtube = new Youtube();
const youtube = new Fake();

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
