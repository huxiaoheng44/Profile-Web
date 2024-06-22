import "./App.css";
import NavBar from "./layout/NavBar";
import Profile from "./pages/Profile";
import GuestBoard from "./pages/GuestBoard";
import DevLog from "./pages/DevLog";
import PhotoPost from "./pages/PhotoPost";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./UserContext";

function App() {
  return (
    <>
      <Router>
        <UserProvider>
          <NavBar />
          <Routes>
            <Route path="/devLog" exact element={<DevLog />} />
            <Route path="/guestBoard" exact element={<GuestBoard />} />
            <Route path="/profile" exact element={<Profile />} />
            <Route path="/photoPost" exact element={<PhotoPost />} />
            <Route path="/" exact element={<GuestBoard />} />
          </Routes>
        </UserProvider>
      </Router>
    </>
  );
}

export default App;
