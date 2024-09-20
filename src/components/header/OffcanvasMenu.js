import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";

const OffcanvasMenu = ({ activeState, getActiveState }) => {
  return (
    <div className={clsx("clickable-mainmenu", activeState ? "inside" : "")}>
      <div className="clickable-mainmenu-icon">
        <button
          className="clickable-mainmenu-close"
          onClick={() => getActiveState(false)}
        >
          <span className="pe-7s-close"></span>
        </button>
      </div>
      {/* nav menu*/}
      {/* <NavMenu sidebarMenu={true} /> */}

      <div className="side-logo">
        <Link to={process.env.PUBLIC_URL + "/"}> 
          <img
            alt=""
            src={process.env.PUBLIC_URL + "/assets/img/logo/logo.png"}
          />
        </Link>
      </div>

      {/* header social */}
      {/* <HeaderSocial /> */}
    </div>
  );
};

OffcanvasMenu.propTypes = {
  activeState: PropTypes.bool,
  getActiveState: PropTypes.func
};

export default OffcanvasMenu;
