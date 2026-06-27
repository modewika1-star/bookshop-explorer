import { useNavigate } from "react-router-dom";
import checkIcon from "../assets/icons/check.svg";

function PasswordChanged() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F5F5F5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "576px",
          height: "636px",
          background: "white",
          borderRadius: "24px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
          boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
          padding: "40px",
          boxSizing: "border-box",
        }}
      >
        <img src={checkIcon} alt="success" width="160" />

        <div style={{ textAlign: "center" }}>
          <h1
            style={{
              fontSize: "42px",
              margin: 0,
              color: "#222",
            }}
          >
            Password changed!
          </h1>

          <p
            style={{
              marginTop: "16px",
              color: "#888",
              fontSize: "22px",
              lineHeight: "34px",
            }}
          >
            Your password has been
            <br />
            changed successfully
          </p>
        </div>

        <button
          onClick={() => navigate("/login")}
          style={{
            width: "100%",
            height: "48px",
            background: "#E91E63",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "18px",
            fontWeight: "700",
            cursor: "pointer",
          }}
        >
          Finish
        </button>
      </div>
    </div>
  );
}

export default PasswordChanged;