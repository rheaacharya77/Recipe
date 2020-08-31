import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class RecipeCard extends Component {
  render() {
    const { fetchone } = this.props;
    return (
          <div>
      
           {fetchone.strMeal}
          <Link className="cat" to={'/fetchone/' + fetchone.idMeal}>
            View Details            
          </Link>
        </div>
    
    );
  }
}

export default RecipeCard;