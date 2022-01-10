import purchase from '../../utils/purchase';
import { useState } from 'react';
import loadingGif from '../../assets/loading_animation.gif' //The gif that will be used.


const BuyButton = ({ children, style, className, productId, target, handleClick }) => {

    const [gif, setGif] = useState(null);


    return (
        <button target={target} style= {style} className={className} onClick={async () => {
        setGif(loadingGif)
        await purchase(productId)
        setGif(null);
        handleClick();
        }}>
        <img style={{maxHeight: '50px'}} src={gif}/>
        {children}
        </button>
    )

}

export default BuyButton