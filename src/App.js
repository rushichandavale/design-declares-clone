import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './styles/tailwind.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add other routes (About, Latest, Contact) later */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;