import React from "react";

import imageUrl from "../../assets/image/freewayeasy/png/hero-image.png";
import heroCtaBtnImage from "../../assets/image/freewayeasy/png/hero-cta-btn-image.png";
import arrow from "../../assets/image/arrow.png";
import BuyButton from "../common/BuyButton";

const Hero = ({ className, ...rest }) => {
  return (
    <div className={className} {...rest}>
      <div className="container">
        <div className="row align-items-center">
          {/* Hero Content */}
          <div className="col-md-7">
            <div
              className="mt-8 mt-lg-0 mr-xl-13"
              data-aos="fade-right"
              data-aos-delay={500}
            >
              <h1 className="font-size-13 mb-9">Are you ready to drive? <span style={{ color: '#00afeb' }}>Sign-Up Today</span></h1>
              <p className="font-size-7">
                Driving lessons are done in automatic transmission cars
                with dual gas and brake pedals. Our instructors are knowledgeable courteous and friendly.
              </p>
              <p className="font-size-7">
                Depend on us to provide you or your teenager with a
                driving school that provide expert driving instruction
                to prepare the driver for a permit or licsence.
              </p>
              <div className="d-flex align-items-center py-6 mr-xl-15">
                <BuyButton productId='prod_Ke14nMwBW69Cv3' className="btn btn-dark-green btn-2 rounded-5 text-white" target="_blank" style={{ background: '#00AFEB', borderColor: '#00AFEB' }}>
                  Sign-Up Now
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
          <div className="col-md-5">
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
