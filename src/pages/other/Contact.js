import { Fragment } from "react"; 
import { useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import GoogleMap from "../../components/google-map"

const Contact = () => {
  let { pathname } = useLocation();

  return (
    <Fragment>
      <SEO
        titleTemplate="Contact"
        description="Contact page of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb 
          pages={[
            {label: "Inicio", path: process.env.PUBLIC_URL + "/" },
            {label: "Contacto", path: process.env.PUBLIC_URL + pathname }
          ]} 
        />
        <div className="contact-area pt-100 pb-100">
          <div className="container">
            {/* <div className="contact-map mb-10">
              <GoogleMap lat={20.1011} lng={-98.7591} />
            </div> */}
            <div className="custom-row-2">
              <div className="col-12 col-lg-4 col-md-5">
                <div className="contact-info-wrap">
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-whatsapp" />
                    </div>
                    <div className="contact-info-dec">
                      <p>
                        <a href="https://www.whatsapp.com/catalog/5215581469126/?app_absent=0">
                        55 8146 9126
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-map-marker" />
                    </div>
                    <div className="contact-info-dec">
                      <p>Pachuca</p>
                    </div>
                  </div>
                  <div className="contact-social text-center">
                    <h3>Síguenos</h3>
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/ConejilloDeCampo.mx/">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/conejillodecampo/">
                          <i className="fa fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-8 col-md-7">
                <div className="contact-form">
                  <div className="contact-title mb-30">
                    <h2>Ponte en contacto</h2>
                  </div>
                  <form className="contact-form-style">
                    <div className="row">
                      <div className="col-lg-6">
                        <input name="name" placeholder="Nombre*" type="text" />
                      </div>
                      <div className="col-lg-6">
                        <input name="email" placeholder="Email*" type="email" />
                      </div>
                      <div className="col-lg-12">
                        <input
                          name="subject"
                          placeholder="Asunto*"
                          type="text"
                        />
                      </div>
                      <div className="col-lg-12">
                        <textarea
                          name="message"
                          placeholder="Su Mensaje*"
                          defaultValue={""}
                        />
                        <button className="submit" type="submit">
                          ENVIAR
                        </button>
                      </div>
                    </div>
                  </form>
                  <p className="form-message" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Contact;
