import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, clear, getTotalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mt-4">
        <div className="text-center py-5">
          <h2 className="mb-4">Tu carrito está vacío</h2>
          <p className="text-muted mb-4">¡Agrega productos para comenzar tu pedido!</p>
          <Link to="/" className="btn btn-primary">
            Ver productos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Carrito de Compras</h2>
      
      <div className="row">
        <div className="col-md-8">
          {cart.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Resumen del pedido</h5>
              <hr />
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal:</span>
                <span>${getTotalPrice()}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Envío:</span>
                <span className="text-success">Gratis</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-3">
                <strong>Total:</strong>
                <strong className="text-primary">${getTotalPrice()}</strong>
              </div>
              
              <Link to="/checkout" className="btn btn-primary w-100 mb-2">
                Finalizar compra
              </Link>
              
              <button 
                onClick={clear} 
                className="btn btn-outline-danger w-100"
              >
                Vaciar carrito
              </button>
              
              <Link to="/" className="btn btn-outline-secondary w-100 mt-2">
                Seguir comprando
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
