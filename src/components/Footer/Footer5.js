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
  const handleClick = () => {
    gtag.event({ action: 'donation_qr', category: gtag.EventCategories.footer, label: window.location.pathname, value: window.location.pathname });
  };
  return (
    <>
      <div
        className={`bg-black pt-18 pb-9 ${className}`}
        {...rest}
      >
        <div className="container">
          <div className="pb-5 pb-lg-13">
            <div className="row justify-content-lg-between">
              {/* Brand Logo */}
              <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6 col-xs-7">
                <div className="brand-logo mb-10 mb-lg-0 dark-mode-texts pr-lg-10 pr-xl-0 pt-lg-3">
                  <p className="font-weight-light text-white">
                    <b className="font-weight-bold">Sign-Up</b> for the next<br/>
                    <b className="font-weight-bold">ShopLove</b> Cohort:
                  </p>
                  <p className="font-size-5 mb-0 mt-8 mt-lg-10">
                  <Link href="/">
                    <a>
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
                        <a href="https://misla.org/" target="_blank"><img src={MislaLogo} alt="brand-logo" /></a>
                      </p>
                      <p className="font-size-5 font-weight-light text-white mt-8 mt-lg-10">
                      Made In South LA is a non-profit that trains South LA youth + community in Software Engineering & Digital Marketing. MISLA graduates were hired by MARTY Creative Agency to create and implement the Shop Love website & Marketing Campaign.
                      </p>
                    </div>
                  </div>
                  {/* End Single Widgets */}
                  {/* Single Widgets */}
                  <div className="col-sm-6 col-xs-6">
                    <div className="brand-logo mb-10 mb-lg-0 dark-mode-texts pr-lg-10 pr-xl-0 pt-lg-3">
                      <p className="font-size-5 text-white mt-8 mt-lg-10">
                      Every dollar donated goes toward Training Bootcamps free to the community.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <a href="https://venmo.com/u/Misla" target="_blank" onClick={handleClick}><img src={QRLogo1} alt="QR Code 1" width="100" /></a>
                        <a href="https://cash.app/$M1SLA" target="_blank" onClick={handleClick}><img src={QRLogo2} alt="QR Code 2" width="100"  /></a>
                        <a href="https://www.paypal.com/donate/?business=ZMSR4TPCGSFMC&item_name=Training+South+LA+Youth+in+Coding%2C+Branding%2C+Digital+Marketing.&currency_code=USD" onClick={handleClick} target="_blank"><img src={QRLogo3} alt="QR Code 3" width="100"  /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row border-top border-default-color dark-mode-texts d-flex pt-11 align-items-center">
            <div className="col-md-12">
              <div className="text-center">
                <p className="font-size-5 font-weight-normal text-white">
                This Website was created by: A Youth Brand Creative Agency
                </p>
                <a href="https://marty.world/" target="_blank"><img src={MartyLogo} alt="marty logo" width="160" /></a>
                             <p className="font-size-5 mt-3 font-weight-normal text-white">
     @ 2021 Copyright.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
