import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import InDevelopment from './pages/inDevelopment';

function App() {
  return (
    <Router>
      <Routes>
        {/* add pages here */}
        <Route path="/" element={<InDevelopment />} />
        <Route path="/fireonmarz" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;