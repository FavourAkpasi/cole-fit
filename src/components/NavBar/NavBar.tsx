import React, { useEffect, useState } from "react";
import "./NavBar.css";

const NavBar = () => {
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
            <li>BOOK A CONSULTATION</li>
            <li>SHOP</li>
            <li>CONTACT</li>
            <li>ABOUT</li>
            <li>BROWSE COLLECTIONS</li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default NavBar;
