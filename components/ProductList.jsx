// /components/ProductList.js
import React from "react";
import { Text, View, Button, StyleSheet, FlatList } from "react-native";

export default function ProductList({ products, onUpdate, onDelete }) {
  const renderItem = ({ item }) => (
    <View style={styles.productItem}>
      <Text style={styles.productName}>{item.name}</Text>
      <Text>{item.description}</Text>
      <Text>{item.price}</Text>
      <Button title="Update" onPress={() => onUpdate(item)} />
      <Button title="Delete" onPress={() => onDelete(item)} />
    </View>
  );

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
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
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
