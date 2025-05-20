import { createContext, useState } from "react";

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [preloader, setPreloader] = useState(false);

  return (
    <GlobalContext.Provider value={{ preloader, setPreloader }}>
      {children}
    </GlobalContext.Provider>
  );
}
