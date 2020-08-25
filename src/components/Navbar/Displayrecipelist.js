
import React from "react";
import './Recipesearch.css';


function Displayrecipelist(props) {
  console.log(props.recipeDetails);
  const recipes = props.recipeDetails;
  console.log("recipes",recipes)
  return (
    
   <div className="content">
      {recipes.map((recipe) => {
        return (
               
               <div className="card">
                 <img src={recipe.strMealThumb} alt="meal"></img>
                  <h4>{recipe.strMeal}</h4>
                  <h4>{recipe.strCategory}</h4>
                  <h4>{recipe.strInstructions}</h4>
                </div>
                
        );
      })}
    </div>
  );
}

export default Displayrecipelist;