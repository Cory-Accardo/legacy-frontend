import React from "react";
import arrow from "../../assets/image/arrow.png";
import imageUrl from "../../assets/image/aquaequity/png/hero-image-1.png";
import heroCtaBtnImage from "../../assets/image/aquaequity/png/hero-cta-btn-image.png";
import * as gtag from '../../utils/gtag';

const Hero = ({ className, ...rest }) => {
  const handleClick = () => {
    gtag.event({ action: 'buy_without_saving', category: gtag.EventCategories.click, label: window.location.pathname, value: window.location.pathname });
  };
  return (
    <div className={className} {...rest}>
      <div className="container">
        <div className="row align-items-center">
          {/* Hero Image */}
          <div className="col-lg-7 col-md-6 order-1 order-lg-2">
            <div
              className="mt-8 mt-lg-0"
              data-aos="fade-right"
              data-aos-delay={500}
            >
              <h1 className="font-size-13 mb-9"><span style={{ color: '#01339F' }}>Pouring Equity</span> <span style={{ color: '#01A8E3' }}> Into the community.</span></h1>
              <p className="font-size-7">
                Aqua Equity offers both mountain spring water and mineral-enriched, electrolyte enhanced water purified through reverse osmosis, providing a clean and crisp taste.
              </p>
              <p className="font-size-7">
                Aqua Equity aluminum packaged cans are recycled at a rate of more than 20x that of plastic bottles. Additionally, Aqua Equity water is sourced from local aquifers helping to reduce carbon pollution.
              </p>
            </div>
          </div>
          {/* End Hero Image */}
          {/* Hero Content */}
          <div className="col-lg-5  col-md-6 order-2 order-lg-1">

            <div className="pt-lg-3" data-aos="flip-right" data-aos-delay={900}>
              <img className="w-100" src={imageUrl} alt="" />
            </div>
          </div>
          {/* End Hero Content */}

        </div>
      </div>
    </div>
  );
};

export default Hero;
