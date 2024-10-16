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
                <img src={process.env.PUBLIC_URL + "/assets/img/icon-img/casita.png"} alt="Envio Gratis Icon" />
                <div className="info-text">
                <h4>Envío Seguro</h4>
                <p>Envío gratuito en todos los pedidos</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="info-box">
                <img src={process.env.PUBLIC_URL + "/assets/img/icon-img/247.png"} alt="Support Icon" />
                <div className="info-text">
                  <h4>Asistencia 24/7</h4>
                  <p>Asistencia  de 24/7</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="info-box">
                <img src={process.env.PUBLIC_URL + "/assets/img/icon-img/dinero.png"} alt="Money Return Icon" />
                <div className="info-text">
                <h4>Devolución de Dinero</h4>
                <p>30 días de devolución del dinero</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="info-box">
                <img src={process.env.PUBLIC_URL + "/assets/img/icon-img/natural.png"} alt="Productos Naturales" />
                <div className="info-text">
                <h4>Productos Naturales</h4>
                <p>100% Naturales</p>
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
