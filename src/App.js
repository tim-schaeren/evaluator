import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import { useState } from 'react'

import Header from './components/Header';
import Form from './components/Form';

const App = () => {

  const[showForm, setShowForm] = useState(false)

  //This is where our actual page lives
  return (
  <div className="container">
    <Header
    onAdd={() => setShowForm(!showForm)}
    showForm={showForm}
    title='Let&apos;s talk about internationalization strategy, shall we?'
    />

    {showForm ?
    <Form onAdd='' /> : '' }
  </div>
    )
}

export default hot(module)(App);
