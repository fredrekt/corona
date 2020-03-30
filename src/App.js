import React from 'react';
import './App.css';
import NavbarPage from './NavbarPage'
import FooterPage from './FooterPage'
import {BrowserRouter, Switch ,Route} from 'react-router-dom'
import HomeComponent from './HomeComponent'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <NavbarPage/>
        <Switch>
          <Route path="/" exact component={HomeComponent}/>
        </Switch>
      <FooterPage/>
      </div>
    </BrowserRouter>
  );
}

export default App;
