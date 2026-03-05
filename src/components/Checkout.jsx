import { useState } from "react";
import { useCart } from "../context/CartContext";
import { createOrder, updateProductStock } from "../firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, getTotalPrice, clear } = useCart();
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Limpiar error del campo cuando el usuario empieza a escribir
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El email no es válido";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "El teléfono es requerido";
    }
    
    if (!formData.address.trim()) {
      newErrors.address = "La dirección es requerida";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    
    try {
      // Crear objeto de orden
      const order = {
        buyer: formData,
        items: cart.map(item => ({
          id: item.id,
          title: item.title,
          price: item.price,
          quantity: item.quantity
        })),
        total: getTotalPrice(),
        date: new Date().toISOString()
      };
      
      // Guardar orden en Firestore
      const id = await createOrder(order);
      
      // Actualizar el stock de cada producto comprado
      for (const item of cart) {
        await updateProductStock(item.id, item.quantity);
      }
      
      setOrderId(id);
      clear();
    } catch (error) {
      console.error("Error al crear la orden:", error);
      alert("Hubo un error al procesar tu pedido. Por favor intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  // Si el carrito está vacío, redirigir al inicio
  if (cart.length === 0 && !orderId) {
    return (
      <div className="container mt-4">
        <div className="text-center py-5">
          <h2 className="mb-4">No hay productos en el carrito</h2>
          <Link to="/" className="btn btn-primary">
            Ir a comprar
          </Link>
        </div>
      </div>
    );
  }

  // Mostrar confirmación de orden
  if (orderId) {
    return (
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body text-center py-5">
                <div className="mb-4">
                  <span className="text-success" style={{ fontSize: '4rem' }}>✓</span>
                </div>
                <h2 className="mb-3">¡Compra realizada con éxito!</h2>
                <p className="text-muted mb-4">
                  Gracias por tu compra. Hemos recibido tu pedido correctamente.
                </p>
                <div className="alert alert-info">
                  <strong>ID de tu orden:</strong> {orderId}
                </div>
                <p className="text-muted mb-4">
                  Guarda este ID para hacer seguimiento de tu pedido.
                  Recibirás un email de confirmación a <strong>{formData.email}</strong>
                </p>
                <Link to="/" className="btn btn-primary">
                  Volver al inicio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4 mb-5">
      <h2 className="mb-4">Finalizar Compra</h2>
      
      <div className="row">
        <div className="col-md-7">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title mb-4">Datos de envío</h5>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Nombre completo *</label>
                  <input
                    type="text"
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={loading}
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>
                
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email *</label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={loading}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Teléfono *</label>
                  <input
                    type="tel"
                    className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={loading}
                  />
                  {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                </div>
                
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Dirección de envío *</label>
                  <textarea
                    className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                    id="address"
                    name="address"
                    rows="3"
                    value={formData.address}
                    onChange={handleChange}
                    disabled={loading}
                  />
                  {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                </div>
                
                <div className="d-flex gap-2">
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Procesando...
                      </>
                    ) : (
                      'Confirmar compra'
                    )}
                  </button>
                  <Link to="/cart" className="btn btn-outline-secondary">
                    Volver al carrito
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        <div className="col-md-5">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title mb-3">Resumen de compra</h5>
              
              <div className="mb-3">
                {cart.map(item => (
                  <div key={item.id} className="d-flex justify-content-between mb-2">
                    <span>{item.title} x{item.quantity}</span>
                    <span>${item.price * item.quantity}</span>
                  </div>
                ))}
              </div>
              
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
              
              <div className="d-flex justify-content-between">
                <strong>Total:</strong>
                <strong className="text-primary fs-4">${getTotalPrice()}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
