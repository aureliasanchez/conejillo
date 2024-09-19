import React, { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutTwo from "../../layouts/LayoutTwo";
import HeroSliderSix from "../../wrappers/hero-slider/HeroSliderSix";
import BannerSix from "../../wrappers/banner/BannerSix";
import BannerSeven from "../../wrappers/banner/BannerSeven";

const HomeFlowerShop = () => {
  return (
    <Fragment>
      <SEO
        titleTemplate="Conejillo"
        description="La cultura cannábica no se lee, se prueba."
      />
      <LayoutTwo>
        {/* hero slider */}
        <HeroSliderSix />
        {/* banner */}
        <BannerSix spaceTopClass="pt-100" spaceBottomClass="pb-80" />
        {/* tab product */}
      </LayoutTwo>
    </Fragment>
  );
};

export default HomeFlowerShop;
