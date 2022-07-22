import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Main.css";

const Main = () => {
  const navigate = useNavigate();
  return (
    <main>
      <section className="banner">
        <img src="/images/cole2.jpg" alt="main" />
        <div className="desc">
          <span> BE YOUR OWN KIND OF BEAUTIFUL</span>
          <div>
            <Button
              sx={{
                padding: "0.5rem",
                fontWeight: "bold",
                color: "#000",
                marginTop: "2rem",
              }}
              color="inherit"
              // size="large"
              variant="contained"
              onClick={() => {
                navigate("/collections");
              }}
            >
              SHOP COLLECTIONS
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
