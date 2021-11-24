import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/hotcoolcafe/Hero";
import Checkout from "../sections/hotcoolcafe/Checkout";
import SectionDetail from "../sections/hotcoolcafe/SectionDetail";
import CardSection from "../sections/common/CardSection";
import ClientSection from "../sections/common/ClientSection";
import BrandLogo from '../assets/image/hotcool/png/logo-main.png';

const HotCoolCafe = () => {
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
                <CardSection businessName='Hot & Cool Cafe' productId='prod_KbV4Z107OYcnDv' productId2='prod_KcuPPyG5tMjg6O' className="bg-transparent pt-12 pb-12" />
                <SectionDetail className="bg-default-5 pt-12 pb-12" />
                <ClientSection className="bg-transparent pt-22 pb-18" />
            </PageWrapper>
        </>
    );
};
export default HotCoolCafe;
