import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"

const ItemDetail = ({ product }) => {
  const handleOnAdd = (quantity) => {
    console.log(`Agregado al carrito: ${quantity} unidades de ${product.title}`)
    // Aquí se implementaría la lógica para agregar al carrito
  }

  const getCategoryName = (categoryId) => {
    const categoryNames = {
      pizzas: "Pizzas",
      hamburguesas: "Hamburguesas", 
      pastas: "Pastas",
      ensaladas: "Ensaladas"
    }
    return categoryNames[categoryId] || "Productos"
  }

  return (
    <div className="row">
      <div className="col-md-6">
        <img 
          src={product.image} 
          className="img-fluid rounded"
          alt={product.title}
          style={{ width: '100%', height: '400px', objectFit: 'cover' }}
        />
      </div>
      <div className="col-md-6">
        <nav aria-label="breadcrumb" className="mb-3">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Inicio</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={`/category/${product.category}`}>
                {getCategoryName(product.category)}
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {product.title}
            </li>
          </ol>
        </nav>
        
        <h1 className="mb-3">{product.title}</h1>
        <p className="text-muted mb-3">
          Categoría: <Link to={`/category/${product.category}`} className="text-decoration-none">
            {getCategoryName(product.category)}
          </Link>
        </p>
        <p className="lead mb-4">{product.description}</p>
        
        <div className="mb-4">
          <h2 className="text-primary">${product.price}</h2>
        </div>
        
        <div className="mb-4">
          <p className="mb-2">
            <strong>Stock disponible:</strong> {product.stock} unidades
          </p>
          {product.stock > 0 ? (
            <div className="alert alert-success">
              <small>✓ Producto disponible</small>
            </div>
          ) : (
            <div className="alert alert-danger">
              <small>✗ Producto agotado</small>
            </div>
          )}
        </div>

        <div className="mb-4">
          <ItemCount 
            stock={product.stock}
            initial={1}
            onAdd={handleOnAdd}
          />
        </div>

        <div className="d-flex gap-2">
          <Link to="/" className="btn btn-outline-secondary">
            ← Volver al catálogo
          </Link>
          <Link to={`/category/${product.category}`} className="btn btn-outline-primary">
            Ver más {getCategoryName(product.category)}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail