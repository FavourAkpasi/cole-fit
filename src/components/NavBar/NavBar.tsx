import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
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
      {viewportWidth > 580 && (
        <nav>
          <ul>
            <li onClick={() => navigate("/soon")}>BOOK A CONSULTATION</li>
            <li onClick={() => navigate("/soon")}>SHOP</li>
            <li onClick={() => navigate("/soon")}>CONTACT</li>
            <li onClick={() => navigate("/soon")}>ABOUT</li>
            <li onClick={() => navigate("/collections")}>BROWSE COLLECTIONS</li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default NavBar;
