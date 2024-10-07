import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [activities, setActivities] = useState([
    // { type: "Yoga", date: "Mon Sep 16 2024", duration: "60 min" },
    // {
    //   type: "Weights",
    //   date: "Mon Jul 15 2024",
    //   duration: "120 min",
    //   warning: true,
    // },
  ]);

  const [diet, setDiet] = useState([
    // { type: "Breakfast", date: "Tue Sep 17 2024", calories: "500" },
    // { type: "Lunch", date: "Wed Sep 25 2024", calories: "900", warning: true },
  ]);

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const addActivity = (newActivity) =>
    setActivities((activities) => [...activities, newActivity]);

  const addDiet = (newDietEntry) => setDiet((diet) => [...diet, newDietEntry]);

  return (
    <AppContext.Provider
      value={{ activities, diet, theme, addActivity, addDiet, toggleTheme }}
    >
      {children}
    </AppContext.Provider>
  );
};
