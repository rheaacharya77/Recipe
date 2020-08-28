import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import './Navbar.css'
import Recipesearch from "../../contents/Recipesearch";



class Navbar extends Component {
  render(){
  return (
    <div className="topnav">
      <ul>
      <li><Link to="/listrecipe">My Recipes</Link></li>
      <li><Link to="/addrecipe">Add Recipe</Link></li>
      <li><Link to="/category">Categories</Link></li>
      <li><Link to="/" class="home">Home</Link></li>
      
      
      
      </ul>
    </div>
    
                      );
                    } 
                  }

export default Navbar;