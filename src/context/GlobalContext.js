import React, { useState, useEffect } from "react";
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
  
  const [windowWidth, setWindowWidth] = useState();
  const [productCount, setProductCount] = useState();
  const [productList, setProductList] = useState([]);
  const [cartUpdated, setCartUpdated] = useState(true);
  const [theme, setTheme] = useState(themeConfigDefault);
  const [videoModalVisible, setVideoModalVisible] = useState(false);
  const [visibleOffCanvas, setVisibleOffCanvas] = useState(false);

  

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };


  useEffect(() => {
    setWindowWidth(window.innerWidth);
    let storageProd = JSON.parse(localStorage.getItem('productsArr'));
    setProductCount(storageProd.length);
    setProductList(storageProd);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', window);
    };
  }, [cartUpdated]);

  const setQuantityCount = (product, type) => {
    let productFoundIndex = productList.findIndex((o) => o.productId === product.productId);
    let productFound = productList.find((o) => o.productId === product.productId);
    let resultantArr = [...productList];
    let businessTitle = product.businessTitle.split("from");
    businessTitle = businessTitle[businessTitle.length - 1].trim().slice(0, -1);

    if (productFound) {
      if (type === 'increment') {
        if (productFound.quantity >= 1) {
          resultantArr[productFoundIndex] = { productId: product.productId, quantity: productFound.quantity + 1, img: product.img, title: product.title, price: product.price, businessTitle: businessTitle };
        }
      } else if (type === 'decrement') {
        if (productFound.quantity > 1) {
          resultantArr[productFoundIndex] = { productId: product.productId, quantity: productFound.quantity - 1, img: product.img, title: product.title, price: product.price, businessTitle: businessTitle };
        }
      }
      setProductList(resultantArr);
      localStorage.setItem('productsArr', JSON.stringify(resultantArr));
      alertCart();
    }

    else{
      resultantArr.push({ productId: product.productId, quantity: 1, img: product.img, title: product.title, price: product.price, businessTitle: businessTitle })
      setProductList(resultantArr);
      localStorage.setItem('productsArr', JSON.stringify(resultantArr));
      alertCart();

    }
    

  };

  const removeProduct = (id) => {
    let productFoundIndex = productList.findIndex((o) => o.productId === id);
    let productFound = productList.find((o) => o.productId === id);
    let resultantArr = [...productList];
    if (productFound) {
      resultantArr.splice(productFoundIndex, 1);
    }
    setProductList(resultantArr);
    setProductCount(resultantArr.length);
    localStorage.setItem('productsArr', JSON.stringify(resultantArr));
    alertCart();
  };

  const addProduct = (product) => {
    setQuantityCount(product, 'increment')
  }



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
        windowWidth,
        productCount,
        productList,
        setQuantityCount,
        removeProduct,
        addProduct,
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
