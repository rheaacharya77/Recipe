import React from 'react';
import './Banner.css';
import picture from '../img/banner.png';
import RecipeFetch from './RecipeFetch';
import Recipesearch from './Recipesearch';
import './category.css';



function Banner () {
return (
<div>
<div className="banner">
<img src={picture} alt="food" className="picture"></img>
</div>
<h2 class="card-title">Discover Latest Trending Recipes</h2>
<Recipesearch />


</div>
)
}

export default Banner;