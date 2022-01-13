import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import Header from './components/Header';

const App = () => {
  return (
  <div className="App">
    <Header title='Let&apos;s talk about internationalization strategy, shall we?' />
  </div>
    )
}

export default hot(module)(App);
