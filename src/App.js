
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import background from './components/assets/background-image.png';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar, NavbarBrand } from 'reactstrap';
import HeaderNav from './components/Nav';
import Welcome from './components/Header';
import About from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import ContactForm from './components/pages/Contact';
import Resume from './components/pages/Resume';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Welcome/>
        <Navbar style={{ backgroundImage: `linear-gradient(to right, rgb(66, 87, 79), rgba(23, 65, 52, 0.867) 63%)`}}>
          <div className="container">
            <NavbarBrand className="Name" href="/about">Hewan Redie</NavbarBrand>
            <HeaderNav/>
          </div>
        </Navbar>

        <Switch>
          <Route path="/" component={About} exact/>
          <Route path="/about" component={About}/>
          <Route path="/portfolio" component={Portfolio} exact/>
          <Route path="/Contact" component={ContactForm} exact/>
          <Route path="/resume" component={Resume} exact/>  
        </Switch>
     
        <Footer/>
      </div>
      </Router>
    );
  }
}
export default App;