import React from 'react';
import {store,persistor} from "./redux/store";
import { Provider } from "react-redux";
import{PersistGate} from 'redux-persist/integration/react';
import { BrowserRouter, Switch, Route} from "react-router-dom";

import Vegan from "./contents/vegan";
import Banner from "./contents/Banner";
import Dinner from "./contents/dinner";
import Seafood from "./contents/seafood";
import Dessert from "./contents/dessert";
import Category from "./contents/Category";
import Fetch from "./contents/RecipeFetch";
import Vegetarian from "./contents/vegetarian";
import Navbar from "./components/Navbar/Navbar";
import Categorys from "./contents/Categorylist";
import Recipesearch from "./contents/Recipesearch";
import Addrecipe from "./pages/addRecipe/addRecipe";
import Listrecipe from "./pages/listRecipe/listRecipe";



import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
     
      <Navbar/>
      <Switch>
       <PersistGate persistor={persistor}>
        <Route path="/search" component={Recipesearch} />
        <Route path="/category" component= {Category} />
        <Route path="/categorys" component= {Categorys} />
        <Route path="/dinner" component= {Dinner} />
        <Route path="/dessert" component= {Dessert} />
        <Route path="/vegetarian" component= {Vegetarian} />
        <Route path="/seafood" component= {Seafood} />
        <Route path="/vegan" component= {Vegan} />
        <Route path="/random" component={Fetch} />
         <Route exact path="/" component={Banner} /> 
         <Route path="/addrecipe" component={Addrecipe} />
         <Route path="/listrecipe" component={Listrecipe} />

         </PersistGate>
      </Switch>      
     
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
