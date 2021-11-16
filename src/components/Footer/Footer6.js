import React from "react";
import Link from "next/link";

import imgLB from "../../assets/image/logo-main-black.png";
import imgLW from "../../assets/image/logo-main-white.png";
import imgP1 from "../../assets/image/home-6/png/payment-1.png";
import imgP2 from "../../assets/image/home-6/png/payment-2.png";

const Footer = ({ className, ...rest }) => {
  return (
    <>
      <div
        className={`bg-default-6 pt-13 pt-lg-23 pb-7 position-relative ${className}`}
        {...rest}
      >
        <div className="container">
          <div className="row pb-lg-18">
            <div className="col-lg-4 col-md-5 col-md-3 col-xs-8">
              <div className="pr-xl-20 mb-11 mb-lg-0">
                <div className="brand-logo mb-8">
                  <Link href="/#">
                    <a>
                      <img
                        className="mx-auto mx-0 light-version-logo default-logo"
                        src={imgLB}
                        alt=""
                      />
                      <img
                        className="dark-version-logo mx-auto mx-0"
                        src={imgLW}
                        alt=""
                      />
                    </a>
                  </Link>
                </div>
                <p className="font-size-5 mb-0 heading-default-color pr-xs-15 pr-sm-22 pr-md-10 pr-lg-15 pr-xl-10 opacity-7">
                  Your app is your tool for better solution with your followers,
                  making it easier for them to keep up to date.
                </p>
                <div className="mt-12">
                  <Link href="/#">
                    <a className="btn btn-pumpkin btn-sm rounded-5 h-60 text-white font-size-5">
                      <i className="fa fa-lock mr-6" /> Login
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row">
                {/* Single Widgets */}
                <div className="col-xl-4 col-lg-3 col-md-4 col-xs-6">
                  <div className="mb-10 mb-lg-0">
                    <h4 className="font-size-5 opacity-4 mb-10">Company</h4>
                    <ul className="list-unstyled">
                      <li className="mb-7">
                        <Link href="/#">
                          <a className="font-size-5 text-default-color-2 gr-hover-text-blue-3">
                            About us
                          </a>
                        </Link>
                      </li>
                      <li className="mb-7">
                        <Link href="/#">
                          <a className="font-size-5 text-default-color-2 gr-hover-text-blue-3">
                            Features
                          </a>
                        </Link>
                      </li>
                      <li className="mb-7">
                        <Link href="/#">
                          <a className="font-size-5 text-default-color-2 gr-hover-text-blue-3">
                            Pricing
                          </a>
                        </Link>
                      </li>
                      <li className="mb-7">
                        <Link href="/#">
                          <a className="font-size-5 text-default-color-2 gr-hover-text-blue-3">
                            Privacy Policy
                          </a>
                        </Link>
                      </li>
                      <li className="mb-7">
                        <Link href="/#">
                          <a className="font-size-5 text-default-color-2 gr-hover-text-blue-3">
                            Terms &amp; Conditions
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* End Single Widgets */}
                {/* Single Widgets */}
                <div className="col-xl-4 col-lg-3 col-md-4 col-xs-6">
                  <div className="mb-10 mb-lg-0">
                    <h4 className="font-size-5 opacity-4 mb-10">Extra</h4>
                    <ul className="list-unstyled">
                      <li className="mb-7">
                        <Link href="/#">
                          <a className="font-size-5 text-default-color-2 gr-hover-text-blue-3">
                            Products
                          </a>
                        </Link>
                      </li>
                      <li className="mb-7">
                        <Link href="/#">
                          <a className="font-size-5 text-default-color-2 gr-hover-text-blue-3">
                            Downloads
                          </a>
                        </Link>
                      </li>
                      <li className="mb-7">
                        <Link href="/#">
                          <a className="font-size-5 text-default-color-2 gr-hover-text-blue-3">
                            Support
                          </a>
                        </Link>
                      </li>
                      <li className="mb-7">
                        <Link href="/#">
                          <a className="font-size-5 text-default-color-2 gr-hover-text-blue-3">
                            Refund Policy
                          </a>
                        </Link>
                      </li>
                      <li className="mb-7">
                        <Link href="/#">
                          <a className="font-size-5 text-default-color-2 gr-hover-text-blue-3">
                            Sitemap
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* End Single Widgets */}
                {/* Single Widgets */}
                <div className="col-xl-4 col-lg-5 col-md-4 col-xs-8">
                  <div className="mb-10 mb-lg-0">
                    <h4 className="font-size-5 opacity-4 mb-10">
                      Follow us on social media
                    </h4>
                    <ul className="footer-social-link d-flex align-items-center justify-content-between list-unstyled flex-wrap mb-10">
                      <li>
                        <Link href="/#">
                          <a className="text-default-color-2 gr-hover-text-blue-3">
                            Facebook
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/#">
                          <a className="text-default-color-2 gr-hover-text-blue-3">
                            .
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/#">
                          <a className="text-default-color-2 gr-hover-text-blue-3">
                            Twitter
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/#">
                          <a className="text-default-color-2 gr-hover-text-blue-3">
                            .
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/#">
                          <a className="text-default-color-2 gr-hover-text-blue-3">
                            Instagram
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="border-top border-default-color-4 pt-10">
                    <div className="mb-3">
                      <img className="w-100" src={imgP1} alt="" />
                    </div>
                    <div className="mb-3">
                      <img className="w-100" src={imgP2} alt="" />
                    </div>
                  </div>
                </div>
                {/* End Single Widgets */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
