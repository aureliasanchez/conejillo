import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";

const BannerSevenSingle = ({ data, spaceBottomClass }) => {
  return (
    <div className={clsx("single-banner", spaceBottomClass)}>
      <Link>
        <img src={data.image} alt={data.title || "Banner image"} />
      </Link>
    </div>
  );
};

BannerSevenSingle.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    title: PropTypes.string,
    subtitle: PropTypes.string,
  }).isRequired,
  spaceBottomClass: PropTypes.string,
};

export default BannerSevenSingle;
