import React, { Component } from 'react';

import { connect } from 'react-redux';

import RecipeCard from './Recipecard';

export class RecipeContainer extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          item: []
        }
      };


      componentDidMount() {
          
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Breakfast")
              .then(response => {
              console.log(response);
              return response.json();
                        })
              .then((data) => {
              console.log({ data });
               this.setState({
                 item: data.meals
                  
               })
              });
            }      
            
            
      
  render() {
    const { fetchall} = this.props;
    return(
     
        fetchall.map((fetchone, index) => (
            <RecipeCard key={index} fetchone={fetchone} />
          ))
    )
   
  }
}

const mapStateToProps = state => ({
  fetchall: state.fetchall
});

export default connect(mapStateToProps)(RecipeContainer);