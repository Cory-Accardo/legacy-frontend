import React from "react";
import Link from "next/link";

import logoB from "../../assets/image/logo-main-black.png";
import logoW from "../../assets/image/logo-main-white.png";
import logoMain from "../../assets/image/logo-main.png";

const Logo = ({ className = "", logo, ...rest }) => {
  return (
    <Link href="/#">
      <a className={`${className} d-flex justify-content-center align-items-center`} {...rest}>
        {/* <!-- light version logo (logo must be black)--> */}
          {
              logo ?
              <>
              <img src={logoMain} alt="" className="light-version-logo pr-9" style={{ borderRight: '2px solid #ddd' }} />
              <img src={logo} alt="" className="light-version-logo pl-7" />
              </> :
              <>
              <img src={logoB} alt="" className="light-version-logo" />
              <img src={logoW} alt="" className="dark-version-logo" />
              </>
          }
        {/* <!-- Dark version logo (logo must be White)--> */}
      </a>
    </Link>
  );
};

export default Logo;
