const initialState = {
    recipes: "",
  };
  const myReducer = (state = initialState, action) => {
    console.log(action.recipe)
    switch (action.type) {
      case "SEARCH_RECIPE":
        return {
          recipes: action.recipe,
        };
      default:
        return state;
    }
  }
  export default myReducer;