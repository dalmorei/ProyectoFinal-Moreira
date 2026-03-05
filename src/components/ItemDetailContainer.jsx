import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../data/products"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const { itemId } = useParams()

  useEffect(() => {
    setLoading(true)

    getProductById(itemId)
      .then(response => {
        setProduct(response)
      })
      .catch(error => {
        console.error("Error loading product:", error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [itemId])

  if (loading) {
    return (
      <div className="container mt-4">
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="container mt-4">
        <div className="alert alert-danger" role="alert">
          Producto no encontrado
        </div>
      </div>
    )
  }

  return (
    <div className="container mt-4">
      <ItemDetail product={product} />
    </div>
  )
}

export default ItemDetailContainer