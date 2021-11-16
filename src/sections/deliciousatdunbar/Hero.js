import React from "react";
import Link from "next/link";

import imgM from "../../assets/image/deliciousatdunbar/png/hero-image.png";

const Hero = ({ className, ...rest }) => {
  return (
    <div className={className} {...rest}>
      <div className="container position-static">
        <div className="row align-items-center justify-content-center position-static">
          {/* Hero Image */}
          <div className="col-xl-5 col-lg-5 col-md-6 col-xs-8">
            <div className="pt-lg-3" data-aos="flip-right" data-aos-delay={900}>
              <img className="w-100" src={imgM} alt="" />
            </div>
          </div>
          {/* End Hero Image */}
          {/* Hero Content */}
          <div className="col-xl-7 col-lg-7 col-md-6 col-sm-11">
            <div
              className="mt-8 mt-lg-0 pr-md-11 pr-lg-0 pr-xl-10"
              data-aos="fade-left"
              data-aos-delay={750}
            >
              <h1 className="font-size-13 mb-8 pr-sm-18 pr-md-8 pr-lg-0 line-height-84">
                <span style={{ color: '#E3A11F' }}>Make your</span> <span style={{ color: '#92291d' }}>Holidays Delicious.</span>
              </h1>
              <p className="font-size-7 mb-0 pr-sm-10 pr-md-10 pr-lg-0 pr-xl-18">
                Delicious at the Dunbar offers Holiday Specials including
                Turkey or Ham, Corn Bread Dressing, Collard Greens,
                Candied Yams, Mac & Cheese, Corn Bread Muffins, Peach Cobbler and more!<br/>
                Choose between Special #1 that feeds 15-20 people or host
                50 people with Special #2.
              </p>
              <div className="mt-10">
                <Link href="/#">
                  <a className="btn btn-dark-green btn-3 rounded-5 text-white" style={{ background: '#E3A11F', borderColor: '#F6A682' }}>
                    Place Your Order Today
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
