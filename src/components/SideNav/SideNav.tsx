import "./SideNav.css";
import CloseIcon from "@mui/icons-material/Close";

type SideNavProps = {
  openSideNav: boolean;
  setOpenSideNav: Function;
};

function SideNav({ openSideNav, setOpenSideNav }: SideNavProps) {
  return (
    <div className="side_nav" style={{ width: `${openSideNav ? "40%" : "0"}` }}>
      <ul>
        <li onClick={() => setOpenSideNav(!openSideNav)}>
          <a href="#about">STORE</a>
        </li>
        <li onClick={() => setOpenSideNav(!openSideNav)}>
          <a href="#projects">GALLERY</a>
        </li>
        <li onClick={() => setOpenSideNav(!openSideNav)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <button id="close_btn" onClick={() => setOpenSideNav(!openSideNav)}>
        <CloseIcon />
      </button>
    </div>
  );
}

export default SideNav;
