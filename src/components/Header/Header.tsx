import React, { useEffect, useState } from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MobileHeader from "./MobileHeader";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [viewportWidth, setviewPortWidth] = useState(window.innerWidth);

  useEffect(() => {
    // track viewport width
    const handleResize = () => {
      setviewPortWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  }, [viewportWidth]);

  return (
    <>
      {viewportWidth < 580 ? (
        <MobileHeader />
      ) : (
        <header>
          <div className="header-left">
            <div className="item"> STORE </div>
            <div className="item">GALLERY</div>
          </div>
          <div className="logo" onClick={() => navigate("/")}>
            COLƎFIT
          </div>
          <div className="header-right">
            {viewportWidth < 767 ? (
              <SearchIcon />
            ) : (
              <div className="search-box">
                <Input
                  fullWidth
                  disableUnderline
                  placeholder="Search the Store"
                />
                <SearchIcon />
              </div>
            )}

            <PersonIcon />
            <ShoppingCartIcon />
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
