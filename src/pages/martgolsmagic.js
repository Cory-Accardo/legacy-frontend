import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/martgolsmagic/Hero";
import SectionDetail from "../sections/martgolsmagic/SectionDetail";
import ClientSection from "../sections/common/ClientSection";

const MartgolsMagic = () => {
    return (
        <>
            <PageWrapper
                themeConfig={{
                    headerClassName: "site-header--menu-right",
                    headerFluid: false,
                    headerButton: (
                        <>
                            <button className="btn btn btn-sunset btn-medium rounded-5 font-size-3">
                                Support the Collective
                            </button>
                        </>
                    ),
                    footerStyle: "style5",
                }}
            >
                <Hero className="position-relative pt-22 pt-lg-31 pb-13 pb-lg-25" />
                <SectionDetail className="bg-default-5 pt-4 pt-md-14 pt-lg-12 pb-4 pb-md-14 pb-lg-12" />
                <ClientSection className="bg-transparent pt-4 pt-md-14 pt-lg-12 pb-4 pb-md-14 pb-lg-12" />
            </PageWrapper>
        </>
    );
};
export default MartgolsMagic;
