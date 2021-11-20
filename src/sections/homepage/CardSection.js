import React from 'react';
import purchase from '../../utils/purchase';
import imgM from "../../assets/image/homepage/png/section-image-1.png";

const CardSection = ({ className, ...rest }) => {
    return (
        <div className={className} {...rest}>
            <div className="container border-bottom pt-12 pb-16">
                <div className="row align-items-center">
                    {/* Hero Image */}
                    <div className="col-xl-6 col-lg-6 col-md-7 col-xs-8">
                        <div className="pt-lg-3" data-aos="flip-right" data-aos-delay={900}>
                            <img className="w-100" src={imgM} alt="image" />
                        </div>
                    </div>
                    {/* End Hero Image */}
                    {/* Hero Content */}
                    <div className="col-lg-6 col-md-9 col-sm-11 font-weight-500">
                        <div
                            className="mt-8 mt-lg-0 pl-xl-10"
                            data-aos="fade-left"
                            data-aos-delay={750}
                        >
                            <h1 className="font-40 mb-8 pr-sm-18 pr-md-8 pr-lg-0 line-height-84">
                                The ShopLove SLASHcard.
                            </h1>
                            <p className="font-size-7 text-black">
                                A discount card with a purpose.
                            </p>
                        
                            <p className="font-size-7 text-black">
                                ShopLove businesses have slashed their prices for a limited time during this holiday season.

                            </p>
                            <p className="font-size-7 text-black">
                                Want to support more than one ShopLove business?
                            </p>
                            <p className="font-size-7 text-black">
                                Purchase the ShopLove SLASH card today.
                            </p>
                            <p className="font-size-7 text-black">
                                Get a $250 gift card for $125 or get a $100 card for $50 for a limited time.
                        </p>
                        <div className="mt-8">
                                <button onClick={() => purchase('prod_KctTzvwDN7RVpc')} className="btn btn-dark-green btn-4 pt-3 p-2 rounded-5" style={{ background: 'linear-gradient(180deg, #000000 32.81%, #39B54A 100%)', borderColor: '#39B54A' }}>
                                SHOPLOVE <br />NOW   
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* End Hero Content */}
                </div>
            </div>
        </div>
    );
}

export default CardSection;
