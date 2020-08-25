import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import HomePage from "./Components/HomePage/HomePage";
import PlayonPage from "./Components/PlayonPage/Playon";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/landingPage" component={LandingPage} />
        <Route path="/Player" component={PlayonPage} />
      </Switch>
    </div>
  );
}

export default App;
