import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

const products = [
  {
    id: "1",
    name: "Product 1",
    price: "$10.00",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "2",
    name: "Product 2",
    price: "$20.00",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "3",
    name: "Product 3",
    price: "$30.00",
    image: "https://via.placeholder.com/150",
  },
];

export default function Checkout() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Shopping Cart</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
            </View>
          </View>
        )}
        ListFooterComponent={() => (
          <TouchableOpacity
            style={styles.checkoutButton}
            onPress={() => navigation.navigate("(payment)/paymentConfirmation")}
          >
            <Text style={styles.checkoutButtonText}>Checkout</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#06c167",
    textAlign: "center",
  },
  productContainer: {
    flexDirection: "row",
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
  },
  productImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
    justifyContent: "center",
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: 16,
    color: "#888",
  },
  checkoutButton: {
    backgroundColor: "#06c167",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  checkoutButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
