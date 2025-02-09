import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Login from './pages/Login';
import Index from './pages/Index';
import Story from './pages/story';
import Dump from './pages/dump';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
      <Route path="/" Component={Index} />

        <Route path="/login" Component={Login} />
        <Route path="/story" Component={Story} />
        <Route path="/dump" Component={Dump} />

      </Routes>
    </Router>
  );
}

export default App
