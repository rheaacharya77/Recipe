import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const initialState = {
    recipes: "",
    rec:[]
    // fetchall:[],
    // fetchone:[]

  };
   const persistConfig = {
     key: 'root',
     storage : storage,
     whitelist:[
       'Listrecipes'
     ]
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
  // export default myReducer;
    export default persistReducer(persistConfig,myReducer);