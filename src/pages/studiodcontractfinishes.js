import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/studiodcontractfinishes/Hero";
import SectionDetail from "../sections/studiodcontractfinishes/SectionDetail";
import ClientSection from "../sections/common/ClientSection";
import BrandLogo from '../assets/image/studiodcontractfinishes/png/logo-main.png';
import CardSection from "../sections/common/CardSection";

const StudiodContractFinishes = () => {
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
                <CardSection productId='prod_Ke6fLSqAYCL8LF' productId2='prod_Ke6fLSqAYCL8LF' className="bg-transparent pt-12 pb-12" />
                <SectionDetail className="bg-default-5 pt-13 pb-12" style={{ backgroundColor: '#F8F8F9' }} />
                <ClientSection className="bg-transparent pt-22 pb-18" />
            </PageWrapper>
        </>
    );
};
export default StudiodContractFinishes;
