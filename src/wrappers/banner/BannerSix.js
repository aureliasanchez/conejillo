import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";

const BannerSix = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={clsx("banner-area", spaceTopClass, spaceBottomClass)}
    >
      <div className="container padding-20-row-col">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="single-banner mb-20">
              <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/banner/The Choco Fly.webp"
                  }
                  alt=""
                />
              </Link>
              <div className="banner-content-4 banner-position-hm15-2 pink-banner">
                <h2>KITS</h2>
                <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                    Comprar Ahora
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="single-banner mb-20">
              <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/banner/Kit Brou_Versión 4.webp"
                  }
                  alt=""
                />
              </Link>
              <div className="banner-content-3 banner-position-hm15-2 pink-banner">
                <h3>Individuales</h3>
                <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                  <i className="fa fa-long-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BannerSix.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default BannerSix;
