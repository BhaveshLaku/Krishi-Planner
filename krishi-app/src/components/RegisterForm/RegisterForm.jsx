import React, { useState } from "react";
import { FaUser, FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import "./RegisterForm.css";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          phoneNumber,
          email,
          password,
        }),
      });

      const data = await response.json();

      console.log(data.message);

      navigate("/login");
    } catch (error) {
      console.error("Error during registration:", error.message);
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
          <FaUser className="icon" />
        </div>

        <div className="input-box">
          <input
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            required
          />
          <FaPhone className="icon" />
        </div>

        <div className="input-box">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <FaEnvelope className="icon" />
        </div>

        <div className="input-box">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <FaEye
            className={`toggle-password ${showPassword ? "visible" : ""}`}
            onClick={handleTogglePassword}
          />
        </div>

        <button type="submit">Register</button>

        <div className="login-link">
          <p>
            Already have an account?{" "}
            <a onClick={() => navigate("/login")}>Login</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
