import React from "react";
import Link from "next/link";

import imgM from "../../assets/image/hotcool/png/hero-image-1.png";
import arrowimg from "../../assets/image/arrow.png";
import purchase from '../../utils/purchase'

const Hero = ({ className, ...rest }) => {
  return (
    <div className={className} {...rest}>
      <div className="container position-static">
        <div className="row align-items-center justify-content-center position-static">
          {/* Hero Image */}
          <div className="col-xl-6 col-lg-6 col-md-7 col-xs-8">
            <div className="pt-lg-3" data-aos="flip-right" data-aos-delay={900}>
              <img className="w-100 mb-5" src={imgM} alt="img" />
            </div>
          </div>
          {/* End Hero Image */}
          {/* Hero Content */}
          <div className="col-lg-6 col-md-9 col-sm-11">
            <div
              className="mt-8 mt-lg-0 pl-lg-10"
              data-aos="fade-left"
              data-aos-delay={750}
            >
              <h1 className="font-size-13 mb-8 pr-lg-0 line-height-84">
                Warm Winter Cozy Kit.
              </h1>
              <p className="font-size-7 text-black">
                Hot & Cool is offering it’s seasonal bundle feautring the H&C logo in a sleek black finish on our quality mug which you can use to warm up to Crenshaw Coffee Co.’s  MonkeyPaw Blend,a versatile and full bodied blend with a flavor profile of burnt caramel, 62% cocoa, and cranberry orange scone.
              </p>
              <p className="font-size-7 text-black">
                Enjoy this wonderful blend while wearing our 100% Cotton signature H&C hoodie. Purchase this seasonal bundle and enjoy an overall discount of $15 for a limited time only.
              </p>
              <p className="font-size-7 text-black">
                Get your $55 Warm Winter Kozy Kit today!
              </p>
              <div className="mt-10">
                <div class="row align-items-center">
                  <div className="col-lg-5">
                    <a href="/#" onClick={() => purchase('prod_KbV4Z107OYcnDv')} target="_blank" className="btn btn-dark-green btn-1 mb-8 rounded-5" style={{ background: '#000', borderColor: '#000' }}>
                      Order Now
                    </a>
                  </div>
                  <div className="col-lg-7">
                  <p className="font-size-5 text-black mb-0"> Looking for more savings?</p>
                  <p className="font-size-5 text-black mb-0">Scroll down to discover the SLASHcard</p>
                  <p className="font-size-5 text-black mb-0">50% discount card, for a limited time.</p>
                  <div className="arrow-down">
                    <img src={arrowimg} alt="arrow"/>
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
