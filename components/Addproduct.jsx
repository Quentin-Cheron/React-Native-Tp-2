// /components/AddProduct.js
import React, { useState } from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";

export default function AddProduct({ onAddProduct }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleAddProduct = () => {
    const newProduct = { name, description, price };
    onAddProduct(newProduct);
    setName("");
    setDescription("");
    setPrice("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add a Product</Text>
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
      <Button title="Add" onPress={handleAddProduct} />
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
