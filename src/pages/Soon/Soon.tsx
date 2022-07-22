import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Soon.css";

const Soon = () => {
  const navigate = useNavigate();
  return (
    <main>
      <section className="soon">
        <img src="/images/comingsoon.jpg" alt="soon" />
        <div className="button">
          <Button
            sx={{
              padding: "1rem",
              fontWeight: "bold",
              color: "#000",
              marginTop: "2rem",
            }}
            color="inherit"
            size="large"
            variant="contained"
            onClick={() => {
              navigate("/");
            }}
          >
            GO BACK HOME
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Soon;
