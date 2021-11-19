import React from 'react';

import imgM from "../../assets/image/homepage/png/section-image-1.png";

const CardSection = ({ className, ...rest }) => {
    return (
        <div className={className} {...rest}>
            <div className="container border-bottom pt-5 pb-13">
                <div className="row align-items-center">
                    {/* Hero Image */}
                    <div className="col-xl-6 col-lg-6 col-md-7 col-xs-8">
                        <div className="pt-lg-3" data-aos="flip-right" data-aos-delay={900}>
                            <img className="w-100" src={imgM} alt="" />
                        </div>
                    </div>
                    {/* End Hero Image */}
                    {/* Hero Content */}
                    <div className="col-lg-6 col-md-9 col-sm-11">
                        <div
                            className="mt-8 mt-lg-0 pr-md-11 pr-lg-0 pr-xl-10"
                            data-aos="fade-left"
                            data-aos-delay={750}
                        >
                            <h1 className="font-size-13 mb-8 pr-sm-18 pr-md-8 pr-lg-0 line-height-84">
                                The ShopLove SLASHcard.
                            </h1>
                            <p className="font-size-7 mb-0 pr-sm-10 pr-md-10 pr-lg-0 pr-xl-18">
                                A discount card with a purpose.<br/>
                                Our businesses participating in the ShopLove campaign have slashed their prices for a limited time during this holiday season and the ShopLove campaign.<br/>
                                Can’t decide on just one business to support, want to support more the one ShopLove business?<br/>
                                Purchase the ShopLove SLASH card today, and get
                                $250 gift card for $125 or  get a $100 card for $50
                                for a limited time.
                            </p>
                        </div>
                    </div>
                    {/* End Hero Content */}
                </div>
            </div>
        </div>
    );
}

export default CardSection;
