import React from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import Components1 from "./Components1";
import Components2 from "./Components2";
import Components3 from "./Components3";
import Components4 from "./Components4";
import Components5 from "./Components5";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <h3>React Routing Components</h3>
      <Switch>

        <Route exact path="/" component={Components1} />
        <Route path="/components2" component={Components2} />
        <Route path="/components3" component={Components3} />
        <Route path="/components4" component={Components4} />
        <Route path="/components5" component={Components5} />
      </Switch>
    </div>
  );
}

export default App;
