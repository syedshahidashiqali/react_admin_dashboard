import TopBar from "./components/TopBar/TopBar";
import SideBar from "./components/SideBar/SideBar";
import "./App.css"
import Home from "./pages/Home/Home";
import UsersList from "./pages/UsersList/UsersList";

// import react-router-dom things
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from "./pages/User/User";
import NewUser from "./pages/NewUser/NewUser";
import ProductList from "./pages/ProductList/ProductList";
import Product from "./pages/Product/Product";

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
            <Route path="/users/:id" element={<User />} />
            <Route path="/newUser" element={<NewUser />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<Product />} />
          </Routes>
        </Router>
        
      </div>
    </>
  );
}

export default App;
