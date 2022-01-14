import React, { useState } from "react";
import Link from "next/link";
import BrandLogo from '../assets/image/VSEDC-logo-1.png';
import CartButton from "../utils/cartButton";


const GlobalContext = React.createContext();



export const themeConfigDefault = {
  bodyDark: false,
  headerDark: false,
  footerDark: false,
  headerStyle: "style1", //style2, style3
  headerFluid: true,
  headerButton: (
    <>
    <div className="d-flex align-items-center justify-content-end">
      <CartButton />

      <Link href="/#slashcard" >
        <a className="btn btn btn-sunset btn-medium rounded-5 font-size-3 mr-7" target="_blank" style={{ background: '#00793D', borderColor: '#00793D' }}>
          $hop Love
        </a>
      </Link>
      <Link href="https://vsedc.org/">
        <a className="d-inline-block min-wauto" target="_blank">
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
  logoImage: null,
  cartUpdated : true,
  setCartUpdated : undefined,
};

const GlobalProvider = ({ children }) => {
  const [cartUpdated, setCartUpdated] = useState(true);
  const [theme, setTheme] = useState(themeConfigDefault);
  const [videoModalVisible, setVideoModalVisible] = useState(false);
  const [visibleOffCanvas, setVisibleOffCanvas] = useState(false);

  const changeTheme = (themeConfig = themeConfigDefault) => {
    setTheme({
      ...theme,
      ...themeConfig,
    });
  };

  const alertCart = () => {
    setCartUpdated(!cartUpdated);
  }

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
        cartUpdated,
        alertCart,
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
