// /components/UpdateProduct.js
import React, { useState } from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import { FetchUpdateProduct } from "../services/products.service";

export default function UpdateProduct({ product, onUpdateProduct }) {
  const [name, setName] = useState(product.products_name);
  const [description, setDescription] = useState(product.products_description);
  const [price, setPrice] = useState(product.products_price || 0);

  const handleUpdateProduct = () => {
    const updatedProduct = {
      products_name: name,
      products_description: description,
      products_price: Number(price),
    };

    FetchUpdateProduct(product.id, updatedProduct).then((res) => {
      onUpdateProduct(res);
    });
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
        value={price.toString()}
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
