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
                                    <span style={{ color: '#8dc63f' }}>Toss It Up</span> Salads & More
                                </h2>
                                <p className="font-size-7 mb-0">
                                    Toss It Up’s philosophy is to encourage the community as a whole to modify their eating choices. Toss It Up’s goal is to provide fresh organic produce, clean quality eating, and to offer a wonderful experience at a reasonable cost.
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