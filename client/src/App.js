import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Title from "./components/Title"
import Wrapper from "./components/Wrapper"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
// import Saved from "./pages/Saved"

const App = () => (
     
      <Router>
        <div>
        <Wrapper>
          <Title />
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/saved" component={Saved} /> */}
          </Switch>
         </Wrapper>
         </div>
      </Router>
    
)


export default App;
