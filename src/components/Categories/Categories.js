import React, { useEffect, useContext } from "react";
import "./Categories.scss";
import { myContext } from "../context/context";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { withRouter } from "react-router";

const Categories = () => {
  const { fetchCategories, categories } = useContext(myContext);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  // componentDid() {
  //   setTimeout(()=>{
  //     this.props.history.push('/');
  //   },3000);
  // }
  return (
    <div className="categories">
      {categories.map((category) => (
        <div key={category.idCategory}>
          <Link to="/">
            <img src={category.strCategoryThumb} alt="categories" />
          </Link>
          <h4>{category.strCategory}</h4>
          <p>{category.strCategoryDescription}</p>
        </div>
      ))}
    </div>
  );
};

export default withRouter(Categories);
