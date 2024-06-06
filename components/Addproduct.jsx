import React, { useState } from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import { PostProduct } from "../services/products.service";

export default function AddProduct({ onAddProduct }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [favoris, setFavoris] = useState("");

  const handleAddProduct = async () => {
    try {
      const newProduct = {
        products_name: name,
        products_description: description,
        products_price: price,
        products_image: image,
      };
      setName("");
      setDescription("");
      setPrice("");
      setImage("");

      PostProduct(newProduct).then((res) => {
        onAddProduct(res);
      });
    } catch (error) {
      console.error("Failed to add product", error);
    }
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
        keyboardType="numeric"
      />
      <View style={styles.buttonContainer}>
        <Button color="#06c167" title="Add" onPress={handleAddProduct} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f8f9fa",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    marginTop: 10,
    borderRadius: 5,
    overflow: "hidden",
  },
});
