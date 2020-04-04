import React from 'react';
import './App.css';
import NavbarPage from './NavbarPage'
import FooterPage from './FooterPage'
import {BrowserRouter, Switch ,Route} from 'react-router-dom'
import HomeComponent from './HomeComponent'
import AboutComponent from './AboutComponent'
import ContactComponent from './ContactComponent'
import MissingPage from './MissingPage'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <NavbarPage/>
        <Switch>
          <Route path="/" exact component={HomeComponent}/>
          <Route path="/about" component={AboutComponent}/>
          <Route path="/contact" component={ContactComponent}/>
          <Route path="*" component={MissingPage}/>
        </Switch>
      <FooterPage/>
      </div>
    </BrowserRouter>
  );
}

export default App;
