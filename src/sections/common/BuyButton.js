import purchase from '../../utils/purchase';
import React, { useState, useContext, useEffect} from "react";
import loadingGif from '../../assets/loading_animation.gif' //The gif that will be used.
import GlobalContext from '../../context/GlobalContext';



const BuyButton = ({ children, style, className, businessTitle, title, img, price, productId, target, setProduct }) => {
    const {alertCart} = useContext(GlobalContext);
    const [gif, setGif] = useState(null);

    // setGif(loadingGif)
    // await purchase(productId)
    // setGif(null);

    return (
        <button target={target} style= {style} className={className} onClick={() => {
            setProduct({productId, price, img, title, businessTitle})
            alertCart();
        }}>
        <img style={{maxHeight: '50px'}} src={gif}/>
        {children}
        </button>
    )

}

export default BuyButton
