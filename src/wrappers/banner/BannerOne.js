import PropTypes from "prop-types";
import clsx from "clsx";
import bannerData from "../../data/banner/banner-one.json";
import BannerOneSingle from "../../components/banner/BannerOneSingle.js";

const BannerOne = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div className={clsx("banner-area", spaceTopClass, spaceBottomClass)}>
       {/* Iconos */}
       <div className="icon-info-section">
        <div className="container padding-20-row-col">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="info-box">
                <img src={process.env.PUBLIC_URL + "/assets/img/icons/free-shipping.png"} alt="Free Shipping Icon" />
                <div className="info-text">
                  <h4>Free Shipping</h4>
                  <p>Free shipping on all orders</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="info-box">
                <img src={process.env.PUBLIC_URL + "/assets/img/icons/support.png"} alt="Support Icon" />
                <div className="info-text">
                  <h4>Asistencia 24/7</h4>
                  <p>Asistencia  de 24/7</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="info-box">
                <img src={process.env.PUBLIC_URL + "/assets/img/icons/money-return.png"} alt="Money Return Icon" />
                <div className="info-text">
                  <h4>Money Return</h4>
                  <p>30 days money back</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="info-box">
                <img src={process.env.PUBLIC_URL + "/assets/img/icons/order-discount.png"} alt="Order Discount Icon" />
                <div className="info-text">
                  <h4>Order Discount</h4>
                  <p>On selected items</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div><br/><br/><br/><br/>
    </div>
  );
};

BannerOne.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default BannerOne;
