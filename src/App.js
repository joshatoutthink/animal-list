import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Header from "./components/Header";
import { Animals } from "./components/Animals";
import AnimalDetails from "./components/AnimalDetails";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter initial={false}>
              <Switch location={location} key={location.pathname}>
                <Route exact path="/" component={Animals} />
                <Route path="/:slug" component={AnimalDetails} />
              </Switch>
            </AnimatePresence>
          )}
        />
      </div>
    </Router>
  );
}

export default App;
