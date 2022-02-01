import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login/Login";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Register from "./pages/auth/register/Register";
import ForgotPass from "./pages/auth/forgot/ForgotPass";
import Loading from "./pages/auth/Loading";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "./store/auth-slice";
import SinglePost from "./pages/posts/SinglePost";
import Write from "./pages/write/Write";

function App() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);

  console.log("isLoggedIn", isLoggedIn);
  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem("user"));
    console.log(userDetails);
    if (userDetails) {
      dispatch(authActions.login(userDetails.user));
    }
  }, [dispatch]);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<SinglePost />} />
        {!isLoggedIn && <Route path="/login" element={<Login />} />}
        {!isLoggedIn && <Route path="/register" element={<Register />} />}
        {!isLoggedIn && (
          <Route path="/forgot-password" element={<ForgotPass />} />
        )}
        {!isLoggedIn && (
          <Route
            path="/activate-account/:activationCode"
            element={<Loading />}
          />
        )}
        <Route path="/loading" element={<Loading />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </Router>
  );
}

export default App;
