import React, { useState } from "react";
import axios from "axios";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [username, setUsername] = useState("abhishek@betatestsolutions.com");
  const [password, setPassword] = useState("Test@123");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://admin-stage.youtunein.com/api/v1/auth/user/sign-in",
        {
          username,
          password,
        }
      );
      console.log("Response:", response);
      if (response.data != undefined && response.data.token != undefined) {
        console.log("Login successful");
        const token = response.data.token;
        localStorage.setItem("token", token);
        console.log(localStorage.getItem("token"));
        navigate("/subscription");
      } else {
        setError("Invalid username or password");
      }
    } catch (err) {
      setError("Login Error");
      setError("Login Error. Please try again later.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-image-section"></div>
      <div className="login-section">
        <h2>Login</h2>
        {error && <p className="login-error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="login-form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="login-form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
