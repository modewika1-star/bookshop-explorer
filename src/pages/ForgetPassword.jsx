import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

function ForgetPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const submit = () => {
    if (!email.trim()) {
      alert("Enter your email");
      return;
    }

    navigate("/reset-code");
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
            marginBottom: "20px",
            fontWeight: "700",
          }}
        >
          Forget Password?
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: "35px",
          }}
        >
          Enter your email to receive reset code
        </p>

        <input
          type="email"
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        <button onClick={submit} style={mainButton}>
          Send Reset Code
        </button>

        <p style={{ textAlign: "center", marginTop: "25px" }}>
          Remember password?{" "}
          <Link to="/login" style={{ color: "#E91E63" }}>
            Login
          </Link>
        </p>
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
  boxSizing: "border-box",
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

export default ForgetPassword;