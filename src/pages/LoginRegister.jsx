import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterFrom";

const LoginRegister = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [activeForm, setActiveForm] = useState("login");

  useEffect(() => {
    if (user && user.$id) {
      navigate("/dashboard"); // or "/"
    }
  }, [user, navigate]);

  return activeForm === "login" ? (
    <LoginForm setActiveForm={setActiveForm} />
  ) : (
    <RegisterForm setActiveForm={setActiveForm} />
  );
};

export default LoginRegister;
