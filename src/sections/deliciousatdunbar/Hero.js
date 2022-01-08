import React from "react";
import Link from "next/link";
import arrow from "../../assets/image/arrow.png";
import imgM from "../../assets/image/deliciousatdunbar/png/hero-image.png";
import BuyButton from "../common/BuyButton";

const Hero = ({ className, ...rest }) => {
  const handleClick = () => {
    gtag.event({ action: 'buy_without_saving', category: gtag.EventCategories.buynow, label: window.location.pathname, value: window.location.pathname });
  };
  return (
    <div className={className} {...rest}>
      <div className="container position-static">
        <div className="row align-items-center justify-content-center position-static">
          {/* Hero Image */}
          <div className="col-md-6">
            <div className="pt-lg-3" data-aos="flip-right" data-aos-delay={900}>
              <img className="w-100" src={imgM} alt="img" />
            </div>
          </div>
          {/* End Hero Image */}
          {/* Hero Content */}
          <div className="col-md-6">
            <div
              className=""
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
                <div className="row align-items-center">
                <div className="col-lg-12 mb-10">
           
                  <BuyButton productId='prod_KdpIVWIwjXqjO7'  onClick={handleClick} className="btn btn-dark-green btn-2 rounded-5 text-white mr-4" target="_blank" style={{ background: '#E3A11F', borderColor: '#F6A682' }}>
                  Buy Special #1
                  </BuyButton>
                  <BuyButton productId='prod_Kdq1lvQY84Auxb'  onClick={handleClick} className="btn btn-dark-green btn-2 rounded-5 text-white" target="_blank" style={{ background: '#E3A11F', borderColor: '#F6A682' }}>
                  Buy Special #2
                  </BuyButton>
               
                  </div>
                  <div className="col-lg-12">
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
