import './App.css';
import Home from './pages/Home';
import Author from './pages/Author';
import Contact from './pages/Contact';
import EditorDesk from './pages/EditorDesk';
import EditorBoard from './pages/EditorBoard';
import Issues from './pages/Issues';
import Help from './pages/help';
import AimScope from './pages/AimScope';
import VisionMission from './pages/VissionMission';
import PeerReview from './pages/peerreview';
import ConferenceIssue from './pages/ConferenceIssue';
import Fellowship from './pages/fellowship';
import Policies from './pages/Policies';
import Topics from './pages/topics';

//admin
import MainPage from './admin/mainpage';
import Login from './admin/Login';
import ProtectedAdmin from './admin/ProductedAdmin';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/author" element={<Author />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/editor-desk" element={<EditorDesk />} />
        <Route path="/editor-board" element={<EditorBoard />} />
        <Route path="/issues" element={<Issues />} />
        <Route path="/faq" element={<Help />} />
        <Route path="/aim-scope" element={<AimScope />} />
        <Route path="/vision-mission" element={<VisionMission />} />
        <Route path="/conference-issue" element={<ConferenceIssue />} />
        <Route path="/peer-review" element={<PeerReview />} />
        <Route path="/fellowship" element={<Fellowship />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/topics" element={<Topics />} />

        <Route element={<ProtectedAdmin />}>
          <Route path="/adminpage/main" element={<MainPage />} />
        </Route>
        <Route path="/adminpage/Authorization" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
