import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/misla/Hero";
import SectionDetail from "../sections/misla/SectionDetail";
import ClientSection from "../sections/common/ClientSection";
import BrandLogo from '../assets/image/misla/png/logo-main.png';
import * as gtag from '../utils/gtag';

const Misla = () => {
    
    const handleClick = () => {
        gtag.event({ action: '$shop_love', category: gtag.EventCategories.header, label: window.location.pathname, value: window.location.pathname });
    };

    return (
        <>
            <PageWrapper
                themeConfig={{
                    logoImage: BrandLogo,
                    headerClassName: "site-header--menu-right",
                    headerFluid: false,
                    headerButton: (
                        <>
                            <a href="/#slashcard" onClick={handleClick} className="btn btn btn-sunset btn-medium rounded-5 font-size-3" style={{ background: '#00793D', borderColor: '#00793D' }}>
                                $hop Love
                            </a>
                        </>
                    ),
                    footerStyle: "style5",
                }}
            >
                <Hero className="pt-30 pb-12" />
                <SectionDetail className="bg-default-5 pt-13 pb-12" style={{ backgroundColor: '#F8F8F9' }}  />
                <ClientSection className="bg-transparent pt-22 pb-18" />
            </PageWrapper>
        </>
    );
};
export default Misla;
