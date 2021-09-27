import React, {useEffect,useContext} from 'react'
import './Categories.scss'
import {myContext} from '../context/context'

const Categories = () => {
    const {fetchCategories,categories} = useContext(myContext);

    useEffect(()=>{
        fetchCategories();
    },[fetchCategories]);
    return (
        <div className="categories">
            {categories.map(category =>(
                <div key={category.idCategory}>
                    <img src={category.strCategoryThumb} alt="categories"/>
                    <h4>{category.strCategory}</h4>
                </div>
            ))}
        </div>
    )
}

export default Categories
