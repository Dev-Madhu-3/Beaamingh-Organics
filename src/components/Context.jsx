import { createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [categorySelected, setCategorySelected] = useState([]);

  return (
    <AppContext.Provider value={{ categorySelected, setCategorySelected }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
