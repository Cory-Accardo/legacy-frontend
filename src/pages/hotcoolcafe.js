import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/hotcoolcafe/Hero";
import MusicArea from "../sections/hotcoolcafe/MusicArea";
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
                            <button className="btn btn btn-sunset btn-medium rounded-5 font-size-3" style={{ background: '#00793D', borderColor: '#00793D' }}>
                                $hop Love
                            </button>
                        </>
                    ),
                    footerStyle: "style5",
                }}
            >
                <Hero className="position-relative pt-25 pt-md-31 pt-lg-33 pb-10 pb-md-12 pb-lg-12 position-relative overflow-hidden" />
                <CardSection className="bg-transparent pt-4 pt-md-14 pt-lg-12 pb-4 pb-md-14 pb-lg-12" />
                <Checkout className="bg-black pt-4 pt-md-14 pt-lg-12 pb-4 pb-md-14 pb-lg-12" />
                <SectionDetail className="bg-default-5 pt-4 pt-md-14 pt-lg-12 pb-4 pb-md-14 pb-lg-12" />
                <ClientSection className="bg-transparent pt-10 pt-md-14 pt-lg-22 pb-10 pb-md-14 pb-lg-18" />
            </PageWrapper>
        </>
    );
};
export default HotCoolCafe;
