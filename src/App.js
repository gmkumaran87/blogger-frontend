import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login/Login";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Register from "./pages/auth/register/Register";
import ForgotPass from "./pages/auth/forgot/ForgotPass";
import Loading from "./pages/auth/Loading";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPass />} />
        <Route path="/activate-account/:activationCode" element={<Loading />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </Router>
  );
}

export default App;
