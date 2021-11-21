import React from 'react';
import purchase from '../../utils/purchase';
import imgMsc1 from "../../assets/image/slashcard1.png";
import imgMsc2 from "../../assets/image/slashcard1.png";

const CardSection = ({ className, ...rest }) => {
    return (
        <div className={className} {...rest}>
            <div className="container border-top pt-20 pb-12">
                <div className="row align-items-center">
                    {/* Hero Image */}
                    <div className="col-xl-6 col-lg-6 col-md-7 col-xs-8">
                        <div
                            className="mt-8 mt-lg-0"
                            data-aos="fade-left"
                            data-aos-delay={750}
                        >
                            <h1 className="font-40 mb-8 pr-sm-18 pr-md-8 pr-lg-0 line-height-84">
                                The ShopLove SLASHcard.
                            </h1>
                            <p className="font-size-7 text-black">
                                Can’t decide what to purchase from Hot & Cool Cafe?
                            </p>
                            <p className="font-size-7 text-black">
                                Purchase the ShopLove SLASH card today.
                            </p>
                            <p className="font-size-7 text-black">
                                Get a $250 gift card for $125 or get a $100 card for $50
                                for a limited time.

                            </p>
                        </div>
                    </div>
                    {/* End Hero Image */}
                    {/* Hero Content */}
                    <div className="col-lg-6 col-md-9 col-sm-11 font-weight-500">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="pl-xl-10 text-center" data-aos="flip-right" data-aos-delay={900}>
                                    <img className="w-100" width="200" src={imgMsc1} alt="image" />
                                    <button onClick={() => purchase('prod_KctTzvwDN7RVpc')} className="btn mb-4 btn-dark-green btn-4 pt-3 p-2 rounded-5" style={{ background: 'linear-gradient(180deg, #000000 32.81%, #39B54A 100%)', borderColor: '#39B54A' }}>
                                        $250 card for $125 <br />
                                        BUY NOW
                                    </button>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="pl-xl-10 text-center" data-aos="flip-right" data-aos-delay={900}>
                                    <img className="w-100" width="200" src={imgMsc2} alt="image" />
                                    <button onClick={() => purchase('prod_KctTzvwDN7RVpc')} className="btn mb-4 btn-dark-green btn-4 pt-3 p-2 rounded-5" style={{ background: 'linear-gradient(180deg, #000000 32.81%, #39B54A 100%)', borderColor: '#39B54A' }}>
                                        $250 card for $125 <br />
                                        BUY NOW
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* End Hero Content */}
                </div>
                <div className="mt-15 text-center">
                    <a href="#" target="_blank" className="btn btn-black btn-1 rounded-5">
                        Visit website
                    </a>
                </div>
            </div>
        </div>
    );
}

export default CardSection;
