import PropTypes from "prop-types";
import clsx from "clsx";
import bannerData from "../../data/banner/banner-seven.json";
import BannerSevenSingle from "../../components/banner/BannerSevenSingle.js";
import SectionTitle from "../../components/section-title/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { Autoplay, Navigation } from 'swiper';

const BannerSeven = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div className={clsx("banner-area", spaceTopClass, spaceBottomClass)}>
      <SectionTitle
        titleText="Clientes Felices y sus Productos Destacados"
        positionClass="text-center"
        spaceClass="mb-50"
      />
      <div className="container">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          autoplay={{ delay: 3000 }}
          breakpoints={{
            1024: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 1,
            },
          }}
        >
          {bannerData.concat([
            { link: "/path-to-image1", image: "/images/additional-image1.jpg", title: "Imagen Adicional 1", subtitle: "Subtítulo 1", price: "$10" },
            { link: "/path-to-image2", image: "/images/additional-image2.jpg", title: "Imagen Adicional 2", subtitle: "Subtítulo 2", price: "$20" },
            { link: "/path-to-image3", image: "/images/additional-image3.jpg", title: "Imagen Adicional 3", subtitle: "Subtítulo 3", price: "$30" },
            { link: "/path-to-image1", image: "/images/additional-image1.jpg", title: "Imagen Adicional 1", subtitle: "Subtítulo 1", price: "$10" },
            { link: "/path-to-image2", image: "/images/additional-image2.jpg", title: "Imagen Adicional 2", subtitle: "Subtítulo 2", price: "$20" },
            { link: "/path-to-image3", image: "/images/additional-image3.jpg", title: "Imagen Adicional 3", subtitle: "Subtítulo 3", price: "$30" }
          ]).map((single, key) => (
            <SwiperSlide key={key}>
              <BannerSevenSingle
                data={single}
                spaceBottomClass="mb-30"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

BannerSeven.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default BannerSeven;
