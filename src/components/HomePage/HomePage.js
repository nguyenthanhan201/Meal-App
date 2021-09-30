import React, { useState, useCallback, useContext } from "react";
import "./HomePage.scss";
import { myContext } from "../context/context";
import Loading from "../Loading/Loading";

import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Dialog from "@mui/material/Dialog";
import { DialogActions } from "@material-ui/core";

const HomePage = () => {
  const [loading, setLoading] = useState(false);

  const [show, setShow] = React.useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  // console.log(searchTerm);

  const { fetchHomePageMeals, meals } = useContext(myContext);

  const fetchMealsHandler = useCallback(() => {
    fetchHomePageMeals(searchTerm);
  }, [searchTerm, fetchHomePageMeals]);

  const [modal, setModal] = useState(false);

  const [idMeal, setIdMeal] = useState(0);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  function idIngredient(ingredient) {
    let arr = [
      ingredient.strIngredient1,
      ingredient.strIngredient2,
      ingredient.strIngredient3,
      ingredient.strIngredient4,
      ingredient.strIngredient5,
    ];
    return (
      <>
        {arr.map((val, index) => (
          <p key={index}>{val}</p>
        ))}
      </>
    );
  }

  return (
    <>
      <div className="home">
        <div className="home-search">
          <input
            type="text"
            placeholder="Type a meal..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={fetchMealsHandler}>Search Meal</button>
        </div>
        <div className="home-grid">
          {meals ? (
            meals.map((meal, index) => (
              <div key={index}>
                <div className="home-meal">
                  <img src={meal.strMealThumb} alt="meal" />
                  <h4>{meal.strMeal}</h4>
                  <button
                    className="btn-ingredient"
                    onClick={() => {
                      setShow(true);
                      setIdMeal(index);
                    }}
                  >
                    Ingredients
                  </button>
                  <br />
                  <button
                    className="btn-seemore"
                    onClick={() => window.open(meal.strYoutube)}
                  >
                    See Complete Recipe
                  </button>
                </div>

                <Dialog open={show}>
                  <DialogContent>
                    <DialogActions>
                      <button
                        className="btn recipe-close-btn"
                        onClick={() => setShow(false)}
                      >
                        <i className="fas fa-times" />
                      </button>
                    </DialogActions>
                    {/* Nhung Noi Dung Phan Popup */}
                    <h2 className="recipe-title">{meals[idMeal].strMeal}</h2>
                    <p className="recipe-category">
                      {meals[idMeal].strCategory}
                    </p>
                    <div class="recipe-instruct">
                      <h3>Instructions:</h3>
                      <p>{meals[idMeal].strInstructions}</p>
                    </div>
                    <img src={meals[idMeal].strMealThumb} alt="meal" />
                    {idIngredient(meals[idMeal])}
                    <a
                      className="recipe-link"
                      onClick={() => window.open(meals[idMeal].strYoutube)}
                    >
                      See On <i class="fab fa-youtube"></i>
                    </a>
                  </DialogContent>
                </Dialog>
              </div>
            ))
          ) : (
            <>
              <div className="no-search">
                <div className="content">
                  <h1>DON'T CRY!</h1>
                  <p>
                    The page you're looking for isn't here. Hit up our homepage
                    for some delicious recipe ideas. We'll clean up the spill.
                  </p>
                </div>
                <img
                  src="https://www.epicurious.com/static/img/error/404-1024.png"
                  alt="#"
                ></img>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
