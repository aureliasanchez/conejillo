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
          spaceBetween={10}
          slidesPerView={6}
          slidesPerGroup={1}
          navigation
          autoplay={{ delay: 3000 }}
          loop={true}
          loopFillGroupWithBlank={true}
          lazy={true}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            480: {
              slidesPerView: 1,
            },
          }}
        >
          {bannerData.concat([
            { image: "assets/img/banner/ejemplo 1.jpg"},
            { image: "assets/img/banner/ejemplo 1.jpg"},
            { image: "assets/img/banner/ejemplo 1.jpg"},
            { image: "assets/img/banner/ejemplo 1.jpg"},
            { image: "assets/img/banner/ejemplo 1.jpg"},
            { image: "assets/img/banner/ejemplo 1.jpg"}
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
