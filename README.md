# 🛒 PedidosAhora - E-Commerce React App

Aplicación web de comercio electrónico desarrollada con React, React Router y Firebase/Firestore como proyecto final del curso de React.

## 📋 Descripción

PedidosAhora es una Single Page Application (SPA) de e-commerce que permite a los usuarios navegar por un catálogo de productos (pizzas, hamburguesas, pastas y ensaladas), agregarlos al carrito de compras y finalizar la compra generando una orden en Firestore.

## ✨ Características Principales

- ✅ Listado dinámico de productos con filtrado por categorías
- ✅ Vista detallada de cada producto
- ✅ Carrito de compras con contexto global
- ✅ Validación de stock y cantidades
- ✅ Proceso de checkout con formulario de datos del cliente
- ✅ Integración con Firebase/Firestore para almacenamiento de productos y órdenes
- ✅ Navegación tipo SPA sin recargas de página
- ✅ Renderizado condicional con loaders y estados vacíos
- ✅ Diseño responsivo con Bootstrap 5

## 🚀 Tecnologías Utilizadas

- **React** 19.2.0 - Librería principal
- **React Router DOM** 7.13.0 - Navegación entre rutas
- **Firebase** 11.x - Backend as a Service (BaaS)
- **Firestore** - Base de datos NoSQL en la nube
- **Bootstrap** 5.3.8 - Framework CSS
- **Vite** 7.2.4 - Build tool y dev server

## 📁 Estructura del Proyecto

```
ProyectoFinal-Moreira/
├── public/
│   ├── logo-blanco.png
│   └── logo.png
├── src/
│   ├── components/
│   │   ├── Cart.jsx                  # Vista del carrito de compras
│   │   ├── CartItem.jsx              # Componente de item en el carrito
│   │   ├── CartWidget.jsx            # Widget del carrito en navbar
│   │   ├── Checkout.jsx              # Formulario de checkout
│   │   ├── Contact.jsx               # Página de contacto
│   │   ├── Item.jsx                  # Card de producto
│   │   ├── ItemCount.jsx             # Selector de cantidad
│   │   ├── ItemDetail.jsx            # Vista detallada del producto
│   │   ├── ItemDetailContainer.jsx   # Contenedor de detalle
│   │   ├── ItemList.jsx              # Lista de productos
│   │   ├── ItemListContainer.jsx     # Contenedor de lista
│   │   ├── NavBar.jsx                # Barra de navegación
│   │   └── NotFound.jsx              # Página 404
│   ├── context/
│   │   └── CartContext.jsx           # Contexto global del carrito
│   ├── data/
│   │   └── products.js               # Datos mock de productos
│   ├── firebase/
│   │   ├── config.js                 # Configuración de Firebase
│   │   └── firestore.js              # Funciones de Firestore
│   ├── utils/
│   │   └── uploadProducts.js         # Script para subir productos
│   ├── App.jsx                       # Componente principal
│   ├── App.css                       # Estilos de App
│   ├── main.jsx                      # Punto de entrada
│   └── index.css                     # Estilos globales
├── .env.example                      # Ejemplo de variables de entorno
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

## 🔧 Instalación y Configuración

### Prerrequisitos

- Node.js (v16 o superior)
- npm o yarn
- Cuenta de Firebase

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/dalmorei/ProyectoFinal-Moreira.git
   cd ProyectoFinal-Moreira
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar Firebase**
   
   a. Crear un proyecto en [Firebase Console](https://console.firebase.google.com/)
   
   b. Crear una aplicación web en el proyecto
   
   c. Habilitar Firestore Database
   
   d. Copiar las credenciales de configuración

4. **Configurar variables de entorno**
   
   a. Copiar el archivo `.env.example` a `.env`
   ```bash
   cp .env.example .env
   ```
   
   b. Editar `src/firebase/config.js` y reemplazar los valores con tus credenciales de Firebase:
   ```javascript
   const firebaseConfig = {
     apiKey: "tu-api-key",
     authDomain: "tu-auth-domain",
     projectId: "tu-project-id",
     storageBucket: "tu-storage-bucket",
     messagingSenderId: "tu-messaging-sender-id",
     appId: "tu-app-id"
   };
   ```

5. **Subir productos a Firestore**
   
   Opción 1: Usar el script de utilidades
   - Abre `src/utils/uploadProducts.js`
   - Descomenta la última línea: `uploadProducts()`
   - Ejecuta temporalmente la función desde un componente o la consola del navegador
   
   Opción 2: Crear los productos manualmente en Firebase Console
   - Ve a Firestore Database
   - Crea una colección llamada `products`
   - Agrega documentos con la estructura:
     ```json
     {
       "title": "Nombre del producto",
       "price": 1200,
       "description": "Descripción del producto",
       "category": "categoria",
       "image": "url-de-imagen",
       "stock": 10
     }
     ```

6. **Ejecutar la aplicación**
   ```bash
   npm run dev
   ```
   
   La aplicación estará disponible en `http://localhost:5173`

## 🎯 Funcionalidades Implementadas

### Listado y Detalle de Productos
- ✅ Generación dinámica del listado de productos desde Firestore
- ✅ Filtrado por categorías (pizzas, hamburguesas, pastas, ensaladas)
- ✅ Vista detallada individual de cada producto
- ✅ Separación en componentes contenedores y de presentación

### ItemCount
- ✅ Selector de cantidad con validaciones
- ✅ Límite por stock disponible
- ✅ Valor mínimo de 1 unidad
- ✅ Se oculta después de agregar al carrito

### Navegación
- ✅ React Router para navegación SPA
- ✅ Rutas: Home, Categorías, Detalle, Carrito, Checkout, Contacto
- ✅ Sin recargas de página
- ✅ Breadcrumbs en vista de detalle

### Carrito de Compras
- ✅ Context API para estado global
- ✅ Agregar productos con cantidad seleccionada
- ✅ Ver contenido del carrito (productos, cantidades, subtotales, total)
- ✅ Remover productos individuales
- ✅ Vaciar todo el carrito
- ✅ CartWidget muestra cantidad total de items

### Firebase/Firestore
- ✅ Base de datos en la nube
- ✅ Colección `products` para el catálogo
- ✅ Colección `orders` para las compras
- ✅ Consultas optimizadas por categoría
- ✅ Generación de ID único por orden

### Experiencia de Usuario
- ✅ Loaders durante carga de datos
- ✅ Mensajes de "producto sin stock"
- ✅ Mensaje de "carrito vacío"
- ✅ Confirmación de compra con ID de orden
- ✅ Validación de formulario en checkout
- ✅ Feedback visual al agregar productos

## 📱 Rutas de la Aplicación

- `/` - Página principal con todos los productos
- `/category/:categoryId` - Productos filtrados por categoría
- `/item/:itemId` - Detalle de un producto específico
- `/cart` - Vista del carrito de compras
- `/checkout` - Formulario de finalización de compra
- `/contact` - Página de contacto
- `*` - Página 404 para rutas no encontradas

## 🎨 Componentes Principales

### Componentes de Presentación
- **Item**: Card individual de producto
- **ItemList**: Grilla de productos
- **ItemDetail**: Vista detallada del producto
- **ItemCount**: Selector de cantidad
- **CartWidget**: Ícono del carrito con badge
- **CartItem**: Item individual en el carrito

### Componentes Contenedores
- **ItemListContainer**: Lógica de listado de productos
- **ItemDetailContainer**: Lógica de detalle de producto
- **Cart**: Gestión del carrito
- **Checkout**: Proceso de compra
- **NavBar**: Navegación principal

### Contextos
- **CartContext**: Estado global del carrito con funciones de agregar, remover, limpiar y calcular totales

## 🔥 Funciones de Firestore

```javascript
// Obtener todos los productos
getProductsFromFirestore()

// Obtener productos por categoría
getProductsByCategoryFromFirestore(categoryId)

// Obtener un producto por ID
getProductByIdFromFirestore(productId)

// Crear una orden
createOrder(orderData)
```

## 🚢 Deploy

### Opción 1: Vercel
```bash
npm run build
# Subir la carpeta dist a Vercel
```

### Opción 2: Netlify
```bash
npm run build
# Conectar el repositorio con Netlify
```

**Importante**: No olvides configurar las variables de entorno en tu servicio de hosting.

## 📝 Estructura de Datos

### Producto en Firestore
```javascript
{
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String (URL),
  stock: Number
}
```

### Orden en Firestore
```javascript
{
  buyer: {
    name: String,
    email: String,
    phone: String,
    address: String
  },
  items: Array[{
    id: String,
    title: String,
    price: Number,
    quantity: Number
  }],
  total: Number,
  date: String (ISO),
  createdAt: String (ISO)
}
```

## 🤝 Contribuciones

Este es un proyecto educativo. Si encuentras algún bug o tienes sugerencias:

1. Haz un fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 👨‍💻 Autor

**Daniel Moreira**
- GitHub: [@dalmorei](https://github.com/dalmorei)
- Proyecto: [ProyectoFinal-Moreira](https://github.com/dalmorei/ProyectoFinal-Moreira)

## 📄 Licencia

Este proyecto es parte del curso de React de CoderHouse y está disponible para fines educativos.

## 🙏 Agradecimientos

- CoderHouse por el curso y el acompañamiento
- Unsplash por las imágenes de productos
- Bootstrap por el framework CSS
- Firebase por la infraestructura backend

---

⭐ Si este proyecto te fue útil, no olvides darle una estrella en GitHub!
