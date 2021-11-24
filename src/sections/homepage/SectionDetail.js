import React from 'react';
import sectionImage from '../../assets/image/homepage/png/section-image.png';
import VSEDClogo2 from '../../assets/image/homepage/png/VSEDClogo2.png';
import styled from "styled-components";

export const StyledLogoSection = styled(`div`)`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    @media(max-width: 767px) {
        flex-direction: column;
        a:first-child {
            img {
                border-right: 0 !important;
                padding-right: 0 !important;
            }
        }
        a:last-child {
            img {
                padding-left: 0 !important;
            }
        }
    }
`;

const SectionDetail = ({className, ...rest}) => {
    return (
        <section id="about" className={className} {...rest}>
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
                                    <StyledLogoSection>
                                        <a href="https://vsedc.org/" target="_blank"><img src={VSEDClogo2}
                                                                                          alt="shop love image"
                                                                                          height="150"
                                                                                          className="mb-6 pr-10 border-right" style={{ borderRight: '1px solid #f5f5f5', paddingRight: '10px !important' }}/></a>

                                        <a href="/"><img src={sectionImage} alt="shop love image" height="150"
                                                         className="mb-6 pl-10" style={{ paddingLeft: '10px !important' }}/></a>
                                    </StyledLogoSection>
                                    <h5 className="font-size-10 mt-5 mb-5">Community Powered Economic Empowerment.</h5>

                                    <p className="font-size-7">
                                        Brought to you by Vermont Slauson Economic Development Corporation (VSEDC),
                                        ShopLove sparks an economic empowerment movement by supporting and championing
                                        local small businesses that offer a diverse range of products and services to
                                        the South LA community.
                                    </p>
                                    <p className="font-size-7">
                                        Small businesses are the heart of the community. By providing the services that
                                        residents need to thrive in an area that has historically lacked resources,
                                        neighborhoods have options when it comes to food, entertainment, retail, and
                                        more.
                                    </p>
                                    <p className="font-size-7">
                                        This holiday season and beyond, support local small businesses and show them the
                                        love they deserve.
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
        </section>
    );
}

export default SectionDetail;
