import React from "react";

import imageUrl from "../../assets/image/jordanshotdogs/png/hero-image.png";
import heroCtaBtnImage from "../../assets/image/jordanshotdogs/png/hero-cta-btn-image.png";
import arrow from "../../assets/image/arrow.png";

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
              <h1 className="font-size-13 mb-9"><span style={{ color: '#92291D' }}>Harriet Special & </span><span style={{ color: '#E3A220' }}>JDH Merch</span></h1>
              <p className="font-size-7">
                Since 1965, Jordan’s Hot Dogs has offered quaility
                food, serving authentic family recipes at affordable
                prices. Try our Harriet Special - Chili Cheese Dog
                & Chili Cheese Fries for $9
              </p>
              <p className="font-size-7">
                As a token of our appreciation, with the purchase
                of the Harriet Special we are offering 10% off
                the JDH Living Legend t-shirt & Our Diggity Dog
                t-shirt, in honor of our history.
              </p>
              <div className="d-flex align-items-center py-6 mr-xl-15">
                <div className="mr-7">
                  <a
                    href="/#"
                    target="_blank"
                    onClick={(e) => {
                      e.preventDefault();
                      // gContext.toggleVideoModal();
                    }}
                  >
                    <img src={heroCtaBtnImage} alt="" />
                  </a>
                </div>
                <div className="mt-0">
                  <p className="font-size-7 mb-0">Purchase the Harriet Special</p>
                  {/*<p className="font-size-6 mb-0">*/}
                  {/*  You may book parties up to 8.*/}
                  {/*  For larger parties, please call Tanya at 323-954-7477.*/}
                  {/*</p>*/}
                </div>
              </div>
              <div className="mt-6">
                <div class="row align-items-center">
                  <div className="col-lg-7">
                    <p className="font-size-5 mb-3"> Looking for more savings?</p>
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
