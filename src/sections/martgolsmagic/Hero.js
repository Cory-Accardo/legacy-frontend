import React from "react";

import imageUrl from "../../assets/image/martgolsmagic/png/hero-image-1.png";
import heroCtaBtnImage from "../../assets/image/martgolsmagic/png/hero-cta-btn-image.png";

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
              <h1 className="font-size-11 mb-9"><span style={{ color: '#FFD706' }}>Martgol's Magic</span> <br /> Car Care Products.</h1>
              <p className="font-size-8 mb-lg-13 pr-sm-15 pr-lg-8 pr-xl-15">
                Aston martins, ferraris, and Bentleys find their way to the unassuming parking structure in a quiet corner of Beverly Hills where Martgol’s Magic is housed. Here Martgol Beasley, who specializes in the detailing and paint restoration of upscale cars, applies 30-plus years of experience (along with a magnifying glass and a fine-hair brush) to techniques such as “claying,” in which a bar of clay is dragged lightly across a vehicle’s surface to remove small amounts of grime, tar, and rust.
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
                  <h4 className="font-size-8 mb-0">Schedule a Wash & Detailing </h4>
                  <p className="font-size-6 mb-0">
                    Experience Martgol’s Magic high-end detailing service.
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
