import React, { Component } from 'react';

// components
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

//styles
import './App.scss';

export default class App extends Component {
  
  render() {      
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    )
  }
}

