import { Link, useLocation } from "react-router-dom";
import bookmarkIcon from "../assets/icons/bookmark 1.svg";

function Navbar() {
  const location = useLocation();

  const activeStyle = {
    color: "#F59E0B",
    fontWeight: "700",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "500",
  };

  return (
    <nav
      style={{
        width: "100%",
        height: "92px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "24px 140px",
        background: "#FFFFFF33",
        backdropFilter: "blur(6px)",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 100,
        boxSizing: "border-box",
      }}
    >
      {/* Left */}
      <div
        style={{
          width: "427px",
          height: "32px",
          display: "flex",
          alignItems: "center",
          gap: "24px",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img src={bookmarkIcon} width="28" />
          <span
            style={{
              color: "white",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            Bookshop
          </span>
        </div>

        <div
          style={{
            width: "1px",
            height: "32px",
            background: "rgba(255,255,255,0.3)",
          }}
        />

        <Link
          to="/"
          style={{
            ...linkStyle,
            ...(location.pathname === "/" ? activeStyle : {}),
          }}
        >
          Home
        </Link>

        <Link
          to="/books"
          style={{
            ...linkStyle,
            ...(location.pathname === "/books" ? activeStyle : {}),
          }}
        >
          Books
        </Link>

        <span
          style={{
            color: "white",
            fontSize: "16px",
            cursor: "default",
          }}
        >
          About us
        </span>
      </div>

      {/* Right */}
      <div
        style={{
          width: "182px",
          height: "44px",
          display: "flex",
          gap: "12px",
        }}
      >
        <Link to="/login">
          <button
            style={{
              width: "85px",
              height: "44px",
              background: "#E91E63",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            Log in
          </button>
        </Link>

        <Link to="/signup">
          <button
            style={{
              width: "97px",
              height: "44px",
              background: "white",
              color: "#E91E63",
              border: "1px solid #E91E63",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;