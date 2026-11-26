import bookmarkIcon from "../assets/icons/bookmark 1.svg";
import earthIcon from "../assets/icons/earth.svg";
import facebookIcon from "../assets/icons/facebook2.svg";
import instagramIcon from "../assets/icons/instagram.svg";
import twitterIcon from "../assets/icons/twittwr.svg";
import youtubeIcon from "../assets/icons/youtube.svg";

function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        minHeight: "370px",
        height: "auto",
        background: "#332548",
        color: "white",
        marginTop: "80px",
      }}
    >
      <div
        style={{
          width: "min(1320px, calc(100% - 48px))",
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

        {/* Standard site credit, while keeping the original project credit and language label */}
        <div className="site-credit-footer" dir="ltr">
          <span className="site-credit-left">
            Created by <a href="https://7ijazi.vercel.app/" target="_blank" rel="noopener noreferrer">7ijazi</a>
          </span>

          <div className="site-credit-center">
            <span>Developed By EraaSoft © 2024</span>
            <span className="site-credit-language">
              <img src={earthIcon} width="20" alt="" />
              <span>English</span>
            </span>
          </div>

          <span className="site-credit-right">Made in 2026</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;