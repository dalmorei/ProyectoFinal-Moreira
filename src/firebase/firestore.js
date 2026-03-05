import { collection, getDocs, getDoc, doc, query, where, addDoc, updateDoc, increment } from "firebase/firestore";
import { db } from "./config";

// Obtener todos los productos desde Firestore
export const getProductsFromFirestore = async () => {
  try {
    const productsCollection = collection(db, "products");
    const productsSnapshot = await getDocs(productsCollection);
    const productsList = productsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return productsList;
  } catch (error) {
    console.error("Error obteniendo productos:", error);
    throw error;
  }
};

// Obtener productos por categoría desde Firestore
export const getProductsByCategoryFromFirestore = async (categoryId) => {
  try {
    const productsCollection = collection(db, "products");
    const q = query(productsCollection, where("category", "==", categoryId));
    const querySnapshot = await getDocs(q);
    const productsList = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return productsList;
  } catch (error) {
    console.error("Error obteniendo productos por categoría:", error);
    throw error;
  }
};

// Obtener un producto por ID desde Firestore
export const getProductByIdFromFirestore = async (productId) => {
  try {
    const productDoc = doc(db, "products", productId);
    const productSnapshot = await getDoc(productDoc);
    
    if (productSnapshot.exists()) {
      return {
        id: productSnapshot.id,
        ...productSnapshot.data()
      };
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error obteniendo producto:", error);
    throw error;
  }
};

// Crear una orden en Firestore
export const createOrder = async (orderData) => {
  try {
    const ordersCollection = collection(db, "orders");
    const docRef = await addDoc(ordersCollection, {
      ...orderData,
      createdAt: new Date().toISOString()
    });
    return docRef.id;
  } catch (error) {
    console.error("Error creando orden:", error);
    throw error;
  }
};

// Actualizar el stock de un producto
export const updateProductStock = async (productId, quantityPurchased) => {
  try {
    const productRef = doc(db, "products", productId);
    await updateDoc(productRef, {
      stock: increment(-quantityPurchased)
    });
  } catch (error) {
    console.error("Error actualizando stock:", error);
    throw error;
  }
};
