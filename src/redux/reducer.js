
const initialState = {
    recipes: "",
    rec:[]
    // fetchall:[],
    // fetchone:[]

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
        // case "FETCH_RECIPES":
        //   return{
        //       fetchall:[...state.fetchall,action.fetchall],
        //   };
        //   case "FETCH_RECIPE":
        //     return{
        //         fetchone:[...state.fetchone,action.fetchone],
        //     };

      default:
        return state;
    }
  }
  export default myReducer;