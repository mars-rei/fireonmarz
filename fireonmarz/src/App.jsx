import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home';

function App() {
  return (
    <Router>
      <Routes>
        {/* add pages here */}
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;