import React from "react";
import remove from './images/icon-delete.svg'
import image1 from './images/image-product-1.jpg'
import image1Thumbnail from './images/image-product-1-thumbnail.jpg'
import image2Thumbnail from './images/image-product-2-thumbnail.jpg'
import image3Thumbnail from './images/image-product-3-thumbnail.jpg'
import image4Thumbnail from './images/image-product-4-thumbnail.jpg'
import './App.scss'

export default function Cart({total, sneakerPrice, cartItems}) {
    if(cartItems) {
        if(total > 0) {
            return (
                <>
                    <div className='cartItems'>
                    <h3>Cart</h3>
                    <div className='cart-item-container'>
                    <img src={image1Thumbnail} height={50} width={50} alt="" />
                    <div className='cart-item-description'>
                        <p>Fall Limited Edition Sneakers</p>
                        <p style={{display: 'inline'}}>$125.00 x {total}</p> <span style={{display: 'inline'}}>${total * sneakerPrice}.00</span>
                    </div>
                    <img className="deleteBtn" src={remove} alt="" />
                    </div>
                    <div className='btn'>
                    <button>Checkout</button>
                    </div>
                    </div>
                </>
                    )
        } else {
            return (
                <div className='cartItems'>
                    <h3>Cart</h3>
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '75%', color: 'hsl(0, 0%, 0%)'}}>
                            <p>Your cart is empty.</p>
                        </div>
                </div>
            )
        }
    } else {
        return null
    }
}