import "./Register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register-container">
      <div className="register-card">

        <h1 className="register-title">
          Create Account
        </h1>

        <p className="register-subtitle">
          Register to manage your daily tasks
        </p>

        <form className="register-form">

          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
            />
          </div>

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

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
            />
          </div>

          <button
            type="submit"
            className="register-btn"
          >
            Register
          </button>

        </form>

        <p className="login-link">
          Already have an account?
          <Link to="/"> Login</Link>
        </p>

      </div>
    </div>
  );
}

export default Register;