import bookmarkIcon from "../assets/icons/bookmark 1.svg";
import earthIcon from "../assets/icons/earth.svg";
import facebookIcon from "../assets/icons/facebook2.svg";
import instagramIcon from "../assets/icons/instagram.svg";
import twitterIcon from "../assets/icons/twittwr.svg";
import youtubeIcon from "../assets/icons/YouTube.svg";

function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        height: "370px",
        background: "#332548",
        color: "white",
        marginTop: "80px",
      }}
    >
      <div
        style={{
          width: "1320px",
          margin: "0 auto",
          paddingTop: "120px",
        }}
      >
        {/* Top */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "35px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "36px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <img src={bookmarkIcon} width="30" />
              <span
                style={{
                  fontSize: "28px",
                  fontWeight: "bold",
                }}
              >
                Bookshop
              </span>
            </div>

            <span style={{ cursor: "pointer" }}>Home</span>
            <span style={{ cursor: "pointer" }}>Books</span>
            <span style={{ cursor: "pointer" }}>About Us</span>
          </div>

          <div
            style={{
              display: "flex",
              gap: "18px",
            }}
          >
            <img src={facebookIcon} width="24" />
            <img src={instagramIcon} width="24" />
            <img src={youtubeIcon} width="24" />
            <img src={twitterIcon} width="24" />
          </div>
        </div>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(255,255,255,0.2)",
          }}
        />

        {/* Bottom */}
        <div
          style={{
            marginTop: "25px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ color: "#d0d0d0" }}>
            Developed By EraaSoft © 2024
          </p>

          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <img src={earthIcon} width="20" />
            <span>English</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;