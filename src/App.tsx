
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Login from './pages/Login';
import Index from './pages/Index';
import Story from './pages/story';
import Dump from './pages/dump';
import VrdAm from './pages/vrdame';
import Contact from './pages/contact';

function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" Component={Index} />
      <Route path="/SiteVitrineAdamaLassana" Component={Index} />

      

        <Route path="/login" Component={Login} />
        <Route path="/story" Component={Story} />
        <Route path="/dump" Component={Dump} />
        <Route path="/vrdam" Component={VrdAm} />
        <Route path="/contact" Component={Contact} />

      </Routes>
    </Router>
  );
}

export default App
