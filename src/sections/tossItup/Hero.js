import React from "react";
import Link from "next/link";

import imgM from "../../assets/image/tossItUp/png/hero-image-1.png";

const Hero = ({ className, ...rest }) => {
  return (
    <div className={className} {...rest}>
      <div className="container position-static">
        <div className="row align-items-center justify-content-center position-static">
          {/* Hero Image */}
          <div className="col-xl-6 col-lg-6 col-md-7 col-xs-8">
            <div className="pt-lg-3" data-aos="flip-right" data-aos-delay={900}>
              <img className="w-100" src={imgM} alt="" />
            </div>
          </div>
          {/* End Hero Image */}
          {/* Hero Content */}
          <div className="col-lg-6 col-md-9 col-sm-11">
            <div
              className="mt-8 mt-lg-0 pr-md-11 pr-lg-0 pr-xl-10"
              data-aos="fade-left"
              data-aos-delay={750}
            >
              <h1 className="font-size-13 mb-8 pr-sm-18 pr-md-8 pr-lg-0 line-height-84">
                The <span style={{ color: '#8dc63f' }}>Toss It Up</span> <span style={{ color: '#39B54A' }}>Coupon</span> <span style={{ color: '#d6df20' }}>Code</span>
              </h1>
              <p className="font-size-7 mb-0 pr-sm-10 pr-md-10 pr-lg-0 pr-xl-18">
                The Classics are our Toss It Up O.G. salads. Tried and True, here is where you find the BEST, and ONLY $5 salads in Los Angeles!<br/>
                Receive a coupon code when you spend $40 or more!
              </p>
              <div className="mt-10">
                <Link href="/#">
                  <a className="btn btn-dark-green btn-3 rounded-5" target="_blank" style={{ background: '#39B54A', borderColor: '#39B54A' }}>
                    Place Your Order
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/* End Hero Content */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
