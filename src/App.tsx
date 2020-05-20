import React, { Component } from 'react';
import './App.css';
import { Login } from './Chat/Login';

import { Main } from './Chat/Main';
import { proxy } from './Chat/Proxy';

export default class App extends Component
{
  render()   {     
    return (       
      <div className="app">         
        { (proxy.inbox == null) ? <Login /> : <Main /> }
      </div>     
    );   
  } 

  componentDidMount() {
    proxy.addEventListener("login", () => this.forceUpdate(), this);
  }
  
  componentWillUnmount() {
    proxy.removeAllEventListener(this);
  }
}
