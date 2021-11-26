import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/pipsonlabreas/Hero";
import SectionDetail from "../sections/pipsonlabreas/SectionDetail";
import ClientSection from "../sections/common/ClientSection";
import CardSection from "../sections/common/CardSection";
import BrandLogo from '../assets/image/pipsonlabreas/png/logo-main.png';

const PipsOnLaBreas = () => {
    return (
        <>
            <PageWrapper
                themeConfig={{
                    logoImage: BrandLogo,
                    headerClassName: "site-header--menu-right",
                    headerFluid: false,
                    headerButton: (
                        <>
                            <a href="/#slashcard" className="btn btn btn-sunset btn-medium rounded-5 font-size-3" style={{ background: '#00793D', borderColor: '#00793D' }}>
                                $hop Love
                            </a>
                        </>
                    ),
                    footerStyle: "style5",
                }}
            >
                <Hero className="pt-30 pb-12" />
                <CardSection businessName='Can’t decide what to purchase from Pips on labreas?' productId='prod_Ke8POZglqssJfv' productId2='prod_Ke8TGSUpvBrd70' className="bg-transparent pt-12 pb-12" />
                <SectionDetail className="bg-default-5 pt-13 pb-12" />
                <ClientSection className="bg-transparent pt-22 pb-18" />
            </PageWrapper>
        </>
    );
};
export default PipsOnLaBreas;
