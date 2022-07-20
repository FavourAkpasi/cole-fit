import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SideNav from "../SideNav/SideNav";

const MobileHeader = () => {
  const [openSideNav, setOpenSideNav] = useState(false);
  return (
    <header>
      <div className="header-left">
        <MenuIcon id="menu_bar" onClick={() => setOpenSideNav(!openSideNav)} />
        <SideNav openSideNav={openSideNav} setOpenSideNav={setOpenSideNav} />
      </div>
      <div className="logo" style={{ fontSize: "2rem" }}>
        COLƎFIT
      </div>
      <div className="header-right">
        <ShoppingCartIcon />
      </div>
    </header>
  );
};

export default MobileHeader;
