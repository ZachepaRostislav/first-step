import React, { Component } from 'react';

// styles
import './header-styles.scss';

export default class Header extends Component {

  render() {
    return (
      <header className='header'>
        <nav className='navigation'>
          <a href="#">First Page</a>
          <a href="#">Second Page</a>
          <a href="#">Third Page</a>
          <a href="#">Fourth Page</a>
        </nav>
      </header>
    )
  }
}
