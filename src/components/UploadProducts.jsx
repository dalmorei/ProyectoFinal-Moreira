import { useState } from "react";
import { uploadProducts } from "../utils/uploadProducts";

const UploadProducts = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleUpload = async () => {
    setLoading(true);
    setMessage("Subiendo productos a Firestore...");
    
    try {
      await uploadProducts();
      setMessage("✅ ¡Productos cargados exitosamente! Puedes verificar en Firebase Console.");
    } catch (error) {
      setMessage(`❌ Error: ${error.message}. Verifica tu configuración de Firebase.`);
      console.error("Error completo:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body text-center">
              <h2 className="card-title mb-4">🔥 Cargar Productos a Firestore</h2>
              <p className="text-muted mb-4">
                Este componente subirá 8 productos a tu base de datos de Firestore.
                Solo necesitas hacer esto UNA vez.
              </p>
              
              {message && (
                <div className={`alert ${message.includes('✅') ? 'alert-success' : message.includes('❌') ? 'alert-danger' : 'alert-info'} mb-4`}>
                  {message}
                </div>
              )}
              
              <button 
                onClick={handleUpload} 
                className="btn btn-primary btn-lg"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Cargando...
                  </>
                ) : (
                  'Cargar Productos'
                )}
              </button>
              
              <div className="mt-4">
                <small className="text-muted">
                  Después de cargar los productos, elimina esta ruta del App.jsx
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadProducts;
