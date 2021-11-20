import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/studiodcontractfinishes/Hero";
import Checkout from "../sections/studiodcontractfinishes/Checkout";
import SectionDetail from "../sections/studiodcontractfinishes/SectionDetail";
import ClientSection from "../sections/common/ClientSection";
import BrandLogo from '../assets/image/studiodcontractfinishes/png/logo-main.png';

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
                            <button className="btn btn btn-sunset btn-medium rounded-5 font-size-3" style={{ background: '#00793D', borderColor: '#00793D' }}>
                                $hop Love
                            </button>
                        </>
                    ),
                    footerStyle: "style5",
                }}
            >
                <Hero className="position-relative pt-25 pt-md-31 pt-lg-35 pb-14 pb-md-19 pb-lg-33 position-relative overflow-hidden" />
                {/*<Checkout className="pt-4 pt-md-14 pt-lg-12 pb-4 pb-md-14 pb-lg-12" style={{ backgroundColor: '#fdbf4a' }} />*/}
                <SectionDetail className="bg-default-5 pt-4 pt-md-14 pt-lg-12 pb-4 pb-md-14 pb-lg-12" />
                <ClientSection className="bg-transparent pt-4 pt-md-14 pt-lg-12 pb-4 pb-md-14 pb-lg-12" />
            </PageWrapper>
        </>
    );
};
export default StudiodContractFinishes;