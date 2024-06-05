import { FlatList, ScrollView, StyleSheet, Button } from "react-native";
import { Text, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { supabase } from "../../lib/supabase";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../services/products.service";
import { useRoute } from "@react-navigation/native";
import { fetchSpecificRestaurants } from "../../services/restaurant.service";

export default function RestaurantScreen() {
  const [products, setProducts] = useState([]);
  const [restaurant, setRestaurant] = useState([]);

  const navigation = useNavigation();
  const route = useRoute();

  const { id } = route.params;

  function addToCart() {
    supabase.auth.getSession().then(({ data: { session } }) => {
      session
        ? navigation.navigate("(payment)/checkout")
        : navigation.navigate("(auth)/index");
    });
  }

  useEffect(() => {
    fetchSpecificRestaurants(id).then((data) => {
      setRestaurant(data[0]);
    });
  }, [id]);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <ScrollView>
      <View style={styles.containerHeader}>
        <Text style={styles.title}>{restaurant.restaurant_name}</Text>
        <Text style={styles.description}>{restaurant.restaurant_address}</Text>
        <Text style={styles.address}>{restaurant.restaurant_description}</Text>
      </View>
      <View style={styles.info}>
        <Text>Frais: {restaurant.restaurant_fees} €</Text>
        <Text>Temps: {restaurant.restaurant_delivery_fees} min</Text>
      </View>
      <Text style={styles.titleProduit}>Produits:</Text>
      <FlatList
        data={products}
        style={styles.products}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Image
              source={{ uri: item.products_image }}
              style={styles.image}
              contentFit="contain"
            />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{item.products_name}</Text>
              <Text style={styles.productPrice}>{item.product_sprice}</Text>
              <Text style={styles.productDescription}>
                {item.product_description}
              </Text>
              <Text style={styles.productFavoris}>
                {item.product_note} favoris
              </Text>
              <Button
                color="#06c167"
                title="Ajouter au panier"
                onPress={addToCart}
              />
            </View>
          </View>
        )}
        keyExtractor={(item) => item.products_name}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    padding: 20,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  title: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    textAlign: "center",
    fontSize: 16,
    color: "#666",
    marginVertical: 5,
  },
  address: {
    textAlign: "center",
    fontSize: 16,
    color: "#666",
    marginBottom: 15,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  titleProduit: {
    margin: 20,
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  product: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 10,
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  products: {
    marginBottom: 20,
  },
  productInfo: {
    marginTop: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  productPrice: {
    fontSize: 16,
    color: "#06c167",
    marginVertical: 5,
  },
  productDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  productFavoris: {
    fontSize: 14,
    color: "#999",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
});