import { Button } from "@mui/material";
import React, { useEffect } from "react";
import "./Collections.css";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";

const categoryData = [
  {
    id: 1,
    name: "Vintage Wears",
    image: "/images/fave.jpeg",
  },
  {
    id: 2,
    name: "Casual Wears",
    image: "/images/cole4.JPG",
  },
  {
    id: 3,
    name: "Native Wears",
    image: "/images/cole6.JPG",
  },
  {
    id: 4,
    name: "Artistic Fashion",
    image: "/images/cole3.JPG",
  },
  {
    id: 5,
    name: "Safari Wears",
    image: "/images/fave2.jpg",
  },
  {
    id: 6,
    name: "The 23rd",
    image: "images/cole8.jpg",
  },
];

const Collections = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <NavBar />
      <main>
        <section className="banner collections">
          <img src="/images/cole1.jpg" alt="main" />
          <div className="desc">
            <span> BE AS YOU WISH TO SEEM </span>
            <span className="text">EXPLORE THE 23RD COLLECTION</span>

            <div>
              <Button
                sx={{
                  padding: "0.5rem",
                  fontWeight: "bold",
                  color: "#fff",
                  marginTop: "2rem",
                }}
                color="inherit"
                size="large"
                variant="outlined"
                onClick={() => {
                  navigate("/soon");
                }}
              >
                VIEW COLLECTION
              </Button>
            </div>
          </div>
        </section>
        <section className="categories">
          <div className="category-wrapper">
            {categoryData.map((item) => (
              <div className="category-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="info">
                  <h3>{item.name}</h3>
                  <Button
                    sx={{ padding: "1rem", fontWeight: "bold", color: "#fff" }}
                    color="inherit"
                    size="large"
                    variant="outlined"
                    onClick={() => navigate("/soon")}
                  >
                    SHOP NOW
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Collections;
