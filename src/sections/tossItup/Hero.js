import React from "react";
import Link from "next/link";
import arrow from "../../assets/image/arrow.png";
import imgM from "../../assets/image/tossItUp/png/hero-image-1.png";
import purchase from '../../utils/purchase';
import BuyButton from "../common/BuyButton";
import * as gtag from '../../utils/gtag';

const Hero = ({ className, ...rest }) => {
  const handleClick = () => {
    gtag.event({ action: 'buy_without_saving', category: gtag.EventCategories.buynow, label: window.location.pathname, value: window.location.pathname });
  };
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
              className=""
              data-aos="fade-left"
              data-aos-delay={750}
            >
              <h1 className="font-size-13 mb-8">
                The <span style={{ color: '#8dc63f' }}>Toss It Up</span><br /> <span style={{ color: '#39B54A' }}>Coupon</span> <span style={{ color: '#d6df20' }}>Code</span>
              </h1>
              <p className="font-size-7">
                The Classics are our Toss It Up O.G. salads. Tried and True, here is where you find the BEST, and ONLY $5 salads in Los Angeles!
              </p>
              <p className="font-size-7">
                Our Premium Salads are PACKED with extras that make them the best of the best!
              </p>
              <p className="font-size-7">
                Receive a coupon code when you spend $40 or more!
              </p>
              <div className="mt-10">
                <div className="row align-items-center">
                  <div className="col-lg-5">
                    <BuyButton productId ='prod_KeCBzXX5Inb3Qs' onClick={handleClick} className="btn btn-dark-green btn-1 rounded-5" target="_blank" style={{ background: '#39B54A', borderColor: '#39B54A' }}>
                      Place Your Order
                    </BuyButton>
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
