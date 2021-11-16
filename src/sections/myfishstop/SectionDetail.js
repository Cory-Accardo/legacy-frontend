import React from 'react';

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
                                <p className="font-size-7 mb-0 text-black">
                                    Established in 2016.<br/>
                                    Born in the heart of Mississippi, my mom Annie Brown taught me everything I know about cooking. So I'm proud to share with you her southern recipes for seafood and soulful sides.
                                </p>
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