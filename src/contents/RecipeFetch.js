import React from 'react';
import './Fetch.css';
import Banner from './Banner';

class  Fetch extends React.Component{

    
        constructor(props) {
            super(props);
        
            this.state = {
              item: []
            }
          };


          componentDidMount() {
          fetch("https://www.themealdb.com/api/json/v1/1/random.php")
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
                     

                       <img src={value.strMealThumb}></img>
                       <h4>{value.strMeal}</h4>
                        <h5>{value.strTags}</h5>
                        <h5>Category: {value.strCategory}</h5>
                        <h5>Ingredients: <ul> <li>{value.strIngredient1}<span>{value.strMeasure1}</span></li>
                                        <li>{value.strIngredient2}<span>{value.strMeasure2}</span></li>
                                        <li>{value.strIngredient3}<span>{value.strMeasure3}</span></li>
                                        <li> {value.strIngredient4}<span>{value.strMeasure4}</span></li>
                                        <li> {value.strIngredient5}<span>{value.strMeasure5}</span></li>
                                        <li> {value.strIngredient6}<span>{value.strMeasure6}</span></li>
                                        <li>{value.strIngredient7}<span>{value.strMeasure7}</span></li>
                                        <li>{value.strIngredient8}<span>{value.strMeasure8}</span></li>
                                        <li> {value.strIngredient9}<span>{value.strMeasure9}</span></li>
                                        <li>{value.strIngredient10}<span>{value.strMeasure10}</span></li>
                                        <li> {value.strIngredient11}<span>{value.strMeasure11}</span></li>
                                        <li> {value.strIngredient12}<span>{value.strMeasure12}</span></li>
                                        <li> {value.strIngredient13}<span>{value.strMeasure13}</span></li>
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
      
export default Fetch;
