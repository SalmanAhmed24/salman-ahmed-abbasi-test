import React from 'react';
import {  BrowserRouter,Route,Switch } from 'react-router-dom';
import './App.css';
import Search from './components/search/search';
import Events from './pages/events/events';
import './App.css'
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      < BrowserRouter>
      <Navbar />
      <Switch>
          <Route exact path='/' component={Search}/>
          <Route exact path="/events/:artistName" component={Events}/>
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
