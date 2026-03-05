import { useCart } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { removeItem } = useCart();

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-3">
          <img 
            src={item.image} 
            className="img-fluid rounded-start h-100" 
            alt={item.title}
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text text-muted">{item.description}</p>
              </div>
              <button 
                onClick={() => removeItem(item.id)}
                className="btn btn-outline-danger btn-sm"
                title="Eliminar del carrito"
              >
                ✕
              </button>
            </div>
            
            <div className="d-flex justify-content-between align-items-center mt-3">
              <div>
                <span className="text-muted">Cantidad: </span>
                <strong>{item.quantity}</strong>
              </div>
              <div>
                <span className="text-muted">Precio unitario: </span>
                <strong>${item.price}</strong>
              </div>
              <div>
                <span className="text-muted">Subtotal: </span>
                <strong className="text-primary">${item.price * item.quantity}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
