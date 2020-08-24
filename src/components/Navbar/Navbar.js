import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import './Navbar.css'

class Navbar extends Component {
  render(){
  return (
    <div className="topnav">
      <a href="#logo">Logo</a>
      <a href="#about">Home</a>
      <Link to="/category ">Categories</Link>
      <a href="#favourites">Favourites</a>
      <a href="#Myrecipes">Myrecipes</a>
         <div className="search-container">
            <input type="text" placeholder="Search.." name="search" />
              

        </div>
    </div>
  );
} 
}

export default Navbar;