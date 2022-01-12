import purchase from '../../utils/purchase';
import React, { useEffect, useState } from 'react';
import loadingGif from '../../assets/loading_animation.gif' //The gif that will be used.


const BuyButton = ({ children, style, className, businessTitle, title, img, price, productId, target, setProduct }) => {

    const [gif, setGif] = useState(null);

    // setGif(loadingGif)
    // await purchase(productId)
    // setGif(null);

    return (
        <button target={target} style= {style} className={className} onClick={() => {
            setProduct({productId, price, img, title, businessTitle})
        }}>
        <img style={{maxHeight: '50px'}} src={gif}/>
        {children}
        </button>
    )

}

export default BuyButton
