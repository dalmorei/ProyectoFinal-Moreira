import { Link } from "react-router-dom"

const Item = ({ product }) => {
  return (
    <div className="card h-100">
      <img 
        src={product.image} 
        className="card-img-top" 
        alt={product.title}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text flex-grow-1">{product.description}</p>
        <div className="mt-auto">
          <p className="card-text">
            <strong>${product.price}</strong>
          </p>
          <p className="card-text">
            <small className="text-muted">Stock: {product.stock}</small>
          </p>
          <Link to={`/item/${product.id}`} className="btn btn-primary w-100">
            Ver detalle
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Item