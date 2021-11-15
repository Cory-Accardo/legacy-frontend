import React from 'react';
import checkoutImg from "../../assets/image/rideon/png/checkout-icon-1.png";

const SectionDetail = ({ className, ...rest }) => {
    return (
        <div className={className} {...rest}>
            <div className="container">
                <div className="row align-items-center">
                    {/* Hero Content */}
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div
                            className="mt-8 mt-lg-0 mr-xl-13"
                            data-aos="fade-right"
                            data-aos-delay={500}
                        >
                            <div className="row justify-content-center">
                                <div className="col-xl-7 col-lg-8 col-md-9">
                                    <div
                                        className="text-center mb-lg-5"
                                        data-aos="zoom-in"
                                        data-aos-duration={500}
                                    >
                                        <h2 className="font-size-10 letter-spacing-n83 mb-6">
                                            Get your <span style={{ color: '#F3592D' }}>RideOn!</span>
                                        </h2>
                                        <p className="font-size-7 mb-0">
                                            Order Online. Pickup In-Store. Go Ride.It’s fast. It’s easy. And it’s free! Simply find the bike or gear of your dreams online, and we’ll have it ready for you when you arrive.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center mr-xl-15">
                                <div className="mr-3">
                                    <img src={checkoutImg} alt="" style={{ width: '14px', height: '14px' }} />
                                </div>
                                <div className="mt-0">
                                    <p className="font-size-6 mb-0 font-weight-bold">
                                        <a style={{ color: '#000' }} href="https://rideonbikeshop.com" target="_blank">RideOn! Bike Shop</a>
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