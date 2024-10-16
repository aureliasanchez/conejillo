import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const BlogPost = () => {
  return (
    <Fragment>
      <div className="blog-details-top">
        <div className="blog-details-content">
          <div className="blog-meta-2">
            <ul>
              <li>15 Octubre, 2024</li>
              {/* <li>
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                  4 <i className="fa fa-comments-o" />
                </Link>
              </li> */}
            </ul>
          </div>
          <h3>¿Por qué elegir Choco Fly?</h3>
          <p>
          🌿 Relajación Inmediata: Cada galleta está diseñada para ayudarte a desconectar y relajarte al instante.<br></br>
          🍫 Sabor Irresistible: Disfruta de un sabor delicioso que hará que cada bocado sea una experiencia placentera.<br></br>
          🛌 Alivio del Estrés: Perfectas para esos días en los que necesitas un respiro y liberar tensiones.<br></br>
          🌠 Experiencia Única: Te transportarán a Júpiter y más allá, permitiéndote explorar nuevos horizontes y disfrutar de un viaje inolvidable.<br></br>
            Estas galletas son el acompañante perfecto para aquellos que buscan una experiencia única y astral. <br></br>Cada bocado te llevará a un nuevo nivel de bienestar y placer.{" "}
          </p>
        
        </div>
        </div>
      <div className="dec-img-wrapper">
        <div className="row">
          <div className="col-md-6">
            <div className="dec-img mb-50">
              <img
                alt=""
                src={
                  process.env.PUBLIC_URL + "/assets/img/blog/blog-details.jpg"
                }
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="dec-img mb-50">
              <img
                alt=""
                src={
                  process.env.PUBLIC_URL + "/assets/img/blog/blog-details-2.jpg"
                }
              />
            </div>
          </div>
        </div>
        </div>
        <div className="blog-details-content">
          <div className="blog-meta-2">
            <ul>
              <li>16 Octubre, 2024</li>
              {/* <li>
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                  4 <i className="fa fa-comments-o" />
                </Link>
              </li> */}
            </ul>
          </div>
          <h3>Conóce Nuestros Cafés</h3>
          <p>
          Nuestra locochona e innovadora fusión con la plantita mágica, te sorprenderá con todos sus beneficios.<br></br><br></br>

Comenzando por el de la izquierda, tenemos el ✨Espresso✨, perfecto para los amantes de las intensidades. Su hermosa bolsa verde metálico lo hace irresistible. Además, su fusión con la plantita mágica te brinda una experiencia única, ayudándote a relajarte, conciliar el sueño y aliviar dolores musculares.<br></br><br></br>

Continuamos con el ✨Golden cafe✨, libre de estimulantes psicoactivos. Disfruta de todos los beneficios de la cafeína con un sabor delicioso y único, mientras la plantita mágica te brinda un efecto calmante y analgésico, ideal para aquellos que buscan aliviar dolores crónicos.<br></br><br></br>

Por último, pero no menos importante, presentamos nuestro pionero en la línea de productos Conejillo de campo, ✨El Café Clásico✨. Con la dosis perfecta de fusión con el cannabis, este café te mantendrá enfocado y creativo. Además, la plantita mágica te ayuda a mejorar la calidad del sueño y a aliviar dolores de forma natural.<br></br><br></br>

Descubre los sorprendentes beneficios que te esperan en cada taza. Desde el primer momento en que lo pruebes, sentirás ese toque mágico que hace de esta experiencia algo único. 😉{" "}
          </p>
          </div>
        
        <div className="dec-img-wrapper">
        <div className="row">
          <div className="col-md-6">
            <div className="dec-img mb-50">
              <img
                alt=""
                src={
                  process.env.PUBLIC_URL + "/assets/img/blog/blog-5.jpg"
                }
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="dec-img mb-50">
              <img
                alt=""
                src={
                  process.env.PUBLIC_URL + "/assets/img/blog/blog-6.jpg"
                }
              />
            </div>
          </div>
        </div>
        </div>
        <div className="blog-details-content">
          <div className="blog-meta-2">
            {/*<ul>
              <li>16 Octubre, 2024</li>
               <li>
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                  4 <i className="fa fa-comments-o" />
                </Link>
              </li> 
            </ul>*/}
          </div>
      </div>
      <div className="tag-share">
        {/* <div className="dec-tag">
          <ul>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                lifestyle ,
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                interior ,
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                outdoor
              </Link>
            </li>
          </ul>
        </div> */}
        <div className="blog-share">
          <span>Síguenos:</span>
          <div className="share-social">
            <ul>
              <li>
                <a className="facebook" href="https://www.facebook.com/ConejilloDeCampo.mx/">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a className="instagram" href="https://www.instagram.com/conejillodecampo/">
                  <i className="fa fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="next-previous-post">
        <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
          {" "}
          <i className="fa fa-angle-left" /> Anterior Post
        </Link>
        <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
          Siguiente Post <i className="fa fa-angle-right" />
        </Link>
      </div>
    </Fragment>
  );
};

export default BlogPost;
