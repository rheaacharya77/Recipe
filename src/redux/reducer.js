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
           ...state,
            rec:[...state.rec,action.rec],
        };
      
      default:
        return state;
    }
  }
  // export default myReducer;
    export default persistReducer(persistConfig,myReducer);