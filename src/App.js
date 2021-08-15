
import React, {Component} from 'react';
import background from './assets/background-image.png';
//import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
//import Menu from './components/Project';
import Nav from './components/Nav';
//import Example from './components/Example';
import ContactForm from './components/pages/Contact';
import Welcome from './components/Header';
import AboutMe from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import './App.css';

// constructor (props){
//  super();
//  this.state = {
//  <Menu/>
//  <Example/>
//  <ContactForm/>
//  <AboutMe/>
//   }
// }

class App extends Component {
  render() {
    return (
      <div className="App" style={{ backgroundImage: `url (${background})` }}>
        <Welcome/>
        <Navbar style={{ backgroundImage: `linear-gradient(to right, rgba(23, 65, 52, 0.867), rgba(23, 65, 52, 0.867) 63%)`, borderColor: '#333' }}>
          <div className="container">
            <NavbarBrand href="/">Hewan Redie</NavbarBrand>
            <Nav/>
          </div>
        </Navbar>
        
        <Portfolio/>
        
      </div>
    );
  }
}

export default App;