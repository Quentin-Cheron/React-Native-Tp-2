import React from "react";
import { Text, View, Button, StyleSheet, FlatList } from "react-native";

export default function ProductList({ products, onUpdate, onDelete }) {
  const renderItem = ({ item }) => (
    <View style={styles.productItem}>
      <Text style={styles.productName}>{item.products_name}</Text>
      <Text style={styles.productDescription}>{item.products_description}</Text>
      <Text style={styles.productPrice}>{item.products_price} €</Text>
      <View style={styles.buttonContainer}>
        <Button color="#06c167" title="Update" onPress={() => onUpdate(item)} />
        <Button color="#06c167" title="Delete" onPress={() => onDelete(item)} />
      </View>
    </View>
  );

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  productItem: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  productDescription: {
    marginBottom: 10,
  },
  productPrice: {
    fontWeight: "bold",
    color: "#007bff",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
