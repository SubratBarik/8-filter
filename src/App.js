import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PracMap from './components/PracMap';
import PracFilter from './components/PracFilter';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/"><img src={logo} className="App-logo" alt="logo" style={{width: '180px', height: '180px'}}/></Link>
          {/* Links must be inside the Router */}
          <Link to="/map" style={{color: 'white', textDecoration: 'none', marginBottom: '10px'}}>Map</Link>
          <Link to="/filter" style={{color: 'white', textDecoration: 'none', marginBottom: '10px'}}>Filter</Link>

          <Routes>
            <Route path="/map" element={<PracMap />} />
            <Route path="/filter" element={<PracFilter />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
