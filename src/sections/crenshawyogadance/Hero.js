import React from "react";
import Link from "next/link";
import arrow from "../../assets/image/arrow.png";
import imgM from "../../assets/image/crenshawyogadance/png/hero-image.png";

const Hero = ({ className, ...rest }) => {
  return (
    <div className={className} {...rest}>
      <div className="container position-static">
        <div className="row align-items-center justify-content-center position-static">
          {/* Hero Image */}
          <div className="col-md-6">
            <div className="" data-aos="flip-right" data-aos-delay={900}>
              <img className="w-100" src={imgM} alt="" />
            </div>
          </div>
          {/* End Hero Image */}
          {/* Hero Content */}
          <div className="col-md-6">
            <div
              className="mt-8"
              data-aos="fade-left"
              data-aos-delay={750}
            >
              <h1 className="font-size-13 mb-9">
                <span style={{ color: '#f6a682' }}>Crenshaw</span> <span style={{ color: '#c9b041' }}>Yoga</span><span style={{ color: '#f6a682' }}>&</span><span style={{ color: '#c9b041' }}>Dance</span> <span style={{ color: '#fdbf4a' }}>Annual Membership.</span>
              </h1>
              <p className="font-size-7 ">
                Crenshaw Yoga and Dance is a wellness studio built on community and love.
              </p>
              <p className="font-size-7 ">
                Since its inception, CYD has brought wellness to the community and we welcome you to join us on this journey to enlightenment!
              </p>
              <p className="font-size-7 ">
                Get 50% OFF the Crenshaw Yoga & Dance Annual Membership. Limited time only. $900 regular price.
              </p>
              <div className="mt-10">
                <div className="row align-items-center">
                  <div className="col-lg-5">
                    <Link href="/#">
                      <a className="btn btn-dark-green btn-1 rounded-5 text-white" target="_blank" style={{ background: '#F6A682', borderColor: '#F6A682' }}>
                        Buy Now
                      </a>
                    </Link>
                  </div>
                  <div className="col-lg-7">
                    <p className="font-size-5 mb-3 "> Looking for more savings?</p>
                    <p className="font-size-5 mb-0">Scroll down to discover the SLASHcard</p>
                    <p className="font-size-5 mb-0">50% discount card, for a limited time.</p>
                    <div className="arrow-down">
                      <img src={arrow} alt="arrow" />
                    </div>
                  </div>

                </div>
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
