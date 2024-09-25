import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import SectionTitle from "../../components/section-title/SectionTitle";

const BannerSix = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={clsx("banner-area", spaceTopClass, spaceBottomClass)}>
       <SectionTitle
          titleText="Encuentra tu Kit Perfecto y Más"
          positionClass="text-center"
          spaceClass="mb-50"
        />
    {/*Productos*/}
      <div className="container padding-20-row-col">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="single-banner mb-20">
              <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/banner/Kits.webp"
                  }
                  alt=""
                />
              </Link>
              <div className="banner-content-4 banner-position-hm15-2 pink-banner">
                <h2>Kits</h2>
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
                    process.env.PUBLIC_URL + "/assets/img/banner/Individuales.webp"
                  }
                  alt="Cafe Golden"
                />
              </Link>
              <div className="banner-content-4 banner-position-hm15-2 pink-banner">
                <h2>Individuales</h2>
                <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                    Comprar Ahora
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
