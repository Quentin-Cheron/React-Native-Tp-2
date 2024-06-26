import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { FetchDeleteProduct } from "../services/products.service";
import { supabase } from "../lib/supabase";

export function DeleteProduct({ product, onDeleteProduct }) {
  const handleDeleteProduct = async () => {
    FetchDeleteProduct(product.id).then((res) => {
      onDeleteProduct(res);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Delete Product</Text>
      <Text>Are you sure you want to delete {product.name}?</Text>
      <Button title="Delete" onPress={handleDeleteProduct} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: "center",
  },
});
