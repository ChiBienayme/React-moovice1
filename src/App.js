import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Weekly from "./pages/Weekly";
import WeeklyBattle from "./pages/WeeklyBattle";
import Popular from "./pages/Popular";
import PopularBattle from "./pages/PopularBattle";
import Favorites from "./pages/Favorites";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"


class App extends React.Component {

  render() {
    return ( 
      <BrowserRouter>
            <nav className='nav nav-tabs'>
                <Link className="nav-link" to="/"> Homepage  </Link>
                <Link className="nav-link" to="/weekly"> Weekly  </Link>
                <Link className="nav-link" to="/weekly-battle"> Weekly Battle </Link>
                <Link className="nav-link" to="/popular"> Popular </Link>
                <Link className="nav-link" to="/popular-battle"> Popular Battle </Link>
                <Link className="nav-link" to="/favorites"> Favorites </Link>
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