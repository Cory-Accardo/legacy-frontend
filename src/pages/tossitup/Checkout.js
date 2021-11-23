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
                         <p className="font-size-7 mb-0 text-white d-flex justify-content-center align-items-center">
                                    <a href="https://www.facebook.com/Tossitupinc" target="_blank" className="text-white"><img src={world} width="20" className="mr-2"/> <span>Check out our New Online ordering platform! Ordering is easier than ever!</span></a>
                                </p>
                    </div>
                    {/* End Hero Content */}
                </div>
            </div>
        </div>
    );
};

export default Hero;
