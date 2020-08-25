import { mockComponent } from "react-dom/test-utils";

const initialState = {
    recipes: "",
    rec:[]
  };

  const myReducer = (state = initialState, action) => {

    console.log(action.recipe)
    switch (action.type) {

      case "SEARCH_RECIPE":
        return {
          recipes: action.recipe,
        };

      case "ADD_RECIPE":
        return{
            rec:[...state.rec,action.rec],
        };
      default:
        return state;
    }
  }
  export default myReducer;