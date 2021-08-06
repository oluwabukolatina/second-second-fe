import React from 'react';
import './assets/scss/main.scss';
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './components/Home'


const App = () => {
  return (
    <BrowserRouter>
        <Route exact path="/" component={Home}/>
    </BrowserRouter>
  );
};

export default App;
