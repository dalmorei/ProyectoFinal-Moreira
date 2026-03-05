const products = [
  {
    id: 1,
    title: "Pizza Margherita",
    price: 1200,
    description: "Pizza clásica con salsa de tomate, mozzarella fresca y albahaca. Una combinación tradicional italiana que nunca pasa de moda.",
    category: "pizzas",
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=400",
    stock: 15
  },
  {
    id: 2,
    title: "Pizza Pepperoni",
    price: 1400,
    description: "Pizza con abundante pepperoni, mozzarella y salsa de tomate. Perfect para los amantes de los sabores intensos.",
    category: "pizzas",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400",
    stock: 12
  },
  {
    id: 3,
    title: "Hamburguesa Clásica",
    price: 900,
    description: "Hamburguesa de carne 100% vacuna con lechuga, tomate, cebolla y nuestra salsa especial en pan brioche.",
    category: "hamburguesas",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
    stock: 20
  },
  {
    id: 4,
    title: "Hamburguesa Doble",
    price: 1300,
    description: "Doble medallon de carne, queso cheddar, bacon, lechuga, tomate y salsa BBQ en pan de sesamo.",
    category: "hamburguesas", 
    image: "https://tofuu.getjusto.com/orioneat-local/resized2/svdQXZDN6DyQhvcDw-2048-x.webp",
    stock: 8
  },
  {
    id: 5,
    title: "Pasta Carbonara",
    price: 1100,
    description: "Fideos fettuccine con salsa carbonara cremosa, panceta, huevo y queso parmesano. Un clásico italiano.",
    category: "pastas",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiaUFt-apCbRvk-vUxrpHGkOSOa1YHeKEB9A&s",
    stock: 25
  },
  {
    id: 6,
    title: "Pasta Boloñesa",
    price: 1050,
    description: "Spaghetti con nuestra salsa boloñesa casera, carne molida, tomates y especias tradicionales italianas.",
    category: "pastas",
    image: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=400",
    stock: 18
  },
  {
    id: 7,
    title: "Ensalada César",
    price: 800,
    description: "Lechuga romana, pollo grillado, croutons, queso parmesano y aderezo césar cremoso.",
    category: "ensaladas",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400",
    stock: 30
  },
  {
    id: 8,
    title: "Ensalada Griega",
    price: 750,
    description: "Tomate, pepino, aceitunas negras, queso feta, cebolla morada con aceite de oliva y oregano.",
    category: "ensaladas",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400",
    stock: 22
  }
];

const categories = [
  { id: "pizzas", name: "Pizzas" },
  { id: "hamburguesas", name: "Hamburguesas" },
  { id: "pastas", name: "Pastas" },
  { id: "ensaladas", name: "Ensaladas" }
];

// Simular llamada asíncrona para obtener todos los productos
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

// Simular llamada asíncrona para obtener productos por categoría
export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredProducts = products.filter(product => product.category === categoryId);
      resolve(filteredProducts);
    }, 1000);
  });
};

// Simular llamada asíncrona para obtener un producto por ID
export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = products.find(product => product.id === parseInt(productId));
      resolve(product);
    }, 1000);
  });
};

export { categories };