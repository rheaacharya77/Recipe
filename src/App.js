import React from 'react';
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route} from "react-router-dom";


import Banner from "./contents/Banner";
import Fetch from "./contents/RecipeFetch";
import Category from "./contents/Categorylist";
import Navbar from "./components/Navbar/Navbar";
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
        <Route path="/search" component={Recipesearch} />
        <Route path="/category" component= {Category} />
        <Route path="/random" component={Fetch} />
         <Route exact path="/" component={Banner} />
         <Route path="/addrecipe" component={Addrecipe} />
         <Route path="/listrecipe" component={Listrecipe} />
      </Switch>      
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
