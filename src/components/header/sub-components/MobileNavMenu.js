import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MobileNavMenu = () => {
  const { t } = useTranslation();

  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/home-flower-shop"}>{t("Inicio")}</Link>
        </li>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
            {t("Catálogo")}
          </Link>
        </li>   
        <li>
          <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
            {t("colleccion")}
          </Link>
        </li> 
        <li>
          <Link to={process.env.PUBLIC_URL + "/contact"}>
            {t("contacto")}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavMenu;
