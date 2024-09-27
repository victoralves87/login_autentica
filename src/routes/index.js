import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/home";
import useAuth from "../hooks/useAuth";
import Signin from "../pages/signin";
import Signup from "../pages/signup";

const Private = ({ Item }) => {
  const signed = useAuth();

  return signed ? <Item /> : <Navigate to="/signin" />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Private Item={Home} />} />
        <Route exact path="/home" element={<Private Item={Home} />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
