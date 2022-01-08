import React from "react";
import Link from "next/link";
import * as gtag from '../../utils/gtag';

import imgM from "../../assets/image/misla/png/hero-image.png";

const Hero = ({ className, ...rest }) => {
  const handleClick = () => {
    gtag.event({ action: 'register_today', category: gtag.EventCategories.click, label: window.location.pathname, value: window.location.pathname });
  };
  return (
    <div className={className} {...rest}>
      <div className="container">
        <div className="row align-items-center justify-content-center position-static">
          {/* Hero Content */}
          <div className="col-lg-7">
            <div
              data-aos="fade-left"
              data-aos-delay={750}
            >
              <h1 className="font-size-13 mb-9">
                <span style={{ color: '#F5752A' }}>MISLA’s Tech Bootcamps</span> <span style={{ color: '#12B8BA' }}>Book Now Discount.</span>
              </h1>
              <p className="font-size-7">
                MISLA offers seasonal coding and creative bootcamps covering web design, software engineering, financial literacy, robotics, content creation, social media management, cryptocurrency and more!
              </p>
              <p className="font-size-7">
                Register now for Summer, Spring, Fall, or Winter bootcamps to receive 50% off early-bird discount.
              </p>
              <div className="mt-10">
                <Link href="https://misla.org/">
                  <a className="btn btn-dark-green btn-1 rounded-5 text-white" onClick={handleClick} target="_blank" style={{ background: '#F86825', borderColor: '#F86825' }}>
                    Register Today
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/* End Hero Content */}
          {/* Hero Image */}
          <div className="col-lg-5 ">
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
