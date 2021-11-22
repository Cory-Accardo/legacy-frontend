import React from 'react';
import checkoutImg from "../../assets/image/freewayeasy/png/checkout-icon-1.png";
 import world3 from "../../assets/image/myfishstop/png/world6.png";

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
                                    Freeway Easy <span style={{ color: '#00afeb' }}>Does It.</span>
                                </h2>
                                <p className="font-size-7 mb-0">
                                    Freeway Easy Traffic and Driving School can help you in a variety of ways, the time is now!
                                    BEHIND-THE-WHEEL - Training for students who have a driving permit or license.
                                    TRAFFIC SCHOOL- Our traffic school allows you to keep the points off of your record and your insurance rates low.
                                    DRIVER'S EDUCATION - The driver education classes are great for teenagers who need a permit from the DMV.
                                </p>
                                  <div className="">
 <a style={{ color: '#000' }} href="https://freewayeasy.com/" className="d-flex align-items-center justify-content-center mt-3" target="_blank">
                              
                                    <img src={world3} className="mr-3" style={{ width: '14px', height: '14px' }} />
                                     <p className="font-size-6 mb-0 font-weight-bold">
                                        Freeway Easy 
                                    </p>
                            
                                </a>
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