import React, {useState,useCallback,useContext} from 'react'
import "./HomePage.scss";
import { myContext } from '../context/context';

const HomePage = () => {
    const [searchTerm, setSearchTerm] = useState("chicken");
    // console.log(searchTerm);

    const {fetchHomePageMeals,meals} = useContext(myContext);

    const fetchMealsHandler = useCallback(()=>{
        fetchHomePageMeals(searchTerm);
    },[searchTerm,fetchHomePageMeals]);

    return (
        <div className="home">
            <div className="home-search">
                <input type="text" placeholder="Type a meal" 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={fetchMealsHandler}>Search Meal</button>
            </div>
            <div className="home-grid">
                {meals?(
                    meals.map((meal) =>(
                        <div className="home-meal" key={meal.idMeal}>
                            <img src={meal.strMealThumb} alt="meal" />
                            <h4>{meal.strMeal}</h4>
                        </div>
                    ))
                ) :(
                    <h2>No meal</h2>
                )}
            </div>
        </div>
    )
}

export default HomePage
