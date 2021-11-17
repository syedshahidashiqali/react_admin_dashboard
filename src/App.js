import TopBar from "./components/TopBar/TopBar";
import SideBar from "./components/SideBar/SideBar";
import "./App.css"
import Home from "./pages/Home/Home";
import UsersList from "./pages/UsersList/UsersList";

// import react-router-dom things
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <TopBar />
      <div className="container">
        <SideBar />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UsersList />} />
          </Routes>
        </Router>
        
      </div>
    </>
  );
}

export default App;
