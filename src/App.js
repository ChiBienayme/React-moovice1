import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Weekly from "./pages/Weekly";
import WeeklyBattle from "./pages/WeeklyBattle";
import Popular from "./pages/Popular";
import PopularBattle from "./pages/PopularBattle";
import Favorites from "./pages/Favorites";


class App extends React.Component {

  render() {
    return ( 
      <BrowserRouter>
            <nav>
                <Link to="/"> Homepage | </Link>
                <Link to="/weekly"> Weekly | </Link>
                <Link to="/weekly-battle"> Weekly Battle |</Link>
                <Link to="/popular"> Popular |</Link>
                <Link to="/popular-battle"> Popular Battle |</Link>
                <Link to="/favorites"> Favorites </Link>
            </nav>

            <Switch>
              
              <Route exact path="/" component={Home} />
              <Route exact path="/weekly" component={Weekly} /> 
              <Route exact path="/weekly-battle" component={WeeklyBattle} />
              <Route exact path="/popular" component={ Popular} />
              <Route exact path="/popular-battle" component={PopularBattle} />
              <Route exact path="/favorites" component={Favorites} />

            </Switch>

          </BrowserRouter>
    )
          
  }
}

export default App