import "./App.css";
import ProtectedRouter from "./ProtectedRouter";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import AddProducts from "./pages/AddProducts.jsx";
import Product from "./pages/Product.jsx";
import EditProducts from "./pages/EditProducts.jsx";
import Card1 from "./pages/Card1.jsx";
import Card2 from "./pages/Card2.jsx";
function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const userdata = localStorage.getItem("loginData");
  const user = userdata ? JSON.parse(userdata) : null;

  useEffect(() => {
    if (user && user.token) {
      if (location.pathname === "/login") {
        navigate("/user/dashboard");
      }
    } else if (location.pathname !== "/login") {
      navigate("/login");
    }
  }, [location, navigate, user]);

  return (
    <div>
      <h2>Vikash</h2>
      <p>vikashparjapati59@gmail.com</p>
      {location.pathname === "/" && (
        <Link
          to="/login"
          className="text-white bg-yellow-500 rounded hover:bg-yellow-600 mt-4 m-4 text-lg p-2"
        >
          Login
        </Link>
      )}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<ProtectedRouter />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="add" element={<AddProducts />} />
          <Route path="card1" element={<Card1 />} />
          <Route path="card2" element={<Card2 />} />
          <Route path="edit/:productId" element={<EditProducts />} />
          <Route path={`dashboard/:id`} element={<Product />} />
        </Route>

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
