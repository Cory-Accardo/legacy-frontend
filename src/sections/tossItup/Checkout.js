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

                            <p className="font-size-6 mb-0 text-white">
                                Check out our New Online ordering platform! Ordering is easier than ever!
                            </p>

                        </div>
                    </div>
                    {/* End Hero Content */}
                </div>
            </div>
        </div>
    );
};

export default Hero;
