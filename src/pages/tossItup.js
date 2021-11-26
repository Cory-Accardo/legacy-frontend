import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/tossItup/Hero";
import Checkout from "../sections/tossItup/Checkout";
import SectionDetail from "../sections/tossItup/SectionDetail";
import ClientSection from "../sections/common/ClientSection";
import BrandLogo from '../assets/image/tossItUp/png/logo-main.png';
import CardSection from "../sections/common/CardSection";

const TossItUp = () => {
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
                <CardSection businessName='Can’t decide what to purchase from Toss it up?' productId='prod_KeCTriiehGM405' productId2='prod_KeCMsOvZ5C36Hk' className="bg-transparent pt-12 pb-12" />
                {/*<Checkout className=" pt-12 pb-12" style={{ backgroundColor: '#39B54A' }} />*/}               
                <SectionDetail className="bg-default-5 pt-13 pb-12" />
                <ClientSection className="bg-transparent pt-22 pb-18" />
            </PageWrapper>
        </>
    );
};
export default TossItUp;
