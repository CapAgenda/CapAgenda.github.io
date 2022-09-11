import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages';
import projectDetail from './pages/projectDetail';

function App() {
  return (
    <Router >
      <Routes>
        <Route path="/" component={Home} exact />
        <Route path="/projectdetails" component={projectDetail} exact />
      </Routes>
        <Home />
    </Router>
  );
}

export default App;
