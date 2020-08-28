import React, { Component } from "react";
import { connect } from "react-redux";
import { searchrecipe } from "../redux/action";
import Displayrecipelist from "../components/Navbar/Displayrecipelist";
import './Fetch.css';


class Recipesearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipeDetails: [],
      text: "Search for a recipe",
      
      
    };
  }

  handleSearch = (e) => {
   
    this.setState({  text: e.target.value });
   };


  searchRecipe = (e) => {
  
    e.preventDefault();
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${this.state.text}`)
      .then((res) => {
        console.log(res);
        return res.json();
      
    })

      .then(recipeDetails => {
        console.log('data',{ recipeDetails});

        this.setState({
          recipeDetails: recipeDetails.meals,
          text:""
          
        })

        this.props.searchrecipe(recipeDetails);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.searchRecipe} className="form-content"> 
        <input
         type="text"
         onChange={this.handleSearch}
         placeholder="Search for a recipe" 
         onclick={this.props}
          />
         </form>
        <div>
          
            <Displayrecipelist recipeDetails={this.state.recipeDetails} />
                     
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
     return{
         searchrecipe: (recipe) => dispatch(searchrecipe(recipe))
    }

};

export default  connect(null, mapDispatchToProps)(Recipesearch);
