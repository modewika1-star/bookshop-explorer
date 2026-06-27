import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

function SignUp() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    first: "",
    last: "",
    email: "",
    password: "",
    confirm: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submit = () => {
    if (
      !form.first ||
      !form.last ||
      !form.email ||
      !form.password ||
      !form.confirm
    ) {
      alert("Fill all fields");
      return;
    }

    if (form.password !== form.confirm) {
      alert("Passwords do not match");
      return;
    }

    navigate("/login");
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
          Create Account
        </h2>

        <input
          name="first"
          placeholder="First Name"
          value={form.first}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          name="last"
          placeholder="Last Name"
          value={form.last}
          onChange={handleChange}
          style={{ ...inputStyle, marginTop: "18px" }}
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={{ ...inputStyle, marginTop: "18px" }}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          style={{ ...inputStyle, marginTop: "18px" }}
        />

        <input
          name="confirm"
          type="password"
          placeholder="Confirm Password"
          value={form.confirm}
          onChange={handleChange}
          style={{ ...inputStyle, marginTop: "18px" }}
        />

        <button onClick={submit} style={mainButton}>
          Sign Up
        </button>

        <p style={{ textAlign: "center", marginTop: "25px" }}>
          Already have an account?{" "}
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

export default SignUp;