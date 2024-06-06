// /screens/Dashboard.js
import React, { useEffect, useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import AddProduct from "../../../components/Addproduct";
import UpdateProduct from "../../../components/UpdateProduct";
import { DeleteProduct } from "../../../components/DeleteProduct";
import ProductList from "../../../components/ProductList";
import { fetchProducts } from "../../../services/products.service";

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [mode, setMode] = useState("list");

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  const handleAddProduct = async (product) => {
    setMode("list");
    setProducts([...product]);
  };

  const handleUpdateProduct = (product) => {
    setMode("list");
    setProducts([...product]);
  };

  const handleDeleteProduct = async (product) => {
    setMode("list");
    setProducts([...product]);
  };

  return (
    <View style={styles.container}>
      {mode === "list" && (
        <>
          <ProductList
            products={products}
            onUpdate={(product) => {
              setSelectedProduct(product);
              setMode("update");
            }}
            onDelete={(product) => {
              setSelectedProduct(product);
              setMode("delete");
            }}
          />
          <Button
            color="#06c167"
            title="Add Product"
            onPress={() => setMode("add")}
          />
        </>
      )}
      {mode === "add" && <AddProduct onAddProduct={handleAddProduct} />}
      {mode === "update" && selectedProduct && (
        <UpdateProduct
          product={selectedProduct}
          onUpdateProduct={handleUpdateProduct}
        />
      )}
      {mode === "delete" && selectedProduct && (
        <DeleteProduct
          product={selectedProduct}
          onDeleteProduct={handleDeleteProduct}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
});
