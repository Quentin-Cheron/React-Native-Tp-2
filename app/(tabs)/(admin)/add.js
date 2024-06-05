// /screens/Dashboard.js
import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import AddProduct from "../../../components/Addproduct";
import UpdateProduct from "../../../components/UpdateProduct";
import DeleteProduct from "../../../components/DeleteProduct";
import ProductList from "../../../components/ProductList";

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [mode, setMode] = useState("list");

  const handleAddProduct = (product) => {
    setProducts([...products, { ...product, id: Date.now().toString() }]);
    setMode("list");
  };

  const handleUpdateProduct = (updatedProduct) => {
    setProducts(
      products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
    setMode("list");
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
    setMode("list");
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
          <Button title="Add Product" onPress={() => setMode("add")} />
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
