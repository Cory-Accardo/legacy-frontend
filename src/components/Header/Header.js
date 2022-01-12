import React, { useState, useContext, useEffect} from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import {useRouter} from 'next/router'

import GlobalContext from "../../context/GlobalContext";
import Offcanvas from "../Offcanvas";
import Menu from "./Menu";
import NestedMenu from "../NestedMenu";
import Logo from "../Logo";
import SocialButtons from '../../sections/common/SocialButtons'
import CartButton from "../../utils/cartButton";

const SiteHeader = styled.header``;

const ToggleButton = styled.button``;

const Header = () => {
  const gContext = useContext(GlobalContext);
  const [showScrolling, setShowScrolling] = useState(false);
  const [showReveal, setShowReveal] = useState(false);

  const [windowWidth, setWindowWidth] = useState()
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', window);
    }
  }, [])

  const router = useRouter();


  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < 0) {
      setShowScrolling(true);
    } else {
      setShowScrolling(false);
    }
    if (currPos.y < -300) {
      setShowReveal(true);
    } else {
      setShowReveal(false);
    }
  });
  console.log(router.pathname)

  return (
    <>
      <SiteHeader
        className={`site-header ${
          gContext.theme.headerClassName
        } ${windowWidth < 767 ? 'px-0' : 'px-7'} px-lg-10 dynamic-sticky-bg site-header--absolute site-header--sticky

        ${showScrolling ? "scrolling" : ""} ${
          showReveal ? "reveal-header " : ""
        }`}
      >
        <Container fluid={gContext.theme.headerFluid}>
          <nav className="navbar site-navbar offcanvas-active navbar-expand-lg  px-0">
            {/* <!-- Brand Logo--> */}
            <div className="brand-logo mt-3 mt-md-0 d-flex align-items-center justify-content-center">
              { (windowWidth > 767  || router.pathname == '/') ? <Logo logo={gContext.theme.logoImage}/> : <Logo/>}
              {windowWidth >= 991 ? null : <SocialButtons style={{margin: '0 0 0 20px' , display:'flex', gap: '5px'}} pathname={router.pathname}/>}
            </div>
            

            <div className="collapse navbar-collapse"> 
            {windowWidth < 991 ? null : <SocialButtons style={{margin:'0 auto', display:'flex', gap: '5px'}} pathname={router.pathname}/>}
              <div className="navbar-nav-wrapper">
                <Menu />
              </div>
            </div>
            {router.pathname === '/' && windowWidth > 767 ? null : router.pathname === '/' && windowWidth < 767 ? <CartButton /> : <CartButton />}
            {gContext.theme.headerButton && (
              <div className="header-btn ml-auto ml-lg-0 d-none d-xs-block">
                {gContext.theme.headerButton}
              </div>
            )}

            <ToggleButton
              className={`navbar-toggler btn-close-off-canvas ml-3 ${
                gContext.visibleOffCanvas ? "collapsed" : ""
              }`}
              type="button"
              data-toggle="collapse"
              data-target="#mobile-menu"
              aria-controls="mobile-menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={gContext.toggleOffCanvas}
              dark={gContext.theme.headerDark ? 1 : 0}
            >
              {/* <i className="icon icon-simple-remove icon-close"></i> */}
              <i className="icon icon-menu-34 icon-burger d-block"></i>
            </ToggleButton>
          </nav>
        </Container>
      </SiteHeader>
      <div className="d-block d-lg-none">
        <Offcanvas
          show={gContext.visibleOffCanvas}
          onHideOffcanvas={gContext.toggleOffCanvas}
          className="mobile-menu"
        >
          <NestedMenu />
        </Offcanvas>
      </div>
    </>
  );
};
export default Header;
