import React from "react";
import arrow from "../../assets/image/arrow.png";
import imageUrl from "../../assets/image/pipsonlabreas/png/hero-image.png";
import heroCtaBtnImage from "../../assets/image/pipsonlabreas/png/hero-cta-btn-image.png";

const Hero = ({ className, ...rest }) => {
  return (
    <div className={className} {...rest}>
      <div className="container">
        <div className="row align-items-center">
          {/* Hero Content */}
          <div className="col-lg-7">
            <div
              className="mt-8 mt-lg-0 mr-xl-13"
              data-aos="fade-right"
              data-aos-delay={500}
            >
              <h1 className="font-size-13 mb-9">FREE dessert with <br/>$25 reservation.</h1>
              <p className="font-size-7">
                We welcome you to enjoy live jazz music along with our American comfort food and the perfect blend of classic American!
              </p>
              <p className="font-size-7 ">
                Here at Pips we specialize in two things. Great jazz and traditional American cuisine! Enjoy half off our bar menu from 5pm to 7pm Tuesday through Thursday.
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
                <div className="mt-2">
                  <p className="font-size-8 mb-3">Reservations at Pip's on La Brea</p>
                  <p className="font-size-6 mb-0">
                    You may book parties up to 8.
                    For larger parties, please call Tanya at 323-954-7477.
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <div class="row align-items-center">
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
          <div className="col-lg-5">
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
