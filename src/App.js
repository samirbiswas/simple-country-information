import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import CountryDetails from './components/CountryDetails/CountryDetails';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return(
      <div>
        <Router>
          <Switch>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/about/:nameId">
              <CountryDetails></CountryDetails>
            </Route>

            <Route path="*">
              <ErrorPage></ErrorPage>
            </Route>
          </Switch>
        </Router>
       
      </div>
    )
}

export default App;
