
import React from "react";
import './Recipesearch.css';
import '../../contents/category.css';


function Displayrecipelist(props) {

  const recipes = props.recipeDetails;
  
  return (
    
   <div className="row">
      
    
      {recipes.map((recipe) => {
        return (
         
          <div className="columns-search">
               
               <div className="card-search">
                 <img src={recipe.strMealThumb} className="card-media" alt="meal"></img>
                  <h2 className="card-title">{recipe.strMeal}</h2>
                  <span class="card-author subtle">Ingredients: {recipe.strIngredient1}<span>{recipe.strMeasure1}</span>
                                        {recipe.strIngredient2}<span>{recipe.strMeasure2}</span>
                                        {recipe.strIngredient3}<span>{recipe.strMeasure3}</span>
                                        {recipe.strIngredient4}<span>{recipe.strMeasure4}</span>
                                        {recipe.strIngredient5}<span>{recipe.strMeasure5}</span>
                                        {recipe.strIngredient6}<span>{recipe.strMeasure6}</span>
                                        {recipe.strIngredient7}<span>{recipe.strMeasure7}</span>
                                        
                        </span>
                        <span class="card-description subtle">Instructions: {recipe.strInstructions}</span>  
                 
                </div>
              </div>
          
                
        );
      })}
    </div>
    
    
  
  );
}

export default Displayrecipelist;