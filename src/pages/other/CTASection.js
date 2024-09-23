import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const CTASection = ({ buttonText, buttonLink, ctaText }) => {
  return (
    <div className={clsx("cta-section", "text-center", "py-5", "bg-white")}>
      <div className="container">
        <h2 className="cta-text font-weight-bold mb-4">{ctaText}</h2>
        <a 
          href={buttonLink} 
          className="cta-button btn btn-custom-green btn-lg  px-5 py-3"     
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

CTASection.propTypes = {
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
  ctaText: PropTypes.string.isRequired,
};

export default CTASection;
