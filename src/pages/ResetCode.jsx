import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

function ResetCode() {
  const navigate = useNavigate();
  const [code, setCode] = useState(["", "", "", ""]);

  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleSubmit = () => {
    if (code.some((digit) => digit === "")) {
      alert("Please enter full code");
      return;
    }

    navigate("/create-password");
  };

  return (
    <>
      <HeroSection />

      <div
        style={{
          width: "576px",
          margin: "80px auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#E91E63",
            fontSize: "32px",
            marginBottom: "20px",
            fontWeight: "700",
          }}
        >
          Reset your password!
        </h2>

        <p
          style={{
            color: "#666",
            marginBottom: "35px",
          }}
        >
          Enter the 4 digit code sent to your email
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            marginBottom: "30px",
          }}
        >
          {code.map((value, index) => (
            <input
              key={index}
              ref={inputRefs[index]}
              maxLength={1}
              value={value}
              onChange={(e) => handleChange(e.target.value, index)}
              style={box}
            />
          ))}
        </div>

        <button onClick={handleSubmit} style={buttonStyle}>
          Continue
        </button>
      </div>

      <Footer />
    </>
  );
}

const box = {
  width: "60px",
  height: "60px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  textAlign: "center",
  fontSize: "24px",
  outline: "none",
};

const buttonStyle = {
  width: "576px",
  height: "48px",
  background: "#E91E63",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "600",
};

export default ResetCode;