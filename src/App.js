import React  from "react";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
class App extends React.Component {
  render() {
     return (
       <Router>
        <div className="App">
        <Route path = "/" component = {App}>
        <Route  path = "/home" component = {Home} />
         <Route path = "/about" component = {About} />
         <Route path = "/contact" component = {Contact} />
         <Route exact path = "/login" component = {Login} />
      </Route>
           <ul>
           <li><Link to="/home">Home</Link></li>
           <li><Link to="/about">About</Link></li>
           <li><Link to="/contact">Contact</Link></li>
           <li><Link to="/login">Login</Link></li>
           </ul>
           {this.props.children}
        </div>
        </ Router>
     )
  }
}
export default App;
