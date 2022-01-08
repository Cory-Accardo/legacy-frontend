import React, { useState } from "react";
import Link from "next/link";
import BrandLogo from '../assets/image/VSEDC-logo-1.png';
import * as gtag from '../utils/gtag';


const GlobalContext = React.createContext();
const handleClick = () => {
  gtag.event({ action: '$shop_love', category: gtag.EventCategories.header, label: window.location.pathname, value: window.location.pathname });
};
const handleClick2 = () => {
  gtag.event({ action: 'Vsedc_logo', category: gtag.EventCategories.header, label: window.location.pathname, value: window.location.pathname });
};
export const themeConfigDefault = {
  bodyDark: false,
  headerDark: false,
  footerDark: false,
  headerStyle: "style1", //style2, style3
  headerFluid: true,
  headerButton: (
    <>
    <div className="d-flex align-items-center justify-content-end">
      <Link href="/#slashcard" >
        <a className="btn btn btn-sunset btn-medium rounded-5 font-size-3 mr-7" target="_blank" style={{ background: '#00793D', borderColor: '#00793D' }} onClick={handleClick}>
          $hop Love
        </a>
      </Link>
      <Link href="https://vsedc.org/">
        <a className="d-inline-block min-wauto" target="_blank" onClick={handleClick2}>
          <img src={BrandLogo} alt="logo" width="60"/>
        </a>
      </Link>
      </div>
    </>
  ),
  headerClassName: "site-header--menu-logo-middle",
  headerSocial: false,
  headerLogoClassName: "",
  footerStyle: "style5",
  footerClassName: "",
  logoImage: null
};

const GlobalProvider = ({ children }) => {
  const [theme, setTheme] = useState(themeConfigDefault);
  const [videoModalVisible, setVideoModalVisible] = useState(false);
  const [visibleOffCanvas, setVisibleOffCanvas] = useState(false);

  const changeTheme = (themeConfig = themeConfigDefault) => {
    setTheme({
      ...theme,
      ...themeConfig,
    });
  };

  const toggleVideoModal = () => {
    setVideoModalVisible(!videoModalVisible);
  };

  const toggleOffCanvas = () => {
    setVisibleOffCanvas(!visibleOffCanvas);
  };

  const closeOffCanvas = () => {
    setVisibleOffCanvas(false);
  };

  return (
    <GlobalContext.Provider
      value={{
        theme,
        changeTheme,
        videoModalVisible,
        toggleVideoModal,
        visibleOffCanvas,
        toggleOffCanvas,
        closeOffCanvas,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
export { GlobalProvider };
