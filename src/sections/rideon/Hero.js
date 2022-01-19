import React from "react";

import imageUrl from "../../assets/image/rideon/png/hero-img-1.png";
import heroCtaBtnImage from "../../assets/image/rideon/png/hero-cta-btn-image.png";
import arrow from "../../assets/image/arrow.png";
import purchase from '../../utils/purchase';
import BuyButton from "../common/BuyButton";

// const fontFamilyAdd = {
//   fontFamily: ''
// }

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
              <h1 className="font-size-13 mb-9"><span style={{ color: '#F3592D' }}>20% OFF</span> of a<br /> Basic Tune Up.</h1>
              <p className="font-size-7 mb-lg-13 pr-sm-15 pr-lg-8 pr-xl-15">
                Come into RideOn! Bike Shop and recieve 20% our Basic Tune Up Package. Whether your bike is in need of a minor adjustment or a major overhaul, we promise that your ride is in good hands.
              </p>
              <div className="mt-5">
                <BuyButton img={imageUrl} title='Ride On! Bike Shop Tune Up' businessTitle='Ride On!' price='72' productId='prod_KdrvyFlU7xI7Yn' target="_blank" className="btn btn-dark-green btn-1 mb-8 rounded-5" style={{ background: '#F3592D', borderColor: '#F3592D' }}>
                   Purchase Tune-Up
                </BuyButton>
              </div>
              <div className="mt-6">
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
