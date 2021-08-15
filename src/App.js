
import React, {Component, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import background from './assets/background-image.png';
import { Navbar, NavbarBrand } from 'reactstrap';
import Nav from './components/Nav';

import Welcome from './components/Header';
import About from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import ContactForm from './components/pages/Contact';
import Footer from './components/Footer';
import './App.css';


class App extends Component {
  render() {

    // const [currentPage, setCurrentPage] = useState('Home');

    // const renderPage = () => {
    //   if (currentPage === 'About') {
    //     return <AboutMe />;
    //   }
    //   if (currentPage === 'Portfolio') {
    //     return <Portfolio />;
    //   }
    //   if (currentPage === 'Contact') {
    //     return <ContactForm />;
    //   }
    // };

    return (
      <div className="App">
        <Welcome/>

        <Navbar style={{ backgroundImage: `linear-gradient(to right, rgb(66, 87, 79), rgba(23, 65, 52, 0.867) 63%)`}}>
          <div className="container">
            <NavbarBrand className="Name" href="/">Hewan Redie</NavbarBrand>
            <Nav/>
          </div>
        </Navbar>

        <About/>
        <Portfolio/>
        <ContactForm/>

        <Footer/>
      </div>

      
    );

    
    

    
  }
}

export default App;