import React from 'react';
import checkoutImg from "../../assets/image/freewayeasy/png/checkout-icon-1.png";
 import world4 from "../../assets/image/myfishstop/png/world4.png";

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
                                    <span style={{ color: '#E3A220' }}>Jordan</span> <span style={{ color: '#92291D' }}>Hot Dogs</span>
                                </h2>
                                <p className="font-size-7 mb-0">
                                    We’re dedicated to remaining the low-cost alternative for decades to come.
                                    Our customers trust us to offer the best fast food in Los Angeles. We have something for everyone,
                                    both meat lovers and vegans.  The food is delicious and made fresh to order every single time.
                                    Nowhere else will you find a restaurant serving authentic family recipes
                                    that are also affordable and accessible in our own community.
                                </p>
                                     <div className="">
 <a style={{ color: '#000' }} href="https://www.instagram.com/jordanhotdogs/" className="d-flex align-items-center justify-content-center mt-3" target="_blank">
                              
                                    <img src={world4} className="mr-3" style={{ width: '14px', height: '14px' }} />
                                     <p className="font-size-6 mb-0 font-weight-bold">
                                        Jordan’s Hot Dogs
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