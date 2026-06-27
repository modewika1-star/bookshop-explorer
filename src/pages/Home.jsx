import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

import shippingIcon from "../assets/icons/Fast & Reliable Shipping.svg";
import paymentIcon from "../assets/icons/Secure Payment.svg";
import returnIcon from "../assets/icons/Easy Returns.svg";
import supportIcon from "../assets/icons/24:7 Customer Support.svg";
import cartIcon from "../assets/icons/add to cart.svg";
import heartIcon from "../assets/icons/heart (1) 1.svg";

import book1 from "../assets/images/1book.png";
import book2 from "../assets/images/2book.jpg";
import book3 from "../assets/images/3book.png";
import book4 from "../assets/images/4book.jpg";
import book5 from "../assets/images/5book.jpg";
import book6 from "../assets/images/6book.jpg";

function Home() {
  const features = [
    { icon: shippingIcon, title: "Fast & Reliable Shipping" },
    { icon: paymentIcon, title: "Secure Payment" },
    { icon: returnIcon, title: "Easy Returns" },
    { icon: supportIcon, title: "24/7 Customer Support" },
  ];

  return (
    <div style={{ background: "#F5F5F5" }}>
      <HeroSection />

      {/* FEATURES */}
      <section
        style={{
          width: "1283px",
          margin: "120px auto",
          display: "flex",
          gap: "61px",
        }}
      >
        {features.map((item, index) => (
          <div key={index} style={{ width: "275px", height: "167px" }}>
            <img src={item.icon} width="34" />
            <h3 style={{ marginTop: "16px", fontSize: "28px" }}>
              {item.title}
            </h3>
            <p style={{ color: "#777", lineHeight: "32px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        ))}
      </section>

      {/* BEST SELLER */}
      <section
        style={{
          width: "100%",
          height: "795px",
          background: "#332548",
          color: "white",
          paddingTop: "100px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "52px" }}>Best Seller</h2>

        <p
          style={{
            width: "516px",
            margin: "20px auto 80px",
            color: "#c9c9c9",
            lineHeight: "32px",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
            marginBottom: "70px",
          }}
        >
          {[book1, book2, book3, book4, book5, book6].map((book, i) => (
            <img
              key={i}
              src={book}
              style={{
                width: "173px",
                height: "260px",
                borderRadius: "12px",
                objectFit: "cover",
              }}
            />
          ))}
        </div>

        <button
          style={{
            width: "180px",
            height: "55px",
            background: "#E91E63",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "20px",
          }}
        >
          Shop now
        </button>
      </section>

      {/* RECOMMENDED */}
      <section
        style={{
          width: "100%",
          padding: "80px 60px",
        }}
      >
        <h2 style={{ fontSize: "40px", marginBottom: "50px" }}>
          Recommended For You
        </h2>

        <div style={{ display: "flex", gap: "24px" }}>
          {[book1, book4].map((book, i) => (
            <div
              key={i}
              style={{
                width: "648px",
                height: "344px",
                background: "white",
                display: "flex",
                padding: "40px",
                gap: "24px",
              }}
            >
              <img
                src={book}
                style={{
                  width: "176px",
                  height: "264px",
                  objectFit: "cover",
                }}
              />

              <div>
                <h3 style={{ fontSize: "30px" }}>
                  {i === 0 ? "Rich Dad And Poor Dad" : "The Design Of Books"}
                </h3>

                <p style={{ color: "#777", marginTop: "12px" }}>
                  Author: {i === 0 ? "Robert T. Kiyosanki" : "Debbie Berne"}
                </p>

                <p style={{ marginTop: "16px", color: "#999" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>

                <h2 style={{ marginTop: "20px" }}>
                  ${i === 0 ? "30.00" : "40.00"}
                </h2>

                <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
                  <button
                    style={{
                      width: "289px",
                      height: "48px",
                      background: "#E91E63",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                    }}
                  >
                    Add To Cart
                  </button>

                  <button
                    style={{
                      width: "48px",
                      height: "48px",
                      border: "1px solid #ccc",
                      borderRadius: "8px",
                      background: "white",
                    }}
                  >
                    <img src={heartIcon} width="20" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FLASH SALE */}
      <section
        style={{
          width: "100%",
          padding: "100px 60px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "70px",
          }}
        >
          <div>
            <h2 style={{ fontSize: "40px" }}>Flash Sale</h2>
            <p style={{ color: "#888" }}>Limited time offer</p>
          </div>

          <div
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              border: "4px solid #E91E63",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            30:00
          </div>
        </div>

        <div style={{ display: "flex", gap: "32px", justifyContent: "center" }}>
          {[book1, book1].map((book, i) => (
            <div
              key={i}
              style={{
                width: "428px",
                height: "299px",
                background: "#332548",
                borderRadius: "12px",
                padding: "24px",
                display: "flex",
                gap: "20px",
                color: "white",
              }}
            >
              <img src={book} style={{ width: "140px", height: "220px" }} />

              <div>
                <h3>Rich Dad And Poor Dad</h3>
                <p style={{ color: "#bbb" }}>Author: Robert T.</p>

                <h2 style={{ marginTop: "20px" }}>$30.00</h2>

                <button
                  style={{
                    marginTop: "40px",
                    width: "52px",
                    height: "48px",
                    background: "#E91E63",
                    border: "none",
                    borderRadius: "8px",
                  }}
                >
                  <img src={cartIcon} width="20" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;