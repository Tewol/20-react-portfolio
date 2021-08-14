import React, { Component } from 'react';
class Nav extends Component {
  state = { 
    header: 'Welcome',
    imageUrl: 'https://picsum.photos/200',
    portfolio: 'Protfolio',
    contact: 'Contact',
    resume: 'Resume',
  };

  render() { 
    return ( 
      <div>
        <h1> Hewan Redie</h1>
        
        <ul>
          <img src={this.state.imageUrl} alt=""/>
          <li>
            <a href="#portfolio" onClick={() => ('Portfolio')} 
            //className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            >
              {this.state.portfolio}
            </a> 
          </li>

          <li>
            <a href="">
              {this.state.resume}
            </a>
          </li>

          <li>
            <a href="">
              {this.state.contact}
            </a> 
          </li>
        </ul>
      </div>
    );
  }

}
 
export default Nav;