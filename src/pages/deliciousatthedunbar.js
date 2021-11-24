import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/deliciousatdunbar/Hero";
import SectionDetail from "../sections/deliciousatdunbar/SectionDetail";
import ClientSection from "../sections/common/ClientSection";
import CardSection from "../sections/common/CardSection";
import BrandLogo from '../assets/image/deliciousatdunbar/png/logo-main.png';

const DeliciousAtTheDunbar = () => {
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
                <Hero className="pt-30 pb-10" />
                <CardSection productId='prod_KdpuyyYQLymj3f' productId2='prod_KdpSod9zaDpq35' className="bg-transparent pt-12 pb-12" />
                <SectionDetail className="bg-default-5 pt-13 pb-12" />
                <ClientSection className="bg-transparent pt-22 pb-18" />
            </PageWrapper>
        </>
    );
};
export default DeliciousAtTheDunbar;
