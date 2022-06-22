import Map from "./components/Map";
import Login from "./components/Login";
import Rating from "./components/Rating";
import Erro from "./components/Erro";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import React, { useState } from "react";

function App() {
  const [user, setUser] = useState({
    id: 1,
    name: "Evan",
    avatar: "",
  });

  if (user === null) {
    return <Login />;
  }
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => <Login />} />
        <Route path="/turista" render={() => <Map />} />
        <Route path="/rating" render={() => <Rating />} />
        <Route path="/:id" render = {()=> <Erro/>}/>
      </Switch>
    </Router>
  );
}

export default App;
