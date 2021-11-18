import React from "react";
import Link from "next/link";

import imgM from "../../assets/image/crenshawyogadance/png/hero-image.png";

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
                <span style={{ color: '#f6a682' }}>Crenshaw</span> <span style={{ color: '#c9b041' }}>Yoga</span><span style={{ color: '#f6a682' }}>&</span><span style={{ color: '#c9b041' }}>Dance</span> <span style={{ color: '#fdbf4a' }}>Annual Membership.</span>
              </h1>
              <p className="font-size-7 mb-0 pr-sm-10 pr-md-10 pr-lg-0 pr-xl-18">
                Crenshaw Yoga and Dance is a wellness studio built on community and love.<br/>
                Since its inception, CYD has brought wellness to the community and we welcome you to join us on this journey to enlightenment!<br/>
                Get 50% OFF the Crenshaw Yoga & Dance Annual Membership. Limited time only. $900 regular price.
              </p>
              <div className="mt-10">
                <Link href="/#">
                  <a className="btn btn-dark-green btn-3 rounded-5 text-white" target="_blank" style={{ background: '#F6A682', borderColor: '#F6A682' }}>
                    Buy Now
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
