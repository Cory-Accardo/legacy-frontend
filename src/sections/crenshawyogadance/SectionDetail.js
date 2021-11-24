import React from 'react';
import checkoutImg from "../../assets/image/crenshawyogadance/png/checkout-icon-1.png";

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
                                    <span style={{ color: '#fdbf4a' }}>Passion.</span> <span style={{ color: '#f6a682' }}>Artistry.</span> <span style={{ color: '#c9b041' }}>Community.</span>
                                </h2>
                                <p className="font-size-7 mb-0">
                                    Crenshaw Yoga & Dance believes in healthy living, re-discovering joy, and living in the present. We provide yoga, dance and health education classes at an affordable price that will encourage our community to learn, maintain, and value a healthy lifestyle. We also offer our spaces for rent for filming, events, and more.
                                </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-center mr-xl-15">
                                <div className="mr-3">
                                    <img src={checkoutImg} alt="" style={{ width: '14px' }} />
                                </div>
                                <div className="mt-0">
                                    <p className="font-size-6 mb-0 font-weight-bold">
                                        <a style={{ color: '#000' }} href="https://crenshawyogaanddance.com/" target="_blank">Crenshaw Yoga & Dance</a>
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