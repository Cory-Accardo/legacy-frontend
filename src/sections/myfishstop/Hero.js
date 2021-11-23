import React from "react";
import Link from "next/link";
import arrow from "../../assets/image/arrow.png";
import imgM from "../../assets/image/myfishstop/png/hero-image.png";

const Hero = ({ className, ...rest }) => {
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
              data-aos="fade-left"
              data-aos-delay={750}
            >
              <h1 className="font-size-13 mb-9">
                <span style={{
                  color: 'rgba(204, 179, 65, 1)',
                  background: 'linear-gradient(180deg, #CCB341 0%, #A6762E 41.67%, #C2A23C 68.23%, #F9E087 90.62%, #C4A63E 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>FREE</span> MySide<span style={{ color: '#F02D2C' }}>with a meal purchase.</span>
              </h1>
              <p className="font-size-7">
                Mississippi Soul Fish, Creole Fried Fish, Fish and chips done right!</p>
              <p className="font-size-7">
                Receive a signature MySide with the purchase of any MyFishStop Dinner or Family Special.</p>
              <p className="font-size-7">
                Lobster Mac, My Candied Yams, Collard Greens, My Fries and more!</p>
              <div className="mt-10">
                <div class="row align-items-center">
                  <div className="col-lg-5">
                    <Link href="https://www.myfishstop.com/">
                      <a className="btn btn-dark-green btn-3 rounded-5 text-white" target="_blank" style={{ background: '#000', borderColor: '#000' }}>
                        Place Your Order Today
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
