import React from 'react';
import checkoutImg from "../../assets/image/rideon/png/checkout-icon-1.png";
import businessImage from "../../assets/image/business-mission.png";
import shopLove from "../../assets/image/shop-love.png";
import messageImage from "../../assets/image/message.png";
import VSEDCLogo from "../../assets/image/VSEDC-logo-1.png";

const maxWidth = {
    maxWidth: '100%',
    marginBottom: '15px'
}

const ClientSection = ({ className, ...rest }) => {
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
                            <div className="row">
                                <div className="col-md-3 order-xl-1 order-lg-1 order-md-1 order-2">
                                    <img src={businessImage} alt="business image" style={maxWidth} />
                                </div>
                                <div className="col-md-6 order-xl-2 order-lg-2 order-md-2 order-1">
                                    <div className="d-flex text-center flex-column align-items-center justify-content-center">
                                        <img src={shopLove} alt="shop love" style={{...maxWidth, maxWidth: '100px'}} />
                                        <br/>
                                        <h6 className="font-size-7 mb-0 font-weight-bold text-black">
                                            community powered economic empowerment
                                        </h6>
                                    </div>
                                </div>
                                <div className="col-md-3 order-xl-3 order-lg-3 order-md-3 order-3">
                                    <img src={messageImage} alt="message image" style={maxWidth} />
                                </div>
                            </div>
                            <div className="d-flex flex-column align-items-center justify-content-center mt-5 text-center">
                                <div className="mt-0 mb-4">
                                    <p className="font-size-6 font-weight-500 mb-0 text-black">
                                        Powered by
                                    </p>
                                    <br/>
                                </div>
                                <div className="mb-3">
                                    <img src={VSEDCLogo} alt="vsedc image" width="150" />
                                </div>
                                <br/>
                                <div className="mt-0 mb-4">
                                    <p className="font-size-6 mb-0 font-weight-normal">
                                        Since its inception, VSEDC has delivered economic resources to communities that often live<br/>
                                        in the shadows. Because of systematic barriers that make it more difficult to secure business<br/> support, VSEDC plays an instrumental role in making entrepreneurial dreams a reality.
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

export default ClientSection;
