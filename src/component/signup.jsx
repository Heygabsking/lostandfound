import "../signup.css";
export default function Signup() {

  const API_URL = import.meta.env.VITE_API_URL;

  async function signup(e) {
    e.preventDefault();

    const form = e.target;

    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const response = await fetch(`${API_URL}/api/users/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Signup failed");
      }

      alert(data.message);

      // ✅ only redirect if success
      if (data.message === "User created successfully") {
       navigate("/login");
      }

    } catch (error) {
      console.error(error);
      alert("Signup failed ❌");
    }
  }

 return (
  <div className="signup-container">
    <div className="signup-box">
      <h2>Create Account</h2>

      <form onSubmit={signup}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />

        <button type="submit">Sign Up</button>
      </form>

      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  </div>
);
}