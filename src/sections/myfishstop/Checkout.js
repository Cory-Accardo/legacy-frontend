import React from "react";

import checkoutIcon from "../../assets/image/tossItUp/png/checkout-icon.png";

const Hero = ({ className, ...rest }) => {
    return (
        <div className={className} {...rest}>
            <div className="container">
                <div className="row align-items-center">
                    {/* Hero Content */}
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div>
                            <div className="text-center">
                                <p className="font-size-7 mb-0 text-white font-weight-bold">
                                    Visit MyFishStop.com to Explore oue Catering + Menu Items. You buy it, We Fry It!
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* End Hero Content */}
                </div>
            </div>
        </div>
    );
};

export default Hero;
