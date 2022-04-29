import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Quiz from './Pages/Quiz';
import Results from './Pages/Results';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/results' element={<Results />} />
      </Routes>
    </Router>
  );
}

export default App;
