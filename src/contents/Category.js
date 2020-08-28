import React from 'react';
import './category.css';
import picture from '../img/breakfast.png';
import dinner from '../img/dinner.png';
import vegetarian from '../img/vegetarian.png';
import dessert from '../img/dessert.png';
import seafood from '../img/seafood.png';
import vegan from '../img/vegan.png';
import {Link} from 'react-router-dom';

const CATEGORIES = [{
  imageSrc: picture,
  route:"/categorys",
  title:"Breakfast"
},
{
imageSrc: dinner,
route:"/dinner",
title:"Dinner"
},
{
imageSrc: dessert,
route:"/dessert",
title:"Dessert"
},
{
imageSrc: vegetarian,
route:"/vegetarian",
title:"Vegetarian"
},
{
  imageSrc: seafood,
  route:"/seafood",
  title:"Seafood" 
},
{
imageSrc: vegan,
route:"/vegan",
title:"Vegan"
}
]



class Category extends React.Component {
render(){
return(
  <div>
  <h3>Categories</h3>
 {CATEGORIES.map(category => {return (
<div className="columns">
 <div className="contentss">
   <div className ="cards">
     <img src={category.imageSrc} alt="food" />
     <h4><b>{category.title}</b></h4>
     <Link className="cat" to={category.route}>Show Recipes</Link>
   </div>
 </div>
 </div>

 )})
    }
 </div>
 
)
 
}
}
export default Category;