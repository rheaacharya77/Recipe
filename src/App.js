import React from 'react';
import {store,persistor} from "./redux/store";
import { Provider } from "react-redux";
import{PersistGate} from 'redux-persist/integration/react';
import { BrowserRouter, Switch, Route} from "react-router-dom";

import Vegan from "./contents/category/vegan";
import Banner from "./components/banner/Banner";
import Dinner from "./contents/category/dinner";
import Navbar from "./components/Navbar/Navbar";
import Seafood from "./contents/category/seafood";
import Dessert from "./contents/category/dessert";
import Category from "./contents/category/Category";
import breakfast from "./contents/category/breakfast";
import Addrecipe from "./contents/addRecipe/addRecipe";
import Vegetarian from "./contents/category/vegetarian";
import Listrecipe from "./contents/listRecipe/listRecipe";
import Recipesearch from "./contents/Recipesearch/Recipesearch";



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
        <Route path="/breakfast" component= {breakfast} />
        <Route path="/dinner" component= {Dinner} />
        <Route path="/dessert" component= {Dessert} />
        <Route path="/vegetarian" component= {Vegetarian} />
        <Route path="/seafood" component= {Seafood} />
        <Route path="/vegan" component= {Vegan} />
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
