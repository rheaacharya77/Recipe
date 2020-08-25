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

