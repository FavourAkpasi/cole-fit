import React, { useEffect, useState } from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SideNav from "../SideNav/SideNav";
import { useNavigate } from "react-router-dom";

const MobileHeader = () => {
  const navigate = useNavigate();
  // const [isHidden, setIsHidden] = useState(false);

  // useEffect(() => {
  //   window.onscroll = function () {
  //     let prevScrollPos = window.pageYOffset;
  //     console.log("p" + prevScrollPos);
  //     let currentScrollPos = window.pageYOffset;
  //     console.log("c" + currentScrollPos);

  //     if (prevScrollPos > currentScrollPos) {
  //       setIsHidden(true);
  //     } else {
  //       setIsHidden(false);
  //     }
  //   };
  //   console.log(isHidden);
  // }, [window.pageYOffset]);

  const [openSideNav, setOpenSideNav] = useState(false);
  return (
    <header>
      <div className="header-left">
        <MenuIcon id="menu_bar" onClick={() => setOpenSideNav(!openSideNav)} />
        <SideNav openSideNav={openSideNav} setOpenSideNav={setOpenSideNav} />
      </div>
      <div
        className="logo"
        style={{ fontSize: "2rem" }}
        onClick={() => navigate("/")}
      >
        COLƎFIT
      </div>
      <div className="header-right">
        <ShoppingCartIcon />
      </div>
    </header>
  );
};

export default MobileHeader;
