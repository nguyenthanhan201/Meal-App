import React,{useEffect,useContext} from 'react'
import './RandomMeal.scss'
import { myContext } from '../context/context'

const RandomMeal = () => {
    const {randoms,fetchRandomMeal} = useContext(myContext);

    useEffect(()=>{
        fetchRandomMeal();
    },[fetchRandomMeal]);
    return (
        <div className="random">
            {randoms.map(meal=>(
                <div key={meal.idMeal} className="random-grid">
                    <div className="random-grid-controls">
                        <img src={meal.strMealThumb} alt="hoa"/>
                        <button onClick={fetchRandomMeal}>Generate Another Meal</button>
                    </div>

                    <div className="random-grid-instructions">
                        <h4>Instructions</h4>
                        <p>{meal.strInstructions}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RandomMeal
