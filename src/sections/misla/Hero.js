import React from "react";
import Link from "next/link";

import imgM from "../../assets/image/misla/png/hero-image.png";

const Hero = ({ className, ...rest }) => {
  return (
    <div className={className} {...rest}>
      <div className="container position-static">
        <div className="row align-items-center justify-content-center position-static">
          {/* Hero Content */}
          <div className="col-xl-7 col-lg-7 col-md-6 col-sm-11">
            <div
              className="mt-8 mt-lg-0 pr-md-11 pr-lg-0 pr-xl-10"
              data-aos="fade-left"
              data-aos-delay={750}
            >
              <h1 className="font-size-13 mb-8 pr-sm-18 pr-md-8 pr-lg-0 line-height-84">
                <span style={{ color: '#F5752A' }}>MISLA’s Tech Bootcamps</span> <span style={{ color: '#12B8BA' }}>Book Now Discount.</span>
              </h1>
              <p className="font-size-7 mb-0 pr-sm-10 pr-md-10 pr-lg-0 pr-xl-18">
                MISLA offers seasonal coding and creative bootcamps covering web design, software engineering, financial literacy, robotics, content creation, social media management, cryptocurrency and more!<br/>
                Register now for Summer, Spring, Fall, or Winter bootcamps to receive 50% off early-bird discount.
              </p>
              <div className="mt-10">
                <Link href="/#">
                  <a className="btn btn-dark-green btn-3 rounded-5 text-white" target="_blank" style={{ background: '#F86825', borderColor: '#F86825' }}>
                    Register Today
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/* End Hero Content */}
          {/* Hero Image */}
          <div className="col-xl-5 col-lg-5 col-md-6 col-xs-8">
            <div className="pt-lg-3" data-aos="flip-right" data-aos-delay={900}>
              <img className="w-100" src={imgM} alt="" />
            </div>
          </div>
          {/* End Hero Image */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
