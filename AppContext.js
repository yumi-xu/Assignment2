import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [diet, setDiet] = useState([
    // { type: "Breakfast", date: "Tue Sep 17 2024", calories: "500" },
    // { type: "Lunch", date: "Wed Sep 25 2024", calories: "900", warning: true },
  ]);

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const addDiet = (newDietEntry) => setDiet((diet) => [...diet, newDietEntry]);

  return (
    <AppContext.Provider value={{ diet, theme, addDiet, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};
