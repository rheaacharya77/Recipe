import React from 'react';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import './listRecipe.css';



class Listrecipe extends React.Component{        
           render(){

               const rec = this.props.rec;
               console.log("here",rec)
               return(
                   <div>
                    <h1>Recipes</h1>
                    <div className="content-main">
                     {rec.map( r =>
                      <div className="card">
                     <div className="card-body">
                  
                   {/* <div className="column">
                   <div className="contentss">
                     <div className ="cards"> */}
                    
                        <h2 class="card-title"> {r.name}</h2>
                        <h2 class="card-title">Category: {r.category}</h2>
                         <span class="card-author subtle">Ingredients:{r.ingredients}</span>
                         <span class="card-description subtle">Instructions:{r.instructions}</span>
                     </div>
                     </div>
                    
                     
                     )}
                         </div>
                   
            </div>
                   )}    
       
        }
    
        const mapStatetoprops = state => {
            return {
                 rec: state.rec
                
            }
        };
           export default  connect(mapStatetoprops)(Listrecipe);
           