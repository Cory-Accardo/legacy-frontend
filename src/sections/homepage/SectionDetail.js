import React from 'react';
import sectionImage from '../../assets/image/homepage/png/section-image.png';

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
                            <div className="d-flex justify-content-center">
                                <div
                                    className="text-center mb-lg-5"
                                    data-aos="zoom-in"
                                    data-aos-duration={500}
                                >
                                    <img src={sectionImage} alt="shop love image" />
                                    <h5 className="font-size-10 mt-5 mb-5">Community Powered Economic Empowerment.</h5>
                                    <p className="font-size-7 mb-0 text-black">
                                        Since 2014 MISLA- Made In South LA, has provided technology and financial literacy bootcamps on an
                                        ongoing basis to both youth and adults alike. Positioning our MISLA participants to be game changers in the
                                        tech industry is our overarching intention and we have been able to pair several of our past participants with
                                        roles within tech, evidence of the employable curriculum style in which we utilize.
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
