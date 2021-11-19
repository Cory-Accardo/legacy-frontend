import React from "react";
import Link from "next/link";

import logoB from "../../assets/image/logo-main-black.png";
import logoW from "../../assets/image/logo-main-white.png";
import logoMain from "../../assets/image/logo-main.png";
import vsedcLogo from "../../assets/image/VSEDC-logo-1.png";

const styledVsedcLogo = {
    maxWidth: '140px'
}

const Logo = ({ className = "", logo, ...rest }) => {
    return (
        <>
            {
                logo ?
                    <>
                        <Link href="https://vsedc.org/">
                            <a target="_blank" className={`${className} d-flex justify-content-center align-items-center`} {...rest}>
                                <img src={vsedcLogo} alt="vsedc logo" className="light-version-logo pr-9" style={{ ...styledVsedcLogo, borderRight: '2px solid #ddd' }} />
                            </a>
                        </Link>
                        <Link href="/#">
                            <a className={`${className} d-flex justify-content-center align-items-center`} {...rest}>
                                <img src={logoMain} alt="shop love" className="light-version-logo pr-9 pl-7" style={{ borderRight: '2px solid #ddd' }} />
                                <img src={logo} alt="logo image" className="light-version-logo pl-7" />
                            </a>
                        </Link>
                    </> :
                    <>
                        <img src={logoMain} alt="shop love" className="light-version-logo" />
                        {/*<img src={logoW} alt="" className="dark-version-logo" />*/}
                    </>
            }
        </>
    );
};

export default Logo;
