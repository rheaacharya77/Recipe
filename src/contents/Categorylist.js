import React from 'react';
import './Fetch.css';


class  Category extends React.Component{

    
        constructor(props) {
            super(props);
        
            this.state = {
              item: []
            }
          };


          componentDidMount() {
          fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
                .then(response => {
                console.log(response);
                return response.json();
                          })
                .then((data) => {
                console.log({ data });
                 this.setState({
                   item: data.categories
                    
                 })
                });
              }      
              
              
              recview = (e) => {

                {this.state.item.map((value) => (
                    <div className="card">
                     <img src={value.strCategoryThumb} />
                    <h4>{value.strCategory}</h4>
                    
                     </div>
                   ))
               }  
                
            }
        
          render()
           { 
            return (
                <div className="content">
                  <h4>Categories</h4>
                     {this.state.item.map((value) => (
                     <div className="card">
                      <img src={value.strCategoryThumb} />
                     <h4>{value.strCategory}</h4>
                     <button type="submit" onClick={this.recview}>View Details</button>
                      </div>
                    ))
                }  
              </div>
            );
          }
   }
      
export default Category;