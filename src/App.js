import TopBar from "./components/TopBar/TopBar";
import SideBar from "./components/SideBar/SideBar";
import "./App.css"

function App() {
  return (
    <>
      <TopBar />
      <div className="container">
        <SideBar />
      </div>
    </>
  );
}

export default App;
