import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EnhancedLandingPage from './pages/EnhancedLandingPage';
import './styles/index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<EnhancedLandingPage />} />
          {/* Future routes for dashboard, SMS management, etc. */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;