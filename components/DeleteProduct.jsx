// /components/DeleteProduct.js
import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

export default function DeleteProduct({ product, onDeleteProduct }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Delete Product</Text>
      <Text>Are you sure you want to delete {product.name}?</Text>
      <Button title="Delete" onPress={() => onDeleteProduct(product.id)} />
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
