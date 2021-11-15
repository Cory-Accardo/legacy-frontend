import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/crenshawyogadance/Hero";
import Checkout from "../sections/crenshawyogadance/Checkout";
import SectionDetail from "../sections/crenshawyogadance/SectionDetail";
import ClientSection from "../sections/common/ClientSection";

const CrenshawYogaDance = () => {
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
                <Checkout className="pt-4 pt-md-14 pt-lg-12 pb-4 pb-md-14 pb-lg-12" style={{ backgroundColor: '#fdbf4a' }} />
                <SectionDetail className="bg-default-5 pt-4 pt-md-14 pt-lg-12 pb-4 pb-md-14 pb-lg-12" />
                <ClientSection className="bg-transparent pt-4 pt-md-14 pt-lg-12 pb-4 pb-md-14 pb-lg-12" />
            </PageWrapper>
        </>
    );
};
export default CrenshawYogaDance;
