import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { useSelector } from "react-redux"; // Para obtener el estado del carrito

const NavMenu = ({ menuWhiteClass, sidebarMenu }) => {
  const { t } = useTranslation();

  // Obtener el número de artículos en el carrito desde Redux
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div
      className={clsx(sidebarMenu
          ? "sidebar-menu"
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`)}
    >
      <div className="logo-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <nav>
          <ul>
            <li>
              <Link to={process.env.PUBLIC_URL + "/"}>
                {t("Inicio")}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                {t("Catálogo")}
              </Link>
            </li>
            <Link to={process.env.PUBLIC_URL + "/"}>
              <img src={process.env.PUBLIC_URL + "/assets/img/logo/logo.png"} alt="Logo" />
            </Link>
            <li>
              <Link to={process.env.PUBLIC_URL + "/contact"}>
                {t("Contacto")}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                {t("Blog")}
              </Link>
            </li>

            {/* Ícono del carrito */}
            <li className="cart-icon">
              <Link to={process.env.PUBLIC_URL + "/cart"}>
                <i className="fa fa-shopping-cart" /> {/* Icono del carrito */}
                {cartItems.length > 0 && (
                  <span className="cart-count">{cartItems.length}</span> // Mostrar cantidad de artículos en el carrito
                )}
              </Link>
            </li>

            <li>
              <Link to={process.env.PUBLIC_URL + "/wishlist"}>
                {t("Favoritos")}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
};

export default NavMenu;