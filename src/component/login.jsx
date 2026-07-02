import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../login.css";

export default function Login() {
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  

  async function login(e) {
    e.preventDefault();

    const form = e.target;
    const username = form.username.value;
    const password = form.password.value;

    try {
      const response = await fetch(`${API_URL}/api/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      alert(data.message);

      if (data.message === "Login successful") {
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.username);
        
        navigate("/home");
      }

    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome Back</h2>

        <form onSubmit={login}>
          <input type="text" name="username" placeholder="Username" required />
          <input type="password" name="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>

        <p>
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}