import React, { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutTwo from "../../layouts/LayoutTwo";
import HeroSliderSix from "../../wrappers/hero-slider/HeroSliderSix";
import BannerOne from "../../wrappers/banner/BannerOne";
import RelatedProductSlider from "../../wrappers/product/RelatedProductSlider";
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
        <BannerOne spaceTopClass="pt-95" spaceBottomClass="pb-70" />
        
        {/* related product slider */}
        <RelatedProductSlider
          spaceBottomClass="pb-95"
          category="Productos Individuales"
        />

        <BannerSix spaceTopClass="pt-100" spaceBottomClass="pb-80" 
        />
        {/* tab product */}

        {/* banner */}
        <BannerSeven spaceTopClass="pt-95" spaceBottomClass="pb-70" 
        />

                
      </LayoutTwo>
    </Fragment>
  );
};

export default HomeFlowerShop;
