import { createContext, useState, useEffect } from "react";
import { transactions as data } from "../data/mockData";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem("transactions")) || data
  );
  const [role, setRole] = useState("viewer");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <AppContext.Provider value={{
      transactions, setTransactions, role, setRole, darkMode, setDarkMode
    }}>
      {children}
    </AppContext.Provider>
  );
};