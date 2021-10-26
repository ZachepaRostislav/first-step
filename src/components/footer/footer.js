import React, { Component } from 'react';

// styles
import style from './footer.module.scss';

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className={style.footer}>
          <ul className={style.footer_list}>
            <li className={style.footer_list_item}>
              <a className={style.footer_list_item_link} href="#"> tel</a>
            </li>
            <li className={style.footer_list_item}>
              <a className={style.footer_list_item_link} href="#">email</a>
            </li>
            <li className={style.footer_list_item}>
              <a className={style.footer_list_item_link} href="#">skype</a>
            </li>
            <li className={style.footer_list_item}>
              <a className={style.footer_list_item_link} href="#">istagram</a>
            </li>
            <li className={style.footer_list_item}>
              <a className={style.footer_list_item_link} href="#">facebook</a>
            </li>
          </ul>
        </footer>
      </>
    )
  }
}