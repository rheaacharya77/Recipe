import React from 'react';
import './Fetch.css';
import Banner from './Banner';

class  Recipesearchdisplay extends React.Component{

    
        constructor(props) {
            super(props);
        
            this.state = {
              item: [],
            }
          };


          componentDidMount() {
          fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`)
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
             
            return (

               
                <div className="content">
                  <Banner />
                  <h4>Featured Recipe</h4>
                     {this.state.item.map((value) => (
                     <div className="card">
                     

                       <img src={value.strMealThumb} alt="meal"></img>
                       <h4>{value.strMeal}</h4>
                        <h5>{value.strTags}</h5>
                        <h5>Category: {value.strCategory}</h5>
                        <h5>Ingredients: <ul> <li>{value.strIngredient1}<span>{value.strMeasure1}</span></li>
                                        <li>{value.strIngredient2}<span>{value.strMeasure2}</span></li>
                                         </ul>
                        </h5>
                        <h5>Instructions: {value.strInstructions}</h5>
                        
                      </div>
                    ))
                }  
              </div>
            );
          
          }
        
   }
      
export default Recipesearchdisplay;
