import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function CreateNewPassword() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const submit = () => {
    if (!password || !confirm) {
      alert("Fill all fields");
      return;
    }

    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }

    navigate("/password-changed");
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
            marginBottom: "30px",
            fontWeight: "700",
          }}
        >
          Create New Password
        </h2>

        <p style={label}>Password</p>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        <p style={{ ...label, marginTop: "20px" }}>
          Confirm Password
        </p>
        <input
          type="password"
          placeholder="Confirm password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          style={inputStyle}
        />

        <button onClick={submit} style={buttonStyle}>
          Reset Password
        </button>
      </div>

      <Footer />
    </>
  );
}

const label = {
  marginBottom: "8px",
  fontWeight: "500",
};

const inputStyle = {
  width: "576px",
  height: "54px",
  padding: "16px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  boxSizing: "border-box",
};

const buttonStyle = {
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

export default CreateNewPassword;