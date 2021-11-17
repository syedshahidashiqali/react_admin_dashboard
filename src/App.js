import TopBar from "./components/TopBar/TopBar";
import SideBar from "./components/SideBar/SideBar";
import "./App.css"
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <TopBar />
      <div className="container">
        <SideBar />
        <Home />
      </div>
    </>
  );
}

export default App;
