import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route,Routes, Switch } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/login" Component={Login} />
      </Routes>
    </Router>
  );
}

export default App
