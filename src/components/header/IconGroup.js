import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import clsx from "clsx";
import MenuCart from "./sub-components/MenuCart";
import React, { useState } from "react";

const IconGroup = ({ iconWhiteClass }) => {
  const [cartOpen, setCartOpen] = useState(false); // Estado para controlar la visibilidad del carrito
  const { compareItems } = useSelector((state) => state.compare);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { cartItems } = useSelector((state) => state.cart);

  // Funciones para mostrar y ocultar el carrito
  const handleMouseEnter = () => setCartOpen(true);
  const handleMouseLeave = () => setCartOpen(false);

  return (
    <div className={clsx("header-right-wrap", iconWhiteClass)}>
      {/* Icono de carrito */}
      <div
        className="same-style cart-wrap d-none d-lg-block" 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
      >
        <button className="icon-cart">
          <i className="pe-7s-shopbag" />
          <span className="count-style">{cartItems.length}</span>
        </button>
        {/* Mostrando el carrito al hacer hover */}
        {cartOpen && (
          <div className="shopping-cart-content active">
            <MenuCart />
          </div>
        )}
      </div>
    </div>
  );
};

IconGroup.propTypes = {
  iconWhiteClass: PropTypes.string,
};

export default IconGroup;
