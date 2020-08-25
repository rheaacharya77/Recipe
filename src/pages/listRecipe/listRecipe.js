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
                    <h4>Recipes</h4>

                     {rec.map( r =>

                     <div className="contents">
                        <h3> {r.name}</h3>
                        <h2> {r.category}</h2>
                         <h2>{r.ingredients}</h2>
                         <h2>{r.instructions}</h2>
                     </div>
                     
                     )}
                         
                    <Link to ='/addrecipe'><h1>Return to Addrecipe</h1> </Link>
            </div>
                   )}    
       
        }
    
        const mapStatetoprops = state => {
            return {
                 rec: state.rec
                
            }
        };
           export default  connect(mapStatetoprops)(Listrecipe);
           