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

    {/*Display the welcome header*/}
    {/*If showForm is true, we display the form, otherwise we display nothing */}

    <Header
    onShowForm={() => setShowForm(!showForm)}  showForm={showForm} title='Let&apos;s talk about internationalization strategy, shall we?'/>
    {showForm ?<Form onShowForm='' /> : '' }
  </div>
    )
}

export default hot(module)(App);
