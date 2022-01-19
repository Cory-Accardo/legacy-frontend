import purchase from '../../utils/purchase';
import React, { useState, useContext, useEffect} from "react";
import loadingGif from '../../assets/loading_animation.gif' //The gif that will be used.
import GlobalContext from '../../context/GlobalContext';
import styled from 'styled-components';
import * as gtag from '../../utils/gtag';

const StyledBuyNowButton = styled.button`
    position: relative;
`;

const StyledCount = styled.span`
    position: absolute;
    top: -10px;
    right: -10px;
    width: 30px;
    height: 30px;
    background: #787f8d;
    border-radius: 50%;
    line-height: 32px;
`;

const BuyButton = ({ children, style, className, businessTitle, title, img, price, productId, target, setProduct }) => {
    const { addProduct, getProductQuantity, productList} = useContext(GlobalContext);
    const [gif, setGif] = useState(null);

    const [prods, setProds] = useState(productList);
    useEffect(() => {
        let storageProd = JSON.parse(localStorage.getItem('productsArr'));
        if (storageProd) {
            setProds(storageProd);
        } else {
            setProds([]);
        }
    }, [productList]);

    return (
        <StyledBuyNowButton target={target} style= {style} className={className} onClick={() => {
            addProduct({productId, price, img, title, businessTitle})
            getProductQuantity(productId)
            gtag.event({ action: 'buy_now_card', category: gtag.EventCategories.click, label: window.location.pathname, value: window.location.pathname });
        }}>
        <StyledCount>
            {prods.length > 0 && prods.find((o) => o.productId === productId) ? prods.find((o) => o.productId === productId).quantity : 0}
        </StyledCount>
        <img style={{maxHeight: '50px'}} src={gif}/>
        {children}
        </StyledBuyNowButton>
    )

}

export default BuyButton
