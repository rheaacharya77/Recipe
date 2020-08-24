export const searchrecipe = (recipe) => {
    return {
      type: "SEARCH_RECIPE",
      recipe: recipe
    };
  };