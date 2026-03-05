import { useState } from "react"

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [quantity, setQuantity] = useState(initial)

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1)
    }
  }

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <div className="d-flex flex-column">
      <div className="d-flex align-items-center mb-3">
        <button 
          className="btn btn-outline-secondary" 
          onClick={decrement}
          disabled={quantity <= 1}
        >
          -
        </button>
        <span className="mx-3 fs-5 fw-bold">{quantity}</span>
        <button 
          className="btn btn-outline-secondary" 
          onClick={increment}
          disabled={quantity >= stock}
        >
          +
        </button>
      </div>
      <button 
        className="btn btn-primary"
        onClick={() => onAdd(quantity)}
        disabled={stock === 0}
      >
        {stock === 0 ? "Sin stock" : "Agregar al carrito"}
      </button>
    </div>
  )
}

export default ItemCount