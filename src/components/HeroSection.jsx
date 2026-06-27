import heroImage from "../assets/images/Hero section.png";
import Navbar from "./Navbar";

function HeroSection() {
  return (
    <section
      style={{
        width: "100%",
        height: "338px",
        position: "relative",
      }}
    >
      <img
        src={heroImage}
        alt=""
        style={{
          width: "100%",
          height: "338px",
          objectFit: "cover",
          display: "block",
        }}
      />

      <Navbar />
    </section>
  );
}

export default HeroSection;