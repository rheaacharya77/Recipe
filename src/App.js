import React from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./contents/Banner";
import Fetch from "./contents/RecipeFetch";
import Category from "./contents/Categorylist";
import { Provider } from "react-redux";
import store from "./redux/store";
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/category" component= {Category} />
        <Route exact path="/random" component={Fetch} />
        <Route exact path="/" component={Banner} />
      </Switch>      
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
