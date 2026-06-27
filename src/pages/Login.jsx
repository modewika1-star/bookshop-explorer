import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import google from "../assets/icons/google.svg";
import facebook from "../assets/icons/facebook.svg";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Fill all fields");
      return;
    }

    navigate("/");
  };

  return (
    <>
      <HeroSection />

      <div
        style={{
          width: "576px",
          margin: "80px auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#E91E63",
            fontSize: "32px",
            marginBottom: "40px",
            fontWeight: "700",
          }}
        >
          Welcome Back!
        </h2>

        <p style={{ marginBottom: "8px", fontWeight: "500" }}>Email</p>
        <input
          type="email"
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        <p style={{ marginBottom: "8px", marginTop: "20px", fontWeight: "500" }}>
          Password
        </p>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "15px",
          }}
        >
          <span>Remember me</span>

          <Link
            to="/forget-password"
            style={{
              color: "#E91E63",
              textDecoration: "none",
            }}
          >
            Forget password?
          </Link>
        </div>

        <button onClick={handleLogin} style={mainButton}>
          Log in
        </button>

        <p
          style={{
            textAlign: "center",
            margin: "28px 0",
          }}
        >
          Don’t have account?{" "}
          <Link to="/signup" style={{ color: "#E91E63" }}>
            Signup
          </Link>
        </p>

        <button style={socialBtn}>
          <img src={google} width="20" />
          <span>Login with Google</span>
        </button>

        <button style={{ ...socialBtn, marginTop: "16px" }}>
          <img src={facebook} width="20" />
          <span>Login with Facebook</span>
        </button>
      </div>

      <Footer />
    </>
  );
}

const inputStyle = {
  width: "576px",
  height: "54px",
  padding: "16px",
  borderRadius: "8px",
  border: "1px solid #ccc",
};

const mainButton = {
  width: "576px",
  height: "48px",
  background: "#E91E63",
  color: "white",
  border: "none",
  borderRadius: "8px",
  marginTop: "25px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "600",
};

const socialBtn = {
  width: "576px",
  height: "48px",
  borderRadius: "8px",
  border: "1px solid #ddd",
  background: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  cursor: "pointer",
};

export default Login;