
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Login from './pages/Login';
import Index from './pages/Index';
import Story from './pages/story';
import Dump from './pages/dump';
import VrdAm from './pages/vrdame';

function App() {

  return (
    <Router>
      <Routes>
      <Route path="/accueil" Component={Index} />
      <Route path="/SiteVitrineAdamaLassana" Component={Index} />

      

        <Route path="/login" Component={Login} />
        <Route path="/story" Component={Story} />
        <Route path="/dump" Component={Dump} />
        <Route path="/vrdam" Component={VrdAm} />

      </Routes>
    </Router>
  );
}

export default App
