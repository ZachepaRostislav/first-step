import React, { Component } from 'react';

// styles
import style from './header.module.scss';

export default class Header extends Component {

  render() {
    return (
      <>
        <header className={style.header}>
          <nav className={style.navigation}>
            <a className={style.link} href="#">First Page</a>
            <a className={style.link} href="#">Second Page</a>
            <a className={style.link} href="#">Third Page</a>
            <a className={style.link} href="#">Fourth Page</a>
          </nav>
        </header>
      </>
    )
  }
}
