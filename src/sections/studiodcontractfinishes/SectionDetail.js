import React from 'react';

import world3 from "../../assets/image/myfishstop/png/world3.png";

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
                                    <span style={{ color: '#777676' }}>Roll with</span> <span style={{ color: '#cb5435' }}>Studio D</span>
                                </h2>
                                <p className="font-size-7 mb-0">
                                    Enjoy colour and design expertise that will help you create beautiful interiors
                                    and exteriors–and get insights on the best Benjamin Moore product for your specific project.
                                </p>
                                <div className="">
 <a style={{ color: '#000' }} href="https://www.studiodcontract.com/" className="d-flex align-items-center justify-content-center mt-3" target="_blank">
                              
                                    <img src={world3} className="mr-3" style={{ width: '14px', height: '14px' }} />
                                     <p className="font-size-6 mb-0 font-weight-bold">
                                        <a style={{ color: '#000' }} href="https://www.studiodcontract.com/" target="_blank">StudioD</a>
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