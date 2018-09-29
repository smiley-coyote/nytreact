import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Title from "./components/Title"
import Wrapper from "./components/Wrapper"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Saved from "./pages/Saved"
import Body from "./components/Body"

const App = () => (
     
      <Router>
        <Body>
        <Wrapper>
          <Title />
          <Navbar />
          </Wrapper>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/saved" component={Saved} />
          </Switch>
       
          </Body>
      </Router>
    
)


export default App;
