import React from "react";
import arrow from "../../assets/image/arrow.png";
import imageUrl from "../../assets/image/martgolsmagic/png/hero-image-1.png";
import heroCtaBtnImage from "../../assets/image/martgolsmagic/png/hero-cta-btn-image.png";
import * as gtag from '../../utils/gtag';


const Hero = ({ className, ...rest }) => {
  const handleClick = () => {
    gtag.event({ action: 'buy_martgols_magic', category: gtag.EventCategories.click, label: window.location.pathname, value: window.location.pathname });
  };
  return (
    <div className={className} {...rest}>
      <div className="container">
        <div className="row align-items-center">
          {/* Hero Content */}
          <div className="col-lg-7 col-md-10 col-sm-12 order-2 order-lg-1">
            <div
              className="mt-8 mt-lg-0 mr-xl-13"
              data-aos="fade-right"
              data-aos-delay={500}
            >
              <h1 className="font-size-13 mb-9"><span style={{ color: '#FFD706' }}>Martgol's Magic</span> <br /> Car Care Products.</h1>
              <p className="font-size-7">
                Aston martins, ferraris, and Bentleys find their way to the unassuming parking structure in a quiet corner of Beverly Hills where Martgol’s Magic is housed. Here Martgol Beasley, who specializes in the detailing and paint restoration of upscale cars, applies 30-plus years of experience (along with a magnifying glass and a fine-hair brush) to techniques such as “claying,” in which a bar of clay is dragged lightly across a vehicle’s surface to remove small amounts of grime, tar, and rust.
              </p>
              <a href="https://www.facebook.com/Martgols-magic-car-care-258348244583910" onClick={handleClick} target="_blank" className="btn btn-dark-green btn-3 rounded-5 mt-5 text-white" target="_blank" style={{ background: '#E3A120', borderColor: '#E3A120' }}>
              Buy Martgol’s Magic
                      </a>
              <div className="mt-8">
                <div className="row align-items-center">
                  <div className="col-lg-7">
                    <p className="font-size-5 mb-3 "> Looking for more savings?</p>
                    <p className="font-size-5 mb-0">Scroll down to discover the SLASHcard</p>
                    <p className="font-size-5 mb-0">50% discount card, for a limited time.</p>
                    <div className="arrow-down">
                      <img src={arrow} alt="arrow" />
                    </div>
                  </div>
                  <div className="col-lg-5">

                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Hero Content */}
          {/* Hero Image */}
          <div className="col-lg-5 col-md-7 col-xs-8 order-1 order-lg-2">
            <div className="pt-lg-3" data-aos="flip-right" data-aos-delay={900}>
              <img className="w-100" src={imageUrl} alt="" />
            </div>
          </div>
          {/* End Hero Image */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
