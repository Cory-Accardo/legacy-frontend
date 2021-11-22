import React from "react";

import checkoutIcon from "../../assets/image/tossItUp/png/checkout-icon.png";
import world from "../../assets/image/myfishstop/png/world.png";

const Hero = ({ className, ...rest }) => {
    return (
        <div className={className} {...rest}>
            <div className="container">
                <div className="row align-items-center">
                    {/* Hero Content */}
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div>
                            <div className="text-center">
                                <p className="font-size-7 mb-0 text-white d-flex justify-content-center align-items-center">
                                    <a href="https://www.myfishstop.com/" target="_blank" className="text-white"><img src={world} width="20" className="mr-2"/> <span>Visit MyFishStop.com to Explore oue Catering + Menu Items. You buy it, We Fry It!</span></a>
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
