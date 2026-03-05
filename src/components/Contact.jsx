import { Link } from "react-router-dom"

const Contact = () => {
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="mb-4">Contacto</h1>
          
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">📍 Ubicación</h5>
                  <p className="card-text">
                    Av. Corrientes 1234<br/>
                    Buenos Aires, Argentina<br/>
                    C1043AAZ
                  </p>
                </div>
              </div>
              
              <div className="card mt-3">
                <div className="card-body">
                  <h5 className="card-title">📞 Teléfono</h5>
                  <p className="card-text">
                    <a href="tel:+541234567890" className="text-decoration-none">
                      +54 11 2345-6789
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="card mt-3">
                <div className="card-body">
                  <h5 className="card-title">📧 Email</h5>
                  <p className="card-text">
                    <a href="mailto:info@ecommerce.com" className="text-decoration-none">
                      info@ecommerce.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="card mt-3">
                <div className="card-body">
                  <h5 className="card-title">🕐 Horarios</h5>
                  <p className="card-text">
                    Lunes a Viernes: 9:00 - 22:00<br/>
                    Sábados y Domingos: 10:00 - 23:00
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">📨 Envíanos un mensaje</h5>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Nombre</label>
                      <input type="text" className="form-control" id="name" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="subject" className="form-label">Asunto</label>
                      <input type="text" className="form-control" id="subject" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">Mensaje</label>
                      <textarea className="form-control" id="message" rows="4"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                      Enviar mensaje
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4">
            <Link to="/" className="btn btn-outline-secondary">
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact