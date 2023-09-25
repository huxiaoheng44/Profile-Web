import './App.css';
import NavBar from './layout/NavBar';
import Profile from './pages/Profile';
import GuestBoard from './pages/GuestBoard';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
            <Route path="/guestboard" exact element={<GuestBoard />} />
            <Route path="/profile" exact element={<Profile />} />
            <Route path="/" exact element={<GuestBoard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
