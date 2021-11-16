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
                            <div className="d-flex justify-content-center">
                                <div
                                    className="text-center mb-lg-5"
                                    data-aos="zoom-in"
                                    data-aos-duration={500}
                                >
                                    <h2 className="font-size-10 letter-spacing-n83 mb-6">
                                        <span style={{ color: '#e3a11f' }}>More</span> <span style={{ color: '#92291d' }}>Delicious at the Dunbar</span> <span style={{ color: '#e3a11f' }}>for the Holidays.</span>
                                    </h2>
                                    <p className="font-size-7 mb-0 text-black">
                                        Delicious at The Dunbar, which opened at the end of 2018, is the second restaurant from father/daughter duo Vidal and Adriana Cortes, who also own the South LA soul food favorite, Delicious Southern Cuisine.
                                        The newest restaurant is situated on the ground floor of The Dunbar Hotel*, once considered to be the
                                        jazz and cultural hub of Los Angeles’ African American community.<br/>
                                        In an effort to revive the community’s rich history through the redevelopment of the hotel property,
                                        the Corteses were offered an opportunity to expand their southern cooking to a new neighborhood.
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