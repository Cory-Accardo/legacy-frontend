import React from "react";

import imageUrl from "../../assets/image/rideon/png/hero-img-1.png";
import heroCtaBtnImage from "../../assets/image/rideon/png/hero-cta-btn-image.png";

const Hero = ({ className, ...rest }) => {
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
              <h1 className="font-size-12 mb-9"><span style={{ color: '#F3592D' }}>20% OFF</span> of a Basic Tune Up.</h1>
              <p className="font-size-8 mb-lg-13 pr-sm-15 pr-lg-8 pr-xl-15">
                Come into RideOn! Bike Shop and recieve 20% our Basic Tune Up Package. Whether your bike is in need of a minor adjustment or a major overhaul, we promise that your ride is in good hands.
              </p>
              <div className="d-flex align-items-center py-6 mr-xl-15">
                <div className="mr-7">
                  <a
                    href="/#"
                    onClick={(e) => {
                      e.preventDefault();
                      // gContext.toggleVideoModal();
                    }}
                  >
                    <img src={heroCtaBtnImage} alt="" />
                  </a>
                </div>
                <div className="mt-0">
                  <h4 className="font-size-8 mb-0">Schedule a TuneUp!</h4>
                  <p className="font-size-6 mb-0">
                    Receive 20% OFF at checkout
                  </p>
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
