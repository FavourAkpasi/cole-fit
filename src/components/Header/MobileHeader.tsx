import { Person } from "@mui/icons-material";
import React from "react";
import "./Header.css";

const MobileHeader = () => {
  return (
    <header>
      <div className="logo mobile" style={{ fontSize: "2rem" }}>
        COLƎFIT
      </div>
      <div className="header-right">
        <Person />
      </div>
    </header>
  );
};

export default MobileHeader;
