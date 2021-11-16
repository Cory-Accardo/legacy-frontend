import React from "react";
import Link from "next/link";

import imgM from "../../assets/image/myfishstop/png/hero-image.png";

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
                <span style={{ color: 'rgba(204, 179, 65, 1)',
                  background: 'linear-gradient(180deg, #CCB341 0%, #A6762E 41.67%, #C2A23C 68.23%, #F9E087 90.62%, #C4A63E 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'}}>FREE</span> MySide<span style={{ color: '#F02D2C' }}>with a meal purchase.</span>
              </h1>
              <p className="font-size-7 mb-0 pr-sm-10 pr-md-10 pr-lg-0 pr-xl-18">
                Mississippi Soul Fish, Creole Fried Fish, Fish and chips
                done right!<br/>
                Receive a signature MySide with the purchase of any MyFishStop Dinner or Family Special.
              </p>
              <div className="mt-10">
                <Link href="/#">
                  <a className="btn btn-dark-green btn-3 rounded-5 text-white" style={{ background: 'linear-gradient(180deg, #CCB341 0%, #A6762E 41.67%, #C2A23C 68.23%, #F9E087 90.62%, #C4A63E 100%)', borderColor: '#F6A682' }}>
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
