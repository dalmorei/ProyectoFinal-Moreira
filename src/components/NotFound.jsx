import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <div className="mb-4">
            <h1 className="display-1 text-muted">404</h1>
            <h2 className="mb-3">Página no encontrada</h2>
            <p className="lead mb-4">
              Lo sentimos, la página que estás buscando no existe.
            </p>
          </div>
          
          <div className="d-flex flex-column align-items-center gap-3">
            <Link to="/" className="btn btn-primary btn-lg">
              🏠 Volver al inicio
            </Link>
            
            <div className="text-muted">
              <p className="mb-2">O explora nuestras categorías:</p>
              <div className="d-flex gap-2 flex-wrap justify-content-center">
                <Link to="/category/pizzas" className="btn btn-outline-secondary btn-sm">
                  🍕 Pizzas
                </Link>
                <Link to="/category/hamburguesas" className="btn btn-outline-secondary btn-sm">
                  🍔 Hamburguesas
                </Link>
                <Link to="/category/pastas" className="btn btn-outline-secondary btn-sm">
                  🍝 Pastas
                </Link>
                <Link to="/category/ensaladas" className="btn btn-outline-secondary btn-sm">
                  🥗 Ensaladas
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound