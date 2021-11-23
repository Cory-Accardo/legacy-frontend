import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/crenshawyogadance/Hero";
import Checkout from "../sections/crenshawyogadance/Checkout";
import SectionDetail from "../sections/crenshawyogadance/SectionDetail";
import ClientSection from "../sections/common/ClientSection";
import BrandLogo from '../assets/image/crenshawyogadance/png/brand-logo.png';
import CardSection from "../sections/common/CardSection";

const CrenshawYogaDance = () => {
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
                <CardSection productId='' productId2='' className="bg-transparent pt-12 pb-12" />
                <Checkout className="pt-12 pb-12" style={{ backgroundColor: '#fdbf4a' }} />
                <SectionDetail className="bg-default-5 pt-13 pb-12" style={{ backgroundColor: '#F8F8F9' }} />
                <ClientSection className="bg-transparent pt-22 pb-18" />
            </PageWrapper>
        </>
    );
};
export default CrenshawYogaDance;
