import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import book1 from "../assets/images/1book.png";
import book2 from "../assets/images/2book.jpg";
import book3 from "../assets/images/3book.png";

import cartIcon from "../assets/icons/add to cart.svg";
import heartIcon from "../assets/icons/heart (1) 1.svg";
import facebook from "../assets/icons/facebook2.svg";
import instagram from "../assets/icons/instagram.svg";
import youtube from "../assets/icons/youtube.svg";
import whatsapp from "../assets/icons/whatsapp.svg";

function ProductDetails() {
  const [selectedImage, setSelectedImage] = useState(book1);
  const [quantity, setQuantity] = useState(1);
  const [tab, setTab] = useState("details");
  const [fav, setFav] = useState(false);

  const increase = () => setQuantity(quantity + 1);
  const decrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <>
      {/* HERO */}
      <div
        style={{
          height: "120px",
          backgroundImage: `url(${book1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <Navbar />
      </div>

      <div style={{ padding: "60px", background: "#f5f5f5" }}>
        {/* TOP SECTION */}
        <div
          style={{
            width: "1320px",
            display: "flex",
            justifyContent: "space-between",
            margin: "auto",
            marginBottom: "60px",
          }}
        >
          {/* LEFT */}
          <div>
            <img
              src={selectedImage}
              style={{
                width: "312px",
                height: "456px",
                objectFit: "cover",
              }}
            />

            <div
              style={{
                display: "flex",
                gap: "16px",
                marginTop: "16px",
              }}
            >
              {[book1, book2, book3].map((img, index) => (
                <img
                  key={index}
                  src={img}
                  onClick={() => setSelectedImage(img)}
                  style={{
                    width: "68px",
                    height: "128px",
                    cursor: "pointer",
                    border:
                      selectedImage === img
                        ? "2px solid #E91E63"
                        : "1px solid #ccc",
                  }}
                />
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div style={{ width: "950px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
              }}
            >
              <div>
                <h1 style={{ fontSize: "48px" }}>Rich Dad And Poor Dad</h1>

                <p
                  style={{
                    color: "#777",
                    lineHeight: "34px",
                    marginTop: "12px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Mauris et ultricies est. Aliquam in justo varius.
                </p>
              </div>

              <div style={{ display: "flex", gap: "24px" }}>
                <img src={facebook} width="24" />
                <img src={instagram} width="24" />
                <img src={youtube} width="24" />
                <img src={whatsapp} width="24" />
              </div>
            </div>

            {/* INFO */}
            <div
              style={{
                display: "flex",
                gap: "24px",
                marginTop: "30px",
              }}
            >
              <div>
                <p style={{ color: "#999" }}>Author</p>
                <b>Robert T. Kiyosaki</b>
              </div>

              <div>
                <p style={{ color: "#999" }}>Publication Year</p>
                <b>1997</b>
              </div>

              <div>
                <p style={{ color: "#999" }}>Book</p>
                <b>1 Of 1</b>
              </div>

              <div>
                <p style={{ color: "#999" }}>Pages</p>
                <b>336</b>
              </div>

              <div>
                <p style={{ color: "#999" }}>Language</p>
                <b>English</b>
              </div>
            </div>

            {/* STARS */}
            <div style={{ marginTop: "30px" }}>
              <div style={{ fontSize: "28px" }}>⭐⭐⭐⭐☆ (210 Review)</div>
              <p style={{ marginTop: "10px" }}>
                Rate: <b>4.2</b>
              </p>
            </div>

            {/* PRICE */}
            <div
              style={{
                display: "flex",
                gap: "16px",
                marginTop: "30px",
                alignItems: "center",
              }}
            >
              <h1 style={{ fontSize: "42px" }}>$40.00</h1>
              <span
                style={{
                  fontSize: "32px",
                  color: "#999",
                  textDecoration: "line-through",
                }}
              >
                $40.00
              </span>
            </div>

            {/* ACTIONS */}
            <div
              style={{
                display: "flex",
                gap: "20px",
                alignItems: "center",
                marginTop: "40px",
              }}
            >
              {/* qty */}
              <div
                style={{
                  display: "flex",
                  gap: "24px",
                  alignItems: "center",
                  width: "114px",
                }}
              >
                <button
                  onClick={decrease}
                  style={{
                    width: "35px",
                    height: "35px",
                    borderRadius: "50%",
                    border: "1px solid #E91E63",
                    color: "#E91E63",
                  }}
                >
                  -
                </button>

                <b style={{ fontSize: "28px" }}>{quantity}</b>

                <button
                  onClick={increase}
                  style={{
                    width: "35px",
                    height: "35px",
                    borderRadius: "50%",
                    border: "1px solid #E91E63",
                    color: "#E91E63",
                  }}
                >
                  +
                </button>
              </div>

              {/* cart */}
              <button
                onClick={() => alert(`Added ${quantity} items`)}
                style={{
                  width: "180px",
                  height: "48px",
                  background: "#E91E63",
                  color: "white",
                  borderRadius: "8px",
                  border: "none",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                Add To Cart
                <img src={cartIcon} width="18" />
              </button>

              {/* fav */}
              <button
                onClick={() => setFav(!fav)}
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "8px",
                  border: fav
                    ? "1px solid #E91E63"
                    : "1px solid #ccc",
                  background: fav ? "#ffe6f0" : "white",
                }}
              >
                <img src={heartIcon} width="18" />
              </button>
            </div>
          </div>
        </div>

        {/* TABS */}
        <div style={{ width: "1320px", margin: "auto" }}>
          <div
            style={{
              display: "flex",
              gap: "24px",
              borderBottom: "1px solid #ddd",
              paddingBottom: "12px",
            }}
          >
            <button onClick={() => setTab("details")}>
              Product Details
            </button>
            <button onClick={() => setTab("reviews")}>
              Customer Reviews
            </button>
            <button onClick={() => setTab("recommended")}>
              Recommended For You
            </button>
          </div>

          <div style={{ marginTop: "30px", lineHeight: "42px" }}>
            {tab === "details" && (
              <div>
                <p><b>Book Title :</b> Rich Dad And Poor Dad</p>
                <p><b>Author :</b> Robert T. Kiyosaki</p>
                <p><b>Publication Date :</b> 1997</p>
                <p><b>ASIN :</b> B09TWSRMCB</p>
                <p><b>Language :</b> English</p>
                <p><b>Publisher :</b> Printer</p>
                <p><b>Pages :</b> 336</p>
                <p><b>Book Format :</b> Hard Cover</p>
                <p><b>Best Seller Rank :</b> #3</p>
              </div>
            )}

            {tab === "reviews" && (
              <div>
                <p>⭐⭐⭐⭐☆ Amazing book.</p>
                <p>⭐⭐⭐⭐⭐ Must read.</p>
              </div>
            )}

            {tab === "recommended" && (
              <div>
                <p>Rich Dad Poor Dad</p>
                <p>The Design Of Everyday Things</p>
                <p>Thinking Fast and Slow</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ProductDetails;