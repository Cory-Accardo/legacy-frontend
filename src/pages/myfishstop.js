import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/myfishstop/Hero";
import Checkout from "../sections/myfishstop/Checkout";
import SectionDetail from "../sections/myfishstop/SectionDetail";
import ClientSection from "../sections/common/ClientSection";
import BrandLogo from '../assets/image/myfishstop/png/logo-main.png';
import CardSection from "../sections/common/CardSection";

const MyFishStop = () => {
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
                <Hero className="pt-30 pb-12" />
                <CardSection businessName='My fish stop' productId='prod_Kd3dcyFAk1diA9' productId2='prod_Kd3kGLf5QZSeyb' className="bg-transparent pt-12 pb-12" />
                {/* <Checkout className="pt-12 pb-12" style={{ backgroundColor: '#F12E2D' }} /> */}
                <SectionDetail className="bg-default-5 pt-13 pb-12"  style={{ backgroundColor: '#F8F8F9' }} />
                <ClientSection className="bg-transparent pt-22 pb-18" />
            </PageWrapper>
        </>
    );
};
export default MyFishStop;
