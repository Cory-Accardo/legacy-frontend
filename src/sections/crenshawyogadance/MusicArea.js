import React from "react";
import Link from "next/link";

import imgM1 from "../../assets/image/tossItUp/png/toss-it-up-image-1.png";
import imgM2 from "../../assets/image/tossItUp/png/toss-it-up-image-2.png";
import imgM3 from "../../assets/image/tossItUp/png/toss-it-up-image-3.png";
import imgM4 from "../../assets/image/tossItUp/png/toss-it-up-image-4.png";
import location from "../../assets/image/tossItUp/png/location.png";

const styledBadge = {
  maxWidth: 'max-content',
  backgroundColor: `#E9EBED`
}
const styledButton = {
  backgroundColor: '#39B54A',
  borderColor: '#39B54A'
}
const MusicArea = ({ className, ...rest }) => {
  return (
    <div className={className} {...rest}>
      <div className="container">
        {/* Section Title */}
        <div className="row justify-content-center">
          <div className="col-xl-9 col-lg-10 col-md-11">
            <div
              className="text-center mb-lg-5"
              data-aos="zoom-in"
              data-aos-duration={500}
            >
              <h2 className="font-size-10 letter-spacing-n83 mb-6">
                <span style={{ color: '#8dc63f' }}>Toss It Up</span> Salads & More
              </h2>
              <p className="font-size-7 mb-0">
                Toss It Up’s philosophy is to encourage the community as a whole to modify their eating choices. Toss It Up’s goal is to provide fresh organic produce, clean quality eating, and to offer a wonderful experience at a reasonable cost.
              </p>
            </div>
          </div>
        </div>
        {/* End Section Title */}
        <div className="pt-13 pt-lg-16">
          <div className="row justify-content-center px-xl-0">
            {/* single card */}
            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-7 col-xs-8">
              <div
                className="d-flex flex-column justify-content-between align-content-between align-items-center bg-white rounded-15 text-center px-8 py-9 gr-hover-3 mb-9 border border-default-color"
                style={{ minHeight: '600px' }}
                data-aos="zoom-in"
                data-aos-duration={300}
              >
                <div className="mb-14 d-inline-flex w-100">
                  <img className="w-100" src={imgM1} alt="" />
                </div>
                <div className="d-inline-flex flex-column justify-content-center align-items-center">
                  <span className="badge rounded-40 px-5 py-2 line-height-reset min-w-63 font-size-5 d-inline-block mb-7" style={styledBadge}>
                    $5.50
                  </span>
                  <h5 className="text-bunker font-size-6 line-height-reset mb-7 line-height-26">
                    Apple Cranberry <br /> Walnut Salad
                  </h5>
                  <Link href="/#">
                    <a className="btn btn-sunset border-none bg-gradient rounded-5 min-w-144 h-55" style={styledButton}>
                      Order now
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            {/* end single card */}
            {/* single card */}
            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-7 col-xs-8">
              <div
                className="d-flex flex-column justify-content-between align-content-between align-items-center bg-white rounded-15 text-center px-8 py-9 gr-hover-3 mb-9 border border-default-color"
                style={{ minHeight: '600px' }}
                data-aos="zoom-in"
                data-aos-duration={600}
              >
                <div className="mb-14 d-inline-flex w-100">
                  <img className="w-100" src={imgM2} alt="" />
                </div>
                <div className="d-inline-flex flex-column justify-content-center align-items-center">
                  <span className="badge rounded-40 px-5 py-2 line-height-reset min-w-63 font-size-5 d-inline-block mb-7" style={styledBadge}>
                    $7.50
                  </span>
                  <h5 className="text-bunker font-size-6 line-height-reset mb-7 line-height-26">
                    Cobb <br /> Salad
                  </h5>
                  <Link href="/#">
                    <a className="btn btn-sunset border-none bg-gradient rounded-5 min-w-144 h-55" style={styledButton}>
                      Order now
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            {/* end single card */}
            {/* single card */}
            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-7 col-xs-8">
              <div
                className="d-flex flex-column justify-content-between align-content-between align-items-center bg-white rounded-15 text-center px-8 py-9 gr-hover-3 mb-9 border border-default-color"
                style={{ minHeight: '600px' }}
                data-aos="zoom-in"
                data-aos-duration={900}
              >
                <div className="mb-14 d-inline-flex w-100">
                  <img className="w-100" src={imgM3} alt="" />
                </div>
                <div className="d-inline-flex flex-column justify-content-center align-items-center">
                  <span className="badge rounded-40 px-5 py-2 line-height-reset min-w-63 font-size-5 d-inline-block mb-7" style={styledBadge}>
                    $7.25
                  </span>
                  <h5 className="text-bunker font-size-6 line-height-reset mb-7 line-height-26">
                    Crunchy Wonton <br /> Salad
                  </h5>
                  <Link href="/#">
                    <a className="btn btn-sunset border-none bg-gradient rounded-5 min-w-144 h-55" style={styledButton}>
                      Order now
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            {/* end single card */}
            {/* single card */}
            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-7 col-xs-8">
              <div
                className="d-flex flex-column justify-content-between align-content-between align-items-center bg-white rounded-15 text-center px-8 py-9 gr-hover-3 mb-9 border border-default-color"
                style={{ minHeight: '600px' }}
                data-aos="zoom-in"
                data-aos-duration={1200}
              >
                <div className="mb-14 d-inline-flex w-100">
                  <img className="w-100" src={imgM4} alt="" />
                </div>
                <div className="d-inline-flex flex-column justify-content-center align-items-center">
                  <span className="badge rounded-40 px-5 py-2 line-height-reset min-w-63 font-size-5 d-inline-block mb-7" style={styledBadge}>
                    $5.00
                  </span>
                  <h5 className="text-bunker font-size-6 line-height-reset mb-7 line-height-26">
                    Cauliflower <br /> Wings
                  </h5>
                  <Link href="/#">
                    <a className="btn btn-sunset border-none bg-gradient rounded-5 min-w-144 h-55" style={styledButton}>
                      Order now
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            {/* end single card */}
            {/* single card */}
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="d-flex align-items-center justify-content-center py-6 mr-xl-15">
                <div className="mr-7">
                  <img src={location} alt="" />
                </div>
                <div className="mt-0">
                  <h4 className="font-size-8 mb-0">RideOn! Bike Shop</h4>
                  <p className="font-size-6 mb-0 line-height-26">
                    4319 Degnan Blvd, <br />
                    Los Angeles, CA 90008
                  </p>
                </div>
              </div>
            </div>
            {/* end single card */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicArea;
