import './App.css';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import Score from './pages/score/Score';
import React from 'react';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Score />}/>
      </Routes>
    </Router>
    
  );
}

export default App;
