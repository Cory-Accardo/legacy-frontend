import React, {useState, useEffect, useContext} from 'react';
import styled from "styled-components";
import checkoutIcon from '../assets/image/checkout.png';
import cartIcon from '../assets/image/cart-icon.png';
import cartImage from '../assets/image/cart-item-img.png';
import GlobalContext from "../context/GlobalContext";
import {FaMinus, FaPlus, FaTimes} from "react-icons/fa";
import purchase from './purchase';

// .cart-box {
//   animation: fadeIn 2s linear;
//   @keyframes fadeIn {
//     0% {
//       display: block;
//     }
//     100% {
//       display: none;
//     }
//   }
// }

const StyledCartButton = styled.div`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background: #F0F0F0;
  margin-right: ${props => props.windowWidth < 767 ? '10px' : '20px'};
  text-align: center;
  position: relative;
  line-height: 35px;
  &.active {
    .top-count {
      position: absolute;
      content: '';
      top: -5px;
      right: -5px;
      width: 20px;
      height: 20px;
      color: #fff;
      font-size: 12px;
      margin-left: 0 !important;
    }
    .product-count {
      &.count {
        display: flex;
        line-height: initial;
      }
    }
  }
  img {
    width: 100%;
  }
  .checkout-icon {
    max-width: 15px;
    cursor: pointer;
  }
  .cart-icon {
    max-width: 25px;
  }
  .product-count {
    margin-left: 15px;
    background: #F3592D;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    color: #fff;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    &.top-count {
      position: absolute;
      content: '';
      top: -5px;
      right: -5px;
      width: 20px;
      height: 20px;
      color: #fff;
      font-size: 12px;
      margin-left: 0 !important;
    }
  }
  .cart-box {
    display: none;
    transition: 0.5s ease-in-out;
  }
  &.active {
    .product-count {
      &.top-count {
        display: none;
      }
    }
    .cart-box {
      display: block;
      position: absolute;
      content: '';
      width:  ${props => props.windowWidth < 767 ? '290px' : '350px'};
      box-shadow: 0px 0px 15px -5px #000;
      right: ${props => props.windowWidth < 480 ? '-65px' : '0'};
      top: 0;
      background: #fff;
      padding: 0 !important;
      box-shadow: -15px 0px 40px rgb(0 0 0 / 10%);
      .cart-header {
        .close {
          display: inline-flex;
          background: #f0f0f0;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          svg {
            width: 15px;
            height: 15px;
          }
        }
      }
      .cart-body {
        height: 350px;
        overflow-y: auto;
        &.productsAdded {
          display: block !important;
        }
        .icon {
          padding: 20px;
          background: #f0f0f0;
          margin-bottom: 20px;
          border-radius: 5px;
        }
        .cart-list {
          .cart-item {
            cursor: pointer;
            padding: 10px 15px;
            transition: .5s ease-in-out;
            &:hover {
              background: #f0f0f0;
              .delete-icon {
                background: #fff;
                transition: .5s ease-in-out;
              }
            }
            .description {
              justify-content: space-between;
              .description-bottom {
                display: flex;
                width: 100%;
                align-items: center;
                margin-top: 5px;
                p {
                  margin-bottom: 0;
                }
                .quantity-box {
                  display: flex;
                  margin-left: 5px;
                  .quantity-btn {
                    background: #f3592d;
                    border: none;
                    line-height: 10px;
                    padding: 0 8px;
                    height: 25px;
                  }
                  .quantity-btn.decrement {
                    border-radius: 5px 0px 0px 5px;
                  }
                  .quantity-btn.increment {
                    border-radius: 0px 5px 5px 0px;
                  }
                  .quantity-field {
                    width: 35px;
                    font-size: 16px;
                    height: 25px;
                    border: 1px solid #eee;
                    border-radius: 0;
                    text-align: center;
                    line-height: 24px;
                  }
                }
              }
            }
            .delete-icon {
              background: #f0f0f0;
              width: 30px;
              height: 30px;
              border-radius: 50%;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .delete-icon {
              &:hover {
                cursor: pointer;
                background: #F3592D;
                svg {
                  stroke: #fff;
                }
              }
            }
          }
        }
      }
      .cart-footer {
        .total-count {
          p {
            color: #F3592D;
            font-size: 14px;
            font-weight: bold;
          }
        }
        .action-btn {
          button {
            background: #F3592D;
            border-radius: 5px;
            opacity: 1;
            &:hover {
              background: #cd3d13;
            }
          }
        }
      }
    }
  }
`;

const CartButton = () => {

  const [displayCart, setDisplayCart] = useState(false);
  const { setQuantityCount, removeProduct, windowWidth, productCount, productList, totalCartAmount} = useContext(GlobalContext);

  const checkout = () =>{
    const productMapArray = productList.map((productObject) => {
      return {
        productId: productObject.productId,
        quantity: productObject.quantity
      }
    })

    purchase(productMapArray);
    
  }

  const showCart = () => {
    if (displayCart) {
      setDisplayCart(false);
    } else {
      setDisplayCart(true);
    }
  }
  
  return (
    <>
      <StyledCartButton windowWidth={windowWidth} className={displayCart ? 'active' : ''}>
        {productCount > 0 ? <span className='top-count product-count'>{productCount}</span> : ''}
        <img className='checkout-icon' src={checkoutIcon} alt="checkout icon" onClick={() => showCart()}/>
        <div className='cart-box p-2'>
          <div className='p-5 cart-header d-flex justify-content-between align-items-center border-bottom'>
            <div className='d-flex justify-content-center align-items-center'>
              <h5 className='mb-0'>Your Cart</h5>
              <span className='product-count'>{productCount > 0 ? productCount : 0}</span>
            </div>
            <span className='close' onClick={() => showCart()}><FaTimes /></span>
          </div>
          <div className={productCount > 0 ? 'py-5 cart-body d-flex justify-content-center flex-column productsAdded' : 'py-5 cart-body d-flex justify-content-center flex-column'}>
            {productCount > 0 ? <ul className='cart-list list-unstyled w-100'>
              {
                productList.length > 0 && productList.map((product, index) => {
                  return (
                    <li className='cart-item' key={index}>
                      <div className='d-flex justify-content-between align-items-center'>
                        <div className='box-detail d-inline-flex align-items-center'>
                          <img src={product.img} alt='cart image' style={{maxWidth: '70px', padding: '5px', background: '#000', borderRadius: '5px'}} />
                          <div className='description text-left pl-4 pr-4'>
                            <p className='mb-0 font-size-5'>{product.businessTitle}</p>
                            <p className='mb-0 font-size-4'>{product.title}</p>
                            <div className='description-bottom'>
                              <p><span className='font-size-4'>{product.price}</span></p>
                              <div className='quantity-box'>
                                <button className='quantity-btn decrement' onClick={() => setQuantityCount(product, 'decrement')} type='button'><FaMinus /></button>
                                <div className='quantity-field'>{product.quantity}</div>
                                <button className='quantity-btn increment' onClick={() => setQuantityCount(product, 'increment')} type='button'><FaPlus /></button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p onClick={() => removeProduct(product.productId)} className='delete-icon'>
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.334 3.00016H13.6673V4.3335H12.334V13.0002C12.334 13.177 12.2637 13.3465 12.1387 13.4716C12.0137 13.5966 11.8441 13.6668 11.6673 13.6668H2.33398C2.15717 13.6668 1.9876 13.5966 1.86258 13.4716C1.73756 13.3465 1.66732 13.177 1.66732 13.0002V4.3335H0.333984V3.00016H3.66732V1.00016C3.66732 0.823352 3.73756 0.653782 3.86258 0.528758C3.9876 0.403734 4.15717 0.333496 4.33398 0.333496H9.66732C9.84413 0.333496 10.0137 0.403734 10.1387 0.528758C10.2637 0.653782 10.334 0.823352 10.334 1.00016V3.00016ZM11.0007 4.3335H3.00065V12.3335H11.0007V4.3335ZM5.00065 6.3335H6.33398V10.3335H5.00065V6.3335ZM7.66732 6.3335H9.00065V10.3335H7.66732V6.3335ZM5.00065 1.66683V3.00016H9.00065V1.66683H5.00065Z" fill="#999999"/>
                          </svg>
                        </p>
                      </div>
                    </li>
                  )
                })
              }
            </ul> : <div className='cart-empty'>
              <div className='icon'><img className='cart-icon' src={cartIcon} alt='cart icon' /></div>
              <h4 className='text mb-0'>Your Cart is Empty.</h4>
            </div>}
          </div>
          <div className='cart-footer border-top'>
            <div className='p-5 total-count border-bottom d-flex justify-content-between align-items-center'>
              <strong className='mb-0'>Subtotal:</strong>
              <p className='mb-0'>${totalCartAmount}.00</p>
            </div>
            <div className='p-5 action-btn'>
              <button onClick={() => checkout()} type='button' className='border-0 text-white w-100' disabled={productCount > 0 ? '' : 'disabled'}>Checkout</button>
            </div>
          </div>
        </div>
      </StyledCartButton>
    </>
  )
}

export default CartButton;