import React from "react";
import Link from "next/link";

// import imgLB from "../../assets/image/logo-main-black.png";
// import imgLW from "../../assets/image/logo-main-white.png";
import BrandLogo from "../../assets/image/footer-5/png/brand-logo.png";
import MislaLogo from "../../assets/image/footer-5/png/misla-logo.png";
import QRLogo1 from "../../assets/image/footer-5/png/QR-image-1.png";
import QRLogo2 from "../../assets/image/footer-5/png/QR-image-2.png";
import QRLogo3 from "../../assets/image/footer-5/png/QR-image-3.png";
import MartyLogo from "../../assets/image/footer-5/png/marty-logo.png";

const Footer = ({ className, ...rest }) => {
  return (
    <>
      <div
        className={`bg-black pt-15 pt-lg-26 pb-9 ${className}`}
        {...rest}
      >
        <div className="container">
          <div className="pb-5 pb-lg-22">
            <div className="row justify-content-lg-between">
              {/* Brand Logo */}
              <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6 col-xs-7">
                <div className="brand-logo mb-10 mb-lg-0 dark-mode-texts pr-lg-10 pr-xl-0 pt-lg-3">
                  <h5 className="font-weight-light">
                    <b className="font-weight-bold">Sign-Up</b> for the next<br/>
                    <b className="font-weight-bold">ShopLove</b> Cohort:
                  </h5>
                  <p className="font-size-5 mb-0 mt-8 mt-lg-10">
                  <Link href="https://vsedc.org/start-here/">
                    <a target="_blank">
                    <img src={BrandLogo} alt="brand-logo" width="140" />
                    </a>
                  </Link>
                
                  </p>
                </div>
              </div>
              {/* End Brand Logo */}
              <div className="col-xl-8 col-md-7 offset-lg-1">
                <div className="row">
                  {/* Single Widgets */}
                  <div className="col-sm-6 col-xs-6">
                    <div className="brand-logo mb-10 mb-lg-0 dark-mode-texts pr-lg-10 pr-xl-0 pt-lg-3">
                      <p className="mb-0">
                        <img src={MislaLogo} alt="brand-logo" />
                      </p>
                      <p className="font-size-5 font-weight-light text-white mt-8 mt-lg-10">
                        MISLA, Made In South LA, provides technology, creative and financial literacy bootcamps on an ongoing basis to South LA youth and adults.
                      </p>
                    </div>
                  </div>
                  {/* End Single Widgets */}
                  {/* Single Widgets */}
                  <div className="col-sm-6 col-xs-6">
                    <div className="brand-logo mb-10 mb-lg-0 dark-mode-texts pr-lg-10 pr-xl-0 pt-lg-3">
                      <h5 className="font-size-5 mt-8 mt-lg-10">
                        Support MISLA’s Mission:
                      </h5>
                      <div className="d-flex justify-content-between align-items-center">
                        <a href="https://venmo.com/u/Misla" target="_blank"><img src={QRLogo1} alt="QR Code 1" width="100" /></a>
                        <a href="https://cash.app/$M1SLA" target="_blank"><img src={QRLogo2} alt="QR Code 2" width="100"  /></a>
                        <a href="https://www.paypal.com/donate/?business=ZMSR4TPCGSFMC&item_name=Training+South+LA+Youth+in+Coding%2C+Branding%2C+Digital+Marketing.&currency_code=USD" target="_blank"><img src={QRLogo3} alt="QR Code 3" width="100"  /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row border-top border-default-color dark-mode-texts d-flex pt-11 align-items-center">
            <div className="col-md-6">
              <div className="d-flex align-items-center">
                <h5 className="font-size-5 mr-5">
                  Designed & Developed by:
                </h5>
                <a href="https://marty.world/" target="_blank"><img src={MartyLogo} alt="marty logo" /></a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-end align-items-end">
                <h5 className="font-size-5">
                  @ 2021 Copyright.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
