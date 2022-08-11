import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Nav from './components/common/nav';
import Login from './components/scenes/login';
import Register from './components/scenes/register';
import Home from './components/scenes/home';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Nav/>
        </header>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;