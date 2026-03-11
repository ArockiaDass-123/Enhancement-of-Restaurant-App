import {useState, useContext} from 'react'

import CartContext from '../../context/CartContext'

import './index.css'

const DishItem = ({dishDetails}) => {
  const {
    dishName,
    dishType,
    dishPrice,
    dishCurrency,
    dishDescription,
    dishImage,
    dishCalories,
    addonCat,
    dishAvailability,
  } = dishDetails

  const [quantity, setQuantity] = useState(0)
  const {addCartItem} = useContext(CartContext)

  const onIncreaseQuantity = () => setQuantity(prevState => prevState + 1)

  const onDecreaseQuantity = () =>
    setQuantity(prevState => (prevState > 0 ? prevState - 1 : 0))

  const onAddItemToCart = () => addCartItem({...dishDetails, quantity})

  const renderControllerButton = () => (
    <div className="controller-container">
      <button
        className="controller-btn"
        type="button"
        onClick={onDecreaseQuantity}
      >
        -
      </button>
      <p className="quantity">{quantity}</p>
      <button
        className="controller-btn"
        type="button"
        onClick={onIncreaseQuantity}
      >
        +
      </button>
    </div>
  )

  return (
    <li className="dish-item-container animate-fade-in">
      <div
        className={`veg-indicator ${dishType === 1 ? 'non-veg-indicator' : ''}`}
      >
        <div
          className={`indicator-dot ${dishType === 1 ? 'non-veg-dot' : ''}`}
        />
      </div>

      <div className="dish-details-container">
        <h1 className="dish-name">{dishName}</h1>
        <p className="dish-currency-price">
          {dishCurrency} {dishPrice}
        </p>
        <p className="dish-description">{dishDescription}</p>

        {dishAvailability ? (
          <>
            {renderControllerButton()}
            {quantity > 0 && (
              <button
                type="button"
                className="add-to-cart-btn"
                onClick={onAddItemToCart}
              >
                ADD TO CART
              </button>
            )}
          </>
        ) : (
          <p className="not-availability-text text-danger">Out of stock</p>
        )}

        {addonCat.length !== 0 && (
          <p className="addon-availability-text mt-2">
            ✨ Customizations available
          </p>
        )}
      </div>

      <div className="dish-calories-badge">🔥 {dishCalories} calories</div>
      <img className="dish-image" alt={dishName} src={dishImage} />
    </li>
  )
}

export default DishItem
