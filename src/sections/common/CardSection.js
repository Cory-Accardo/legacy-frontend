import React, {useEffect, useState} from 'react';
import purchase from '../../utils/purchase';
import imgMsc1 from "../../assets/image/slashcard1.png";
import imgMsc2 from "../../assets/image/slashcard2.png";
import BuyButton from './BuyButton';

const CardSection = ({ className,productId,productId2, businessName, ...rest }) => {
    const [prodArr, setProdArr] = useState([]);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (product) {
            let productFoundIndex = prodArr.findIndex((o) => o.productId === product.productId);
            let productFound = prodArr.find((o) => o.productId === product.productId);
            let businessTitle = product.businessTitle.split("from");
            businessTitle = businessTitle[businessTitle.length - 1].trim().slice(0, -1);
            if (productFound) {
                prodArr[productFoundIndex] = { productId: product.productId, quantity: productFound.quantity + 1, img: product.img, title: product.title, price: product.price, businessTitle: businessTitle };
                setProdArr([...prodArr]);
            } else {
                setProdArr([...prodArr, { productId: product.productId, quantity: 1, img: product.img, title: product.title, price: product.price, businessTitle: businessTitle }]);
            }
            setProduct(null);
        }
    }, [product]);

    useEffect(() => {
        let productsArray = JSON.parse(localStorage.getItem('productsArr'));
        if (productsArray) {
            setProdArr(productsArray);
        }
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem('productsArr', JSON.stringify(prodArr));
        }
    }, [prodArr]);

    return (
        <div className={className} {...rest}>
            <div className="container border-top pt-20 pb-5">
                <div className="row align-items-center">
                    {/* Hero Image */}
                    <div className="col-lg-6">
                        <div
                            className="mt-8 mt-lg-0"
                            data-aos="fade-left"
                            data-aos-delay={750}
                        >
                            <h1 className="font-40 mb-8 pr-sm-18 pr-md-8 pr-lg-0 line-height-84">
                                The ShopLove SLASHcard.
                            </h1>
                            <p className="font-size-7 text-black">
                                {businessName}
                            </p>
                            <p className="font-size-7 text-black">
                                Purchase the ShopLove SLASH card today.
                            </p>
                            <p className="font-size-7 text-black">
                                Get a $250 gift card for $125 or get a $100 card for $50
                                for a limited time.

                            </p>
                        </div>
                    </div>
                    {/* End Hero Image */}
                    {/* Hero Content */}
                    <div className="col-lg-6 font-weight-500">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="text-center mb-xs-7 mb-0" data-aos="flip-right" data-aos-delay={900}>
                                    <img className="mb-4" width="320" src={imgMsc1} alt="image" />
                                    <BuyButton img={imgMsc1} price='$125' title='$250 card for $125' businessTitle={businessName} setProduct={setProduct} productId={productId} className="btn mt-4 btn-dark-green btn-4 pt-3 p-2 rounded-5" style={{ background: 'linear-gradient(180deg, #000000 32.81%, #39B54A 100%)', borderColor: '#39B54A' }}>
                                        $250 card for $125 <br />
                                        BUY NOW
                                    </BuyButton>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="text-center mb-xs-7  mb-0" data-aos="flip-right" data-aos-delay={900}>
                                    <img className="mb-4" width="320" src={imgMsc2} alt="image" />
                                    <BuyButton img={imgMsc2} price='$50' title='$100 card for $50' businessTitle={businessName} setProduct={setProduct} productId={productId2} className="btn mt-4 btn-dark-green btn-4 pt-3 p-2 rounded-5" style={{ background: 'linear-gradient(180deg, #000000 32.81%, #39B54A 100%)', borderColor: '#39B54A' }}>
                                        $100 card for $50 <br/>
                                        BUY NOW
                                    </BuyButton>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* End Hero Content */}
                </div>
            </div>
        </div>
    );
}

export default CardSection;
