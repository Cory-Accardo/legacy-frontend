import React from 'react';
import checkoutImg from "../../assets/image/myfishstop/png/checkout-icon-1.png";

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
                                    <span style={{ color: '#F02D2C' }}>Mississipi Soul Fish</span> Approved.
                                </h2>
                                <p className="font-size-7 mb-0">
                                    Established in 2016.<br/><br/>
                                    Born in the heart of Mississippi, my mom Annie Brown taught me everything I know about cooking. So I'm proud to share with you her southern recipes for seafood and soulful sides.
                                </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-center mr-xl-15">
                                <div className="mr-3">
                                    <img src={checkoutImg} alt="" style={{ width: '14px', height: '14px' }} />
                                </div>
                                <div className="mt-0">
                                    <p className="font-size-6 mb-0 font-weight-bold">
                                        <a style={{ color: '#000' }} href="https://www.myfishstop.com/" target="_blank">MyFishStop</a>
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