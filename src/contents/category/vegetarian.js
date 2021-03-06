import React from 'react';
import { connect } from 'react-redux';
import './category.css';

class  Vegetarian extends React.Component{

    
        constructor(props) {
            super(props);
        
            this.state = {
              item: []
            }
          };


          componentDidMount() {
          
          fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=vegetarian")
                .then(response => {
                console.log(response);
                return response.json();
                          })
                .then((data) => {
                console.log({ data });
                 this.setState({
                   item: data.meals
                    
                 })
                });
              }      
              
              
            
            
        
          render()

          
           { 
             
        
            
             console.log("here",this.state.item)
            return (
              
                <div>
                
                  
                  
                  <div className="content-main">
                   
                     {this.state.item.map((value) => (
                     <div className="card">
                     
                    
                    <img src={value.strMealThumb} className="card-media " alt="food" />
                      
                     <h2 class="card-first-row"> {value.strMeal} </h2> 
                     <span class="card-author subtle">Ingredients: {value.strIngredient1}<span>{value.strMeasure1}</span>
                                        {value.strIngredient2}<span>{value.strMeasure2}</span>
                                        {value.strIngredient3}<span>{value.strMeasure3}</span>
                                         {value.strIngredient4}<span>{value.strMeasure4}</span>
                                         {value.strIngredient5}<span>{value.strMeasure5}</span>
                                       {value.strIngredient6}<span>{value.strMeasure6}</span>
                                        {value.strIngredient7}<span>{value.strMeasure7}</span>
                                         
                       
                        </span>
                        <span class="card-description subtle">Instructions: {value.strInstructions}</span>  
                        
                     </div>
                     
                    
                    
                    ))
                }  
                </div>
              </div>
             
                
                  
           
                    
            
             
            );
          }
   }
 
export default Vegetarian;