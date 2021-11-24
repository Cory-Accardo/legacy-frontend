import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/rideon/Hero";
import SectionDetail from "../sections/rideon/SectionDetail";
import CardSection from "../sections/common/CardSection";
import ClientSection from "../sections/common/ClientSection";
import BrandLogo from '../assets/image/rideon/png/logo-main.png';

const RideOn = () => {
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
                <CardSection productId='prod_Kd48LcqaYhPqWi' productId2='prod_Kd4BGLa6W3VIOJ' className="bg-transparent pt-12 pb-12" />
                <SectionDetail className="bg-default-5 pt-12 pb-12" />
                <ClientSection className="bg-transparent pt-22 pb-18" />
            </PageWrapper>
        </>
    );
};
export default RideOn;
