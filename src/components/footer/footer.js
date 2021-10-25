import React, { Component } from 'react';

// styles
import './footer-styles.scss';

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className="footer">
          <ul className="footer-list">
            <li><a href="#"> tel</a></li>
            <li><a href="#">email</a></li>
            <li><a href="#">skype</a></li>
            <li><a href="#">istagram</a></li>
            <li><a href="#">facebook</a></li>
          </ul>
        </footer>
      </>
    )
  }
}