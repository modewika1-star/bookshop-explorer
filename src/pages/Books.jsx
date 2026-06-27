import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import book1 from "../assets/images/1book.png";
import cartIcon from "../assets/icons/add to cart.svg";
import heartIcon from "../assets/icons/heart (1) 1.svg";
import filterIcon from "../assets/icons/filter icone.svg";
import micIcon from "../assets/icons/microfone icone.svg";

function Books() {
  const navigate = useNavigate();

  const booksData = [
    {
      id: 1,
      title: "Rich Dad And Poor Dad",
      author: "Robert T. Kiyosaki",
      year: 1997,
      price: 40,
      image: book1,
    },
    {
      id: 2,
      title: "Rich Dad And Poor Dad",
      author: "Robert T. Kiyosaki",
      year: 1997,
      price: 40,
      image: book1,
    },
    {
      id: 3,
      title: "Rich Dad And Poor Dad",
      author: "Robert T. Kiyosaki",
      year: 1997,
      price: 40,
      image: book1,
    },
  ];

  const categories = [
    "Business",
    "Self Help",
    "History",
    "Romance",
    "Fantasy",
    "Art",
    "Kids",
    "Music",
    "Cooking",
  ];

  const [selectedCategory, setSelectedCategory] = useState("Business");
  const [search, setSearch] = useState("");

  return (
    <>
      <div style={{ position: "relative" }}>
        <div
          style={{
            height: "120px",
            backgroundImage: `url(${book1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Navbar />
      </div>

      <div
        style={{
          display: "flex",
          padding: "60px",
          gap: "40px",
          background: "#f5f5f5",
        }}
      >
        {/* LEFT */}
        <div style={{ width: "296px" }}>
          <div style={{ display: "flex", gap: "10px", marginBottom: "24px" }}>
            <img src={filterIcon} width="20" />
            <h2>Filter</h2>
          </div>

          <div
            style={{
              background: "white",
              padding: "16px",
              borderRadius: "8px",
              marginBottom: "32px",
            }}
          >
            <h4 style={{ color: "#E91E63", marginBottom: "16px" }}>
              Categories
            </h4>

            {[
              "All Categories",
              "Business",
              "Kids",
              "Art",
              "History",
              "Romance",
              "Fantasy",
              "Self Help",
              "Cooking",
              "Sports",
            ].map((cat) => (
              <div key={cat} style={{ marginBottom: "12px" }}>
                <input type="checkbox" /> {cat}
              </div>
            ))}

            <p
              style={{
                color: "#E91E63",
                textAlign: "center",
                marginTop: "16px",
                cursor: "pointer",
              }}
            >
              Load More
            </p>
          </div>

          <button
            style={{
              width: "296px",
              height: "57px",
              borderRadius: "8px",
              marginBottom: "16px",
              border: "1px solid #ddd",
              background: "white",
            }}
          >
            Publisher
          </button>

          <button
            style={{
              width: "296px",
              height: "57px",
              borderRadius: "8px",
              border: "1px solid #ddd",
              background: "white",
            }}
          >
            Year
          </button>
        </div>

        {/* RIGHT */}
        <div style={{ flex: 1 }}>
          {/* Search */}
          <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
            <div
              style={{
                width: "758px",
                height: "59px",
                border: "1px solid #ddd",
                borderRadius: "50px",
                display: "flex",
                alignItems: "center",
                padding: "0 24px",
                background: "white",
              }}
            >
              <input
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  fontSize: "18px",
                }}
              />
              <img src={micIcon} width="18" />
            </div>

            <button
              style={{
                width: "140px",
                height: "50px",
                borderRadius: "8px",
                background: "white",
                border: "1px solid #ddd",
              }}
            >
              Sort by
            </button>
          </div>

          {/* Categories */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              marginBottom: "40px",
              flexWrap: "wrap",
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: "10px 24px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  background:
                    selectedCategory === cat ? "#E91E63" : "white",
                  color: selectedCategory === cat ? "white" : "black",
                  cursor: "pointer",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Books */}
          {booksData.map((book) => (
            <div
              key={book.id}
              style={{
                display: "flex",
                gap: "40px",
                marginBottom: "40px",
              }}
            >
              <img
                src={book.image}
                style={{
                  width: "173px",
                  height: "253px",
                  objectFit: "cover",
                }}
              />

              <div style={{ flex: 1 }}>
                <h2>{book.title}</h2>

                <p style={{ color: "#888", lineHeight: "28px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Mauris et ultrices est.
                </p>

                <div style={{ margin: "16px 0" }}>⭐⭐⭐⭐☆ (210 Review)</div>

                <p>Rate: 4.2</p>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "20px",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <p>Author</p>
                    <strong>{book.author}</strong>
                  </div>

                  <div>
                    <p>Year</p>
                    <strong>{book.year}</strong>
                  </div>

                  <div
                    style={{
                      border: "1px solid gold",
                      borderRadius: "8px",
                      padding: "8px 12px",
                      color: "goldenrod",
                    }}
                  >
                    25% Discount code: Ne212
                  </div>

                  <h1>${book.price}.00</h1>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    marginTop: "20px",
                  }}
                >
                  <button
                    onClick={() => navigate("/product-details")}
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
                      gap: "8px",
                      cursor: "pointer",
                    }}
                  >
                    Add To Cart
                    <img src={cartIcon} width="18" />
                  </button>

                  <button
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "8px",
                      border: "1px solid #ddd",
                      background: "white",
                    }}
                  >
                    <img src={heartIcon} width="20" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Pagination */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "16px",
              marginTop: "60px",
              alignItems: "center",
            }}
          >
            <span>Previous</span>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <span>...</span>
            <span>Next</span>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Books;