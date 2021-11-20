import React from 'react';
import sectionImage from '../../assets/image/homepage/png/section-image.png';

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
                                    <img src={sectionImage} alt="shop love image" width="333" className="mb-6"/>
                                    <h5 className="font-size-10 mt-5 mb-5">Community Powered Economic Empowerment.</h5>
                                
                                    <p className="font-size-7 text-black">
                                    Brought to you by Vermont Slauson Economic Development Corporation (VSEDC), ShopLove sparks an economic empowerment movement by supporting and championing local small businesses that offer a diverse range of products and services to the South LA community.
</p>
<p className="font-size-7 text-black">
Small businesses are the heart of the community. By providing the services that residents need to thrive in an area that has historically lacked resources, neighborhoods have options when it comes to food, entertainment, retail, and more.
 </p>
 <p className="font-size-7 text-black">
 This holiday season and beyond, support local small businesses and show them the love they deserve.
 </p>
<p className="font-size-7 font-weight-bold text-black">
Put your money where your heart is and ShopLove. 

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
