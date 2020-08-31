import React from 'react';
import './Banner.css';
import '../../contents/category/category.css';

import picture from '../../img/banner.png';
import Recipesearch from '../../contents/Recipesearch/Recipesearch';




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