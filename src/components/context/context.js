import React, {
  createContext,
  useCallback,
  useState,
  useEffect,
  useRef,
} from "react";
import axios from "axios";

export const myContext = createContext();

export const AppContext = ({ children }) => {
  // const [meals, setMeals] = useState([]);
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [randoms, setRandom] = useState([]);
  const inputCate = useRef("");

  // const fetchHomePageMeals = useCallback((searchTerm) => {
  //   axios
  //     .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
  //     .then((res) => {
  //       setMeals(res.data.meals);
  //     });
  // }, []);
  const fetchHomePageMeals = useCallback((searchTerm) => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then((res) => {
        setMeals(res.data.meals);
      });
  }, []);

  const fetchCategories = useCallback(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((res) => {
        setCategories(res.data.categories);
      });
  }, []);

  const fetchRandomMeal = useCallback(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((res) => {
        setRandom(res.data.meals);
      });
  }, []);

  return (
    <myContext.Provider
      value={{
        // fetchHomePageMeals,
        // meals,
        fetchHomePageMeals,
        meals,
        fetchCategories,
        categories,
        fetchRandomMeal,
        randoms,
        inputCate,
      }}
    >
      {children}
    </myContext.Provider>
  );
};
