import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Main from './components/Main';
import First from './components/First';
import Second from './components/Second';
import Third from './components/Third';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/first" exact element={<First />} />
        <Route path="/second" exact element={<Second />} />
        <Route path="/third" exact element={<Third />} />
      </Routes>
    </Router>
  );
}

export default App;
