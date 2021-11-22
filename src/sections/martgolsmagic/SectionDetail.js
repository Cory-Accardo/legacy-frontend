import React from 'react';
import checkoutImg from "../../assets/image/martgolsmagic/png/checkout-icon-1.png";

const SectionDetail = ({ className, ...rest }) => {
    return (
        <div className={className} {...rest}>
            <div className="container">
                <div className="row align-items-center">
                    {/* Hero Content */}
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div
                            className="mt-8 mt-lg-0"
                            data-aos="fade-right"
                            data-aos-delay={500}
                        >
                            <div
                                className="text-center mb-lg-5"
                                data-aos="zoom-in"
                                data-aos-duration={500}
                            >
                                <h2 className="font-size-10 letter-spacing-n83 mb-6">
                                    Experience <span style={{ color: '#FFD706' }}>Martgol’s Magic</span>
                                </h2>
                                <p className="font-size-7 mb-0">
                                    For years Martgol Beasley has been using Martgol's Magic at his own paint rejuvenation, and car detailing firm.
                                    Now his lifetime of experience is made available to you. Martgol’s Magic Offers a range of products; including our
                                    Tire Gloss, which is good for tires & not over glossy, Finish Enhancer, designed to enhance your cars finish and to maintain that just waxed look and the Paste Wax which seals and helps give more a deeper, glossier finish.
                                </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-center mr-xl-15">
                                <div className="mr-3">
                                    <img src={checkoutImg} alt="" style={{ width: '14px', height: '14px' }} />
                                </div>
                                <div className="mt-0">
                                    <p className="font-size-6 mb-0 font-weight-bold">
                                        <a style={{ color: '#000' }} href="https://www.facebook.com/Martgols-magic-car-care-258348244583910" target="_blank">Martgol’s Magic Inc.</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Hero Content */}
                </div>
            </div>
        </div>
    );
}

export default SectionDetail;