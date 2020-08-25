import React, { Component } from "react";
import { connect } from "react-redux";
import { searchrecipe } from "../redux/action";
import Displayrecipelist from "../components/Navbar/Displayrecipelist";
import Search from "../components/Navbar/Search";
import './Fetch.css';

class Recipesearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipeDetails: [],
      input: "Search for a recipe",
      
      
    };
  }

  handleSearch = (e) => {
    this.setState({ input: e.target.value });
   };


  searchRecipe = (e) => {
    e.preventDefault();
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${this.state.input}`)
      .then((res) => {
        console.log(res);
        return res.json();
      })

      .then(recipeDetails => {
        console.log('data',{ recipeDetails});

        this.setState({
          recipeDetails: recipeDetails.meals,
        
          
        })

        this.props.searchrecipe(recipeDetails);
      })
  }

  render() {
    console.log(this.state.recipeDetails);
    return (
      <div>
        
        <Search
          searchRecipe={this.searchRecipe}
          handleSearch={this.handleSearch}
        />
        
        <div >
          
            <Displayrecipelist recipeDetails={this.state.recipeDetails} />
                     
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    searchrecipe: (recipe) => {
      return dispatch(searchrecipe(recipe));
    },
  };
};

export default  connect(null, mapDispatchToProps)(Recipesearch);
