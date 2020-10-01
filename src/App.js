import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import{Switch, Route, Redirect} from "react-router-dom";
import About from './About'
import Home from './Home'
import Login from './Login'
import Contact from './Contact'
import Nav from './Navb'
import Footer from './Footer'



function App() {
  return (
    <div className="main">
      <Nav className="nave"/><div className="switch">
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>

      <Route path="/Login" component={Login}/>

      <Route path="/Contact" component={Contact}/>
      <Redirect to="/"/>


    </Switch>
    </div>
    <Footer className="footer"/>
    </div>
  );
}

export default App;
