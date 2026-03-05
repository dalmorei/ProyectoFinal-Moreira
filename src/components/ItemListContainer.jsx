import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProducts, getProductsByCategory } from "../data/products"
import ItemList from "./ItemList"

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)
    
    const asyncFunc = categoryId 
      ? getProductsByCategory(categoryId)
      : getProducts()

    asyncFunc
      .then(response => {
        setProducts(response)
      })
      .catch(error => {
        console.error("Error loading products:", error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [categoryId])

  const getTitle = () => {
    if (categoryId) {
      const categoryNames = {
        pizzas: "Pizzas",
        hamburguesas: "Hamburguesas", 
        pastas: "Pastas",
        ensaladas: "Ensaladas"
      }
      return categoryNames[categoryId] || "Productos"
    }
    return "¡Bienvenido a PedidosAhora!"
  }

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

  return (
    <div className="container mt-4">
      <h2 className="mb-4">{getTitle()}</h2>
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer
