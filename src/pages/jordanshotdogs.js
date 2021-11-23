import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/jordanshotdogs/Hero";
import SectionDetail from "../sections/jordanshotdogs/SectionDetail";
import ClientSection from "../sections/common/ClientSection";
import BrandLogo from '../assets/image/jordanshotdogs/png/logo-main.png';
import CardSection from "../sections/common/CardSection";

const JordansHotDogs = () => {
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
                <CardSection productId='prod_KcvO7y1ahMW791' productId2='prod_KcvVBwVIPyZPAC' className="bg-transparent pt-4 pt-md-14 pt-lg-12 pb-4 pb-md-14 pb-lg-12" />
                <SectionDetail className="bg-default-5 pt-13 pb-12" />
                <ClientSection className="bg-transparent pt-22 pb-18" />
            </PageWrapper>
        </>
    );
};
export default JordansHotDogs;
