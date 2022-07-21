import { Button } from "@mui/material";
import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <main>
      <section className="banner">
        <img src="/images/cole2.jpg" alt="main" />
        <div className="desc">
          <span> BE YOUR OWN KIND OF BEAUTIFUL</span>
          <div>
            <Button
              sx={{ padding: "0.5rem", fontWeight: "bold", color: "#000" }}
              color="inherit"
              // size="large"
              variant="contained"
              onClick={() => {
                // navigate("/hair");
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
