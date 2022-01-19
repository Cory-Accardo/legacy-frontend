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
  const [prodQuantity, setProdQuantity] = useState(0);
  const [theme, setTheme] = useState(themeConfigDefault);
  const [videoModalVisible, setVideoModalVisible] = useState(false);
  const [visibleOffCanvas, setVisibleOffCanvas] = useState(false);
  const [totalCartAmount, setTotalCartAmount] = useState(0);

  

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };


  useEffect(() => {
    setWindowWidth(window.innerWidth);
    let storageProd = JSON.parse(localStorage.getItem('productsArr'));
    setProductCount(storageProd.length);
    setProductList(storageProd);
    let count = 0;
    storageProd.map((element) => {
      let quantityPrice = 0;
      quantityPrice += parseFloat(element.price.substring(1)) * element.quantity;
      count += quantityPrice;
    });
    setTotalCartAmount(count);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', window);
    };
  }, [cartUpdated]);

  useEffect(() => {
    if (prodQuantity > 0) {
      setProdQuantity(prodQuantity);
    }
  }, []);

  const setQuantityCount = (product, type) => {
    let productFoundIndex = productList.findIndex((o) => o.productId === product.productId);
    let productFound = productList.find((o) => o.productId === product.productId);
    let resultantArr = [...productList];
    let count = 0;
    let quantityPrice = 0;
    if (productFound) {
      console.log('test');
      if (type === 'increment') {
        count += parseFloat(productFound.price.substring(1)) * productFound.quantity;
        if (productFound.quantity >= 1) {
          resultantArr[productFoundIndex] = { ...productFound, quantity: productFound.quantity + 1 };
        }
      } else if (type === 'decrement') {
        quantityPrice -= parseFloat(productFound.price.substring(1)) * productFound.quantity;
        count -= quantityPrice;
        if (productFound.quantity > 1) {
          resultantArr[productFoundIndex] = { ...productFound, quantity: productFound.quantity - 1 };
        }
      }
      setTotalCartAmount(count);
      setProductList(resultantArr);
      localStorage.setItem('productsArr', JSON.stringify(resultantArr));
      alertCart();
    }

    else{
      
      let businessTitle = product.businessTitle && product.businessTitle.split("from");
      if (businessTitle) {
        businessTitle = businessTitle[businessTitle.length - 1].trim().slice(0, -1);
      }
      resultantArr.push({ productId: product.productId, quantity: 1, img: product.img, title: product.title, price: `$${product.price}`, businessTitle: businessTitle })
      setProductList(resultantArr);
      localStorage.setItem('productsArr', JSON.stringify(resultantArr));
      // alertCart();

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
    if (resultantArr.length > 0) {
      let resultantCount = parseFloat(productFound.price.substring(1)) * productFound.quantity;
      setTotalCartAmount(totalCartAmount - resultantCount);
    } else {
      setTotalCartAmount(0);
    }
    // alertCart();
  };

  const addProduct = (product) => {
    setQuantityCount(product, 'increment')
  }

  const getProductQuantity = (id) => {
    let productFound = productList.find((o) => o.productId === id);
    if (productFound) {
      setProdQuantity(productFound.quantity + 1);
    } else {
      setProdQuantity(1);
    }
    alertCart();
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
        prodQuantity,
        totalCartAmount,
        productList,
        setQuantityCount,
        removeProduct,
        addProduct,
        getProductQuantity,
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
