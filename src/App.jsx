import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";

const App = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="auth-container full-screen">
      <div className="background-overlay"></div>
      
      <div className="auth-sidebar">
        <i className="fas fa-chart-line"></i>
        <i className="fas fa-wallet"></i>
        <i className="fas fa-coins"></i>
      </div>
      
      <div className="auth-box">
        <h2 className="auth-title">{isRegister ? "Create Your Finance Manager Account" : "Welcome to Personal Finance Manager"}</h2>
        <p className="auth-subtitle">
          {isRegister ? "Track your income, expenses, and savings efficiently!" : "Login to take control of your personal finances."}
        </p>
        <form>
          {isRegister && (
            <div className="input-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your full name" required />
            </div>
          )}
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="input-group password-group">
            <label>Password</label>
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Enter your password" 
              required 
            />
            <span 
              className="password-toggle" 
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "👁️" : "🔒"}
            </span>
          </div>
          <button type="submit" className="auth-button">
            {isRegister ? "Sign Up" : "Login"}
          </button>
        </form>
        <p className="toggle-text" onClick={toggleForm}>
          {isRegister ? "Already have an account? Login here" : "New user? Create an account"}
        </p>
      </div>
    </div>
  );
};

export default App;