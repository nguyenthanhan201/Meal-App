import React, { useEffect, useContext } from "react";
import "./Categories.scss";
import { myContext } from "../context/context";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { withRouter } from "react-router";

const Categories = () => {
  const { fetchCategories, categories, inputCate } = useContext(myContext);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <div className="categories">
      {categories.map((category) => (
        <div key={category.idCategory}>
          <Link to="/">
            <img
              onClick={() => (inputCate.current = category?.strCategory)}
              src={category.strCategoryThumb}
              alt="categories"
            />
          </Link>
          <h4>{category.strCategory}</h4>
          <p>{category.strCategoryDescription}</p>
        </div>
      ))}
    </div>
  );
};

export default withRouter(Categories);
