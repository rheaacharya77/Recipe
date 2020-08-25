import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import './Navbar.css'

class Navbar extends Component {
  render(){
  return (
    <div className="topnav">
      <a href="#logo">Logo</a>
      <Link to="/">Home</Link>
      <Link to="/category">Categories</Link>
      <a href="#favourites">Favourites</a>
      <Link to="/addrecipe">Myrecipes</Link>
    </div>
  );
} 
}

export default Navbar;