import { useState } from 'react'
import Cart from './Cart';
import Gallery from './Gallery';
import logo from './images/logo.svg'
import cart from './images/icon-cart.svg'
import avatar from './images/image-avatar.png'
import plus from './images/icon-plus.svg'
import minus from './images/icon-minus.svg'
import image1 from './images/image-product-1.jpg'
import image1Thumbnail from './images/image-product-1-thumbnail.jpg'
import image2Thumbnail from './images/image-product-2-thumbnail.jpg'
import image3Thumbnail from './images/image-product-3-thumbnail.jpg'
import image4Thumbnail from './images/image-product-4-thumbnail.jpg'
import './App.scss'

function App() {
  const [quantity, setQuantity] = useState(0);
  const [sneakerPrice, setSneakerPrice] = useState(125);
  const [total, setTotal] = useState(0);
  const [popup, setPopup] = useState(false);
  const [cartItems, setCartItems] = useState(false)

  function decrement() {
    if(quantity <= 0) {
      setQuantity(0)
    } else {
      setQuantity(quantity - 1)
    }
  }

  function increment() {
    if(quantity >= 10) {
      setQuantity(quantity)
    } else {
      setQuantity(quantity + 1)
    }
  }

  function cartItem() {
    setTotal(quantity)
    setCartItems(true)
  }

  function openClose() {
    if(cartItems) {
      setCartItems(false)
    } else {
      setCartItems(true)
    }
  }

  function openPopup() {
    if(popup) {
      setPopup(false)
    } else {
      setPopup(true)
    }
  }

  return (
    <>
      <header>
        <div className='logoContainer'>
          <img src={logo} alt="ecommerce-logo" />
        </div>
        <nav>
          <ul>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className='cart-avatar'>
          <img onClick={openClose} className='cart-icon' src={cart} alt="shopping-cart" width={22} height={20} />
          { total > 0 && <span>{total}</span>}
          <img className='avatar-icon' src={avatar} alt="avatar-icon" width={50} height={50} />
          <Cart cartItems={cartItems} total={total} sneakerPrice={sneakerPrice} />
        </div>
      </header>
      <section className='product-container'>
        <div className='product-images'>
          <img className='mainImg' src={image1} alt="" />
          <div className='image-gallery'>
            <img onClick={openPopup} src={image1Thumbnail} alt="" />
            <img onClick={openPopup} src={image2Thumbnail} alt="" />
            <img onClick={openPopup} src={image3Thumbnail} alt="" />
            <img onClick={openPopup} src={image4Thumbnail} alt="" />
          </div>
        </div>
        <div className='product-description'>
          <h2>Sneaker Company</h2>
          <h1>Fall Limited Edition Sneakers</h1>
          <p className='description'>
            These low-profile sneakers are your perfect casual wear companion. Featuring a 
            durable rubber outer sole, they’ll withstand everything the weather can offer.
          </p>
          <div className='price-container'>
            <p>$125.00</p>
            <p>50%</p>
          </div>
          <p className='saving-price'>$250.00</p>
          <div className='quantity-cart'>
            <div className='quantity'>
              <button onClick={decrement} className='minus'>
                <img src={minus} alt="minus-icon" />
              </button>
              <p className='amount'>{quantity}</p>
              <button onClick={increment} className='plus'>
                <img src={plus} alt="plus-icon" />
              </button>
            </div>
            <button onClick={cartItem} className='add-cart'>
              <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#ffffff" fill-rule="nonzero"/></svg>
              <p>Add to cart</p>
            </button>
          </div>
        </div>
      </section>
      {popup && <Gallery popup={popup} setPopup={setPopup} openPopup={openPopup} />}
    </>
  )
}

export default App
