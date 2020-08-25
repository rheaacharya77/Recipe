import React from "react";


function Search(props) {
  return (
    <div>
      <form onSubmit={props.searchRecipe}>
       
          <input
            type="text"
            onChange={props.handleSearch}
            placeholder="Search..."
          />

          <button type="submit">
           Search
          </button>
        
      </form>
    </div>
  );
}

export default Search;