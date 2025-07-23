import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import PracMap from './components/PracMap';
import PracFilter from './components/PracFilter';
import PracSpread from './components/PracSpread';
import PracTernary from './components/PracTernary';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavLink to="/">
            <img src={logo} className="App-logo" alt="logo" style={{ width: '180px', height: '180px' }} />
          </NavLink>

          <NavLink 
            to="/map"
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'white',
              textDecoration: 'none',
              marginBottom: '10px'
            })}
          >
            Map
          </NavLink>

          <NavLink 
            to="/filter"
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'white',
              textDecoration: 'none',
              marginBottom: '10px'
            })}
          >
            Filter
          </NavLink>

          <NavLink 
            to="/spread"
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'white',
              textDecoration: 'none',
              marginBottom: '10px'
            })}
          >
            Spread
          </NavLink>

          <NavLink 
            to="/ternary"
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'white',
              textDecoration: 'none',
              marginBottom: '10px'
            })}
          >
            Ternary
          </NavLink>

          <Routes>
            <Route path="/map" element={<PracMap />} />
            <Route path="/filter" element={<PracFilter />} />
            <Route path="/spread" element={<PracSpread />} />
            <Route path="/ternary" element={<PracTernary />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;

