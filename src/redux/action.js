export const searchrecipe = (recipe) => {
    return {
      type: "SEARCH_RECIPE",
      recipe: recipe
    };
  };

  export const addrecipe = (rec) => ({
    type: "ADD_RECIPE",
    rec: rec

})

//  export const recipesdetail = (fetchall) => ({
//    type: "FETCH_RECIPES",
//    fetchall: fetchall
//  })

//  export const recipedetail = (fetchone) => ({
//    type: "FETCH_RECIPE",
//    fetchone: fetchone
//  })