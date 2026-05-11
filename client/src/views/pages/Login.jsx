import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">

        <h1 className="login-title">Welcome Back</h1>
        <p className="login-subtitle">
          Login to continue managing your tasks
        </p>

        <form className="login-form">

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

        </form>

        <p className="register-link">
          Don’t have an account?
          <Link to="/register"> Register</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;