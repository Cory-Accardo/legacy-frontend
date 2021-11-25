import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/aquaequity/Hero";
import SectionDetail from "../sections/aquaequity/SectionDetail";
import CardSection from "../sections/common/CardSection";
import ClientSection from "../sections/common/ClientSection";
import BrandLogo from '../assets/image/aquaequity/png/logo-main.png';

const MartgolsMagic = () => {
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
                <Hero className="pt-33 pb-12" />
                <CardSection businessName='Aqua Equity' productId='' productId2='' className="bg-transparent pt-12 pb-12" />
                <SectionDetail className="bg-default-5 pt-12 pb-12" />
                <ClientSection className="bg-transparent pt-22 pb-18" />
            </PageWrapper>
        </>
    );
};
export default MartgolsMagic;
