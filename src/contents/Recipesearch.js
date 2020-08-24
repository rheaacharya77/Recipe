import React from "react";
import {connect} from "react-redux";
import {searchrecipe} from "../redux/action";


class Recipesearch extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            searchedRecipes: "",
        };
    }
    handleInput = (e) => {
        this.setState({
            searchedRecipes: e.target.value,
        })
    };


    recSearch = (e) => {
        e.preventDefault();
        this.prop.searchlist(this.state.searchedRecipes)
        this.setState({
            recipe: "",
        })
    }

    render(){
        return (
            <div>
              <form className ="search-form">
                    <input type="text" placeholder="Search" 
                    value={this.state.searchedRecipes} 
                    onChange={this.handleInput}/>
                   <button type="submit" onClick={this.recSearch}>Search</button>
               </form>
            </div>
        )
    }
} 


const mapDispatchToProps = dispatch => {
    return {
         searchlist: (recipe)=> dispatch(searchrecipe(recipe))
    }
}

export default Recipesearch (connect(null, mapDispatchToProps)(Addtodo)); 
 


