import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

import Navbar from "./component/navbar";
import Banner from "./component/banner";
import Services from "./component/services";
import Contact from "./component/contact";
import About from "./component/about";
import Footer from "./component/Footer";
import Signup from "./component/signup";
import Login from "./component/login";

// ✅ Protected Route (same logic, just safe return)
function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

// ✅ MAIN APP CONTENT (needed for useLocation)
function AppContent() {
  const location = useLocation();

  return (
    <>
      {/* ✅ Hide Navbar on login/signup */}
      {location.pathname !== "/login" && location.pathname !== "/signup" && <Navbar />}
      <div className="app-container"></div>

      <Routes>

        {/* Default route → login */}
        <Route
          path="/"
          element={
            localStorage.getItem("token")
              ? <Navigate to="/home" />
              : <Navigate to="/login" />
          }
        />

        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Home */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <>
                <Banner />
                <Services />
              </>
            </ProtectedRoute>
          }
        />

        {/* Protected pages */}
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />

        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          }
        />

      </Routes>

      {/* ✅ Hide Footer on login/signup */}
      {location.pathname !== "/login" && location.pathname !== "/signup" && <Footer />}
    </>
  );
}

// ✅ FINAL APP (keeps BrowserRouter clean)
function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;