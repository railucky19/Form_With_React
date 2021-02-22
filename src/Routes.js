import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import truck from "./Components/images/truck.png";

export default function Routes() {
  return (
    <header>
      <div>
        <nav id="navbar">
          <div className="container">
            <h1 className="logo">Loadeo</h1>
            <ul>
              <li>
                <Link to="/menu1">Menu1</Link>
              </li>
              <li>
                <Link to="/menu2">Menu2</Link>
              </li>
              <li>
                <Link to="/menu3">Menu3</Link>
              </li>
              <li>
                <Link to="/menu4">Menu4</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route path="/menu1"></Route>
          <Route path="/menu2"></Route>
          <Route path="/menu3"></Route>
          <Route path="/menu4"></Route>
        </Switch>
      </div>
    </header>
  );
}
