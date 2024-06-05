// /components/UpdateProduct.js
import React, { useState } from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";

export default function UpdateProduct({ product, onUpdateProduct }) {
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);

  const handleUpdateProduct = () => {
    const updatedProduct = { ...product, name, description, price };
    onUpdateProduct(updatedProduct);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Update Product</Text>
      <TextInput
        style={styles.input}
        placeholder="Product name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Product description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Product price"
        value={price}
        onChangeText={setPrice}
      />
      <Button title="Update" onPress={handleUpdateProduct} />
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
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});
