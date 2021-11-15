import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/hotcoolcafe/Hero";
import MusicArea from "../sections/hotcoolcafe/MusicArea";
import Checkout from "../sections/hotcoolcafe/Checkout";
import SectionDetail from "../sections/hotcoolcafe/SectionDetail";
import ClientSection from "../sections/common/ClientSection";

const HotCoolCafe = () => {
    return (
        <>
            <PageWrapper
                themeConfig={{
                    headerClassName: "site-header--menu-right",
                    headerButton: (
                        <>
                            <button className="btn btn btn-sunset btn-medium rounded-5 font-size-3">
                                Support the Collective
                            </button>
                        </>
                    ),
                    footerStyle: "style6",
                }}
            >
                <Hero className="position-relative pt-25 pt-md-31 pt-lg-35 pb-14 pb-md-19 pb-lg-33 position-relative overflow-hidden" />
                <Checkout className="bg-black pt-4 pt-md-14 pt-lg-12 pb-4 pb-md-14 pb-lg-12" />
                <SectionDetail className="bg-default-5 pt-4 pt-md-14 pt-lg-12 pb-4 pb-md-14 pb-lg-12" />
                <ClientSection className="bg-transparent pt-4 pt-md-14 pt-lg-12 pb-4 pb-md-14 pb-lg-12" />
                {/*<MusicArea className="bg-default-5 pt-13 pt-md-18 pt-lg-24 pb-9 pb-md-13 pb-lg-28" />*/}
            </PageWrapper>
        </>
    );
};
export default HotCoolCafe;
