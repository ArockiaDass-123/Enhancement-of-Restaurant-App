import {useContext} from 'react'

import Header from '../Header'
import CartItem from '../CartItem'

import CartContext from '../../context/CartContext'

import './index.css'

const Cart = () => {
  const {cartList, removeAllCartItems} = useContext(CartContext)

  const renderEmptyView = () => (
    <div className="animate-fade-in d-flex flex-column align-items-center justify-content-center p-5">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png"
        alt="empty view"
        className="empty-view-image"
      />
      <h1 className="empty-description">Your cart is feeling light...</h1>
      <p className="text-muted">Start adding some delicious dishes!</p>
    </div>
  )

  const renderCartItems = () => (
    <div className="animate-fade-in">
      <div className="cart-items-header">
        <h1>Order Items</h1>
        <button
          type="button"
          className="remove-all-btn"
          onClick={removeAllCartItems}
        >
          Clear All
        </button>
      </div>
      <ul className="ps-0 d-flex flex-column gap-3">
        {cartList.map(dish => (
          <CartItem key={dish.dishId} cartItemDetails={dish} />
        ))}
      </ul>
    </div>
  )

  return (
    <div className="cart-page-container">
      <Header />
      <div className="cart-body-container">
        {cartList.length === 0 ? renderEmptyView() : renderCartItems()}
      </div>
    </div>
  )
}

export default Cart
